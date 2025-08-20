import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Player({ src, poster }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, [src]);

  return (
    <div className="w-full h-70 xl:h-120 bg-black rounded-2xl overflow-hidden flex justify-center">
      <video
        ref={videoRef}
        poster={poster}
        controls
        className="w-full max-h-70 xl:max-h-120 object-contain"
      />
    </div>
  );
}
