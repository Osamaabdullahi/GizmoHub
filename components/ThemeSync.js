"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store";

// Keeps <html class="dark"> in sync with the persisted theme preference.
// Paired with the inline script in app/layout.js, which applies the class
// before first paint so there is no light/dark flash on load.
export default function ThemeSync() {
  const isDarkMode = useAppStore((state) => state.night);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return null;
}
