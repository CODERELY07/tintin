import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';

const videos = [
  {
    title: "One Fast Move",
    image: "https://i.pinimg.com/736x/0f/e6/d6/0fe6d6678b8a279647d2ada3dd35f840.jpg",
    year: 2025,
    duration: "107 min",
    genres: ["Action", "Drama"],
    url: "/videos/videoplayback.mp4",
    description:
      "A dishonorably discharged soldier seeks out his estranged father to help him pursue his dream of becoming a professional motorcycle racer...",
  },
  {
    title: "Godzilla x Kong: The New Empire",
    image: "https://external-preview.redd.it/new-godzilla-x-kong-the-new-empire-banner-v0-0Jen9l6DHZtpyKqeHJtQH7KIzSp3-QAXvqDh8an5Krs.png?width=1080&crop=smart&auto=webp&s=b0c790fde7aff0195d79af19a765757bf6629568",
    year: 2025,
    duration: "115 min",
    genres: ["Action", "Sci-Fi"],
    url: "/videos/vid2.mp4",
    description:
      "An explosive return of the titans as Godzilla and Kong face a new deadly threat hidden within the Earth’s core...",
  },
  // Add more videos as needed
];

export default function WatchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const {
    videoUrl,
    imageUrl,
    title,
    year,
    duration,
    genres,
    description,

  } = location.state || {};

  // Filter out the currently playing video
  const recommendedMovies = videos.filter(v => v.title !== title);

  const handleWatch = (movie) => {
    navigate('/watch', {
      state: {
        videoUrl: movie.url,
        imageUrl: movie.image,
        title: movie.title,
        year: movie.year,
        duration: movie.duration,
        genres: movie.genres,
        description: movie.description,
        videos,
      },
    });
  };

  return (
    <>
      <Header className="relative" />

      {/* Video Player Section */}
      <div
        className="bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {videoUrl ? (
          <div className="w-full max-w-6xl mx-auto aspect-video shadow-lg">
            <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
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
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title || 'Movie Poster'}
                className="w-40 mb-6 rounded-lg shadow-md"
              />
            )}
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              {year && <span>{year}</span>}
              {duration && <span>{duration}</span>}
              {genres?.map((genre, i) => (
                <span key={i} className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded">
                  {genre}
                </span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">{description || 'No description provided.'}</p>
          </div>

          {/* Right Column: Recommended Movies */}
          <div className="col-span-1 space-y-4">
            <h2 className="text-xl font-semibold mb-2">More Like This</h2>
            {recommendedMovies.length > 0 ? (
              recommendedMovies.map((movie, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleWatch(movie)} // Click to navigate to the movie's WatchPage
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
