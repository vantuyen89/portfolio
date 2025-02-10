"use client";
import React from "react";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutIndex = () => {
  return (
    <div className="container px-10 py-10 ">
      <div className="border bg-[#2d2d2d] border-gray-100 p-4 rounded-3xl px-6">
        <div className="flex items-center gap-2">
          <p>About me</p>
          <div className="w-56 h-[2px] bg-[#f9cc71]"></div>
        </div>
        <div className="grid grid-cols-8 px-10 py-10 justify-between items-start">
          <motion.div
            className="relative w-64 h-64 rounded-full col-span-3"
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
          <div className="col-span-5 flex flex-col gap-3 items-center justify-center">
            <p className="tracking-widest text-sm font-light leading-6 indent-8">
              Hi everyone! My name is Tuyen , 22 year olds . I am a student at
              FPT POLYTECHNIC college. I want to find a place to practice,
              learn, and improve my qualifications and knowledge. After the
              internship, I hope to become a member of the company.
            </p>
            <p className="tracking-widest text-sm font-light leading-6 indent-8">
              My job is to build your website to be functional and user-friendly
              yet still attractive. In addition, I provide a personal touch to
              your product and ensure that the website catches attention and is
              easy to use. My goal is to convey your message and identity in the
              most creative way. If you are interested in hiring me, please
              contact the listed contact.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default AboutIndex;
