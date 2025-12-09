import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio | React & Angular",
  description: "Portfolio of an experienced frontend developer specializing in React and Angular",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}
