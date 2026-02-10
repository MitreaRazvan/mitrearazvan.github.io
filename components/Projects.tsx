"use client"

import { useEffect, useRef, useState } from "react"
import FlowingMenu from "@/components/ui/FlowingMenu"
import { portfolioData } from "@/lib/data"

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial dark mode
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      setIsDark(isDarkMode)
    }

    checkDarkMode()

    // Watch for changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-in-element")
      elements.forEach((el, index) => {
        (el as HTMLElement).style.transitionDelay = `${index * 100}ms`
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  const menuItems = portfolioData.projects.map(project => ({
    link: project.id === "archived" ? "/archived" : `/projects/${project.id}`,
    text: project.title,
    image: project.image
  }))

  const colors = {
    textColor: isDark ? '#f5f5f5' : '#1a1a1a',
    bgColor: isDark ? '#0a0a0a' : '#f5f5f5',
    marqueeBgColor: isDark ? '#f5f5f5' : '#1a1a1a',
    marqueeTextColor: isDark ? '#0a0a0a' : '#f5f5f5',
    borderColor: isDark ? '#2a2a2a' : '#e0e0e0'
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-10 mb-8 text-left">
          <h2 className="text-2xl md:text-3xl mb-4 dark:text-white">
            <span className="text-gray-500 dark:text-gray-500">Featured</span>{" "}
            <span className="text-gray-900 dark:text-white font-normal">Projects.</span>{" "}
          </h2>
        </div>

        <div className="fade-in-element opacity-0 translate-y-10 h-[600px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <FlowingMenu 
            items={menuItems}
            speed={15}
            textColor={colors.textColor}
            bgColor={colors.bgColor}
            marqueeBgColor={colors.marqueeBgColor}
            marqueeTextColor={colors.marqueeTextColor}
            borderColor={colors.borderColor}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects