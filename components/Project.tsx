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
    {
      number: "04",
      category: "UI/UX Design",
      title: "E-commerce Website Design",
      description:
        "Designed a complete e-commerce website in Figma over 2 months, including user flow, wireframes, responsive interface design, product pages, shopping experience, and modern visual system focused on usability and conversion.",
      img: "/images/figmaproject.png",
      stack: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototype"],
      live: "https://www.figma.com/design/hHK4xIYtwBiy3lqbBetZaJ/ASM?node-id=509-1599&t=UgljFed9SGuNDp0p-1",
      day: "02/2025 - 04/2025",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10">
      {/* Heading */}
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
        className="relative z-10 text-center mb-8"
      >
        <h3 className="font-semibold text-2xl sm:text-3xl text-white/60">
          My project
        </h3>
        <p className="font-light text-white/50 text-sm sm:text-base">
          This is my project information
        </p>
      </motion.div>

      {/* Projects */}
      <div className="w-full max-w-7xl py-4 sm:py-8 gap-8 grid grid-cols-1">
        {projects.map((section, index) => (
          <Link href={section.live} key={index}>
            <motion.div
              className="w-full rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 cursor-pointer transition group"
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
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  className="space-y-4 order-2 lg:order-1"
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
                  <span className="text-sm sm:text-base text-white/70 block">
                    {section.day}
                  </span>

                  <h2 className="text-xl sm:text-2xl font-medium group-hover:text-[#51c9cd] transition-colors duration-300">
                    {section.title}
                  </h2>

                  <p className="text-sm sm:text-base leading-7 text-white/80">
                    {section.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {section.stack.map((pro, index: number) => {
                      return (
                        <div
                          className="bg-[#193756] rounded-full py-1 px-3 text-xs sm:text-sm hover:text-[#51c9cd] transition"
                          key={index}
                        >
                          {pro}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  className="origin-bottom-right order-1 lg:order-2"
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
                    className="w-full h-auto rounded-[10px] shadow-lg"
                    width={500}
                    height={500}
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
