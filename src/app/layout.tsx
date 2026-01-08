import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: 1280,
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "LuminaCal | Premium AI Calorie Tracker",
  description:
    "Experience the next generation of nutrition tracking. AI-powered food recognition, premium glass dashboards, and local-first privacy. Download the LuminaCal APK today.",
  keywords: [
    "calorie tracker",
    "AI nutrition",
    "glassmorphism",
    "privacy first",
    "LuminaCal",
    "APK download",
    "food recognition",
    "macro tracking",
  ],
  openGraph: {
    title: "LuminaCal | Premium AI Calorie Tracker",
    description:
      "The next generation of nutrition tracking with AI-powered food recognition.",
    type: "website",
    url: "https://luminacal.app",
    siteName: "LuminaCal",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuminaCal | Premium AI Calorie Tracker",
    description: "AI-powered food recognition and premium glass dashboards.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
