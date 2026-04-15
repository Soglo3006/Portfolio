import type React from "react"
import type { Metadata } from "next"
import { Inter, Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes"
import Header from "@/components/header"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Alexandre Booh Louha — Full-Stack Developer & Co-founder",
  description:
    "Full-Stack Developer and Co-founder & CTO at Uneden. Building tools that bridge the gap between an idea and a working product.",
  keywords: ["Alexandre Booh Louha", "Full-Stack Developer", "CTO", "Uneden", "Next.js", "TypeScript"],
  authors: [{ name: "Alexandre Booh Louha" }],
  creator: "Alexandre Booh Louha",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${interTight.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
