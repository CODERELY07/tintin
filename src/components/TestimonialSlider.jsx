import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Lorem Ipsum",
    role: "Dolor Sit Amet at Company",
    image: "/path-to-placeholder.png",
    stars: 5,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nunc nec sollicitudin cursus, arcu magna pretium urna, a interdum turpis est non nisl. Sed quis mi vel lacus porta efficitur.`,
  },
  {
    name: "Jane Lorem",
    role: "Consectetur Adipiscing at Ipsum Inc.",
    image: "/path-to-placeholder2.png",
    stars: 5,
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`,
  },
  // Add more lorem testimonials if needed
];

export default function TestimonialSlider() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Lorem Ipsum Testimonials
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
