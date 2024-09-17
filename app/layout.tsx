import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import PlausibleProvider from "next-plausible";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"] });

let title = "Data-Fusion – AI Search Engine";
let description =
  "Search smarter and faster with our open source AI search engine";
let url = "https://github.com/Ki55n/Data-Fusion";
let sitename = "Data-Fusion";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
        className={`${inter.className} flex min-h-screen bg-[rgb(229,234,235)] flex-col justify-between`}
      >
        {children}
      </body>
    </html>
  );
}
