import { ProjectType } from "@/lib/projects";
import Image from "next/image";
import { createElement } from "react";

export default function ProjectDesc({
  selectedProject,
}: {
  selectedProject: ProjectType;
}) {
  const { title, verboseDesc, videoSource, projectWidgets, github } =
    selectedProject;

  return (
    <section className="flex flex-wrap-reverse justify-center ">
      <article className="flex-1 flex flex-col gap-3 leading-7">
        <div className="w-[350px]"></div>
        <h2 className="mb-5">
          <a href={github}>{title}</a>
        </h2>
        <div className="flex flex-col gap-10 flex-1">
          <p className="flex-1 whitespace-pre-line">{verboseDesc}</p>
          <div
            className="
          flex  flex-wrap
        
          flex-grow-0
          gap-2
          flex-0 relative
          "
          >
            {projectWidgets?.map((el) => {
              return createElement(el, { key: el });
            })}
          </div>
        </div>
      </article>

      {videoSource && (
        <video autoPlay controls className="flex-1" key={videoSource}>
          <source src={videoSource} type="video/webm" />
        </video>
      )}
      {!videoSource && (
        <figure className="h-[540px] w-[960px]  relative">
          <Image
            src={"/genericCode.jpg"}
            alt="Picture of the author"
            sizes=""
            fill={true}
            style={{ objectFit: "contain" }}
            className="rounded-md"
          />
        </figure>
      )}
    </section>
  );
}
