export function setGlobalStyle(theme?: "dark" | "light") {
  function getTheme() {
    const theme = window.localStorage.getItem("darkMode");
    if (!theme) {
      window.localStorage.setItem("darkMode", "enabled");
      return "dark";
    }
    return theme === "enabled" ? "dark" : "light";
  }
  const colorMode = theme ? theme : getTheme();

  const root = document.documentElement;
  root.style.setProperty(
    "--foreground-rgb",
    colorMode === "light" ? "0,0,0" : "235 ,235,235",
  );
  root.style.setProperty(
    "--background-start-rgb",
    colorMode === "light" ? "205,205,205" : "50 ,50,50",
  );
  root.style.setProperty(
    "--background-end-rgb",
    colorMode === "light" ? "220,220,220" : "35 ,35,35",
  );
  root.style.setProperty("--initial-color-mode", colorMode);
}
