"use client";
import Link from "next/link";

export default function Cards({
  itemName,
  currentRoute,
}: {
  itemName: string;
  currentRoute: string | null;
}) {
  return (
    <Link
      href={`/${itemName}`}
      className={`flex-none w-1/5 rounded text-center p-4 bg-softblue dark:bg-softblue-dark
      group-hover:scale-90 hover:!scale-110 
      ease-in duration-300
      ${currentRoute === itemName ? "shadow-glow" : ""}
      `}
    >
      <div>{itemName}</div>
    </Link>
  );
}
