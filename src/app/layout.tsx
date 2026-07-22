import type { Metadata } from "next";
import { JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devesh's — Portfolio",
  description: "Personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("dark h-full antialiased", jetbrainsMono.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col font-mono" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
