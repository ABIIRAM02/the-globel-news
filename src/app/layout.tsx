import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Globel News",
  description: "developed by king abii",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
      <Provider>

          <Header />
          <main className="max-w-6xl mx-auto">{children}</main>
      </Provider>
        </body>
    </html>
  );
}
