"use client";
import Link from "next/link";
import LoadingSVG from "../../public/loading.svg";
import { useState, useEffect, useContext } from "react";

export default function Routes({
  itemName,
  currentRoute,
}: {
  itemName: string;
  currentRoute: string | null;
}) {
  const itemText = itemName.charAt(0).toUpperCase() + itemName.slice(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [currentRoute]);

  return (
    <Link
      href={`/${itemName}`}
      onClick={() => setLoading(true)}
      className={`text-center 
      ease-in duration-300
      hover:
      ${
        currentRoute === itemName ? "text-softblue dark:text-softblue-dark" : ""
      }
      `}
    >
      <LoadingSVG className="animate-spin text-gray-200" />
      {loading ? <LoadingSVG /> : itemText}
    </Link>
  );
}
