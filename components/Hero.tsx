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
  {/* Minimalist Pastel Grey Background */}
{/* Minimalist Pastel Background - More Visible */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900" />
  
  <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-200/50 dark:bg-gray-700/20 rounded-full blur-3xl animate-blob" />
  
  <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-200/50 dark:bg-gray-800/20 rounded-full blur-3xl animate-blob animation-delay-2s" />
  
  <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200/50 dark:bg-gray-700/15 rounded-full blur-3xl animate-blob animation-delay-4s" />
</div>
      
<div className="w-full h-full flex items-center justify-center">
  <div className="max-w-5xl mx-auto text-center relative z-10 py-20 mt-24">

    <p className="fade-in-element opacity-0 translate-y-10 text-2xl md:text-5xl lg:text-7xl font-light mb-12 text-balance max-w-7xl mx-auto">
      <span className="text-gray-500 dark:text-gray-500">Designing interfaces that</span>{" "}
      <span className="text-gray-900 dark:text-white font-normal">respect</span>{" "}
      <span className="text-gray-500 dark:text-gray-500">how</span>{" "}
      <span className="text-gray-900 dark:text-white font-normal">people</span>{" "}
      <span className="text-gray-500 dark:text-gray-500">think.</span>
    </p>
    
    <p className="fade-in-element opacity-0 translate-y-10 text-xl md:text-2xl lg:text-3xl font-light  text-gray-600 dark:text-gray-300 mb-8">
      {portfolioData.personal.title}
    </p>

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

    <div className="fade-in-element opacity-0 translate-y-10 mt-20 flex flex-col items-center gap-3">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-600 font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
    
  </div>
</div>
    </section>
  )
}

export default Hero