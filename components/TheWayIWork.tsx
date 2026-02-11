"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { portfolioData } from "@/lib/data"

const TheWayIWork = () => {
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
        (el as HTMLElement).style.transitionDelay = `${index * 150}ms`
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950 dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-10 mb-16 text-left">
            <h2 className="text-2xl md:text-3xl mb-4 dark:text-white">
            <span className="text-gray-500 dark:text-gray-500">My Way</span>{" "}
            <span className="text-gray-900 dark:text-white font-normal">of Working.</span>{" "}
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.theWayIWork.map((item, index) => (
            <div
              key={index}
              className="fade-in-element opacity-0 translate-y-10"
            >
              <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-black group">
                <CardHeader>
                  
                  <CardTitle className="text-2xl font-bold group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors dark:text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheWayIWork
