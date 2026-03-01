"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

interface Location {
  name: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  { name: "Peru", lat: -9.19, lng: -75.015 },
  { name: "Brazil", lat: -14.235, lng: -51.925 },
  { name: "Mexico", lat: 23.635, lng: -102.553 },
  { name: "Colombia", lat: 4.571, lng: -74.297 },
  { name: "Portugal", lat: 39.4, lng: -8.224 },
  { name: "Indonesia", lat: -0.789, lng: 113.921 },
  { name: "Denmark", lat: 56.264, lng: 9.502 },
  { name: "UK", lat: 55.378, lng: -3.436 },
  { name: "Bolivia", lat: -16.29, lng: -63.589 },
  { name: "Kenya", lat: -0.024, lng: 37.906 },
  { name: "Senegal", lat: 14.497, lng: -14.452 },
  { name: "South Africa", lat: -30.56, lng: 22.938 },
  { name: "France", lat: 46.228, lng: 2.214 },
  { name: "Italy", lat: 41.872, lng: 12.567 },
  { name: "Alaska", lat: 64.201, lng: -152.494 },
  { name: "Florida", lat: 27.665, lng: -81.516 },
  { name: "Tennessee", lat: 35.518, lng: -86.58 },
  { name: "California", lat: 36.778, lng: -119.418 },
  { name: "New York", lat: 40.713, lng: -74.006 },
  { name: "Nepal", lat: 28.395, lng: 84.124 },
  { name: "Bhutan", lat: 27.514, lng: 90.434 },
  { name: "Cambodia", lat: 12.566, lng: 104.991 },
];

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (containerRef.current) {
        width = containerRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.15,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.15, 0.15, 0.15],
      markerColor: [1, 1, 1],
      glowColor: [0.08, 0.08, 0.08],
      markers: locations.map((loc) => ({
        location: [loc.lat, loc.lng],
        size: 0.06,
      })),
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.003;
        }
        state.phi = phi + pointerInteractionMovement.current;
        phiRef.current = state.phi;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Convert lat/lng to screen position for tooltip
  const getScreenPosition = (
    lat: number,
    lng: number,
    currentPhi: number,
    theta: number,
    canvasSize: number
  ) => {
    const latRad = (lat * Math.PI) / 180;
    const lngRad = (lng * Math.PI) / 180;

    const x =
      Math.cos(latRad) * Math.sin(lngRad + currentPhi);
    const y = -Math.sin(latRad) * Math.cos(theta) +
      Math.cos(latRad) * Math.cos(lngRad + currentPhi) * Math.sin(theta);
    const z =
      Math.sin(latRad) * Math.sin(theta) +
      Math.cos(latRad) * Math.cos(lngRad + currentPhi) * Math.cos(theta);

    if (z < 0) return null; // behind globe

    const screenX = (x * canvasSize) / 2 + canvasSize / 2;
    const screenY = (y * canvasSize) / 2 + canvasSize / 2;

    return { x: screenX, y: screenY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const canvasSize = rect.width;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta / 200;
      setHoveredLocation(null);
      return;
    }

    let closest: { name: string; dist: number; x: number; y: number } | null = null;

    for (const loc of locations) {
      const pos = getScreenPosition(
        loc.lat,
        loc.lng,
        phiRef.current,
        0.15,
        canvasSize
      );
      if (!pos) continue;

      const dist = Math.sqrt(
        (mouseX - pos.x) ** 2 + (mouseY - pos.y) ** 2
      );

      if (dist < 20 && (!closest || dist < closest.dist)) {
        closest = { name: loc.name, dist, x: e.clientX, y: e.clientY };
      }
    }

    if (closest) {
      setHoveredLocation(closest.name);
      setTooltipPos({ x: closest.x, y: closest.y });
    } else {
      setHoveredLocation(null);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[680px] mx-auto aspect-square"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{ contain: "layout paint size" }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
          setHoveredLocation(null);
        }}
        onPointerMove={handlePointerMove}
      />
      {hoveredLocation && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-1.5 bg-white text-black text-xs tracking-[0.15em] uppercase rounded-sm"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y - 36,
            transform: "translateX(-50%)",
          }}
        >
          {hoveredLocation}
        </div>
      )}
    </div>
  );
}
