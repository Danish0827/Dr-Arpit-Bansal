import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NewHeader from "@/components/Layout/NewHeader";
import Announcement from "@/components/Layout/Announcement";
import Footer from "@/components/Layout/Footer";
import FloatingAppointment from "@/components/Layout/FloatingAppointment";
import FloatingButton from "@/components/Layout/FloatingButton";
import abouts from "@/assets/images/breadcrump/2.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
  keywords:
    "MBBS, MS, FMAS, FCS, laparoscopic surgery, male infertility, onco surgeon",

  // SEO meta tags
  authors: [{ name: "Dr. Arpit Bansal", url: "https://www.drapitbansal.com" }],
  robots: "index, follow", // To allow search engine crawling and indexing
  publisher: "Dr. Arpit Bansal's Clinic",

  // Canonical URL (change it to your actual URL)
  alternates: {
    canonical: "https://www.drapitbansal.com/about",
  },

  // Open Graph meta tags
  openGraph: {
    type: "website",
    url: "https://www.drapitbansal.com/about",
    title: "About | Dr. Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS, is a renowned Advanced Laparoscopic & Onco Surgeon and Male Infertility Consultant.",
    images: [
      {
        url: abouts.src,
        width: 1200,
        height: 630,
        alt: "About Dr. Arpit Bansal - Laparoscopic & Onco Surgeon",
      },
    ],
  },

  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    site: "@DrArpitBansal",
    title: "About | Dr. Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS, is a renowned Advanced Laparoscopic & Onco Surgeon and Male Infertility Consultant.",
    images: [abouts.src],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Announcement />
        <NewHeader />
        {children}
        <FloatingAppointment />
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
