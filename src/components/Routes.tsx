"use client";
import Link from "next/link";
import LoadingSVG from "../../public/loading.svg";
import { useState, useEffect } from "react";

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
      onClick={() => {
        if (itemName !== "contact") {
          setLoading(true);
        }
      }}
      className={`
      ${
        currentRoute === itemName ? "text-softblue dark:text-softblue-dark" : ""
      }
      `}
    >
      {loading ? (
        <LoadingSVG className="w-7 h-7 mr-2 text-subtle-gray dark:text-subtle-white fill-softblue-light dark:fill-softblue-dark animate-spin dark:text-gray-600 fill-blue-600" />
      ) : (
        itemText
      )}
    </Link>
  );
}
