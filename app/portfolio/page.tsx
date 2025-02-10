"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";
import Slide, { Project } from "@/components/Slide";
const projects = [
  {
    number: "01",
    category: "Timis Shop",
    title: "E-commerce website",
    description:
      "Built a responsive e-commerce website using React and Nodejs.",
    img: "/images/timis.png",
    github: "https://github.com/vantuyen89/timis_shop",
    stack: ["React", "Nodejs", "Tailwind", "Swiper"],
    live: "https://timis-shop.vercel.app/",
  },
  {
    number: "02",
    category: "Weather App",
    title: "Weather website",
    description:
      "Building websites, weather forecasting applications with React and API at HHTTPS: //openweatherMap.org/",
    img: "/images/weather.png",
    github: "https://github.com/vantuyen89/weather-app",
    stack: ["React", "Tailwind"],
    live: "https://weather-app-seven-orcin-54.vercel.app/",
  },
  {
    number: "03",
    category: "Portfolio",
    title: "Portfolio website",
    description: "Building a personal website with Nextjs and Tailwind",
    img: "/images/portfolio.png",
    github: "https://github.com/vantuyen89/weather-app",
    stack: ["Nextjs", "Tailwind", "Swiper"],
    live: "https://weather-app-seven-orcin-54.vercel.app/",
  },
];
const Portfolio = () => {
  const [project, setProject] = useState<Project>(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-10 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] flex flex-col lg:justify-between order-2 lg:order-none gap-3">
            <div className="text-8xl font-semibold">{project?.number}</div>
            <div className="text-3xl font-semibold">{project?.category}</div>
            <div className="text-xl font-semibold">{project?.title}</div>
            <p className="text-sm text-[#7c7c7c]">{project?.description}</p>
            <div className="flex gap-3 border-b-2 border-[#f9cc71] pb-2">
              {project?.stack?.map((la: string, index: number) => {
                return (
                  <p className="text-[#f9cc71]" key={index}>
                    {la}
                    {index !== project?.stack?.length - 1 && ","}
                  </p>
                );
              })}
            </div>
            <div className="flex gap-4">
              <Link href={project?.live}>
                <motion.div
                  className="p-2 rounded-full bg-slate-200 text-black"
                  whileHover={{ rotate: 45 }}
                >
                  <GoArrowDownRight size={30} />
                </motion.div>
              </Link>
              <Link href={project?.github}>
                <motion.div
                  className="p-2 rounded-full bg-slate-200 text-black"
                  whileHover={{ rotate: -45 }}
                >
                  <Image
                    src={"/images/github.png"}
                    alt={project?.github}
                    width={30}
                    height={30}
                  />
                </motion.div>
              </Link>
            </div>
          </div>
          <Slide projects={projects} setProject={setProject} />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
