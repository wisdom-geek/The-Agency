import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer/footer"
import ChatWidget from "@/components/Chats/chat-widget"
import NewsletterModal from "@/components/Newsletter/newsletter-modal"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Agency | Empowering Ideas, Engineering Innovation",
  description:
    "Full-service technology company offering full-stack development, product design, blockchain services, and startup pitching services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidget />
            <NewsletterModal />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
