import { useState, useEffect } from "react";
import styles from "./Theme.module.scss";

export const Theme = () => {
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-sheme: dark)").matches
      ? "dark-theme"
      : "light-theme";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  return (
    <>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={handleThemeChange}
          checked={theme === "dark-theme"}
        />
        <span className={styles.slideSwitchRound}></span>
      </label>
    </>
  );
};
