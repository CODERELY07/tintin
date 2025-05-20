import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Andrew Bouley",
    role: "Creative Director at ALKAMY",
    image: "/path-to-image.png",
    stars: 5,
    text: `Renderforest has been influential in helping our marketing team meet and exceed their goals. Animation was always something that required a lot of time and attention, but now it allows them to quickly create a professional video and then dive back into their other projects. I would recommend Renderforest to anyone looking to jump-start their business while achieving professional quality videos and animation.`,
  },
  {
    name: "Jane Doe",
    role: "Marketing Lead at CREATIX",
    image: "/path-to-image2.png",
    stars: 5,
    text: `Renderforest is a game-changer. We use it regularly for promotional content.`,
  },
  // Add more testimonials if needed
];

export default function TestimonialSlider() {
  return (
    <div className=" py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        See Why Our Users Love Animation Maker
      </h2>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-purple-100 border-2 border-purple-200 rounded-3xl w-full p-8 text-center shadow-md h-[450px] flex flex-col justify-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-white shadow -mt-16 mb-4"
              />
              <div className="flex justify-center mb-2">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-gray-600 mb-4">{t.role}</p>
              <p className="text-gray-700 max-w-3xl mx-auto">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
