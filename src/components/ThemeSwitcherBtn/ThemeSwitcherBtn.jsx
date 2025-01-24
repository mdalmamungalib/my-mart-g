"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
export const dynamic = "force-dynamic";

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
      className={`w-fit p-2 rounded-md  active:scale-110 duration-200  flex items-center space-x-1 text-xl transition-transform transform text-lime-600 hover:scale-110 dark:hover:text-lime-400 `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitcherBtn;
