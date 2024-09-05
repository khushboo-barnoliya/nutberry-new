import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutberry",
  description: "A rich cashew company that provides the best quality cashews. Established at Ajmer, Rajasthan, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
