"use client";

interface VideoPlayerProps {
  vimeoId: string;
  autoplay?: boolean;
}

export default function VideoPlayer({ vimeoId, autoplay = false }: VideoPlayerProps) {
  return (
    <div className="vimeo-wrapper">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?${autoplay ? "autoplay=1&" : ""}byline=0&title=0&portrait=0`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
