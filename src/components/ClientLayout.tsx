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
    setNavFlexPos(getYCoord(placeHolderNavRef));
    setWidgetFlexPos(getYCoord(placeHolderWidgetRef));
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode",
    ) as "dark" | "light";
    setTheme(initialColorValue);
    let stylesheet = document.styleSheets[0];

    const myRule = [...stylesheet.cssRules].find(
      (r) => (r as CSSStyleRule).selectorText === ".test",
    );

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
