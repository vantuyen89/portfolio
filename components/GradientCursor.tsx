"use client";
import React, { useEffect, useState } from "react";

const GradientCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: `
          radial-gradient(
            800px circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(29, 78, 216, 0.15),
            transparent 80%
          )
        `,
        transition: "background 0.3s ease",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              600px circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(255, 255, 255, 0.06),
              transparent 60%
            )
          `,
          transition: "background 0.2s ease",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              400px circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(14, 165, 233, 0.1),
              transparent 40%
            )
          `,
          transition: "background 0.3s ease",
        }}
      />
    </div>
  );
};

export default GradientCursor;
