import React from "react";

export default function InfoSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Video Section */}
        <div className="w-full md:w-1/2">
          <video
            controls
            className="w-full rounded-lg shadow-lg aspect-video"
            src="/videos/animation.mp4"
            type="video/mp4"
            title="Cybersecurity Explainer Video"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full mt-8 md:mt-0 md:w-1/2 max-w-xl">
          <h2 className="text-3xl font-semibold mb-5">Lorem ipsum dolor sit amet?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae nobis obcaecati excepturi nihil! Repudiandae laborum, tempore ducimus voluptatum autem ullam sequi doloremque cupiditate sit iusto similique? Fuga, obcaecati in alias, repellat vero libero aspernatur quia nam, dolorem ab neque amet!
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition duration-300">
            Panoorin ang Buong Video
          </button>
        </div>
      </div>

      {/* SVG Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0">
      
      </div>


    </section>
  );
}
