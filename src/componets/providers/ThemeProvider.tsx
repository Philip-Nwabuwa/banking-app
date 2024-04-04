"use client";

import React, { ReactNode, useEffect } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const defaultThemeMode = "light";
    let themeMode: string;

    if (document.documentElement) {
      if (document.documentElement.hasAttribute("data-bs-theme-mode")) {
        themeMode =
          document.documentElement.getAttribute("data-bs-theme-mode") || "";
      } else {
        if (localStorage.getItem("data-bs-theme") !== null) {
          themeMode = localStorage.getItem("data-bs-theme") || "";
        } else {
          themeMode = defaultThemeMode;
        }
      }

      if (themeMode === "system") {
        themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }

      document.documentElement.setAttribute("data-bs-theme", themeMode);
    }
  }, []);

  return <div> {children}</div>;
};

export default ThemeProvider;
