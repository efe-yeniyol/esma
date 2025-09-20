import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esma Aydın - Biyomühendislik AI Aracı",
  description: "Esma Aydın için özel olarak tasarlanmış biyomühendislik yapay zeka aracı. Protein analizi, genetik veri işleme ve biyomühendislik projeleri için AI destekli platform.",
  keywords: "biyomühendislik, yapay zeka, protein analizi, genetik veri, AI, Esma Aydın, biyomühendislik araçları",
  authors: [{ name: "Esma Aydın" }],
  creator: "Esma Aydın",
  publisher: "Esma Aydın",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://esma-ai.vercel.app",
    title: "Esma Aydın - Biyomühendislik AI Aracı",
    description: "Biyomühendislik yapay zeka aracı ile protein analizi ve genetik veri işleme",
    siteName: "Esma Aydın AI Platform",
    images: [
      {
        url: "/assets/1.png",
        width: 1200,
        height: 630,
        alt: "Esma Aydın Biyomühendislik AI Aracı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esma Aydın - Biyomühendislik AI Aracı",
    description: "Biyomühendislik yapay zeka aracı ile protein analizi ve genetik veri işleme",
    images: ["/assets/1.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#3D1C56",
  colorScheme: "dark",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
