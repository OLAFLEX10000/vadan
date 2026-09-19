import type { Metadata } from "next";
import "./globals.css";
import { SocialFooter } from './social-footer';

export const metadata: Metadata = {
  title: "Vadan",
  description: "A simple guide to courses, schools and admission scores in Nigeria.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}<SocialFooter /></body>
    </html>
  );
}
