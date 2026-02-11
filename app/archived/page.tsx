"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { portfolioData } from "@/lib/data"

const archivedProjects = [
  {
    id: 1,
    title: "Coreman.",
    date: "2019",
    why: "First Figma Project - The project was made as comission on Fiverr for a client.",
    description: "CRM system created specifically for the construction management.",
    thumbnail: "/projects/archived/project1-1.png",
    images: [
      "/projects/archived/project1-1.png",
      "/projects/archived/project1-2.png"
    ],
    video: "/projects/archived/project1.mp4"
  },
  {
    id: 2,
    title: "Kurzena",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project2-1.png",
    images: ["/projects/archived/project2-1.png"],
    video: "/projects/archived/project2.mp4"
  },
  {
    id: 3,
    title: "TwinOne",
    date: "2021",
    why: "Costumer profile page - commissioned by a client on Fiverr",
    description: "Work on Fiverr",
    thumbnail: "/projects/archived/project3-1.jpg",
    images: ["/projects/archived/project3-1.jpg"],
    video: "/projects/archived/project3.mp4"
  },
  {
    id: 4,
    title: "Infodatalimited",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project4-1.png",
    images: ["/projects/archived/project4-1.png"],
    video: "/projects/archived/project4.mp4"
  },
  {
    id: 5,
    title: "Impresan-Solutions",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project5-1.png",
    images: ["/projects/archived/project5-1.png"],
    video: "/projects/archived/project5.mp4"
  },
  {
    id: 6,
    title: "Martikust",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project6-1.png",
    images: ["/projects/archived/project6-1.png"],
    video: "/projects/archived/project6.mp4"
  },
  {
    id: 7,
    title: "Priak-Consulting",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project7-1.png",
    images: ["/projects/archived/project7-1.png"],
    video: "/projects/archived/project7.mp4"
  },
  {
    id: 8,
    title: "Single-Hub",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project8-1.png",
    images: ["/projects/archived/project8-1.png"],
    video: "/projects/archived/project8.mp4"
  },
  {
    id: 9,
    title: "Eosmkt",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project9-1.png",
    images: ["/projects/archived/project9-1.png"],
  },
  {
    id: 10,
    title: "Adslumina",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project10-1.png",
    images: ["/projects/archived/project10-1.png"],
  },
  {
    id: 11,
    title: "Transatlantic - Solutions",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project11-1.png",
    images: ["/projects/archived/project11-1.png"],
  },
  {
    id: 12,
    title: "Paschanger",
    date: "2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    thumbnail: "/projects/archived/project12-1.png",
    images: ["/projects/archived/project12-1.png"],
  },
  {
    id: 13,
    title: "Photobee",
    date: "2020",
    why: "Fiver Project - Photo sharing app",
    description: "Work on Fiverr - Client Commission - Made in Wordpress",
    thumbnail: "/projects/archived/project13-1.png",
    images: ["/projects/archived/project13-1.png"],
  },
  {
    id: 14,
    title: "BTS",
    date: "2021",
    why: "fiver project - BTS fan page",
    description: "Work on Fiverr - Client Commission - Made in Wordpress",
    thumbnail: "/projects/archived/project14-1.png",
    images: ["/projects/archived/project14-1.png"],
  },
  {
    id: 15,
    title: "Chop + Swipe",
    date: "2021",
    why: "Fiverr project - Kickstarter program product presentation landing page",
    description: "Work on Fiverr - Client Commission - Made in Wordpress",
    thumbnail: "/projects/archived/project15-1.png",
    images: ["/projects/archived/project15-1.png"],
  },
  {
    id: 16,
    title: "PW Browining",
    date: "2019",
    why: "Fiverr project - PW Browining Writer Website",
    description: "Work on Fiverr - Client Commission - Made in Wordpress",
    thumbnail: "/projects/archived/project16-1.png",
    images: ["/projects/archived/project16-1.png"],
  },
]

export default function ArchivedPage() {
  const router = useRouter()
  const [selectedProject, setSelectedProject] = useState<typeof archivedProjects[0] | null>(null)

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      
      {/* Navigation Bar */}
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Archived Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A collection of past explorations and learning experiments
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archivedProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-accent-300 dark:hover:border-accent-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Thumbnail - Lazy loaded */}
              <img 
                src={project.thumbnail} 
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.date}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal - Only loads when opened */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-accent-300 dark:hover:bg-accent-600 flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto max-h-[90vh] p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
                  {selectedProject.date}
                </p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Why: </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{selectedProject.why}</span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Media */}
              <div className="space-y-6">
                {/* Video - Height constrained (for projects 2+) */}
                {selectedProject.video && (
                  <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <video
                    preload="metadata"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className={`w-full ${selectedProject.id === 1 ? 'h-auto' : 'max-h-[50vh] object-contain bg-gray-50 dark:bg-gray-800'}`}
                    >
                      <source src={selectedProject.video} type="video/mp4" />
                    </video>
                  </div>
                )}

                {/* Images - Lazy loaded */}
                <div className={`grid gap-6 ${selectedProject.images.length > 1 ? 'md:grid-cols-2' : ''}`}>
                  {selectedProject.images.map((img, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                      <img 
                        src={img}
                        alt={`${selectedProject.title} - Image ${i + 1}`}
                        loading="lazy"
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}