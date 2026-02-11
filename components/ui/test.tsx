"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/data"
import {Plasma} from "@/components/ui/plasma"

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    
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

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".fade-in-element")
      elements.forEach((el, index) => {
        (el as HTMLElement).style.transitionDelay = `${index * 150}ms`
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-black px-6 transition-colors duration-300"
    >
      {/* Plasma Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <Plasma 
          color="#D0BCFF"
          speed={0.5}
          direction="forward"
          scale={1.2}
          opacity={0.6}
          mouseInteractive={true}
        />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* <div className="fade-in-element opacity-0 translate-y-10 mb-8 inline-block">
          <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/20 text-accent-800 dark:text-accent-300 rounded-full text-sm font-medium border border-accent-200 dark:border-accent-800">
            {portfolioData.personal.experience}
          </span>
        </div> */}

        <h1 className="fade-in-element opacity-0 translate-y-10 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance text-gray-900 dark:text-white">
          {portfolioData.personal.name}
        </h1>

        <p className="fade-in-element opacity-0 translate-y-10 text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4">
          {portfolioData.personal.title}
        </p>

       
        <h1 className="fade-in-element opacity-0 translate-y-10 text-5xl md:text-5xl lg:text-6xl mb-8 text-balance max-w-7xl mx-auto">
  <span className="text-gray-500 dark:text-gray-500">Designing interfaces that</span>{" "}
  <span className="text-gray-900 dark:text-white font-normal">respect</span>{" "}
  <span className="text-gray-500 dark:text-gray-500">how</span>{" "}
  <span className="text-gray-900 dark:text-white font-normal">people</span>{" "}
  <span className="text-gray-500 dark:text-gray-500">think.</span>
</h1>

        <div className="fade-in-element opacity-0 translate-y-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg"
            onClick={scrollToContact}
            className="text-base font-medium px-8 py-6 bg-accent-300 hover:bg-accent-400 dark:bg-accent-600 dark:hover:bg-accent-500 text-gray-900 dark:text-white transition-all duration-300"
          >
            Get in touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const element = document.getElementById("projects")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-base font-medium px-8 py-6 border-2 hover:border-accent-300 dark:border-gray-700 dark:hover:border-accent-500 dark:text-white"
          >
            View my work
          </Button>
        </div>

        <div className="fade-in-element opacity-0 translate-y-10 mt-16 flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-accent-400 dark:text-accent-500 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7 7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero