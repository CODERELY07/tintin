import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';
import VideoSection from '../components/VideoSection';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Accordion from '../components/Accordion';
import TestimonialSlider from '../components/TestimonialSlider';
import AutoScrollSlider from '../components/AutoScrollSlider';
import Footer from '../components/Footer';
import GallerySection from '../components/GallerySection';


const places = [
  {
    id: 1,
    name: "Bula",
    description: " — Ang Munisipalidad ng Bula sa  kasaysayan ay isa sa unang apat na mission town ng Camarines Sur na itinatag ng mga Espanyol na conquistadores noong 1576."
  },
  {
    id: 2,
    name: "IRIGA",
    description: " — Ang Lungsod ng Iriga ay isang lungsod sa lalawigan ng Camarines Sur. Dito matatagpuan  ang Mt. asog o maskilalang mt. iriga kung saan pinakamayaman sa lupain."
  },
  {
    id: 3,
    name: "BAAO",
    description: " — Isang bayan sa Camarines Sur na kilala sa makukulay na tradisyon, alamat tulad ng sa Buluang, at masiglang komunidad na may mayamang kasaysayan."
  },
  {
    id: 4,
    name: "BUHI",
    description: " — Ang  Buhi ay nagsasalaysay kung paano nakaligtas ang ilang tao mula sa pagsabog ng Bulkan. Tinawag nilang Buhi ang lugar na kanilang nilipatan bilang simbolo ng bagong buhay at pag-asa."
  },
  {
    id: 5,
    name: "BALATAN",
    description: " — Tanyag ang bayan ng Balatan sa malinis nitong dalampasigan at masaganang likas na yaman mula sa dagat. Sa bawat sulok nito, mababanaag ang mayamang kultura at mga alamat na nagpapakilala sa pagkakakilanlan ng mga Balateño."
  },

]
export default function Home() {
  return (
    <>
      <Header/>
       
      <Banner/>
      <AutoScrollSlider/>
      <VideoSection/>
      <div className="bg-blue-50 px-10 py-16 md:mx-10 rounded-3xl border border-2 border  border-blue-200 shadow-sm">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Alamat ng Nabua at Bato</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Alamin ang makulay na kuwento sa bayan ng Rinconada mula sa rehuyon ng Bicol — mga pook na hitik sa tradisyon, alamat at kultura.
          </p>
        </div>

         <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-10 mt-20 mb-10 px-5">
            {/* Nabua Card */}
            {places.map((place) => (
               <div key={place.id} className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl p-6 w-full max-w-sm text-center transform hover:scale-105 cursor-pointer">
                <MapPinIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{place.name}</h3>
                <p className="text-gray-600 text-sm">
                 {place.description}
                </p>
              </div>
            ))}
           

            
          </div>

      </div>
      <GallerySection/>
      {/* <Accordion/> */}
      <TestimonialSlider/>
      
      <Footer/>
    </>
  );
}
