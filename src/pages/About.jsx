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
            DIGITAL POSTER
          </motion.h1>

          {[
            `Ang mga digital poster ay kilala rin bilang mga digital signage screen o digital display. Ginagamit ng mga mananaliksik ang mga ito upang biswal na ipakita ang impormasyon o mga  mensahe nan ais ipabatid sa kuwento. Ang mga digital na poster na ito ay namumukod-tangi para sa kakayahang makaakit sa pamamagitan ng dinamikong nilalaman, isang tampok na hindi maaaring tumugma sa mga tradisyunal na poster. Hindi tulad ng mga statik na imahe, ang mga digital na poster na ito ay isang interaktibo na element para pamukaw interes sa mga mag-aaral.  Ang mga mananaliksik ang gumamit ng isang AI tools upang makabuo o makalikha ng isang digital poster na naayon sa mga likhang kuwento na ginawa para sa pag-aaral. Ginamit ang AI upang makabuo ang mga mananaliksik ng isang malinaw, malikhain, at makapanghikayat na biswal na presentasyon na makatutulong upang maging mas madali ang pag-unawa ng mga mag-aaral maging ang mga guro. Sa tulong ng AI digital poster, ang mga kuwento ay naipapakita ng mas malinaw, ito rin ay nagsisilbing isang pantulong na kagamitang pampagtuturo upang ang mga mag-aaral ay maging mas aktibo, interesado, at malinaw ang pagkakaunawa tungkol sa mga kuwento.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
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
            ANIMASYON
          </motion.h1>

          {[
            `Ang animasyon (mula sa kastila animación) ay ang pagmamanipula sa mga larawan o pigura para pagmukhain na gumagalaw ang mga ito. Isa itong ilusyong optikal. Tradisyonal itong iginuguhit sa isang cel, ngunit ginagawa na ngayon ito sa papel at ini-scan (malimit na proseso sa mga anime), o di kaya'y ginagawa nang direkta sa mga kompyuter. Nakakamit ang epekto ng "paggalaw" sa mga animasyon dahil sa mabilisang paglilipat ng mga larawang may kaunting pagkakaiba sa isa't isa. Ang mga mananaliksik ay nakabuo ng isang animasyon na kung saan ay ikinukuwento nito ang isang alamat na mula sa bayan ng Nabua. Sa pamamagitan ng animasyon na ito inaasahang mas madali, malinaw, at mauunawaan ng mga mag-aaral ang nilalaman ng alamat na ito.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
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
