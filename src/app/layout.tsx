import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { Noise } from "@/components/Noise";
import { Preloader } from "@/components/Preloader";
import { Providers } from "@/components/Providers";
import { ScrollProgress } from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenLume | Log Your Life. Save Your World.",
  description: "The award-winning sustainability tracker. Master 20+ daily habits and watch your impact grow from Seedling to Forest.",
  openGraph: {
    title: "GreenLume | Log Your Life. Save Your World.",
    description: "The award-winning sustainability tracker. Master 20+ daily habits and watch your impact grow from Seedling to Forest.",
    url: "https://greenlume.earth",
    siteName: "GreenLume",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GreenLume App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenLume | Log Your Life. Save Your World.",
    description: "The award-winning sustainability tracker. Master 20+ daily habits and watch your impact grow from Seedling to Forest.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/Logo/GreenLume_Icon_Logo_Green__1_-removebg-preview.png",
    shortcut: "/Logo/GreenLume_Icon_Logo_Green__1_-removebg-preview.png",
    apple: "/Logo/GreenLume_Icon_Logo_Green__1_-removebg-preview.png",
  },
  metadataBase: new URL("https://greenlume.earth"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <ScrollProgress />
          <Preloader />
          <CustomCursor />
          <Noise />
          {children}
        </Providers>
      </body>
    </html>
  );
}
