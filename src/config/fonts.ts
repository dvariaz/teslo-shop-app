import { DM_Sans, Lexend } from "next/font/google";

export const titleFont = Lexend({
  subsets: ["latin"],
  variable: "--font-title",
})

export const paragraphFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-paragraph",
})
