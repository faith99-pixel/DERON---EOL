import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Deron & Eol Law Practice | Corporate · Real Estate · Litigation",
  description:
    "Deron & Eol Law Practice is a full-service law firm in Ibadan, Nigeria, advising on Corporate & Commercial, Real Estate, Governance, Risk & Compliance, Public Policy and Litigation. Founded by Ikeoluwa Adare.",
  keywords: [
    "Deron & Eol Law Practice",
    "law firm Ibadan",
    "corporate law Nigeria",
    "real estate law Nigeria",
    "litigation Ibadan",
    "Ikeoluwa Adare",
    "governance risk compliance",
    "public policy Nigeria",
  ],
  authors: [{ name: "Deron & Eol Law Practice" }],
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    title: "Deron & Eol Law Practice",
    description:
      "A full-service law firm in Ibadan, Nigeria — depth of experience across Corporate, Real Estate, Governance, Public Policy and Litigation.",
    siteName: "Deron & Eol Law Practice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deron & Eol Law Practice",
    description:
      "A full-service law firm in Ibadan, Nigeria — depth of experience across Corporate, Real Estate, Governance, Public Policy and Litigation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
