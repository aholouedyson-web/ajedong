import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AJED — Association Des Jeunes Étoiles de Demain",
  description:
    "L'AJED est une organisation à but non lucratif qui aspire à un monde de solidarité, en facilitant les échanges autour des activités socioculturelles, éducatives et sportives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
