import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import TheWayIWork from "@/components/TheWayIWork"
import WorkExperience from "@/components/WorkExperience"
import Projects from "@/components/Projects"
import Background from "@/components/Background"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />
      <Hero />
      <TheWayIWork />
      <WorkExperience />
      <Projects />
      <Background />
      <Education />
      <Contact />
    </main>
  )
}
