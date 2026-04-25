import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenScore | Log Your Life. Save Your World.",
  description: "The award-winning sustainability tracker. Master 20+ daily habits and watch your impact grow from Seedling to Forest.",
  openGraph: {
    title: "GreenScore | Log Your Life. Save Your World.",
    description: "The award-winning sustainability tracker. Master 20+ daily habits and watch your impact grow from Seedling to Forest.",
    url: "https://greenscore.earth",
    siteName: "GreenScore",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GreenScore App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenScore | Log Your Life. Save Your World.",
    description: "The award-winning sustainability tracker. Master 20+ daily habits and watch your impact grow from Seedling to Forest.",
    images: ["/og-image.jpg"],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
