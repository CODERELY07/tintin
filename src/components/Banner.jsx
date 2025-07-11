import React from "react";

export default function Banner() {
  return (
    <header className="relative bg-blue-50 sm:pt-5 pt-30  h-screen flex flex-col justify-center items-center px-6 text-center">
      {/* Background overlay */}
     

      {/* Content container with higher z-index */}
      <div className="relative z-10">
        <h1 className=" lg:text-5xl text-3xl  max-w-3xl font-extrabold drop-shadow-lg mb-4">
          Tuklasin ang mga Alamat sa Rinconada
        </h1>
        <p className="sm:text-xl text-[14px] max-w-3xl drop-shadow-md mb-8">
          Maligayang pagdating! Ang website na ito ay nilikha upang ipakilala ang mayamang kasaysayan, kultura, at alamat sa bayan sa Rinconada. Tampok dito ang isang orihinal na animated na video at mga Digital Poster na gawa mismo ng mga awtor ng website na ito.
        </p>
        <button
          className="
            bg-white 
            text-purple-600 
            font-bold 
            px-6 
            py-3 
            rounded-full 
            shadow-lg 
            hover:text-blue-700 
            transform 
            hover:scale-105 
            transition 
            duration-300
          "
        >
         Manood
        </button>
      </div>
    </header>
  );
}
