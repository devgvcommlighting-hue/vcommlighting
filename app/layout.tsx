// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootLayoutProvider from "@/components/RootLayoutProvider"; // ใช้ @/ ตาม tsconfig.json

import { ThemeProvider } from '@/components/ThemeProvider'; // Import ThemeProvider

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "VCOMMLIGHTING",
    description: "Ecological for the Future",
};

// *** FIX 1: สร้าง String ของ Font Class Name ที่สมบูรณ์ ***
const fontClasses = `${geistSans.variable} ${geistMono.variable}`;
// ******************************************************

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* FIX 2: ส่ง Class Name ลงไปใน Provider 
        แต่เราจะกำหนด Class Name ที่ body ใน Provider แทน
      */}
            <body className="antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark" // Default to dark
                    enableSystem={false} // Manual toggle only
                    disableTransitionOnChange
                >
                    <RootLayoutProvider fontClasses={fontClasses}>
                        {children}
                    </RootLayoutProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}