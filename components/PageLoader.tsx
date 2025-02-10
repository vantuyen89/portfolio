"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a192f]"
        >
          <div className="relative">
            <svg width="160" height="160" viewBox="0 0 160 160">
              <motion.polygon
                points="80,20 140,55 140,105 80,140 20,105 20,55"
                fill="none"
                stroke="#64ffda"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: 2.5,
                    ease: "easeInOut",
                  },
                }}
              />
            </svg>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#64ffda] font-bold text-4xl"
              style={{
                fontFamily: "monospace",
                zIndex: 10,
              }}
            >
              T
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
