import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { services } from "../utils";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

const HeroSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="hero"
      className="flex flex-col mt-[100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Hero Text */}
      <div className="flex ml-[5rem] justify-start max-w-[98%]">
        <motion.div
          className="w-full max-w-[50rem] text-left flex flex-col gap-[2rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          <motion.span
            className="text-[#8a8882] font-[600] uppercase text-sm sm:text-base"
            variants={fadeIn}
          >
            Texnik, AI, malumotlar va mahsulotlarni yollash boyicha
            mutaxassislar
          </motion.span>

          <motion.p
            className="text-[#f9f4e8] uppercase text-3xl sm:text-[3.8rem] md:leading-[3.5rem] font-[600]"
            variants={fadeIn}
          >
            eng yaxshi texnologiya va raqamli istedodlarni topadigan firma
          </motion.p>
        </motion.div>

        <div className="hidden md:block w-[75%] right-0 h-[75%] absolute">
          <Spline scene="https://prod.spline.design/61ZyXgOjROP5RshQ/scene.splinecode" />
        </div>
      </div>

      {/* Video Section */}
      <div
        id="videoAvtoShow"
        className="relative w-[100%] h-[1000px] mt-[57vh]"
      >
        <video
          className="w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex">
          <motion.div
            className="mx-auto max-w-[90%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            <motion.div className="flex flex-col gap-[1.5rem] pt-[2rem]">
              <motion.h1
                className="text-[2.1rem] sm:text-[4.6rem] font-[600] uppercase leading-[2.6rem] sm:leading-[4.2rem]"
                variants={fadeIn}
              >
                FLAIRE : ENG YAXSHILARNI YOLLAShDA SIZNING ITTIFOQDOSHINgiz
              </motion.h1>
              <motion.p
                className="text-[1.75rem] md:text-[3.6rem] md:leading-[3.2rem] uppercase text-[#f9f4e8]"
                variants={fadeIn}
              >
                Flaire - bu texnologik, AI, product va boshlangich va miqyosni
                oshirish uchun malumotlar.
              </motion.p>
              <motion.p
                className="text-[1.75rem] md:text-[3.6rem] md:leading-[3.2rem] uppercase text-[#f9f4e8]"
                variants={fadeIn}
              >
                Bizning katta ishga yollovchilarimiz, texnologik ekotizimdagi
                mutaxassislar ulanadi farq qiladigan istedodli ambitsiyali
                kompaniyalar.
              </motion.p>
              <motion.p
                className="text-[1.75rem] md:text-[3.6rem] md:leading-[3.2rem] uppercase text-[#f9f4e8]"
                variants={fadeIn}
              >
                Bizning metodologiyamiz, aniq va sezgir, ishga yollashni
                kafolatlaydi samarali. Flaire – bu yangilik, xilma-xillik va
                qollab-quvvatlash har bir qadamda shaxsiylashtirilgan.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section Text */}
      <div className="mt-[220px] mx-auto max-w-[90%] md:mt-[300px] flex flex-col gap-[60px] sm:gap-[100px]">
        {services.map((work, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col gap-[0.2rem] cursor-pointer group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
            onMouseMove={handleMouseMove}
          >
            {/* Title */}
            <motion.h1 className="text-[1.5rem] md:text-[3rem] font-[600] leading-[2rem] sm:leading-[2.6rem] uppercase group-hover:opacity-70 transition-all">
              <Link to={`/service/${work.id}`}>{work.title}</Link>
            </motion.h1>

            {/* Overview (hoverda kengayadi) */}
            <motion.div className="relative overflow-hidden transition-all duration-300 ease-in-out h-[0px] group-hover:h-[180px] bg-[#1f1f1f] text-[#f9f4e8] p-4">
              <motion.p className="text-[1.4rem] md:text-[1.6rem] font-[500] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {work.overview}
              </motion.p>
              <Link
                to={"services/:" + work.id}
                className="text-[1rem] md:text-[1.2rem] font-[600] uppercase text-[#f9f4e8] text-opacity-[80%] underline transition"
              >
                More information
              </Link>
            </motion.div>

            {/* Hover Image */}
            <motion.img
              src={work.img}
              alt={work.title}
              className="absolute rounded-full bg-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                width: "180px",
                height: "180px",
                top: 20,
                left: cursorPosition.x - 90,
                pointerEvents: "none",
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HeroSection;
