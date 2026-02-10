"use client"

import Image from "next/image"

interface CaseStudyProps {
  caseStudy: any;
  projectTitle: string;
}

export function ProjectCaseStudy({ caseStudy, projectTitle }: CaseStudyProps) {
  return (
    <div className="bg-white dark:bg-black">
      
      {/* Hero Image - Full Width at Top */}
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"> Generali Insurance App
          </h1>
          
          <div className="flex flex-wrap gap-8 text-base text-gray-600 dark:text-gray-400 mb-8">
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">Timeline:</span> 4 weeks
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">Year:</span> 2023
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">Type:</span> Concept Project
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">Tools:</span> Fimga, Material Design
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Context
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Generali is a leading italian insurance company but their digital experience was creating barriers for users trying to access basic services like checking pension info or buying insurance.\nThis concept reimagines their mobile presence with accessibility and efficiency at its core.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            The Problem
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
generalis existing web platform created significant friction for users
          </p>
          <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
              <span>difficult navigation through insurance products and pension information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
              <span>inaccessible experience requiring technical knowledge to complete simple tasks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
              <span>complex terminology that confused rather than informed users</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
              <span>broken core features like password reset making the platform unreliable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
              <span>no mobile first solution for users who needed quick access on the go</span>
            </li>
          </ul>
          <div className="mt-8 p-6 bg-accent-50 dark:bg-accent-950/20 border-l-4 border-accent-400 dark:border-accent-500 rounded-r-xl">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              the opportunity was to create a mobile app that enables anyone from digital natives to retirees to manage their insurance in under 2 minutes
            </p>
          </div>
        </div>
      </section>


{/* Understanding the User - Persona Image */}
<section className="max-w-6xl mx-auto px-6 mb-32">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
    Understanding the User
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
              Universal Accessibility
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              design for users aged 25 to 65 plus with varying tech literacy
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Speed & Efficiency
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              enable insurance purchase in under 2 minutes
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Clear Information Hierarchy
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              simplify complex insurance terminology
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Trust & Reliability
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
             create a platform users can depend on
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
              Mobile-First Experience
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400">
              optimize for on the go access
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          The Solution
        </h2>
        <div className="space-y-12">
         <div className="grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
      1. Streamlined Onboarding
    </h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
smooth multi step registration that collects essential info like id number security details contact info without overwhelming users. clear progress indicators show how far along they are. users can activate biometric authentication during signup for quick secure access in future logins

    </p>
  </div>
<div className="flex justify-center">
  <div className="relative w-[320px] mx-auto">
    {/* Video - scaled down to fit inside frame */}
    <div className="absolute inset-0 flex items-center justify-center p-[18px]">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-auto rounded-[2.8rem]"
      >
        <source src="/projects/generali/boarding.mov" type="video/mp4" />
      </video>
    </div>
    
    {/* iPhone Frame on top */}
    <img 
      src="/projects/generali/frame.png" 
      alt="" 
      className="relative z-10 w-full h-auto pointer-events-none"
    />
  </div>
</div>
</div>


         <div className="grid md:grid-cols-2 gap-12 items-center">
  <div className="md:order-2">
    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
      2. Intuitive Dashboard
    </h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
     clean card based interface highlighting active policies with clear status indicators and quick actions. users see what matters most at a glance
    </p>
  </div>
  <div className="md:order-1 flex justify-center">
    <div className="relative w-[320px]">
      <div className="absolute inset-0 flex items-center justify-center p-[18px]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto rounded-[2.8rem]"
        >
          <source src="/projects/generali/dashboard.mp4" type="video/mp4" />
        </video>
      </div>
      <img 
        src="/projects/generali/frame.png" 
        alt="" 
        className="relative z-10 w-full h-auto pointer-events-none"
      />
    </div>
  </div>
</div>

         <div className="grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
      3. Smart Insurance Categories
    </h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
     visual cards with recognizable imagery help users quickly identify insurance types like life travel health auto without reading fine print
    </p>
  </div>
  <div className="flex justify-center">
    <div className="relative w-[320px]">
      <div className="absolute inset-0 flex items-center justify-center p-[18px]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto rounded-[2.8rem]"
        >
          <source src="/projects/generali/insurance.mov" type="video/mp4" />
        </video>
      </div>
      <img 
        src="/projects/generali/frame.png" 
        alt="" 
        className="relative z-10 w-full h-auto pointer-events-none"
      />
    </div>
  </div>
</div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
  <div className="md:order-2">
    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
      4. Quick Purchase Flow
    </h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      simplified insurance purchase with pre filled information and minimal steps. travel insurance can be purchased in under 2 minutes
    </p>
  </div>
  <div className="md:order-1 flex justify-center">
    <div className="relative w-[320px]">
      <div className="absolute inset-0 flex items-center justify-center p-[18px]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto rounded-[2.8rem]"
        >
          <source src="/projects/generali/purchase.mov" type="video/mp4" />
        </video>
      </div>
      <img 
        src="/projects/generali/frame.png" 
        alt="" 
        className="relative z-10 w-full h-auto pointer-events-none"
      />
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Design Approach */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Design Approach
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Accessibility First
            </h3>
            <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
              <li>• high contrast color scheme</li>
              <li>•large touch targets 48x48dp</li>
              <li>• clear typography hierarchy</li>
              <li>• simplified language</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Design System
            </h3>
            <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
              <li>• material Design 3 foundation</li>
              <li>• custom card components</li>
              <li>• consistent spacing</li>
              <li>• WCAG AA compliant colors</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Information Architecture
            </h3>
            <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
              <li>• bottom navigation</li>
              <li>• progressive disclosure</li>
              <li>• search functionality</li>
              <li>• clear hierarchy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Information Architecture Image */}
     {/* Information Architecture - Sitemap */}
{/* Information Architecture - Sitemap */}
<section className="w-full mb-32 bg-gray-50 dark:bg-gray-950 py-24">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
      Information Architecture
    </h2>
    
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg bg-white">
      <Image 
        src="/projects/generali/sitemap.png"
        alt="Information Architecture Sitemap"
        width={533}
        height={1562}
        className="w-full h-auto"
        quality={100}
      />
    </div>
  </div>
</section>
      {/* Key Screens */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Key Screens
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Onboarding & Authentication
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>welcome screen with clear value proposition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>step by step account activation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>biometric authentication option</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>functional password reset</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Insurance Marketplace
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>visual category cards with imagery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>search and filter by type</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>detailed product pages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>quick purchase flow</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Portfolio Management
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>active policies overview</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>pension tracking with timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>document access and download</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 dark:text-accent-400 mt-1">•</span>
                <span>policy update notifications</span>
              </li>
            </ul>
          </div>
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
                <span className="text-accent-500 dark:text-accent-400 mt-1">✓</span>
                <span>created an accessible insurance experience for users of all age groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 dark:text-accent-400 mt-1">✓</span>
                <span>reduced insurance purchase to a 2 minute flow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 dark:text-accent-400 mt-1">✓</span>
                <span>designed working account recovery, a critical missing feature</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              What I Learned
            </h3>
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-accent-500 dark:text-accent-400 mt-1">→</span>
                <span>accessibility isn't just compliance, it's a must for everyone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 dark:text-accent-400 mt-1">→</span>
                <span>simplifying complex financial products requires deep empathy for user confusion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 dark:text-accent-400 mt-1">→</span>
                <span>small improvements (like functional password reset) have outsized impact on trust</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 dark:text-accent-400 mt-1">→</span>
                <span>visual hierarchy can make overwhelming information digestible</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Showcase */}
{/* Final Showcase - All Screens */}
{/* Final Showcase - All Screens */}
<section className="w-full mb-32">
  <div className="max-w-5xl mx-auto px-6">
    
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <Image 
        src="/projects/generali/endg.png"
        alt="All Generali App Screens"
        width={1044}
        height={3096}
        className="w-full h-auto"
        quality={100}
        unoptimized
      />
    </div>
  </div>
</section>
    </div>
  )
}