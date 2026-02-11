import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "./context/ThemeContext"

export const metadata: Metadata = {
  title: "Mitrea Andrei Razvan - UI/UX Designer Portfolio",
  description: "Quiet UI for loud ideas. UI/UX Designer with 3+ years experience creating meaningful digital experiences.",
  keywords: ["UI Designer", "UX Designer", "Portfolio", "Web Design", "User Experience"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
