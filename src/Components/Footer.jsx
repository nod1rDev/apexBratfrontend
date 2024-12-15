import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

function Footer() {
  const [open, setOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="w-full bg-[#1f1f1f] py-[5rem] text-[#f9f4e8] max-w-[100%]"
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        className="flex flex-col max-w-[90%] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h1
          className="py-10 text-[8vw] font-light text-center leading-[1.1] uppercase"
          variants={containerVariants}
        >
          Tezlashtirish muvaffaqiyatin hid bilan: <br />
          dagi mutaxassislar ishga qabul qilish texnologiya
        </motion.h1>

        <motion.div
          className="mt-6 w-full "
          variants={containerVariants}
        >
          <motion.div className="text-start text-center md:text-start  flex md:justify-between flex-col md:flex-row text-sm leading-[1.5] mb-6 space-y-2">
            <p>Born in <br /> <strong>Uzbekiston</strong></p>
            <p>Hunting in <br /> <strong>Asia & Europe</strong></p>
            <p>Actions <br /> <strong>Time for the planet</strong></p>
          </motion.div>

          <motion.div
            onClick={() => setOpen(true)}
            className="text-[7vw] cursor-pointer p-4 mb-6 mx-auto uppercase flex justify-center items-center font-medium"
            variants={containerVariants}
          >
            Let's Talk
            <motion.div
              className="ml-4 w-[46px] h-[46px] md:w-[108px] md:h-[108px] font-bold flex justify-center items-center rounded-full bg-[#f9f4e8] text-[#1f1f1f]"
              variants={containerVariants}
            >
              {">"}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-between items-center text-xs uppercase gap-4 text-center"
            variants={containerVariants}
          >
            <span>©2024</span>
            <span>LinkedIn</span>
            <span>apexbart@ai.com</span>
            <span>+998 95 801 40 84</span>
          </motion.div>
        </motion.div>
      </motion.div>
      <ContactModal isOpen={open} setIsOpen={setOpen} />
    </motion.div>
  );
}

export default Footer;
