"use client";
import React from "react";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutIndex = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">
      <div className="border bg-[#2d2d2d] border-gray-100 p-4 sm:p-6 rounded-3xl">
        {/* Title */}
        <div className="flex items-center gap-2 mb-8">
          <p className="text-base sm:text-lg font-medium whitespace-nowrap">
            About me
          </p>
          <div className="flex-1 h-[2px] bg-[#f9cc71]"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-10 px-2 sm:px-4 md:px-8">
          {/* Image */}
          <motion.div
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto lg:mx-0 lg:col-span-3 rounded-full"
            initial={{ boxShadow: "0 0 0px rgba(255,255,255,0)" }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.7)",
                "0 0 10px rgba(255,255,255,0.5)",
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
              fill
              className="rounded-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center text-center lg:text-left">
            <p className="tracking-wide sm:tracking-widest text-sm sm:text-base font-light leading-7 indent-0 sm:indent-8">
              Hi everyone! My name is Tuyen, I am 22 years old. I am a student
              at FPT Polytechnic College. I want to find a place to practice,
              learn, and improve my qualifications and knowledge. After the
              internship, I hope to become a member of the company.
            </p>

            <p className="tracking-wide sm:tracking-widest text-sm sm:text-base font-light leading-7 indent-0 sm:indent-8">
              My job is to build your website to be functional and user-friendly
              while still attractive. In addition, I provide a personal touch to
              your product and ensure that the website catches attention and is
              easy to use. My goal is to convey your message and identity in the
              most creative way. If you are interested in hiring me, please
              contact me through the listed contact information.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-8">
        <Skills />
      </div>
    </div>
  );
};

export default AboutIndex;
