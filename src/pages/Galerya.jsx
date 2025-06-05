import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from "../components/Header";

const galleryImages = [
  {
    src: "./img/4.png",
    category: "Alamat ng Boa",
  },
  {
    src: "./src/assets/img/1.png",
    category: "Alamat ng Boa",
  },
  {
    src: "./src/assets/img/2.png",
    category: "Alamat ng Boa",
  },
  {
    src: "./src/assets/img/3.png",
    category: "Alamat ng Boa",
  },
  {
    src: "./src/assets/img/5.png",
    category: "Alamat ng Boa",
  },
];

export default function Galerya() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
     <Header/>
    <main className="min-h-screen  md:px-12 pt-30 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">Galerya</h1>
      <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed italic mt-4 text-center">
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

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages.map((img) => ({ src: img.src }))}
        index={index}
        on={{
          view: ({ index }) => setIndex(index),
        }}
      />
    </main>
    </>
   
  );
}
