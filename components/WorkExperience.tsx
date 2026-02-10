"use client"

import { useEffect, useRef } from "react"
import { portfolioData } from "@/lib/data"

const WorkExperience = () => {
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
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
       <div className="fade-in-element opacity-0 translate-y-10 mb-8 text-left">
            <h2 className="text-2xl md:text-3xl mb-4 dark:text-white">
            <span className="text-gray-500 dark:text-gray-500">Work</span>{" "}
            <span className="text-gray-900 dark:text-white font-normal">Exprience.</span>{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.workExperience.map((job, index) => (
            <div
              key={index}
              className="fade-in-element opacity-0 translate-y-10 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {job.company}
                </h3>
                <p className="text-lg font-semibold text-accent-600 dark:text-accent-400 mb-2">
                  {job.role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                  {job.period}
                </p>
              </div>

              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {job.description}
              </p>

              {job.responsibilities && (
                <ul className="space-y-2">
                  {job.responsibilities.map((resp: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-500 dark:text-accent-400 mt-1 flex-shrink-0 text-xs">●</span>
                      <span className="text-md text-gray-700 dark:text-gray-300 leading-relaxed">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience