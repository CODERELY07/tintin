import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-8 py-12 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4 col-span-1 md:col-span-2">
          <div className="text-3xl font-bold text-purple-600">AnimHub</div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            volutpat justo nec mi ultrices, sed varius nulla iaculis.
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
          <p className="text-sm mt-4">© 2025 Lorem Ipsum Company</p>
        </div>

        {/* Use FlexClip For */}
        <div>
          <h3 className="font-semibold mb-2">LOREM USAGE</h3>
          <ul className="space-y-1 text-sm">
            {[
              "Lorem Video", "Dolor Sit Video", "Amet News", "Consectetur Trailer",
              "Intro Lorem", "Elit Wedding", "Ipsum Lyrics", "Birthday Ipsum",
              "Invitation Elit", "Slideshow Lorem", "Editor Ipsum", "Maker Amet"
            ].map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="font-semibold mb-2">LOREM TOOLS</h3>
          <ul className="space-y-1 text-sm">
            <li>Lorem to Speech</li>
            <li>Auto Dolor Subtitle</li>
            <li>Ipsum to Video</li>
            <li>Screen Captura</li>
            <li>All Tools ↗</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">RESOURCES</h3>
          <ul className="space-y-1 text-sm">
            <li>Lorem Blog</li>
            <li>Case Ipsum</li>
            <li>Compare Tools</li>
            <li>Lorem Categories</li>
            <li>Template Ipsum</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
