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
  title: "ARZ Web Concept",
  description:
    "Bienvenue sur ARZ Web Concept, votre partenaire expert en développement web. Nous créons des sites internet modernes, performants et adaptés à vos besoins, tout en offrant des solutions personnalisées pour booster votre présence en ligne. Découvrez nos services en création de sites vitrine, e-commerce, applications web et SEO. Contactez-nous pour donner vie à vos projets numériques !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
