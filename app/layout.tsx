import "@/styles/globals.css";
import "@/styles/tailwindcss.css";

import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blockchain Explorer",
  description: "A blockchain explorer - Blockchain.com clone",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
