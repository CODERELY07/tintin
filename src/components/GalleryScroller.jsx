import React from 'react';
import './GalleryScroller.css'; // We will add custom css here
import { Link } from 'react-router-dom';
const galleryImages = [
  { src: "./img/boa.jpeg", category: "Alamat ng Boa" },
  { src: "./img/buluang.jpeg", category: "Alamat ng Buluang" },
  { src: "./img/bula.jpeg", category: "Alamat ng Bula" },
  { src: "./img/buhi.jpeg", category: "Alamat ng Boa" },
  { src: "./img/siramag.jpeg", category: "Alamat ng Simarag" },
  { src: "./img/sagrado.jpeg", category: "Alamat ng Sagrado" },
  { src: "./img/angustias.jpeg", category: "Alamat ng Neustra" },
];

export default function GalleryScroller() {
  return (
    <div className="h-screen bg-white py-10">
      <h2 className="text-center text-3xl font-bold mb-10">Alamat Gallery</h2>

      <div className="carousel-container">
        {galleryImages.map((image, index) => (
          <div className="carousel-item" key={index}>
               <Link to="/gallery">
                    <img src={image.src} alt={image.category} />
               </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}
