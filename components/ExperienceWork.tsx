"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const ExperienceWork = () => {
  const experience = [
    {
      category: "Timis Shop",
      time: "6/2024-11/2024",
      title: "E-commerce website",
      description:
        "Built a responsive e-commerce website using React and Nodejs.",
      img: "/images/timis.png",
      github: "https://github.com/vantuyen89/timis_shop",
      stack: ["React", "Nodejs", "Tailwind", "Swiper"],
      live: "https://timis-shop.vercel.app/",
    },
    {
      category: "Weather App",
      time: "11/2024-12/2024",
      title: "Weather website",
      description:
        "Building websites, weather forecasting applications with React ",
      img: "/images/weather.png",
      github: "https://github.com/vantuyen89/weather-app",
      stack: ["React", "Tailwind"],
      live: "https://weather-app-seven-orcin-54.vercel.app/",
    },
    {
      category: "Portfolio",
      title: "Portfolio website",
      time: "2/2025-2/2025",

      description: "Building a personal website with Nextjs and Tailwind",
      img: "/images/portfolio.png",
      github: "https://github.com/vantuyen89/weather-app",
      stack: ["Nextjs", "Tailwind", "Swiper"],
      live: "https://weather-app-seven-orcin-54.vercel.app/",
    },
  ];
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold text-center py-2">My Experience</h3>
      <div className="grid grid-cols-1 gap-4">
        {experience.map((ex, index) => {
          return (
            <div
              className="w-full flex flex-col bg-[#2d2d2d] rounded-[10px] p-4 justify-center col-span-1 gap-2 "
              key={index}
            >
              <p className="text-sm font-semibold text-[#f9cc71]">{ex.time}</p>
              <div className="flex items-center justify-between">
                <h4 className="text-base font-medium">{ex.title}</h4>
                <Link href={ex.github}>
                  <motion.div
                    whileHover={{ scale: 1.4, transition: { duration: 1.4 } }}
                  >
                    <Image
                      src="/images/github.png"
                      alt="github"
                      width={40}
                      height={40}
                      className="pr-4"
                    />
                  </motion.div>
                </Link>
              </div>
              <p className="text-sm">{ex.description}</p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default ExperienceWork;
