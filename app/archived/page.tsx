"use client"

import { useRouter } from "next/navigation"
import { portfolioData } from "@/lib/data"

const archivedProjects = [
  {
    id: 1,
    title: "Coreman.",
    date: "Date - 2019",
    why: "First Figma Project - The project was made as comission on Fiverr for a client.",
    description: "CRM system created specifically for the construction management.",
    images: [
      "/projects/archived/project1-1.png",
      "/projects/archived/project1-2.png"
    ],
    video: "/projects/archived/project1.mp4"
  },
  {
    id: 2,
    title: "Kurzena",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project2-1.png"
    ],
    video: "/projects/archived/project2.mp4"
  },
  {
    id: 3,
    title: "TwinOne",
    date: "date - 2021",
    why: "Costumer profile page - commissioned by a client on Fiverr",
    description: "Work on Fiverr",
    images: [
      "/projects/archived/project3-1.jpg"
    ],
    video: "/projects/archived/project3.mp4"
  },
  {
    id: 4,
    title: "Infodatalimited",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project4-1.png"
    ],
    video: "/projects/archived/project4.mp4"
  },
  {
    id: 5,
    title: "Impresan-Solutions",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project5-1.png"
    ],
    video: "/projects/archived/project5.mp4"
  },
  {
    id: 6,
    title: "Martikust",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project6-1.png"
    ],
    video: "/projects/archived/project6.mp4"
  },
  {
    id: 7,
    title: "Priak-Consulting",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project7-1.png"
    ],
    video: "/projects/archived/project7.mp4"
  },
  {
    id: 8,
    title: "Single-Hub",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project8-1.png"
    ],
    video: "/projects/archived/project8.mp4"
  },
  {
    id: 9,
    title: "Eosmkt",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project9-1.png"
    ],
  },
  {
    id: 10,
    title: "Adslumina",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project10-1.png"
    ],
  },
  {
    id: 11,
    title: "Transatlantic - Solutions",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project11-1.png"
    ],
  },
  {
    id: 12,
    title: "Paschanger",
    date: "date - 2021",
    why: "Digital Marketing affilate webiste",
    description: "Work for ClearSkyNetwork - Created in wordpress, the project was a digital marketing affilate website for a client.",
    images: [
      "/projects/archived/project12-1.png"
    ],
  },
  {
    id: 13,
    title: "Photobee",
    date: "date - 2020",
    why: "Fiver project - Photo sharing App ",
    description: "Work on Fiverr - Client Commission - Made in Wordpress",
    images: [
      "/projects/archived/project13-1.png"
    ],
  },
  {
    id: 14,
    title: "BTS",
    date: "date - 2021",
    why: "Fiverr project -BTS Band Album Presentation Website",
    description: "The client wanted a site through which to present the albums of the band BTS. - Made in Wordpress",
    images: [
      "/projects/archived/project14-1.png"
    ],
  },
  {
    id: 15,
    title: "Chop + Swipe",
    date: "date - 2021",
    why: "Fiverr project - Kickstarter program product presentation landing page",
    description: "Work on Fiverr - Client Commission - Made in Wordpress",
    images: [
      "/projects/archived/project15-1.png"
    ],
  },
  {
    id: 16,
    title: "PW Browining",
    date: "date - 2019",
    why: "Fiverr project - PW Browining Writer Website",
    description: "Work on Fiverr - Client Commission - Made in Wordpress",
    images: [
      "/projects/archived/project16-1.png"
    ],
  }
]

export default function ArchivedPage() {
  const router = useRouter()

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
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Archived Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
A collection of past works created using WordPress, Figma, and code (2019–2021)          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="space-y-32">
          {archivedProjects.map((project) => (
            <div key={project.id} className="border-b border-gray-200 dark:border-gray-800 pb-24 last:border-b-0">
              
              {/* Project Header */}
              <div className="mb-12">
                <div className="flex items-baseline gap-4 mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <span className="text-lg text-gray-500 dark:text-gray-500">
                    {project.date}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Why: </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{project.why}</span>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project 1: Video + 2 Images (stacked) */}
              {project.id === 1 ? (
                <>
                  {/* Video */}
                  {project.video && (
                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm mb-8 h-fit">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-auto object-cover"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                  )}

                  {/* 2 Images in grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.map((img, i) => (
                      <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm h-fit">
                        <img 
                          src={img}
                          alt={`${project.title} - Image ${i + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : project.id >= 9 && project.id <= 17 ? (
                /* Projects 9-17: Only 1 image (full width) */
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm h-fit">
                  <img 
                    src={project.images[0]}
                    alt={`${project.title} - Image`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                /* Projects 2-8: Video + Image side by side */
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Video */}
                  {project.video && (
                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm h-fit">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-auto object-cover"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                  )}

                  {/* 1 Image */}
                  {project.images[0] && (
                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm h-fit">
                      <img 
                        src={project.images[0]}
                        alt={`${project.title} - Image`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}