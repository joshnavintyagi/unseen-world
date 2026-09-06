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
  metadataBase: new URL("https://unseenworldtravel.com"),

  title: {
    default: "Unseen World | Chauffeur, Airport Transfers & Luxury Travel",
    template: "%s | Unseen World",
  },

  description:
    "Premium airport transfers, private chauffeur services, tours, experiences and worldwide travel planning with Unseen World.",

  keywords: [
    "Unseen World",
    "airport transfers",
    "airport chauffeur",
    "chauffeur service",
    "private chauffeur",
    "luxury travel",
    "private tours",
    "tours and experiences",
    "worldwide travel",
    "custom journeys",
    "UK airport transfers",
  ],

  openGraph: {
    title: "Unseen World | Travel Beyond the Ordinary",
    description:
      "Airport transfers, private chauffeur services, tours, experiences and worldwide travel — thoughtfully arranged by Unseen World.",
    url: "https://unseenworldtravel.com",
    siteName: "Unseen World",
    type: "website",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "Unseen World | Travel Beyond the Ordinary",
    description:
      "Airport transfers, private chauffeur services, tours, experiences and worldwide travel.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
