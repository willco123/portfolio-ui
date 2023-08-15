"use client";
import Bulb from "../../public/light-bulb.svg";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./ClientLayout";
import setGlobalStyle from "@/lib/set-global-style";

export default function LightBulb() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange() {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("darkMode", "disabled");
    } else {
      root.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("darkMode", "enabled");
    }
  }

  return (
    <Bulb
      alt="lightbulb"
      className="justify-self-end self-center mr-1 test"
      onClick={handleThemeChange}
      width={30}
      height={30}
      style={{ color: "var(--test)" }}
    />
  );
}
