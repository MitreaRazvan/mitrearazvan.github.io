"use client"

import Image from "next/image"

interface CaseStudyProps {
  caseStudy: any;
  projectTitle: string;
}

export function FellowCaseStudy({ caseStudy, projectTitle }: CaseStudyProps) {
  return (
    <div className="bg-white dark:bg-black">
      
      {/* Hero Image */}
      <section className="w-full">
        <Image 
          src={caseStudy.heroImage} 
          alt={projectTitle}
          width={2500}
          height={1600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Title & Project Info */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            AI-Powered Creative Writing Assistant
          </h1>
          
          <div className="flex flex-wrap gap-8 text-base text-gray-600 dark:text-gray-400 mb-8">
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">Timeline:</span> {caseStudy.timeline}
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">Year:</span> 2024
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">Type:</span> Concept Project
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
              UI/UX Design
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
              AI Product
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
              Writing Tools
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
              Web App
            </span>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
FELLOW is an AI writing platform that helps writers beat creative blocks, build better characters and create stronger stories. It has specialized AI assistants for different parts of storytelling like character development and plot structure so writers at any level can actually finish their work          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            The Problem
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
writers struggle with a lot of stuff during the creative process
          </p>
          <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span><strong>Creative block and blank page syndrome</strong> - cant start or keep going</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span><strong>Character depth</strong> - making characters that feel real and complex
</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span><strong>Story structure</strong> - organizing multiple plot lines and keeping momentum</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span><strong>Consistency</strong> - remembering all the details in long projects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span><strong>Isolation</strong> -  writing alone without feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span><strong>Tool fragmentation</strong> - jumping between different apps for notes outlines characters and actual writing</span>
            </li>
          </ul>
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-xl">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              the opportunity was to build one platform where AI helps writers from start to finish with specialized tools for characters plot and story polish</p>
          </div>
        </div>
      </section>

      {/* Understanding the User - Persona */}
    {/* Understanding the User - Persona */}
<section className="max-w-6xl mx-auto px-6 mb-32">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
    Understanding the Users
  </h2>
  
  {caseStudy.process[0]?.image && (
    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
      <Image 
        src={caseStudy.process[0].image}
        alt="User Persona"
        width={1200}
        height={900}
        className="w-full h-auto"
      />
    </div>
  )}
</section>

      {/* Design Goals */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Design Goals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Seamless Onboarding
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              get writers creating in minutes not hours
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Specialized AI Assistants
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              purpose built tools for specific writing problems
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Flexible Workflow
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              works for planners and discovery writers both
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Deep Character Development
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              build psychologically complex characters
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Document Management
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              keep notes outlines and drafts all in one place
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Conversation-Based
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
natural chat with ai assistants            </p>
          </div>
        </div>
      </section>

 {/* The Solution */}
<section className="max-w-6xl mx-auto px-6 mb-32">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
    The Solution
  </h2>

  {/* Big Video Banner */}
  <div className="mb-16 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="w-full h-auto"
    >
      <source src="/projects/fellow/assistants.mp4" type="video/mp4" />
    </video>
  </div>

  {/* Solution Cards */}
  <div className="grid md:grid-cols-2 gap-6">
    {caseStudy.features.map((feature: any, index: number) => (
      <div key={index} className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {feature.title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</section>
      {/* Design Approach */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Design Approach
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Clean, Focused Interface
            </h3>
            <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
              <li>• Minimal distractions for deep work</li>
              <li>• Blue color scheme (calming, focused)</li>
              <li>• Generous white space</li>
              <li>• Clear visual hierarchy</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Conversation-First Design
            </h3>
            <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
              <li>• Chat as primary interaction</li>
              <li>• Natural language processing</li>
              <li>• AI feels like collaborator</li>
              <li>• Persistent chat history</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Modular Architecture
            </h3>
            <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
              <li>• Separate assistants for different tasks</li>
              <li>• Users select tools as needed</li>
              <li>• No forced workflow</li>
              <li>• Easy to add custom assistants</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Accessibility Focus
            </h3>
            <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
              <li>• High contrast text</li>
              <li>• Clear button labels</li>
              <li>• Keyboard shortcuts</li>
              <li>• Responsive design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      {caseStudy.process[1]?.image && (
        <section className="w-full mb-32 bg-gray-50 dark:bg-gray-950 py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
              Information Architecture
            </h2>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg bg-white">
              <Image 
                src={caseStudy.process[1].image}
                alt="Information Architecture"
                width={800}
                height={1200}
                className="w-full h-auto"
                quality={100}
              />
            </div>
          </div>
        </section>
      )}

      {/* Design Decisions */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Key Design Decisions
        </h2>
        <div className="space-y-8">
          {caseStudy.designDecisions.map((decision: any, index: number) => (
            <div key={index} className="border-l-4 border-blue-500 dark:border-blue-400 pl-6">
              <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {decision.question}
              </h4>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {decision.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact & Learnings */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Impact & Learnings
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Key Outcomes
            </h3>
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                <span>Created specialized AI assistants for different writing challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                <span>Designed conversation-based interface that feels natural and collaborative</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                <span>Built flexible system supporting multiple writing workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                <span>Established clear information hierarchy for complex projects</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              What I Learned
            </h3>
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 mt-1">→</span>
                <span>AI writing tools succeed when they enhance creativity, not replace it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 mt-1">→</span>
                <span>Writers need both structure and flexibility in their tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 mt-1">→</span>
                <span>Conversation interfaces require careful balance between guidance and freedom</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 mt-1">→</span>
                <span>Deep tools need simplified entry points to avoid overwhelming users</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {caseStudy.impact.metrics.map((metric: any, index: number) => (
            <div key={index} className="text-center p-8">
              <div className="text-5xl font-bold text-blue-500 dark:text-blue-400 mb-4">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </section>

{/* Final Showcase - Images Grid */}
<section className="w-full mb-32">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
      Final Designs
    </h2>
    <div className="grid grid-cols-1 gap-6">
      {Array.from({ length: 34 }, (_, i) => (
        <div key={i} className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          <img 
            src={`/projects/fellow/final-designs/${i}.png`}
            alt={`Fellow Screen ${i + 1}`}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}