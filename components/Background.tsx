"use client"

import { useEffect, useRef } from "react"
import { portfolioData } from "@/lib/data"

const Background = () => {
  const sectionRef = useRef<HTMLElement>(null)

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
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="background"
      ref={sectionRef}
      className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950 dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-10 mb-8 text-left">
          <h2 className="text-2xl md:text-3xl mb-4 dark:text-white">
            <span className="text-gray-500 dark:text-gray-500">My</span>{" "}
            <span className="text-gray-900 dark:text-white font-normal">Journey.</span>{" "}
          </h2>
        </div>

        <div className="fade-in-element opacity-0 translate-y-10">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {portfolioData.background.content}
            </p>
          </div>

          {/* Skills - Compact inline */}
          <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {portfolioData.skills.categories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-s uppercase tracking-wider text-gray-500 dark:text-gray-500 font-light mb-2">
                    {category.name}
                  </h4>
                  <p className="text-md text-gray-700 dark:text-gray-400">
                    {category.tools.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Background