import React from "react";
import { PlayIcon, ChevronRightIcon, ShareIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function VideoList({ video, onNext }) {
  const navigate = useNavigate();

  const handleWatch = () => {
    if (video?.url && video?.image) {
     navigate('/watch', {
        state: {
            videoUrl: video.url,
            imageUrl: video.image,
            title: video.title,
            year: video.year,
            duration: video.duration,
            genres: video.genres,
            description: video.description
            
        },
        });
    } else {
      console.error("No video URL or image found");
      alert("No video URL or image found for this video.");
    }
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center text-white flex items-center"
      style={{
        backgroundImage: `url(${video.image})`, // Set background image here too
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0"></div>

      {/* Navigation Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 p-2 rounded-full"
        onClick={onNext}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{video.title}</h1>
        <div className="flex items-center gap-3 text-sm text-gray-200 flex-wrap">
          <span>{video.year}</span>
          <span>{video.duration}</span>
          {video.genres.map((genre, i) => (
            <span key={i}>{genre}</span>
          ))}
        </div>
        <p className="mt-4 text-gray-300 max-w-2xl">{video.description}</p>
        <div className="mt-6 flex gap-4 flex-wrap">
          <button
            onClick={handleWatch}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2"
          >
            <PlayIcon className="w-5 h-5" /> Watch
          </button>
          <button className="border border-gray-400 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2">
            <ShareIcon className="w-5 h-5" /> Share
          </button>
        </div>
      </div>
    </div>
  );
}
