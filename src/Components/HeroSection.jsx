import React from "react";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { services } from "../utils";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="hero"
      className="flex flex-col mt-[100px]   lg:px-[5rem]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Hero Text */}
      <div className="flex justify-between ">
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
            Texnik, AI, ma'lumotlar va mahsulotlarni yollash bo'yicha
            mutaxassislar
          </motion.span>

          <motion.p
            className="text-[#f9f4e8]  uppercase text-3xl sm:text-[3.8rem] md:leading-[3.5rem]  font-[600]"
            variants={fadeIn}
          >
            eng yaxshi texnologiya va raqamli iste'dodlarni topadigan firma
          </motion.p>
        </motion.div>

        <div className="hidden md:block w-[1100px] h-[1000px]">
          <Spline scene="https://prod.spline.design/61ZyXgOjROP5RshQ/scene.splinecode" />
        </div>
      </div>

      {/* Section Text */}
      <motion.div
        className="mt-[120px] sm:mt-[20px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="my-[3rem] w-full h-[1px] bg-[#f9f4e8]"></div>

        <motion.div className="flex flex-col gap-[1.5rem]">
          <motion.h1
            className="text-[2.1rem] sm:text-4xl font-[600] uppercase leading-[2.6rem] sm:leading-[3.6rem]"
            variants={fadeIn}
          >
            FLAIRE : ENG YAXSHILARNI YOLLAShDA SIZNING ITTIFOQDOSHINgiz
          </motion.h1>
          <motion.p
            className="text-[1.75rem] md:text-[2rem] md:leading-[2.1rem] uppercase text-[#f9f4e8]"
            variants={fadeIn}
          >
            Flaire - bu texnologik, AI, product va boshlang'ich va miqyosni
            oshirish uchun ma'lumotlar.
          </motion.p>
          <motion.p
            className="text-[1.75rem] sm:text-[2rem] leading-[2.1rem] uppercase text-[#f9f4e8]"
            variants={fadeIn}
          >
            Bizning katta ishga yollovchilarimiz, texnologik ekotizimdagi
            mutaxassislar ulanadi farq qiladigan iste'dodli ambitsiyali
            kompaniyalar.
          </motion.p>
          <motion.p
            className="text-[1.75rem] sm:text-[2rem] leading-[2.1rem] uppercase text-[#f9f4e8]"
            variants={fadeIn}
          >
            Bizning metodologiyamiz, aniq va sezgir, ishga yollashni
            kafolatlaydi samarali. Flaire – bu yangilik, xilma-xillik va
            qo'llab-quvvatlash har bir qadamda shaxsiylashtirilgan.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="mt-[220px] md:mt-[600px]  flex flex-col gap-[60px] sm:gap-[100px]">
        {services.map((work, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col gap-[0.2rem] cursor-pointer group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
            onClick={() => navigate(`/service/${work.id}`)}
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
                className=" text-[1rem]  md:text-[1.2rem] font-[600] uppercase text-[#f9f4e8]  text-opacity-[80%]    underline transition"
              >
                More information
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HeroSection;
