"use client"
import { Geist, Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ConvexProvider , ConvexReactClient } from "convex/react";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@workspace/ui/lib/utils";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "")



if(!process.env.NEXT_PUBLIC_CONVEX_URL){
  throw new Error("messing provider")
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ClerkProvider>
          <ConvexProviderWithClerk useAuth={useAuth} client={convex} >
            {children}
          </ConvexProviderWithClerk>
        </ClerkProvider>
      </body>
    </html>
  )
}
