import Image from "next/image"

interface BirdhopCaseStudyProps {
  caseStudy: any
  projectTitle: string
}

export function BirdhopCaseStudy({ caseStudy, projectTitle }: BirdhopCaseStudyProps) {
  return (
    <div className="min-h-screen">
      {/* Image */}
      <div className="-mt-24 mb-16">
        <Image
          src="/projects/birdhop/hero.png"
          alt="Birdhop Hero"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-32">
        
        {/* Title & Meta */}
        <section>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Birdhop - Travel Planning App
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div>
              <span className="font-semibold">Role:</span> UI/UX Designer
            </div>
            <div>
              <span className="font-semibold">Type:</span> Concept Project
            </div>
            <div>
              <span className="font-semibold">Tools:</span> Figma
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">Mobile App</span>
            <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">UI/UX Design</span>
            <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">Travel</span>
            <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">Social</span>
          </div>
        </section>

        {/* Project Overview */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Birdhop is a social travel planning app designed to help travelers organize trips, collaborate with friends, and discover destinations all in one place. The app combines trip planning tools with social features and local guides, empowering travelers to create memorable experiences without juggling multiple apps.
          </p>
        </section>

        {/* The Problem */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            The Problem
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Travelers face significant challenges when planning trips:
          </p>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <p>• Trip planning is fragmented across multiple apps for booking, research, communication, and organization</p>
            <p>• Difficult to collaborate with travel companions and keep everyone on the same page</p>
            <p>• Overwhelming amount of information makes it hard to decide where to go and what to do</p>
            <p>• Can&apos;t easily save and organize travel inspiration and recommendations</p>
            <p>• Missing local insights and authentic experiences beyond tourist traps</p>
            <p>• No centralized place to track trip details, itineraries, and shared expenses</p>
          </div>
          <div className="mt-8 p-6 bg-accent-50 dark:bg-accent-900/10 border-l-4 border-accent-500 rounded-r-lg">
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              <span className="font-semibold">The Opportunity:</span> Create a unified platform where travelers can plan, collaborate, discover, and organize their trips with friends while getting authentic local recommendations.
            </p>
          </div>
        </section>

        {/* Understanding the User */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Understanding the User
          </h2>
          
          {/* Persona */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Primary Persona: Social Travelers
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><span className="font-semibold">Age:</span> 25-40</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><span className="font-semibold">Occupation:</span> Young professionals, digital nomads, students</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><span className="font-semibold">Experience:</span> Regular travelers (3-6 trips/year)</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Tech Literacy:</span> High</p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Travelers who love exploring new places with friends or partners. They value authentic experiences over touristy activities and want to make the most of their trips. They&apos;re comfortable with technology and expect apps to be intuitive and social.
                </p>
              </div>
            </div>

            {/* Core Needs */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Core Needs</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">Easy way to plan trips collaboratively with friends</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">Discover authentic local experiences and hidden gems</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">Organize all trip details in one place</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">Communicate with travel companions about plans</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">Save and share travel recommendations</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">Create itineraries without spending hours researching</p>
                </div>
              </div>
            </div>

            {/* Frustrations */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Frustrations</h4>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>• Using WhatsApp for planning, Google Docs for itineraries, Airbnb for booking, TripAdvisor for reviews</p>
                <p>• Friends constantly asking &quot;what&apos;s the plan?&quot;</p>
                <p>• Losing track of saved recommendations across different apps</p>
                <p>• Generic tourist recommendations that miss authentic experiences</p>
                <p>• Can&apos;t easily split and track shared expenses</p>
                <p>• Planning takes forever with too many options</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Goals */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Design Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Unified Trip Planning</h3>
              <p className="text-gray-700 dark:text-gray-300">Consolidate planning, booking, and organization in one app</p>
            </div>
            <div className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Seamless Collaboration</h3>
              <p className="text-gray-700 dark:text-gray-300">Enable easy group planning and communication</p>
            </div>
            <div className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Authentic Discovery</h3>
              <p className="text-gray-700 dark:text-gray-300">Surface local recommendations and hidden gems</p>
            </div>
            <div className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Flexible Organization</h3>
              <p className="text-gray-700 dark:text-gray-300">Support different planning styles from spontaneous to structured</p>
            </div>
            <div className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Social Integration</h3>
              <p className="text-gray-700 dark:text-gray-300">Make planning collaborative and shareable</p>
            </div>
            <div className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Mobile First</h3>
              <p className="text-gray-700 dark:text-gray-300">Optimize for planning on the go</p>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900 dark:text-white">
            The Solution
          </h2>

          {/* Feature 1 - Image LEFT, Text RIGHT */}
          <div className="mb-32 grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative w-[280px] md:w-[320px]">
                <div className="absolute inset-0 flex items-center justify-center p-3.5 md:p-[18px]">
                  <video 
                    preload="metadata"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-auto rounded-[2.2rem] md:rounded-[2.8rem]"
                  >
                    <source src="/projects/birdhop/planner.mp4" type="video/mp4" />
                  </video>
                </div>
                <img 
                  loading="lazy"
                  src="/projects/birdhop/frame.png" 
                  alt="iPhone Frame" 
                  className="relative z-10 w-full h-auto pointer-events-none" 
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                1. Collaborative Trip Planner
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Create and manage trips with departure/landing dates, destination, and travel companions. Invite friends to trips, see who&apos;s coming, and collaborate on planning. Trip notes feature lets everyone add what they need to bring or remember.
              </p>
            </div>
          </div>

          {/* Feature 2 - Text LEFT, Image RIGHT */}
          <div className="mb-32 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                2. Group Chat Integration
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Dedicated chat for each trip keeps all travel-related conversations in one place. Share photos, locations, and updates with your travel group. No more switching between WhatsApp and planning apps.
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[280px] md:w-[320px]">
                <div className="absolute inset-0 flex items-center justify-center p-3.5 md:p-[18px]">
                  <video 
                    preload="metadata"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-auto rounded-[2.2rem] md:rounded-[2.8rem]"
                  >
                    <source src="/projects/birdhop/chat.mov" type="video/mp4" />
                  </video>
                </div>
                <img 
                  loading="lazy"
                  src="/projects/birdhop/frame.png" 
                  alt="iPhone Frame" 
                  className="relative z-10 w-full h-auto pointer-events-none" 
                />
              </div>
            </div>
          </div>

          {/* Feature 3 - Image LEFT, Text RIGHT */}
          <div className="mb-32 grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative w-[280px] md:w-[320px]">
                <div className="absolute inset-0 flex items-center justify-center p-3.5 md:p-[18px]">
                  <video 
                    preload="metadata"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-auto rounded-[2.2rem] md:rounded-[2.8rem]"
                  >
                    <source src="/projects/birdhop/map.mp4" type="video/mp4" />
                  </video>
                </div>
                <img 
                  loading="lazy"
                  src="/projects/birdhop/frame.png" 
                  alt="iPhone Frame" 
                  className="relative z-10 w-full h-auto pointer-events-none" 
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                3. Location-Based Discovery
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Interactive map shows points of interest, accommodations, and experiences. Search locations and see detailed information, reviews, and recommendations. Categories like coffee, food, tours, and gas stations help find what you need quickly.
              </p>
            </div>
          </div>

        </section>

        {/* Design Approach */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Design Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Clean, Focused Interface</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Green color scheme feels fresh, adventurous, and nature-connected</li>
                <li>• Generous white space prevents overwhelm</li>
                <li>• Clear visual hierarchy guides attention</li>
                <li>• Card-based design for scannable content</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Map-Centric Navigation</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Interactive map as primary exploration tool</li>
                <li>• Location search always accessible</li>
                <li>• Visual discovery over text-heavy lists</li>
                <li>• Familiar map patterns reduce learning curve</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Social-First Architecture</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Group chat built into trip planning</li>
                <li>• Collaborative features throughout</li>
                <li>• Easy sharing and inviting</li>
                <li>• Friend-focused, not follower-focused</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Accessibility Focus</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• High contrast text for readability</li>
                <li>• Large touch targets for buttons</li>
                <li>• Clear labels and actions</li>
                <li>• Intuitive icons with text labels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Information Architecture */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Information Architecture
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            The platform is organized into five main areas:
          </p>
          <div className="space-y-6 mb-12">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">1. Planner</h3>
              <p className="text-gray-700 dark:text-gray-300">Your travel plans, create new trips, trip details and notes, shared trips with friends</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2. Home</h3>
              <p className="text-gray-700 dark:text-gray-300">Personalized dashboard, popular destinations, accommodations near you, latest deals</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">3. Explore</h3>
              <p className="text-gray-700 dark:text-gray-300">Browse destinations, filter by interests, destination detail pages, save favorites</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">4. Guide</h3>
              <p className="text-gray-700 dark:text-gray-300">Interactive map, location search, POI categories, local recommendations</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">5. Chat</h3>
              <p className="text-gray-700 dark:text-gray-300">Trip group chats, share photos and locations, coordinate with travel buddies</p>
            </div>
          </div>
        </section>
{/* Interactive Prototype */}
<section>
  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
    Interactive Prototype
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
    Explore the full experience through this interactive prototype. Click through the flows to see how travelers plan trips, discover destinations, and collaborate with friends.
  </p>
  <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4">
    <iframe 
      style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
      width="100%" 
      height="600" 
      src="https://embed.figma.com/proto/yyTAZCMtuZn8vRh18UvtjR/Birdhop-updated?page-id=3529%3A5151&node-id=3529-8128&viewport=-1926%2C2499%2C0.36&scaling=contain&content-scaling=fixed&starting-point-node-id=3529%3A5172&embed-host=share" 
      allowFullScreen
    ></iframe>
  </div>
</section>
        {/* Impact & Learnings */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Impact & Learnings
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Outcomes</h3>
            <div className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <p>• Created unified platform for trip planning, discovery, and collaboration</p>
              <p>• Reduced app switching by combining planning, chat, and booking</p>
              <p>• Designed social features that enhance rather than complicate planning</p>
              <p>• Established scalable information architecture for future features</p>
              <p>• Built map-based discovery that feels intuitive</p>
            </div>
          </div>

        </section>
{/* Final Designs Showcase */}
<section>
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
    Final Designs
  </h2>
  <div className="space-y-8">
    <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
      <Image
        src="/projects/birdhop/final-showcase-1.png"
        alt="Birdhop Final Designs Showcase 1"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
    </div>
  </div>
</section>
      </div>
    </div>
  )
}