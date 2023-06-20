"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ReactNode, useCallback, useState } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleSidebarOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-zinc-900 text-zinc-50">
        <Header open={open} handleOpen={handleSidebarOpen} />
        <div className="flex flex-1">
          <div className="fixed inset-0 z-[-1] opacity-20 bg-background-image bg-cover bg-center bg-no-repeat" />
          <Sidebar open={open} />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
