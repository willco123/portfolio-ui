"use client";
import GitHubLogo from "../../public/github-mark.svg";
import Link from "next/link";
import ExpandIcon from "../../public/expand.svg";
import WebIcon from "../../public/website.svg";
import Image from "next/image";
import type { ProjectType } from "@/lib/projects";
import * as widgets from "@/components/widgets/index";

export default function Card({
  project,
  handleClick,
}: {
  project: ProjectType;
  handleClick: (project: ProjectType) => void;
}) {
  const { title, description, picture, website, github } = project;
  const image = picture ? picture : "/genericCode.jpg";
  return (
    <li
      className="  flex flex-col justify-center 
     rounded
     h-[450px]  gap-3  relative group
     dark:bg-subtle-gray bg-subtle-white-dark
    
    "
    >
      <figure className="h-[140px] w-full  relative">
        <Image
          src={image}
          alt="Picture of the author"
          fill={true}
          objectFit="cover"
          className="rounded-md"
        />
      </figure>

      <h3
        className=" flex-grow-0  justify-center relative
       border-b border-softblue-light dark:border-softblue-dark
       mx-5
       "
      >
        {title}
      </h3>
      <div
        className=" absolute h-full w-full z-10  group-hover:flex hidden dark:bg-subtle-gray-dark/50 bg-subtle-white-dark/50
      flex-col items-center justify-evenly p-5
      "
      >
        <a className="h-10 w-10">
          <ExpandIcon onClick={() => handleClick(project)} />
        </a>
        {website && (
          <div className="h-10 w-10">
            <Link href={website}>
              <WebIcon />
            </Link>
          </div>
        )}
        <div>
          <Link href={github}>
            <GitHubLogo className="scale-[35%]" />
          </Link>
        </div>
      </div>
      <p className="mx-5  flex-grow flex-1 break-words ">{description}</p>
    </li>
  );
}
// className="scale-[10%] absolute top-0 right-0  translate-y-1/2  "
// group-hover:scale-90 hover:!scale-110
// className="absolute left-0 bottom-0 scale-[35%] translate-y-6 group-hover:block"
