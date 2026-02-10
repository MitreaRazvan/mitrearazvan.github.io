"use client"

import { useRouter } from "next/navigation"
import { portfolioData } from "@/lib/data"
import { notFound } from "next/navigation"
import { ProjectCaseStudy } from "./ProjectCaseStudy"
import { FellowCaseStudy } from "./FellowCaseStudy"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  const project = portfolioData.projects.find(p => p.id === params.id)
  
  if (!project) {
    notFound()
  }

  const currentIndex = portfolioData.projects.findIndex(p => p.id === params.id)
  const nextProject = portfolioData.projects[(currentIndex + 1) % portfolioData.projects.length]

  // Choose which component to use based on project ID
  const CaseStudyComponent = project.id === "fellow" ? FellowCaseStudy : ProjectCaseStudy

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors group"
            >
              <svg className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back</span>
            </button>

            <button
              onClick={() => router.push(`/projects/${nextProject.id}`)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors group"
            >
              <span className="font-medium">Next Project</span>
              <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-12 pb-16">
        <CaseStudyComponent caseStudy={project.caseStudy} projectTitle={project.title} />
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}