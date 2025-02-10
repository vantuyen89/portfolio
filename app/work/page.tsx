import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillWork from "@/components/SkillWork";
import ExperienceWork from "@/components/ExperienceWork";
import EducationWork from "@/components/EducationWork";
import AboutMe from "@/components/AboutMe";
const Work = () => {
  return (
    <div className="container py-20 w-full">
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col xl:flex-row gap-[160px] justify-center"
      >
        <TabsList className="w-full flex flex-col gap-6 lg:max-w-[380px] px-8 xl:px-0 items-center py-40">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skill">Skill</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full h-full">
          <ExperienceWork />
        </TabsContent>
        <TabsContent value="education" className="w-full h-full">
          <EducationWork />
        </TabsContent>
        <TabsContent value="skill" className="w-full h-full">
          <SkillWork />
        </TabsContent>
        <TabsContent value="about" className="w-full h-full">
          <AboutMe />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Work;
