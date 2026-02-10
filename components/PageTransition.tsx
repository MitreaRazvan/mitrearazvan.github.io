"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    setTransitionStage("fadeOut")
  }, [pathname])

  useEffect(() => {
    if (transitionStage === "fadeOut") {
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage("fadeIn")
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [transitionStage, children])

  return (
    <div
      className={`transition-opacity duration-300 ${
        transitionStage === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
    >
      {displayChildren}
    </div>
  )
}
