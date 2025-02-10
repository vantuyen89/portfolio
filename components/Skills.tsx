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
    <div className="flex flex-col gap-8 px-20 py-8">
      <div className="flex items-center gap-2">
        {" "}
        <div className="w-24 h-[2px] bg-[#f9cc71]"></div>
        <h2>Skills</h2>
      </div>
      <div className="flex gap-3">
        <Button
          className={clsx(
            open === true ? " bg-[#7e7768] text-[#f9cc71]" : "",
            "hover:bg-[#7e7768] rounded-[5px] duration-300"
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
            ]);
            setOpen(false);
          }}
          className={clsx(
            open === false ? "rounded-[5px] bg-[#7e7768] text-[#f9cc71]" : "",
            "hover:bg-[#7e7768] rounded-[5px] duration-300"
          )}
        >
          Tools
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {skills.map((sk: { text: string; image: string }, index: number) => {
          return (
            <motion.div
              className="col-span-1 border border-[#f9cc71] py-4 rounded-[5px] flex items-center pr-14 pl-5 gap-6 cursor-pointer"
              key={index}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={sk.image} alt={sk.text} width={35} height={35} />
              </motion.div>

              <div className="ml-2 relative hover:cursor-pointer">
                <motion.div
                  className="relative"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {/* Text hiển thị chính */}
                  <motion.span
                    className="text-white block"
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -8 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {sk.text}
                  </motion.span>
                  <motion.div
                    className="absolute left-0 pointer-events-none "
                    variants={{
                      rest: { opacity: 0, y: 5 },
                      hover: { opacity: 1, y: -2 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-gray-400 text-sm pb-5">Advanced</span>
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
