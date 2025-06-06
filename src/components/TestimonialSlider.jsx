import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Renegado, Christine May V.",
    role: "Lider",
    image: "/img/tintin.jpg",
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`
  },
  {
    name: "Velasco. Roecel LI.",
    role: "Assistant Lider",
    image: "img/velasco.jpg",
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`,
  },
  {
    name: "Transona, Joanna Marie B.",
    role: "Member",
    image: "img/transona.jpg",
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`,
  },
  {
    name: "Sabaybay, Reinalyn Mae C.",
    role: "Member",
    image: "img/sabaybay.jpg",
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`,
  },
  {
    name: "Oliveros, Jessica C.",
    role: "Member",
    image: "img/oliveros.jpg",
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`,
  },
  {
    name: "Portugal, Mary Grace S.",
    role: "Member",
    image: "img/protugal.jpg",
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`,
  },
  {
    name: "Moral. Venus Anne N.",
    role: "Member",
    image: "img/venus.jpg",
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`,
  },
  {
    name: "Seva, Viacel A.",
    role: "Member",
    image: "img/viacel.jpg",
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`,
  },
  // Add more lorem testimonials if needed
];

export default function TestimonialSlider() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        TEAM PANITIKAN
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
