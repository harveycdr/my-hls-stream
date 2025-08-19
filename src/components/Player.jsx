import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Player({ src, poster }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Nếu trình duyệt hỗ trợ natively (Safari)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      // Chrome, Firefox, Edge...
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.ERROR, function (event, data) {
        console.error("HLS error:", data);
      });

      return () => {
        hls.destroy();
      };
    } else {
      console.error("Trình duyệt không hỗ trợ HLS");
    }
  }, [src]);

  return (
    <div className="w-200 h-100 mx-auto bg-black rounded-2xl overflow-hidden shadow-lg flex justify-center">
      <video
        ref={videoRef}
        controls
        poster={poster}
        className="w-200 max-h-100"
      />
    </div>
  );
}
