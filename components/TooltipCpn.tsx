"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { motion } from "framer-motion";
interface TooltipContent {
  children: any;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
}
const TooltipCpn = ({ children, content, side }: TooltipContent) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1.5, ease: "easeOut" },
            }}
          >
            {children}
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side={side} className="text-center">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipCpn;
