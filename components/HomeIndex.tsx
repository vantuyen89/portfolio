"use client";
import React from "react";
import Information from "@/components/Information";
import Project from "@/components/Project";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegHandPeace } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
const HomeIndex = () => {
  return (
    <main className="container">
      <div className="flex flex-col lg:flex-row px-20 py-20 gap-10 justify-between items-center">
        <div className="flex flex-col gap-2 ">
          <p className="tracking-widest text-[#f9cc71]">Hello World , I'm</p>
          <p className="text-4xl tracking-wider font-bold">Nguyen Van Tuyen</p>
          <div className="text-[#f9cc71]">
            <Typewriter
              words={["Web Developer", "Full-stack Engineer"]}
              cursor
              loop={true}
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-sm">Welcome to My personal website </p>
            <span>
              <FaRegHandPeace />
            </span>
          </div>
        </div>
        <div className="">
          <motion.div
            className="relative w-72 h-72 rounded-full"
            initial={{ boxShadow: "0 0 0px rgba(275,275,275,0)" }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(275,275,275,0.5)",
                "0 0 20px rgba(275,275,275,0.7)",
                "0 0 10px rgba(275,275,275,0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/image.jpg"
              alt="image profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
      <Information />
      <motion.div className="p-10 flex flex-col justify-center items-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            margin: "-100px",
            once: false,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            mass: 0.2,
            opacity: { duration: 1.5 },
          }}
          className="relative z-10 text-center mb-5" // Thêm relative, z-10 và text-center
        >
          <h3 className="font-semibold text-2xl text-white/60">About me</h3>
          <p className="font-light text-white/50 text-sm">
            This is my personal information
          </p>
        </motion.div>

        {/* Image container */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            margin: "-100px",
            once: false,
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 100,
            mass: 0.2,
            opacity: { duration: 0.8 },
          }}
          className="relative z-0" // Thêm relative và z-0
        >
          <Image
            src={"/images/aboutme.png"}
            alt="about"
            width={900}
            height={400}
            className="rounded-[10px]"
          />
        </motion.div>
      </motion.div>
      <Project />
    </main>
  );
};

export default HomeIndex;
