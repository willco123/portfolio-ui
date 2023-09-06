"use client";
import GitHubLogo from "../../public/github-mark.svg";
import BookLogo from "../../public/book.svg";
import LinkedInLogo from "../..//public/linkedin.svg";
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
            <GitHubLogo transform="scale(0.5)" />
          </Link>

          <Link
            href="WillCowneResume2023V4.pdf"
            className="w-14 h-14 -translate-x-2 translate-y-2"
          >
            <BookLogo transform="scale(0.6)" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/william-cowne-22bb80159/"
            className="w-14 h-14 "
          >
            <LinkedInLogo transform="scale(0.6)" />
          </Link>
        </footer>
      )}
    </>
  );
}
