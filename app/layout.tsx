"use client";

import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { useEffect } from "react";
import { initGTM } from "@/lib/gtm";
import "./globals.css";
import { ModalProvider } from "@/lib/modal-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BUMC Medical Center",
  description: "Binawan University Medical Center",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/bumc-logo-red.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ Initialize GTM client-side only
  useEffect(() => {
    initGTM("GTM-XXXXXXX"); // 🔥 Replace with your actual GTM ID
  }, []);

  return (
    <html lang="id">
      <body className={`font-sans antialiased ${poppins.variable}`}>
        {/* GTM noscript fallback (for no-JS users) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/gtag/js?id=G-ZPQZ015NGN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ModalProvider>{children}</ModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
