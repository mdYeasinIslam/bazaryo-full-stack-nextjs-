import type { Metadata } from "next";

import Navbar from "@/components/shared/Navbar";


export const metadata: Metadata = {
  title: "Bazaryo",
  description: "A modern eCommerce platform for managing and selling products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className={` antialiased`}
      >
        {/* <Navbar /> */}
        {children}
      </main>
  );
}
