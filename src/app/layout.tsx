import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esma Aydın - Biyomühendislik AI Aracı",
  description: "Esma Aydın için özel olarak tasarlanmış biyomühendislik yapay zeka aracı",
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
