"use client";
import GitHubLogo from "../../public/github-mark.svg";
import Link from "next/link";

export default function Widgets({
  segment,
  placeHolderWidgetRef,
  animate,
  widgetFlexPos,
  currentRoute,
}: {
  segment: string | null;
  placeHolderWidgetRef: React.RefObject<HTMLDivElement>;
  animate: boolean;
  widgetFlexPos: number;
  currentRoute: "home" | "route";
}) {
  const widgetHeight = 96;

  return (
    <>
      {
        <div
          ref={placeHolderWidgetRef}
          className={`h-[96px]  ${segment ? " absolute" : ""}`}
        />
      }
      {placeHolderWidgetRef.current && (
        <footer
          className={`flex absolute justify-center items-center gap-4 left-1/2 transform -translate-x-1/2 w-full  
        ${animate ? " transition-all duration-1000 ease-in-out" : " "}
        ${segment || !segment ? " animate-fadeFast " : ""}
        `}
          style={{
            top: currentRoute === "route" ? `calc(100% - 96px)` : widgetFlexPos,
          }}
        >
          <Link href="https://github.com/willco123/">
            <GitHubLogo transform="scale(0.6)" />
          </Link>

          <h3>Resume</h3>
          <h3>In</h3>
        </footer>
      )}
    </>
  );
}
