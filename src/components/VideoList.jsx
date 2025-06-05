import React, { useState } from "react";
import {
  PlayIcon,
  ChevronRightIcon,
  ShareIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
import { useNavigate } from "react-router-dom";

export default function VideoList({ video, onNext }) {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false); // state to track copy action

  const shareParams = new URLSearchParams({
    title: video?.title || "",
    description: video?.description || "",
    image: video?.image || "",
    year: video?.year || "",
    duration: video?.duration || "",
    genres: (video?.genres || []).join(","),
  });

  const shareUrl = `${window.location.origin}/watch?${shareParams.toString()}`;
  const shareMessage = `Panoorin ang "${video?.title || "isang video"}" dito!`;

  const handleWatch = () => {
    if (video?.url && video?.image) {
      navigate("/watch", {
        state: {
          videoUrl: video.url,
          imageUrl: video.image,
          title: video.title,
          year: video.year,
          duration: video.duration,
          genres: video.genres,
          description: video.description,
        },
      });
    } else {
      alert("Walang URL o larawan para sa video.");
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset text after 2s
    });
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: `url(${video?.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0" />

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 p-2 rounded-full"
        onClick={onNext}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{video?.title}</h1>
        <div className="flex items-center gap-3 text-sm text-gray-200 flex-wrap">
          <span>{video?.year}</span>
          <span>{video?.duration}</span>
          {(video?.genres || []).map((genre, i) => (
            <span key={i}>{genre}</span>
          ))}
        </div>

        <p className="mt-4 text-gray-300 max-w-2xl">
          {video?.description || "No description available."}
        </p>

        <div className="mt-6 flex gap-4 flex-wrap relative">
          <button
            onClick={handleWatch}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2"
          >
            <PlayIcon className="w-5 h-5" /> Watch
          </button>

          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="border border-gray-400 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2"
            >
              <ShareIcon className="w-5 h-5" /> Share
            </button>

            {showShareMenu && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg p-4 z-20 w-72">
                <div className="flex gap-3 mb-3 justify-between">
                  <FacebookShareButton url={shareUrl} quote={shareMessage}>
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="123456789"
                  >
                    <FacebookMessengerIcon size={40} round />
                  </FacebookMessengerShareButton>
                  <WhatsappShareButton url={shareUrl} title={shareMessage}>
                    <WhatsappIcon size={40} round />
                  </WhatsappShareButton>
                  <TwitterShareButton url={shareUrl} title={shareMessage}>
                    <TwitterIcon size={40} round />
                  </TwitterShareButton>
                </div>

                <button
                  onClick={copyLink}
                  className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800"
                >
                  <ClipboardDocumentIcon className="w-5 h-5" />
                  {copied ? "Link copied!" : "Copy Link"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
