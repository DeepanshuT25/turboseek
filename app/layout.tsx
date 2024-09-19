import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import PlausibleProvider from "next-plausible";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"] });

let title = "Data-Fusion – AI Search Engine";
let description =
  "Analyse smarter and deeper with AI";
let url = "https://github.com/Ki55n/Data-Fusion";
let sitename = "Data-Fusion";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="Data-Fusion.io" />
      </head>
      <body
        className={`${inter.className} bg-slate-700 /* made at https://learnui.design/tools/gradient-generator.html */ justify-between`}
      >
        {children}
      </body>
    </html>
  );
}
