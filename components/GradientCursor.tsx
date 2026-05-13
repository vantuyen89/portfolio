// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Cursor() {
//   const cursorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;

//     // Move cursor
//     const move = (e: MouseEvent) => {
//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.2,
//         ease: "power3.out",
//       });
//     };

//     window.addEventListener("mousemove", move);

//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="
//         fixed top-0 left-0 w-6 h-6
//         rounded-full pointer-events-none
//         bg-white/40 border border-white/60
//         mix-blend-difference
//         -translate-x-1/2 -translate-y-1/2
//         z-[9999]
//       "
//     />
//   );
// }

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const TRAIL_COUNT = 8;

export default function Cursor() {
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const positions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 })),
  );
  const mouse = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const LERP = [0.4, 0.3, 0.25, 0.2, 0.17, 0.14, 0.11, 0.08];

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const pos = positions.current;
      const dots = dotsRef.current;

      pos[0].x += (mouse.current.x - pos[0].x) * LERP[0];
      pos[0].y += (mouse.current.y - pos[0].y) * LERP[0];

      for (let i = 1; i < TRAIL_COUNT; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * LERP[i];
        pos[i].y += (pos[i - 1].y - pos[i].y) * LERP[i];
      }

      for (let i = 0; i < TRAIL_COUNT; i++) {
        if (dots[i]) {
          gsap.set(dots[i], { x: pos[i].x, y: pos[i].y });
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => {
        const progress = i / (TRAIL_COUNT - 1);
        const size = 40 - progress * 20;
        const opacity = 1 - progress * 0.9;

        return (
          <div
            key={i}
            ref={(el) => {
              if (el) dotsRef.current[i] = el;
            }}
            style={{
              width: size,
              height: size,
              opacity,
              background: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)`,
            }}
            className="
              fixed top-0 left-0
              rounded-full pointer-events-none
              mix-blend-difference
              -translate-x-1/2 -translate-y-1/2
              z-[9999]
            "
          />
        );
      })}
    </>
  );
}