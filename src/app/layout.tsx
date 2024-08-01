import { ReactNode } from 'react';
import { Inter } from "next/font/google";
import { Archivo } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "ChefItUp",
  description: "meal plans for people with dietary restrictions ",
  image: "/groceries.jpeg", 
  url: "https://mealprep-chef.vercel.app/",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children}: Readonly<{children: React.ReactNode}>) 
  {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={archivo.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
