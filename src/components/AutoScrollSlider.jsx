import { useEffect, useRef } from "react";

const images = [
  "https://i.pinimg.com/originals/19/47/78/19477867fc045d3da14afebd55b7cf49.gif", 
  "https://i.pinimg.com/originals/57/15/14/571514a0a9f60709aaba1505e61252cd.gif",
  "https://i.pinimg.com/originals/57/15/14/571514a0a9f60709aaba1505e61252cd.gif",
  "https://i.pinimg.com/originals/57/15/14/571514a0a9f60709aaba1505e61252cd.gif",
  "https://cdn.dribbble.com/users/12478433/screenshots/19845029/media/78a716984b9c3745e82c5d0a9ac73045.gif",
  "https://i.graphicmama.com/uploads/2023/3/641d7de029720-604886615ab72-Man%20with%20Bow%20Tie%20Animated%20GIFs%20Collection%201%20(2).gif",
  "https://i.graphicmama.com/uploads/2023/3/641d7de029720-604886615ab72-Man%20with%20Bow%20Tie%20Animated%20GIFs%20Collection%201%20(2).gif",
  "https://tse1.mm.bing.net/th?id=OIP.6vcDZk1sC4fBqV4n40pN0QHaFj&pid=Api&P=0&h=180",
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
    <div className="pt-10  overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto no-scrollbar py-2"
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
              className="w-50 h-50 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
