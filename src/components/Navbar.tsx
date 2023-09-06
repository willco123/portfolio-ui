"use client";
import Routes from "./Routes";
import LightBulb from "./LightBulb";
import Link from "next/link";
import Initials from "../../public/wcVec.svg";
import { ThemeContext } from "./ClientLayout";
import { useContext } from "react";

export default function Navbar({
  ids,
  segment,
  placeHolderNavRef,
  animate,
  navFlexPos,
  currentRoute,
  scrollY,
}: {
  ids: { id: string }[];
  segment: string | null;
  placeHolderNavRef: React.RefObject<HTMLDivElement>;
  animate: boolean;
  navFlexPos: number;
  currentRoute: "home" | "route";
  scrollY: number;
}) {
  const navHeight = 67; //tailwind doesnt seem to like parsing variables
  const { theme } = useContext(ThemeContext);
  const navColor = theme === "light" ? " bg-subtle-white" : "bg-subtle-gray";

  return (
    <>
      {
        <div
          ref={placeHolderNavRef}
          className={`h-[67px]  ${segment ? "absolute" : ""}`}
        />
      }
      {placeHolderNavRef.current && (
        <div
          className={`grid p-3 grid-cols-3 w-full  self-center justify-center items-center 
        ${navColor}  
        ${animate ? " transition-all duration-1000 ease-in-out" : ""}
        ${segment || !segment ? " animate-fadeFast" : ""}
        ${segment ? " fixed" : " absolute"}
        ${
          scrollY >= 40 && segment
            ? " opacity-10 hover:opacity-100 "
            : " opacity-100"
        }
        `}
          style={{ top: currentRoute === "route" ? 0 : navFlexPos }}
        >
          <Link
            className="self-center ml-1 flex items-center gap-1 w-10 "
            href="/"
          >
            <Initials />
          </Link>
          <div className="flex justify-center items-center gap-4">
            {ids.map((el) => (
              <Routes key={el.id} itemName={el.id} currentRoute={segment} />
            ))}
          </div>
          <LightBulb />
        </div>
      )}
    </>
  );
}

{
  /* <div
className={`grid p-3 grid-cols-3 w-screen  self-center justify-center items-center  bg-subtle-white dark:bg-subtle-gray 
${segment ? "animate-slide-midUp" : ""}
${scrollY >= 40 ? "opacity-10 hover:opacity-100 " : "opacity-100"}
`}
> */
}
