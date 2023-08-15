export default function setGlobalStyle(theme?: "dark" | "light") {
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
  if (colorMode === "dark") root.classList.add(`${colorMode}`);
}
