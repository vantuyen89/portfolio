import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="container flex py-10 flex-auto items-center justify-between">
      <div className="flex">
        <Link href={"/"}>
          <h2 className="text-base">EmTuyen</h2>
        </Link>
        <p className="text-cyan-400">.</p>
      </div>
      <div className="hidden lg:flex">
        <Nav />
      </div>
      <div className="flex items-center gap-2">
        <Link href={"https://github.com/vantuyen89"}>
          <Image src={"/images/git.webp"} alt="github" width={30} height={30} />
        </Link>
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
