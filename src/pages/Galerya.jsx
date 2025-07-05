
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from "../components/Header";
import galleryImages from "../data/galleryImages";



export default function Galerya() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = galleryImages.map((img) => ({
    src: img.src,
    description: img.description,
    category: img.category,
  }));

  return (
    <>
      <Header />
      <main className="min-h-screen md:px-12 pt-30 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-6">Galerya</h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed italic mt-4 text-center">
          Ang larawang ito ay hango sa digital poster na lalong napapakulay sa mga kuwento. Sa gayon, ang digital poster ay nagsisilbing isang mabisang pantulong upang maging mas malinaw, makulay, at nakakahikayat ang paglalahad ng mga kuwento.
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
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={slides}
            render={{
            slide: ({ slide }) => (
              <div className="flex flex-col h-full">
                  
                <div className="flex-shrink-0">
                  <img 
                    src={slide.src}
                    alt={slide.category}
                    className="max-h-[30vh] w-auto mx-auto rounded-xl"
                  />
                </div>
                <div className="flex-grow no-scrollbar overflow-y-auto px-4 my-5 max-h-[70vh] max-w-5xl">
                  <div className="prose  text-[#FFF2F9]">
                    {slide.description.map((desc, idx) => (
                      <p className="mb-3 text-lg indent-10" key={idx}>
                         {/* <div className="p-8">
                          <TextReader text={desc} />
                        </div> */}
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          }}
        />
      </main>
    </>
  );
}

