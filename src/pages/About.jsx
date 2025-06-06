import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <>
      <Header />

      <div className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 px-6">
        {/* Radial Background Glow */}
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] bg-gradient-radial from-pink-200 via-white/40 to-transparent rounded-full opacity-30 pointer-events-none z-0" />

        {/* Animated Top Border */}
        <div className="absolute top-0 left-0 w-full h-90 bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 animate-pulse  z-10" />

        <motion.div
          className="relative max-w-5xl mx-auto border border-transparent bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mt-10 z-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl pt-6 md:text-5xl font-extrabold text-center mb-12 text-gray-800 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            Tungkol sa Animasyon
          </motion.h1>

          {[
            `Ang mga mananaliksik ay nakabuo ng isang website na maaaring ma-access ng lahat, hangarin nitong maipakilala ang mga alamat ng Nabua at Bato sa mas nakakaengganyong paraan na mas makakakuha ng atensyon ng mga mag-aaral. Ang animasyon (mula sa kastila animación) ay ang pagmamanipula sa mga larawan o pigura para pagmukhain na gumagalaw ang mga ito. Isa itong ilusyong optikal. Tradisyonal itong iginuguhit sa isang cel, ngunit ginagawa na ngayon ito sa papel at ini-scan (malimit na proseso sa mga anime), o di kaya'y ginagawa nang direkta sa mga kompyuter. Nakakamit ang epekto ng "paggalaw sa mga animasyon dahil sa mabilisang paglilipat ng mga larawang may kaunting pagkakaiba sa isa't isa. Mga graphic, tunog, hugis, PowerPoint, presentasyon at animasyon sa edukasyon ay tinanggap bilang kapaki-pakinabang sa pagtuturo.`,
            `Ang ilusyong ito, na kagaya rin ng nakikita sa mga pelikula, ay pinaniniwalaang dahil sa mga penomenang phi at paggalaw beta, ngunit hindi sigurado ang mga eksperto kung ito nga ba ang dahilan kung nagkakaroon ng ganitong ilusyon. Malaki ang industriya ngayon ng animasyon. Bukod sa mga masining na paggamit nito sa mga teleserye at pelikula, ginagamit ang animasyon maging sa mga larong nakabidyo, grapikong gumagalaw (motion graphics), user interface, at sa mga epektong biswal. Sa proyektong ito, ginamit ang animasyon bilang paraan ng pagpapakilala at mas mabigyang pansin ng mga mag-aaral ang alamat at mapukaw ang kanilang interes sa panonood ng animasyon.`,
            `Ang animasyon ay nabuo batay sa mga pahayag o kuwento ng mga residente sa bayan ng Nabua at Bato. Ang animasyon na nabuo ng mananaliksik ay isang magandang paraan para sa pagpapakilala ng mga lokalisadong alamat sa mga mag-aaral, ginawa nitong mas kawili-wili ang pagtuturo sa alamat kaysa sa isang simpleng pagbabasa lamang nito.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className="text-lg md:text-xl text-justify text-gray-700 mb-6 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default About;
