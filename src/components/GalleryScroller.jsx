import React from 'react';
import './GalleryScroller.css'; // We will add custom css here
import { Link } from 'react-router-dom';
const galleryImages = [
  { src: "./img/alamat-ng-boa.jpg", category: "Alamat ng Boa" },
  { src: "./img/alamat-buluang.jpg", category: "Alamat ng Buluang" },
  { src: "./img/alamat-ng-bula.jpg", category: "Alamat ng Bula" },
  { src: "./img/alamat-ng-naka-buhi.jpg", category: "Alamat ng Boa" },
  { src: "./img/alamat-ng-siramag.jpg", category: "Alamat ng Simarag" },
  { src: "./img/batong-sagrado.jpg", category: "Alamat ng Sagrado" },
  { src: "./img/neustra.jpg", category: "Alamat ng Neustra" },
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
