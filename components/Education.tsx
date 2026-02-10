"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { portfolioData } from "@/lib/data"

const Education = () => {
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
      elements.forEach((el, index) => {
        (el as HTMLElement).style.transitionDelay = `${index * 100}ms`
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300"
    >
     <div className="max-w-6xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-10 mb-8 text-left">
            <h2 className="text-2xl md:text-3xl mb-4 dark:text-white">
            <span className="text-gray-900 dark:text-gray-500">Education</span>{" "}
            <span className="text-gray-500 dark:text-white font-normal">& Language.</span>{" "}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in-element opacity-0 translate-y-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <Card 
                  key={index}
                  className="border border-gray-200 dark:border-gray-900 hover:border-accent-300 dark:hover:border-accent-500 transition-all duration-300 hover:shadow-md dark:bg-black"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-800 dark:text-white">
                      {edu.institution}
                    </CardTitle>
                    <p className="text-base text-gray-700 dark:text-gray-300 mt-2">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                      {edu.period}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="fade-in-element opacity-0 translate-y-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            </h3>
            <div className="space-y-6">
              {portfolioData.languages.map((lang, index) => (
                <Card 
                  key={index}
                  className="border border-gray-200 dark:border-gray-900 hover:border-accent-300 dark:hover:border-accent-500 transition-all duration-300 hover:shadow-md dark:bg-black"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-gray-800 dark:text-white">
                          {lang.language}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {lang.proficiency}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-accent-500 dark:text-accent-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
