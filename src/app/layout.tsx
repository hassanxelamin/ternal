import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const polySans = localFont({
  src: "./fonts/PolySansTrial-Neutral.woff",
  variable: "--font-geist-sans",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Ternal",
  description: "Ternal official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${polySans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
