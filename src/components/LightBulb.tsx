"use client";
import Image from "next/image";
import lightBulb from "../../public/light-bulb.svg";
import darkBulb from "../../public/dark-bulb.svg";
import { useEffect, useState } from "react";

export default function LightBulb() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // useEffect(() => {
  //   const isDark = window.matchMedia("(prefers-color-scheme: dark)");
  //   setTheme(isDark.matches ? "dark" : "light");
  // }, []);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  function handleThemeChange() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  const bulb = theme === "dark" ? lightBulb : darkBulb;

  return (
    <Image
      src={bulb}
      alt="lightbulb"
      className="absolute top-0 right-0 m-2"
      onClick={handleThemeChange}
    />
  );
}
