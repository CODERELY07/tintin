import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-8 py-12 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4 col-span-1 md:col-span-2">
          <div className="text-3xl font-bold text-orange-600">FlexClip</div>
          <p className="text-sm">
            FlexClip is a simple yet powerful video maker and editor for everyone.
            We help users easily create compelling video content for personal or
            business purposes without any learning curve.
          </p>
          <select className="border rounded px-2 py-1">
            <option>English</option>
          </select>
          <div className="flex gap-3 mt-4">
            <button className="bg-red-500 w-10 h-10 rounded flex items-center justify-center text-white">▶</button>
            <button className="bg-blue-600 w-10 h-10 rounded flex items-center justify-center text-white">f</button>
            <button className="bg-black w-10 h-10 rounded flex items-center justify-center text-white">X</button>
            <button className="bg-blue-800 w-10 h-10 rounded flex items-center justify-center text-white">in</button>
          </div>
          <p className="text-sm mt-4">Copyright © 2025 PearlMountain</p>
        </div>

        {/* Use FlexClip For */}
        <div>
          <h3 className="font-semibold mb-2">USE FLEXCLIP FOR</h3>
          <ul className="space-y-1 text-sm">
            {[
              "Promo Video", "Marketing Video", "News Video", "Trailer Video",
              "Intro Video", "Wedding Video", "Lyric Video", "Birthday Video",
              "Invitation Video", "Slideshow Maker", "Video Editor", "Movie Maker"
            ].map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="font-semibold mb-2">TOOLS</h3>
          <ul className="space-y-1 text-sm">
            <li>AI Text to Speech</li>
            <li>AI Auto Subtitle</li>
            <li>AI Text to Video</li>
            <li>Screen Recorder</li>
            <li>All Tools ↗</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">RESOURCES</h3>
          <ul className="space-y-1 text-sm">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Compare</li>
            <li>Category</li>
            <li>Templates</li>
          </ul>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;