import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const videos = [
  {
    title: "Alamat ng Boa",
    image: "./src/assets/img/1.png",
    year: 2025,
    duration: "10 min",
    genres: ["Alamat"],
    url: "https://drive.google.com/file/d/1r2dIuRk9WgbAX_9I6nvLnNIiYlCzF1fW/preview",
  
    description:
      "Ang Pangalan na nagmula sa orihinal na sitio ng bayan ng Nabua na Boa o ang batang embryo ng buko.",
  },
  {
    title: "Alamat ng Bato",
    image: "./src/assets/img/2.png",
    year: 2025,
    url: "/videos/vid2.mp4",
    duration: "10 min",
    genres: ["Alamat"],
    description:
      "Ang Lugar ng Bato na dating tinatawag na Calilingo, mula sa pangalan ng ilog sahan. Sa kalaunan tinawag na itong bato.",
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

  const recommendedMovies = videos.filter((v) => v.title !== currentVideo.title);

  const handleWatch = (movie) => {
    navigate("/watch", {
      state: {
        videoUrl: movie.url,
        imageUrl: movie.image,
        title: movie.title,
        year: movie.year,
        duration: movie.duration,
        genres: movie.genres,
        description: movie.description,
      },
    });
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Movie Details */}
          <div className="md:col-span-2">
            {currentVideo.imageUrl && (
              <img
                src={currentVideo.imageUrl}
                alt={currentVideo.title || "Movie Poster"}
                className="w-40 mb-6 rounded-lg shadow-md"
              />
            )}
            <h1 className="text-3xl font-bold mb-4">{currentVideo.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
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

          {/* Right Column: Recommended Movies */}
          <div className="col-span-1 space-y-4">
            <h2 className="text-xl font-semibold mb-2">More Like This</h2>
            {recommendedMovies.length > 0 ? (
              recommendedMovies.map((movie, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleWatch(movie)}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-16 h-24 object-cover rounded"
                  />
                  <p className="text-sm font-medium">{movie.title}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No more recommendations available.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
