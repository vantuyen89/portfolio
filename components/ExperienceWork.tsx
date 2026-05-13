"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ExperienceWork = () => {
  const projects = [
    {
      company: "Zylo X - Media & Technology JSC",
      project: "XIIN",
      role: "Frontend Developer",
      time: "12/2024 – 04/2025",
      team: "Team of 5",
      description:
        "Developed key features for a modern web application, focusing on admin management and real-time functionalities.",
      achievements: [
        "Participated in UI/UX design and layout creation using Figma",
        "Developed frontend components and admin pages for data management",
        "Integrated real-time chat and notification systems with Socket.io",
        "Worked with Redux Toolkit for state management and API integration",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "Socket.io",
        "Chart.js",
        "Git",
      ],
      figma:
        "https://www.figma.com/design/363pLMiYTCtMhkH1OmD1Lr/UWAY?node-id=0-1&p=f&t=yUMqcKrtrm48ihUZ-0",
    },
    {
      company: "Zylo X - Media & Technology JSC",
      project: "UWAY",
      role: "Frontend Developer",
      time: "04/2025 – 09/2025",
      team: "Team of 5",
      description:
        "Contributed to building a comprehensive platform with complex user flows, real-time communication, and order management.",
      achievements: [
        "Designed complete UI/UX flows and high-fidelity screens in Figma",
        "Built core features using React, Redux Toolkit and custom hooks",
        "Implemented real-time chat, online status & notification system with Socket.io",
        "Developed customer request and order submission features",
        "Refactored codebase and optimized performance",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "Socket.io",
        "Git",
      ],
      figma:
        "https://www.figma.com/design/363pLMiYTCtMhkH1OmD1Lr/UWAY?node-id=0-1&p=f&t=yUMqcKrtrm48ihUZ-0",
    },
    {
      company: "Zylo X - Media & Technology JSC",
      project: "Cruise & Tour Booking",
      role: "Frontend Developer",
      time: "09/2025 – 11/2025",
      team: "Team of 3",
      description:
        "Developed a professional booking platform for cruise and tour packages with dynamic pricing and smooth user experience.",
      achievements: [
        "Built main UI screens and complete booking flows using Next.js",
        "Implemented complex booking logic with real-time price calculation",
        "Developed service lists, package details, and guest selection interfaces",
        "Ensured fully responsive design across all devices",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Hook Form",
        "Git",
      ],
    },
  ];

  return (
    <div className="w-full">
      <h3 className="text-3xl font-bold text-center py-6 bg-gradient-to-r from-[#f9cc71] to-white bg-clip-text text-transparent">
        Professional Experience
      </h3>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#2d2d2d] rounded-2xl p-6 border border-gray-700 hover:border-[#f9cc71]/40 transition-all duration-300"
          >
            {/* Company & Project */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-[#f9cc71] font-medium">{item.company}</p>
                <h4 className="text-2xl font-semibold text-white mt-1">
                  {item.project}
                </h4>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 font-medium">{item.time}</p>
                <p className="text-xs text-gray-500 mt-1">{item.team}</p>
              </div>
            </div>

            <p className="text-[#f9cc71] mt-2 font-medium">{item.role}</p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              {item.description}
            </p>

            {/* Achievements */}
            <ul className="mt-5 space-y-2.5">
              {item.achievements.map((ach, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-400 text-[15px]"
                >
                  <span className="text-[#f9cc71] text-lg leading-none mt-0.5">
                    •
                  </span>
                  {ach}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tech.map((tech, i) => (
                <span
                  key={i + 1}
                  className="bg-[#193756] rounded-full py-1 px-3 text-xs sm:text-sm hover:text-[#51c9cd] transition-colors duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Figma Link */}
            {item.figma && (
              <div className="mt-5">
                <Link
                  href={item.figma}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[#f9cc71] hover:text-white text-sm font-medium transition-colors"
                >
                  View Figma Design →
                </Link>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceWork;
