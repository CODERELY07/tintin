import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryScroller from "../components/GalleryScroller";

const videos = [
  {
    title: "Alamat ng Boa",
    image: "./img/1.png",
    year: 2025,
    duration: "10 min",
    genres: ["Alamat"],
    url: "https://drive.google.com/file/d/1r2dIuRk9WgbAX_9I6nvLnNIiYlCzF1fW/preview",
    description:
      "Ang Pangalan na nagmula sa orihinal na sitio ng bayan ng Nabua na Boa o ang batang embryo ng buko.",
  },
];



export default function WatchPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const queryTitle = params.get("title");
  const queryDescription = params.get("description");
  const queryImageUrl = params.get("image");
  const queryYear = params.get("year");
  const queryDuration = params.get("duration");
  const queryGenres = params.get("genres") ? params.get("genres").split(",") : [];

  const {
    videoUrl,
    imageUrl,
    title,
    year,
    duration,
    genres,
    description,
  } = location.state || {};

  const currentVideo = {
    videoUrl: videoUrl || (queryTitle ? videos.find(v => v.title === queryTitle)?.url : ""),
    imageUrl: imageUrl || queryImageUrl,
    title: title || queryTitle,
    year: year || queryYear,
    duration: duration || queryDuration,
    genres: genres || queryGenres,
    description: description || queryDescription,
  };

  const handleGalleryClick = () => {
    navigate("/galerya");
  };

  return (
    <>
      <Header className="relative" />

      {/* Video Player Section */}
      <div
        className="bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: `url(${currentVideo.imageUrl})` }}
      >
        {currentVideo.videoUrl ? (
          <div className="w-full max-w-6xl mx-auto aspect-video shadow-lg">
            <iframe
              src={currentVideo.videoUrl}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full rounded"
              title="Video Player"
            ></iframe>
          </div>
        ) : (
          <p className="text-white text-lg">No video URL provided.</p>
        )}
      </div>

      {/* Content Section */}
      <div className="bg-white text-gray-900 px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
          {/* Left Column: Movie Details */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-6">
               {currentVideo.imageUrl && (
              <img
                src={currentVideo.imageUrl}
                alt={currentVideo.title || "Movie Poster"}
                className="w-40 mb-6 rounded-lg shadow-md"
              />
            )}
            <div>
                <h1 className="text-3xl font-bold mb-4">{currentVideo.title}</h1>
            
              <div className="flex flex-wrap gap-4 text-sm text-gray-600  ">
                {currentVideo.year && <span>{currentVideo.year}</span>}
                {currentVideo.duration && <span>{currentVideo.duration}</span>}
                {currentVideo.genres?.map((genre, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded"
                  >
                    {genre}
                  </span>
                ))}
                
              </div>
                <p className="text-gray-700 leading-relaxed">
                {currentVideo.description || "No description provided."}
              </p>
            </div>
          
            </div>
           
          
           
          </div>

          <div className="col-span-1 space-y-4">
              <GalleryScroller/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
