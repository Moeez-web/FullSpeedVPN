import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from 'react-hot-toast';
import Header from "@/components/Website/component/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VPN App",
  description: "VPN hight speed",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#170551] from-10% via-[#2B09C0]/15  to-[#020229] to-90%"
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
          {/* <Header /> */}
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
