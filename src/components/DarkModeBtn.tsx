"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <IoMdSunny
          className="h-6 w-6 md:h-8 md:w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <FaMoon
          className="h-6 w-6 md:h-8 md:w-8 cursor-pointer text-gray-900"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModeBtn;
