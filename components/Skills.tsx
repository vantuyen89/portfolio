

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import clsx from "clsx";

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      text: "HTML",
      image: "/images/html5.png",
    },
    {
      text: "CSS",
      image: "/images/css.png",
    },
    {
      text: "JavaScript",
      image: "/images/js.png",
    },
    {
      text: "React",
      image: "/images/react.png",
    },
    {
      text: "Nodejs",
      image: "/images/nodejs.png",
    },
    {
      text: "Tailwind",
      image: "/images/tailwind.png",
    },
  ]);

  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 py-8">
      {/* Title */}
      <div className="flex items-center gap-2">
        <div className="w-16 sm:w-24 h-[2px] bg-[#f9cc71]"></div>
        <h2 className="text-lg sm:text-xl">Skills</h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button
          className={clsx(
            open ? "bg-[#7e7768] text-[#f9cc71]" : "",
            "hover:bg-[#7e7768] rounded-[5px] duration-300",
          )}
          onClick={() => {
            setOpen(true);
            setSkills([
              {
                text: "HTML",
                image: "/images/html5.png",
              },
              {
                text: "CSS",
                image: "/images/css.png",
              },
              {
                text: "JavaScript",
                image: "/images/js.png",
              },
              {
                text: "React",
                image: "/images/react.png",
              },
              {
                text: "Nodejs",
                image: "/images/nodejs.png",
              },
              {
                text: "Tailwind",
                image: "/images/tailwind.png",
              },
            ]);
          }}
        >
          Tech Stack
        </Button>

        <Button
          onClick={() => {
            setSkills([
              { text: "MongoDB", image: "/images/mongodbb.svg" },
              { text: "Github", image: "/images/git.webp" },
              { text: "Figma", image: "/images/figma.png" },
            ]);
            setOpen(false);
          }}
          className={clsx(
            open === false ? "bg-[#7e7768] text-[#f9cc71]" : "",
            "hover:bg-[#7e7768] rounded-[5px] duration-300",
          )}
        >
          Tools
        </Button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {skills.map((sk, index) => {
          return (
            <motion.div
              className="border border-[#f9cc71] py-4 rounded-[5px] flex items-center px-4 sm:px-5 md:px-6 gap-4 sm:gap-6 cursor-pointer"
              key={index}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <Image
                  src={sk.image}
                  alt={sk.text}
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </motion.div>

              <div className="relative hover:cursor-pointer">
                <motion.div
                  className="relative"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {/* Main Text */}
                  <motion.span
                    className="text-white block text-sm sm:text-base"
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -8 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {sk.text}
                  </motion.span>

                  {/* Advanced Text */}
                  <motion.div
                    className="absolute left-0 pointer-events-none"
                    variants={{
                      rest: { opacity: 0, y: 5 },
                      hover: { opacity: 1, y: -2 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-gray-400 text-xs sm:text-sm">
                      Advanced
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;