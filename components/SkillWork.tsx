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
  const skills = [
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
      percentage: "50%",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={45} />,
      percentage: "75%",
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill size={45} />,
      percentage: "70%",
    },
    {
      name: "Figma",
      icon: <FaFigma size={45} />,
      percentage: "75%",
    },
  ];
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold text-center py-2">My Skills</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill: Skill, index: number) => {
          return (
            <div
              className="w-full flex bg-[#2d2d2d] rounded-[10px] p-7 justify-center items-center gap-9 col-span-1"
              key={index}
            >
              <TooltipCpn icon={skill.icon} content={skill.name} />
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between gap-5">
                  <p>{skill.name}</p>
                  <p>{skill.percentage}</p>
                </div>
                <div className="w-full relative h-2 rounded-full bg-gray-400">
                  <motion.div
                    className="absolute h-full rounded-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: skill.percentage }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                  ></motion.div>
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
