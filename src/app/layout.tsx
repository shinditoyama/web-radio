"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { useCallback, useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const handleSidebarOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-zinc-900 text-zinc-50">
        <Header open={open} handleOpen={handleSidebarOpen} />
        <div className="flex flex-1">
          <Sidebar open={open} />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
