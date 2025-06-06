import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-8 py-12 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4 col-span-1 md:col-span-2">
          <div className="text-3xl font-bold text-purple-600">Storyang Galin Rinconada</div>
          <p className="text-sm">
            Alamat tungkol sa Nabua at Bato
          </p>
          {/* <select className="border rounded px-2 py-1">
            <option>English</option>
          </select>
          <div className="flex gap-3 mt-4">
            <button className="bg-red-500 w-10 h-10 rounded flex items-center justify-center text-white">▶</button>
            <button className="bg-blue-600 w-10 h-10 rounded flex items-center justify-center text-white">f</button>
            <button className="bg-black w-10 h-10 rounded flex items-center justify-center text-white">X</button>
            <button className="bg-blue-800 w-10 h-10 rounded flex items-center justify-center text-white">in</button>
          </div> */}
          <p className="text-sm mt-4">© 2025 Storyang Galin Rinconada</p>
        </div>

        {/* Use FlexClip For */}
        <div>
          <h3 className="font-semibold mb-2">Mananaliksik</h3>
          <ul className="space-y-1 text-sm">
            {[
              "Moral. Venus Anne N.", "Oliveros, Jessica C.", "Portugal, Mary Grace S.", "Renegado, Christine May V.",
              "Sabaybay, Reinalyn Mae C.", "Seva, Viacel A.", "Transona, Joanna Marie B.", "Velasco. Roecel LI.",
            ].map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="font-semibold mb-2"> Instrumento</h3>
          <ul className="space-y-1 text-sm">
            <li>Ibis Paint for the actual drawings</li>
            <li>Photoshop for Slight Edits</li>
            <li>Capcut videopad for putting things together</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
