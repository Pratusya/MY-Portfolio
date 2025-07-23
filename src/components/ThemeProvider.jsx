import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext();

const themes = {
  light: "light",
  dark: "dark",
  cyberpunk: "theme-cyberpunk",
  oceanic: "theme-oceanic",
  sunset: "theme-sunset",
  forest: "theme-forest",
};

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    Object.values(themes).forEach((themeClass) => {
      root.classList.remove(themeClass);
    });

    // Add current theme class
    if (theme === "light") {
      root.classList.remove("dark");
    } else if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.add("dark");
      root.classList.add(themes[theme]);
    }

    // Store theme in localStorage
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const changeTheme = (newTheme) => {
    setIsAnimating(true);

    // Add transition effect
    document.body.style.transition = "all 0.5s ease-in-out";

    setTimeout(() => {
      setTheme(newTheme);
      setIsAnimating(false);
      document.body.style.transition = "";
    }, 250);
  };

  const cycleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    changeTheme(themeKeys[nextIndex]);
  };

  const value = {
    theme,
    setTheme: changeTheme,
    cycleTheme,
    themes: Object.keys(themes),
    isAnimating,
    currentThemeClass: themes[theme] || "dark",
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
