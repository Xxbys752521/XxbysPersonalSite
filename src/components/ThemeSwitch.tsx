import { useTheme } from "next-themes";
import useSound from "use-sound";
import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  function ThemeSwitch() {
    setTheme(
      theme === "theme-second" || theme === "theme-second"
        ? "theme-first"
        : "theme-second"
    );
  }

  const [ThemeSound] = useSound("/static/sound/switch-on.mp3");

  return (
    <div className="ml-1 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-zinc-300 hover:ring-1 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-800">
      <motion.button
        className="flex h-8 w-8 items-center justify-center p-2"
        whileTap={{
          scale: 0.7,
          rotate: 360,
        }}
        whileHover={mounted ? { scale: 1.1 } : {}}
        transition={{ duration: 0.2, ease: "easeIn" }}
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => {
          ThemeSwitch();
          ThemeSound();
        }}
      >
        {mounted && (theme === "theme-first" || theme === "theme-second") ? (
          <HiSun className="h-4 w-4 hover:animate-spin" />
        ) : (
          <HiMoon className="h-4 w-4 hover:animate-spin" />
        )}
      </motion.button>
    </div>
  );
}
