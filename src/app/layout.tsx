import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Providers } from "@/redux/Providers";
import ToggleBtn from "./components/ToggleBtn";


export const metadata: Metadata = {
  title: "ToDo App",
  description: "A simple ToDo app built with Next.js, TypeScript and Redux Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
      >
        <Providers>
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-100 shadow-md">
          <div className="text-lg font-bold">ToDo App</div>
          <div className="flex gap-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/addToDo" className="hover:underline">Add ToDo</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
          <ToggleBtn/>
        </nav>
        
          {children}
        </Providers>
      </body>
    </html>
  );
}
