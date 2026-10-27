
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@teispace/next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
      aria-label="Toggle light and dark mode"
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-orange-500 bg-orange-50 text-orange-600 transition-all duration-300 hover:scale-105 dark:bg-zinc-800 dark:text-orange-400"
    >
      {mounted ? (
        isDark ? <Sun size={23} /> : <Moon size={23} />
      ) : (
        <span className="h-5 w-5" />
      )}
    </button>
  );
}
