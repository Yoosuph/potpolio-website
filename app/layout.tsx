import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yusuf L Noah - Cybersecurity & Development Expert",
  description:
    "Senior IT Professional specializing in cybersecurity, full-stack development, and Web3 technologies. Building secure digital solutions for the future.",
  keywords: ["cybersecurity", "full-stack development", "web3", "blockchain", "security consultant", "devops"],
  authors: [{ name: "Yusuf L Noah" }],
  creator: "Yusuf L Noah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yusufnoah.dev",
    title: "Yusuf L Noah - Cybersecurity & Development Expert",
    description: "Senior IT Professional specializing in cybersecurity, full-stack development, and Web3 technologies.",
    siteName: "Yusuf L Noah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf L Noah - Cybersecurity & Development Expert",
    description: "Senior IT Professional specializing in cybersecurity, full-stack development, and Web3 technologies.",
    creator: "@yusufnoah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
