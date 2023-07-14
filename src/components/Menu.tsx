"use client";
import Cards from "./Cards";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu({
  ids,
  children,
}: {
  children: React.ReactNode;
  ids: { id: string }[];
}) {
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    setCurrentRoute(segment);
  }, [segment]);

  return (
    <>
      <div className="flex flex-none w-full justify-center gap-4 group ">
        {ids.map((el) => (
          <Cards key={el.id} itemName={el.id} currentRoute={currentRoute} />
        ))}
      </div>
      <div
        className={`transition-all duration-1000 flex justify-center  ${
          currentRoute ? "flex-1" : "flex-none"
        }`}
      >
        {children}
      </div>
    </>
  );
}
