"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { portfolioData } from "@/lib/data"
import DarkModeToggle from "@/components/DarkModeToggle"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ["hero", "work", "experience", "projects", "background", "education"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  }

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Work", id: "work" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
        {/* Logo */}
<button
  onClick={() => scrollToSection("hero")}
  className="flex items-center hover:opacity-80 transition-opacity"
>
  {/* Dark logo for light mode */}
  <img loading="lazy"
    src="/logos/logoDark.svg" 
    alt="Logo" 
    className="h-8 w-auto dark:hidden"
  />
  {/* White logo for dark mode */}
  <img loading="lazy"
    src="/logos/logoWhite.svg" 
    alt="Logo" 
    className="h-8 w-auto hidden dark:block"
  />
</button>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    activeSection === link.id 
                      ? "text-accent-400 dark:text-accent-400" 
                      : "text-gray-600 dark:text-gray-300 hover:text-accent-400 dark:hover:text-accent-400"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-300 dark:bg-accent-500 transition-all duration-300 group-hover:w-full",
                      activeSection === link.id && "w-full"
                    )}
                  />
                </button>
              ))}
            </div>
            
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
