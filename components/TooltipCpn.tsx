"use client";
import React, { ReactElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { motion } from "framer-motion";
interface TooltipProps {
  icon: ReactElement;
  content: string;
  side?: "top" | "bottom" | "left" | "right";
}

const TooltipCpn: React.FC<TooltipProps> = ({
  icon,
  content,
  side = "top",
}) => {
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
            {icon}
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
