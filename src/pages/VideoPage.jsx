import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoList from '../components/VideoList';

const videos = [
  {
    title: "Alamat ng Boa",
    image: "./img/1.png ",
    year: 2025,
    duration: "10 min",
    genres: ["Alamat"],
    url: "https://drive.google.com/file/d/1r2dIuRk9WgbAX_9I6nvLnNIiYlCzF1fW/preview",
    description:
      "Ang Pangalan na nagmula sa orihinal na sitio ng bayan ng Nabua na Boa o ang batang embryo ng buko.",
  },

  // {
  //   title: "Alamat ng Bato",
  //     image: "./img/2.png ",
  //   year: 2025,
  //   url: "/videos/vid2.mp4",
  //   duration: "10 min",
  //   genres: ["Alamat"],
  //   description:
  //     "Ang Lugar ng Bato na dating tinatawag na Calilingo, mula sa pangalan ng ilog sahan. Sa kalaunan tinawag na itong bato.",
  // },
  // Add more videos as needed
];

export default function VideoPage() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
    <section className="bg-blue-50 px-6 text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.
        </p>
    </section>


      <VideoList
        video={videos[index]}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <Footer />
    </>
  );
}
