"use client";
import Navbar from "./Navbar";
import Widgets from "./Widgets";
import { useState, useEffect, useRef, createContext } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import getYCoord from "@/lib/get-y-coord";

export const ThemeContext = createContext<{
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}>({ theme: "dark", setTheme: () => {} });

export default function ClientLayout({
  ids,
  children,
}: {
  children: React.ReactNode;
  ids: { id: string }[];
}) {
  const animationDelay = 1000;
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [animate, setAnimate] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [navFlexPos, setNavFlexPos] = useState<number>(0);
  const [widgetFlexPos, setWidgetFlexPos] = useState<number>(0);
  const [currentRoute, setCurrentRoute] = useState<"home" | "route">("home");
  const placeHolderNavRef = useRef<HTMLDivElement>(null);
  const placeHolderWidgetRef = useRef<HTMLDivElement>(null);
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    console.log(document.adoptedStyleSheets);
    setNavFlexPos(getYCoord(placeHolderNavRef));
    setWidgetFlexPos(getYCoord(placeHolderWidgetRef));
    const root = window.document.documentElement;

    root.classList.contains("dark") ? setTheme("dark") : setTheme("light");
    console.log(root.classList.contains("dark"));
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(false);
    }, animationDelay);

    if (currentRoute === "route") return () => clearTimeout(timeoutId);

    setNavFlexPos(getYCoord(placeHolderNavRef));
    setWidgetFlexPos(getYCoord(placeHolderWidgetRef));
    return () => clearTimeout(timeoutId);
  }, [currentRoute]);

  useEffect(() => {
    setAnimate(true);
    segment ? setCurrentRoute("route") : setCurrentRoute("home");
  }, [segment]);

  function handleResize() {
    setNavFlexPos(getYCoord(placeHolderNavRef));
    setWidgetFlexPos(getYCoord(placeHolderWidgetRef));
  }

  function handleScroll() {
    setNavFlexPos(getYCoord(placeHolderNavRef));
    setWidgetFlexPos(getYCoord(placeHolderWidgetRef));
    setScrollY(window.scrollY);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      <Navbar
        segment={segment}
        ids={ids}
        placeHolderNavRef={placeHolderNavRef}
        animate={animate}
        navFlexPos={navFlexPos}
        currentRoute={currentRoute}
        scrollY={scrollY}
      />
      <Widgets
        segment={segment}
        placeHolderWidgetRef={placeHolderWidgetRef}
        animate={animate}
        widgetFlexPos={widgetFlexPos}
        currentRoute={currentRoute}
      />
    </ThemeContext.Provider>
  );
}

// const styleSheet = document.styleSheets[0];
// const myRule = [...styleSheet.cssRules].find(
//   (r) => (r as CSSStyleRule).selectorText === ":root",
// ) as CSSStyleRule;
// myRule.style.setProperty("--foreground-rgb", "0,255,255");

// // myRule.style.setProperty("line-height", "2");
// // myRule.style.setProperty("color", "blue");
// // myRule.style.setProperty("color", "black");

// const styleSheetTwo = document.styleSheets[1];
// const myRuleTwo = [...styleSheetTwo.cssRules].find(
//   (r) => (r as CSSStyleRule).selectorText === "test",
// ) as CSSStyleRule;
// myRuleTwo.style.setProperty("test", "123");
//     // const newRule = ".--foreground-rgb { color: red; background: black; }";
// // stylesheet.insertRule(newRule, stylesheet.cssRules.length);
