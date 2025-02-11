"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAlignRight } from "react-icons/fa";
const MobileNav = () => {
  const pathName = usePathname();
  const links = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Work", path: "/work" },
  ];
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <FaAlignRight className="text-white cursor-pointer" size={20} />
        </SheetTrigger>
        <SheetContent className="z-50 bg-white text-black">
          <div className="flex items-center justify-center p-6">
            <Link href={"/"}>
              <h2 className="text-base">EmTuyen</h2>
            </Link>
            <p className="text-cyan-400">.</p>
          </div>
          <div className="flex flex-col gap-3">
            {links.map(
              (link: { name: string; path: string }, index: number) => {
                return (
                  <motion.div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      cursor: "pointer",
                    }}
                    whileHover="hover"
                    key={index}
                  >
                    <motion.span variants={{ hover: { scale: 1.2 } }}>
                      <Link href={link.path} key={index}>
                        <li
                          className={clsx(
                            link.path === pathName &&
                              "text-[#f9cc71] border-b-2 border-[#f9cc71] ",
                            "font-medium capitalize hover:text-[#f9cc71]"
                          )}
                        >
                          {link.name}
                        </li>
                      </Link>
                    </motion.span>
                    <motion.div
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "1px",
                        backgroundColor: "#f9cc71",
                        transformOrigin: "left",
                        borderRadius: "5px",
                      }}
                      initial={{ scaleX: 0 }}
                      variants={{ hover: { scaleX: 1 } }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </motion.div>
                );
              }
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
