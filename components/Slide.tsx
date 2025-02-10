"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import ActiveSlide from "./ActiveSlide";
export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  img: string;
  github: string;
  stack: string[];
  live: string;
}

interface SlideProps {
  projects: Project[];
  setProject: any;
}
const Slide = ({ projects, setProject }: SlideProps) => {
  const handleSlide = (swiper: any) => {
    console.log(swiper);

    const curentIndex = swiper.activeIndex;
    console.log(curentIndex);

    setProject(projects[curentIndex]);
  };
  return (
    <div className="w-full lg:w-[70%]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlide}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map((pro: Project, index: number) => {
          return (
            <SwiperSlide key={index} className="w-full ">
              <div className="h-[460px] group flex justify-center items-center relative ">
                <div className="relative w-full h-full p-10 bg-[#2d2d2d] rounded-[50px]">
                  <Image
                    src={pro.img}
                    alt={pro.title}
                    fill
                    className="object-cover p-5 rounded-[50px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <ActiveSlide />
      </Swiper>
    </div>
  );
};

export default Slide;
