import type { Metadata } from "next";
import local from "next/font/local";
import "./globals.css";

const aeonik = local({
  src: [
    {
      path: "../public/fonts/AeonikTRIAL-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/AeonikTRIAL-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/AeonikTRIAL-Light.otf",
      weight: "300",
    },
  ],
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={aeonik.className}>{children}</body>
    </html>
  );
}
