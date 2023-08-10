"use client";
import Bulb from "../../public/light-bulb.svg";
import { useContext } from "react";
import { ThemeContext } from "./ClientLayout";
import { setGlobalStyle } from "@/lib/set-global-style";

export default function LightBulb() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange2() {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("darkMode", "disabled");
      setGlobalStyle("light");
    } else {
      setTheme("dark");
      localStorage.setItem("darkMode", "enabled");
      setGlobalStyle("dark");
    }
  }

  return (
    <Bulb
      alt="lightbulb"
      className="justify-self-end self-center mr-1"
      onClick={handleThemeChange2}
      width={30}
      height={30}
    />
  );
}
