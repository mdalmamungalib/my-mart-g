"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeSwitcherBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <button
      className={`w-fit p-2 rounded-md hover:scale-110 active:scale-110 duration-200 `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitcherBtn;
