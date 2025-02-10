"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const EducationWork = () => {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold text-center py-2">My Education</h3>
      <div className="grid grid-cols-1 gap-4">
        <div className="w-full flex flex-row bg-[#2d2d2d] rounded-[10px] p-4 justify-between items-center col-span-1 gap-2 ">
          <div className="flex flex-col">
            <p className="font-semibold text-[#f9cc71]">8/2022 - 12/2024</p>
            <h4>FPT Polytechnic college</h4>
          </div>
          <div className="">
            <Image src={"/images/fpt.png"} alt="fpt" width={200} height={100} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EducationWork;
