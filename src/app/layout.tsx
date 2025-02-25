import clsx from "clsx";
import type { Metadata } from "next";

import { titleFont, paragraphFont } from '@/config/fonts';

import "@/config/styles/globals.css";

export const metadata: Metadata = {
  title: "Teslo Shop",
  description: "Best shop in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx('antialiased', titleFont.variable, paragraphFont.className)}
      >
        {children}
      </body>
    </html>
  );
}
