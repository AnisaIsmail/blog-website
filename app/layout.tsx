import { Inter } from "next/font/google"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { ThemeProvider } from "@/app/components/ThemeProvider"
import { Toaster } from "@/app/components/ui/Toaster"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Modern Blog Website",
  description: "A modern blog website built with Next.js and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

