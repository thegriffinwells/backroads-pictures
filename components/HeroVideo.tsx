"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  vimeoId: string;
}

export default function HeroVideo({ vimeoId }: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`;
    iframe.style.cssText =
      "position:absolute;top:50%;left:50%;width:177.78vh;min-width:100%;height:100vh;min-height:100%;transform:translate(-50%,-50%);border:0;";
    iframe.setAttribute("allow", "autoplay; fullscreen");
    containerRef.current.appendChild(iframe);

    return () => {
      iframe.remove();
    };
  }, [vimeoId]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
