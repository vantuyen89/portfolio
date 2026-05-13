"use client";
import { motion } from "framer-motion";
import { FaCss3, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import TooltipCpn from "./TooltipCpn";

interface Skill {
  name: string;
  icon: React.ReactElement;
  percentage: string;
}

const SkillWork = () => {
  const skills: Skill[] = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={45} />,
      percentage: "80%",
    },
    {
      name: "CSS3",
      icon: <FaCss3 size={45} />,
      percentage: "80%",
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript size={45} />,
      percentage: "80%",
    },
    {
      name: "React",
      icon: <FaReact size={45} />,
      percentage: "80%",
    },
    {
      name: "Nextjs",
      icon: <RiNextjsFill size={45} />,
      percentage: "80%",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={45} />,
      percentage: "75%",
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill size={45} />,
      percentage: "80%",
    },
    {
      name: "Figma",
      icon: <FaFigma size={45} />,
      percentage: "90%",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      {/* Title */}
      <h3 className="text-3xl font-bold text-center py-6 bg-gradient-to-r from-[#f9cc71] to-white bg-clip-text text-transparent">
        My Skills
      </h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {skills.map((skill: Skill) => {
          return (
            <div
              className="w-full flex flex-col sm:flex-row bg-[#2d2d2d] rounded-[10px] p-4 sm:p-6 justify-center sm:justify-start items-center gap-4 sm:gap-6"
              key={skill.name}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <TooltipCpn icon={skill.icon} content={skill.name} />
              </div>

              {/* Skill Info */}
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between items-center gap-3 text-sm sm:text-base">
                  <p>{skill.name}</p>
                  <p>{skill.percentage}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full relative h-2 rounded-full bg-gray-400 overflow-hidden">
                  <motion.div
                    className="absolute h-full rounded-full bg-white"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percentage }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillWork;
