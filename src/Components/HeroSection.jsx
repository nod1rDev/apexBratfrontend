import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const works = [
    {
      title: "Muvaffaqiyat",
      p1: `Ehtiyojlaringizga qarab ikkita variant :​ depozit bilan yoki omonatsiz .`,
      p2: `Ikkala holatda ham, biz ideal iste'dodni topganimizdagina balansni
        to'laysiz . ​ ​​​​ Oddiy, moslashuvchan va maqsadlaringizga mos
        keladi .`,
    },
    {
      title: "Pro",
      p1: `Ish beruvchilarimizga qo'shiling
        to'g'ridan- to'g'ri sizning
        tashkilot.`,
      p2: `Kundalik stavka uchun biz sizning to'liq vaqtli ishga yollashingizga g'amxo'rlik qilamiz ​​​​
        HR jamoasining tabiiy kengaytmasi sifatida integratsiya .`,
    },
    {
      title: "Ijrochi",
      p1: `Istagan rahbarlarni toping ​​
      biznesingizni keyingi bosqichga olib chiqing
      ustun..`,
      p2: `Bizning Ijroiya Qidiruvimiz sizning o'sishingizga yordam beradigan etakchilarni maqsad qilib qo'yadi va jalb qiladi
      eng strategik ehtiyojlaringiz uchun moslashtirilgan yondashuv .`,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="hero"
      className="flex flex-col mt-[100px] px-4 sm:px-8 lg:px-[5rem]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Hero Text */}
      <motion.div
        className="w-full max-w-[55rem] text-left flex flex-col gap-[2rem]"
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
          className="text-[#f9f4e8]  uppercase text-3xl sm:text-[4rem] md:leading-[3.7rem]  font-[600]"
          variants={fadeIn}
        >
          eng yaxshi texnologiya va raqamli iste'dodlarni topadigan firma
        </motion.p>
      </motion.div>

      {/* Section Text */}
      <motion.div
        className="mt-[320px] sm:mt-[400px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="my-[3rem] w-full h-[1px] bg-[#f9f4e8]"></div>

        <motion.div className="flex flex-col gap-[1.5rem]">
          <motion.h1
            className="text-[2.6rem] sm:text-4xl font-[600] uppercase leading-[2.6rem] sm:leading-[3.6rem]"
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

      {/* Works Section */}
      <div className="mt-[220px] sm:mt-[120px] flex flex-col gap-[60px] sm:gap-[80px]">
        {works.map((work, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-[0.6rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            <motion.h1
              className="text-[3rem] md:text-[8rem] font-[600] leading-[3rem] sm:leading-[8rem] uppercase"
            >
              {work.title}
            </motion.h1>
            <motion.p
              className="text-[1.4rem] leading-[1.5rem] md:text-[3rem] text-[#f9f4e8b3] md:leading-[2.6rem] uppercase max-w-[90%]"
            >
              {work.p1}
            </motion.p>
            <motion.p
              className="text-[1.2rem] md:text-[1.45rem] text-[#8a8882] max-w-[80%]"
            >
              {work.p2}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HeroSection;
