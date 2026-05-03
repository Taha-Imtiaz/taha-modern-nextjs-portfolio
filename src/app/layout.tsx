import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingCircles from "@/components/FloatingCircles";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taha Imtiaz - Software Engineer",
  description: "Innovative Software Engineer specializing in React Native, fintech applications, and payment gateway integrations. 5+ years of experience in mobile and web development.",
  keywords: ["Software Engineer", "React Native", "Fintech", "Mobile Development", "Taha Imtiaz", "Karachi"],
  authors: [{ name: "Taha Imtiaz" }],
  openGraph: {
    title: "Taha Imtiaz - Software Engineer",
    description: "Innovative Software Engineer specializing in React Native and fintech applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark', backgroundColor: '#0a0a0a' }}
    >
      <body
        className="min-h-full flex flex-col text-white relative"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div className="fixed inset-0 z-15 pointer-events-none" style={{ contain: 'strict' }}>
          <FloatingCircles />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
