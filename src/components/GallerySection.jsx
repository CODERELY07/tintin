import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const galleryImages = [
   {
    src: "./img/4.png",
    category: "Alamat ng Boa",
  },
  {
    src: "./img/1.png",
    category: "Alamat ng Boa",
  },
  {
   src: "./img/2.png",
    category: "Alamat ng Boa",
  },
  {
 src: "./img/3.png",
    category: "Alamat ng Boa",
  }
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="p-6 md:p-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Galerya</h2>
      <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed italic mt-4">
        🎞️ Larawang ito ay hango sa mismong animation — isang makulay at emosyonal na eksena na
        nagpapakita ng puso ng kwento. Isa itong sandaling hindi mo basta makakalimutan.
      </p>

      <div className="grid grid-cols-2 mt-10 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            className="rounded-xl cursor-zoom-in hover:scale-105 transition-transform"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            alt={img.category}
          />
        ))}
      </div>

      {/* 👇 Tingnan Lahat Link */}
      <div className="text-center mt-20">
        <Link
        to="/galerya"
        className="inline-block px-6 py-2 !text-purple-600 font-semibold border border-purple-600 rounded-full transition-colors duration-200  group"
        >
        <span className="inline-block group-hover:animate-bounce">
            Tingnan Lahat ng Larawan → 
        </span>
        </Link>


      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages.map((img) => ({ src: img.src }))}
        index={index}
        on={{
          view: ({ index }) => setIndex(index),
        }}
      />
    </section>
  );
}
