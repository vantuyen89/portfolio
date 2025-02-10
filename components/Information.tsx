"use client";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
const Information = () => {
  const informations = [
    {
      icon: <FaFacebook size={30} />,
      title: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100036305318872",
      className: "",
    },
    {
      icon: <FaInstagram size={30} />,
      title: "Instagram",
      link: "https://www.instagram.com/tueynisme/",
      className: "",
    },
    {
      icon: <FaTiktok size={30} />,
      title: "Tiktok",
      link: "https://www.tiktok.com/@ght.hc.code",
      className: "",
    },
    {
      icon: <FaGithub size={30} />,
      title: "Github",
      link: "https://github.com/vantuyen89",
      className: "",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center p-6 gap-8">
      {informations.map((infor) => (
        <motion.div
          key={infor.title}
          className={clsx(
            infor.className,
            "rounded-full p-2 border-2 border-[#f9cc71] hover:bg-[#f9cc71] cursor-pointer my-6"
          )}
          whileHover={{ rotate: -45 }}
        >
          <Link href={infor.link}>{infor.icon}</Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Information;
