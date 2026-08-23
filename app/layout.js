import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSync from "@/components/ThemeSync";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "GizmoHub — Electronics & Gadgets",
    template: "%s | GizmoHub",
  },
  description:
    "Shop the latest phones, laptops, headphones, tablets and gaming gear at GizmoHub.",
};

// Applied before hydration so the stored theme preference is visible on the
// very first paint instead of flashing light mode and then switching.
const themeInitScript = `
(function () {
  try {
    var raw = localStorage.getItem("app-settings");
    var isDark = raw ? JSON.parse(raw).state.night : false;
    if (isDark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950`}>
        <ThemeSync />
        <Suspense fallback={null}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
        <ToastContainer position="bottom-right" theme="colored" />
        <Analytics />
      </body>
    </html>
  );
}
