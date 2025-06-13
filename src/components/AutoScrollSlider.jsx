import { useEffect, useRef } from "react";

const images = [
  "./img/alamat-buluang.jpg", 
  "./img/alamat-ng-boa.jpg", 
  "./img/alamat-ng-bula.jpg", 
  "./img/alamat-ng-naka-buhi.jpg", 
  "./img/alamat-ng-siramag.jpg", 
  "./img/batong-sagrado.jpg", 
  "./img/neustra.jpg", 
];

export default function AutoScrollSlider() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 8;
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-10 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-1 overflow-x-auto no-scrollbar py-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-64 h-40 flex items-center justify-center rounded-xl bg-white shrink-0"
          >
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-64 h-40 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
