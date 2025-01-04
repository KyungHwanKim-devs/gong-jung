import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./_components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: [""],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>

      <body
        className={(inter.className, `h-[100dvh] flex flex-col items-center `)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
