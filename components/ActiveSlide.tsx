"use client";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";
import { motion } from "framer-motion";
const ActiveSlide = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-end gap-2 p-2">
      <motion.div
        className="bg-gray-100 rounded-full text-black p-1 cursor-pointer"
        whileHover={{ x: -4, transition: { duration: 0.3 } }}
        onClick={() => swiper.slidePrev()}
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <FaAngleLeft size={25} />
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-gray-100 rounded-full text-black p-1 cursor-pointer"
        whileHover={{ x: 4, transition: { duration: 0.3 } }}
        onClick={() => swiper.slideNext()}
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <FaAngleRight size={25} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ActiveSlide;
