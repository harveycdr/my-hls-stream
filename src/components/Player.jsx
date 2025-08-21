import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Player({ src, poster }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    if (Hls.isSupported()) {
      // Ưu tiên Hls.js trên Chrome/Android
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Chỉ Safari iOS mới vào nhánh này
      video.src = src;
      console.log("Sử dụng HLS trên ios:", src);
    } else {
      console.error("Trình duyệt không hỗ trợ phát hls:", src);
    }
  }, [src]);

  return (
    <div className="w-full h-70 xl:h-120 bg-black rounded-2xl overflow-hidden flex justify-center">
      <video
        ref={videoRef}
        poster={poster}
        controls
        playsInline
        webkit-playsinline="true"
        className="w-full max-h-70 xl:max-h-120 object-contain"
      />
    </div>
  );
}
