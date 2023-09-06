"use client";
import Card from "@/components/Card";
import ProjectDesc from "@/components/ProjectDesc";
import Divider from "@/components/Divider";
import { useState, useEffect } from "react";
import {
  rateADog,
  portfolioUI,
  youtubeSearchAPI,
  programmableStopwatch,
} from "@/lib/projects";
import type { ProjectType } from "@/lib/projects";

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<ProjectType>(rateADog);

  const handleClick = (project: ProjectType) => {
    if (project.title === "Programmable Stopwatch") return;
    setSelectedProject({ ...project });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    selectedProject;
  }, [selectedProject]);

  return (
    <section className="animate-fadeFast">
      <div className="flex flex-col gap-3 mb-3">
        <h1 className="text-center ">Projects</h1>
        <Divider />
      </div>

      <ProjectDesc selectedProject={selectedProject} />
      <div className="flex justify-center items-center mt-2 mb-10">
        <Divider />
      </div>
      <ul
        className="mt-3 grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]
       items-center gap-10 "
      >
        <Card project={rateADog} handleClick={handleClick} />
        <Card project={portfolioUI} handleClick={handleClick} />
        <Card project={youtubeSearchAPI} handleClick={handleClick} />
        <Card project={programmableStopwatch} handleClick={handleClick} />
      </ul>
    </section>
  );
}
