"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Project = () => {
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
      day: "06/2024 - 11/2024",
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
      day: "11/2024 - 12/2024",
    },
    {
      number: "03",
      category: "Portfolio",
      title: "Portfolio website",
      description: "Building a personal website with Nextjs and Tailwind",
      img: "/images/portfolio.png",
      github: "https://github.com/vantuyen89/portfolio",
      stack: ["Nextjs", "Tailwind", "Swiper"],
      live: "https://emtuyen-portfolio.netlify.app/",
      day: "02/2025 - 02/2025",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
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
        className="relative z-10 text-center mb-5"
      >
        <h3 className="font-semibold text-2xl text-white/60">My project</h3>
        <p className="font-light text-white/50 text-sm">
          This is my project information
        </p>
      </motion.div>
      <div className="min-h-[50vh] p-8 gap-6 grid grid-cols-1">
        {projects.map((section, index) => (
          <Link href={section?.live} key={index}>
            <motion.div
              key={index}
              className="min-h-[50vh] flex items-center justify-center rounded-[40px] px-7 cursor-pointer transition group"
              initial={{ backgroundColor: "transparent" }}
              whileHover={{
                backgroundColor: "rgba(23, 39, 75, 0.3)",
              }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="max-w-6xl w-full grid grid-cols-2 gap-8 items-center ">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    margin: "-100px",
                    once: false,
                  }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    mass: 0.2,
                    opacity: { duration: 0.8 },
                  }}
                >
                  <span>{section?.day}</span>
                  <h2 className="text-xl font-medium group-hover:text-[#51c9cd] transition-colors duration-300">
                    {section.title}
                  </h2>
                  <p className="text-base">{section.description}</p>
                  <p></p>
                  <div className="flex gap-2">
                    {section?.stack?.map((pro, index: number) => {
                      return (
                        <div
                          className="bg-[#193756] rounded-full p-1 text-sm px-3 hover:text-[#51c9cd] transition"
                          key={index}
                        >
                          {pro}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
                <motion.div
                  className="origin-bottom-right"
                  initial={{ opacity: 0, y: 50, x: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    rotate: -4,
                    transition: {
                      type: "spring",
                      damping: 15,
                      stiffness: 300,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={section.img}
                    alt={section.title}
                    className="w-full rounded-[10px] shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
