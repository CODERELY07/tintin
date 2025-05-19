import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';
import VideoSection from '../components/VideoSection';
import { MapPinIcon } from '@heroicons/react/24/solid';
export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <VideoSection/>
      <div className="bg-purple-600 px-10 py-10 z-50">
         <div className="bg-purple-600 px-10 py-10 z-50">
            <h2 className='text-center text-3xl text-white font-bold'>Kasaysayan ng Nabua at Bato</h2>
            <p className='text-white text-center mt-2 max-w-2xl mx-auto'>
              Alamin ang makulay na kasaysayan ng mga bayang Nabua at Bato sa rehiyon ng Bicol — mga pook na hitik sa tradisyon, alamat, at kultura.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-5">
            {/* Nabua Card */}
            <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl p-6 w-full max-w-sm text-center transform hover:scale-105 cursor-pointer">
              <MapPinIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nabua</h3>
              <p className="text-gray-600 text-sm">
                Isang makasaysayang bayan na naitatag noong 1571. Kilala sa simbahan ng San Francisco de Assisi at mga pista tuwing Semana Santa.
              </p>
            </div>

            {/* Bato Card */}
            <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl p-6 w-full max-w-sm text-center transform hover:scale-105 cursor-pointer">
              <MapPinIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bato</h3>
              <p className="text-gray-600 text-sm">
                Matatagpuan sa tabi ng Lawa ng Bato. Kilala sa pangingisda, pagsasaka, at mga kwentong may halong alamat ng mahiwagang nilalang.
              </p>
            </div>
          </div>
      </div>
    </>
  );
}
