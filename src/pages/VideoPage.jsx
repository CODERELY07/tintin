import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoList from '../components/VideoList';

const videos = [
  {
    title: "One Fast Move",
    image: "https://i.pinimg.com/736x/0f/e6/d6/0fe6d6678b8a279647d2ada3dd35f840.jpg",
    year: 2025,
    duration: "107 min",
    genres: ["Action", "Drama"],
    description:
      "A dishonorably discharged soldier seeks out his estranged father to help him pursue his dream of becoming a professional motorcycle racer...",
  },
  {
    title: "Godzilla x Kong: The New Empire",
    image: "https://external-preview.redd.it/new-godzilla-x-kong-the-new-empire-banner-v0-0Jen9l6DHZtpyKqeHJtQH7KIzSp3-QAXvqDh8an5Krs.png?width=1080&crop=smart&auto=webp&s=b0c790fde7aff0195d79af19a765757bf6629568",
    year: 2025,
    duration: "115 min",
    genres: ["Action", "Sci-Fi"],
    description:
      "An explosive return of the titans as Godzilla and Kong face a new deadly threat hidden within the Earth’s core...",
  },
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
