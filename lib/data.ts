interface CaseStudy {
  heroImage: string;
  overview: string;
  problem: string;
  role: string;
  process: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
  features: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
  designDecisions: Array<{
    question: string;
    answer: string;
  }>;
  impact: {
    description: string;
    metrics: Array<{
      label: string;
      value: string;
      description: string;
    }>;
  };
  allScreens?: string;
}
export const portfolioData = {
  personal: {
    name: "Designing interfaces that respect how people think.",
    title: "Making complex simple since 2021.",
    // tagline: "Quiet UI for loud ideas",
    // experience: "3+ years experience",
    email: "razvanmitrea1@gmail.com",
    social: {
      linkedin: "https://www.linkedin.com/in/mitrearazvan/",
      github: "https://dribbble.com/andreirazvan",
      behance: "https://www.behance.net/mitrearazvan",
    }
  },
  
  theWayIWork: [
    {
      title: "Behavior",
      description: "focused and consistent i work efficiently without cutting corners. i approach problems methodically and always look for ways to improve"
    },
    {
      title: "Strengths",
      description: "i create clear intuitive and user friendly digital experiences. im patient detail oriented and good at problem solving. i can simplify complex workflows while keeping the user in mind"
    },
    {
      title: "Mindset",
      description: "curious and growth oriented i embrace new challenges with logic and creativity aiming to deliver meaningful results"
    }
  ],
  
workExperience: [
  {
    company: "Human8 - Market Research Company",
    role: "UI/UX Designer",
    period: "April 2022 - Present",
    description: "im currently working at human8 a global insights consultancy that helps major brands like loreal samsung and coca cola understand what people actually want. my role is designing the research platforms and tools that make complex consumer data easy to explore and use. Dashboards, Data Visualizations and Interfaces that turn thousands of interviews into clear insights",
    hasCase: true,
    responsibilities: [
      "design end to end user experiences for research platforms from initial wireframes to polished interfaces",
      "collaborate with product managers and developers to translate user needs into working solutions",
      "create design systems and component libraries to keep things consistent across web and mobile",
      "create user friendly and ada compliant designs so theyre accessible for everyone",
    ]
  },
  {
    company: "ClearSkyNetwork",
    role: "Web Designer",
    period: "Sep 2021 - Jun 2022",
    description: "Designed and delivered custom websites for international clients helping businesses build their digital presence. managed projects from concept to launch focusing on clean design and affiliate conversions",
    hasCase: false,
    responsibilities: [
      "created custom website projects for clients across different industries and countries",
      "managed full design process including client meetings wireframing prototyping and final delivery in wordpress or coding",
      "created responsive mobile first designs optimized for performance and user experience",
      "improved client engagement and conversion rates through strategic ux improvements"
    ]
  }
],
  
  background: {
    title: "Where I Come From",
    content: " I'm razvan a mostly self taught ui ux designer driven by curiosity and a love for solving problems. Coming from a creative background i found my path in design because it lets me combine logic with creativity turning complex challenges into clean functional interfaces. im focused on consistency efficiency and constantly learning new tools from Figma to AI Tools and coding as a hobby.\n\nTechnology evolves fast and im here for it. With patience precision and a problem solver mindset i take on any challenge that comes my way"},
    skills: {
  title: "Skills & Tools",
  categories: [
    {
      name: "Design",
      tools: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Figma Maker (AI)"]
    },
    {
      name: "Development",
      tools: ["HTML", "CSS", "TailwindCSS", "Bootstrap", "WordPress", "React", "Vue.js"]
    },
    {
      name: "AI & Workflow",
      tools: ["Claude.ai", "ChatGPT", "Midjourney"]
    },
    {
      name: "Process",
      tools: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"]
    }
  ]
},
  education: [
    {
      institution: "Facultatea de Științe Politice, Administrative și ale Comunicării",
      degree: "Advertising",
      period: "2015 - 2018"
    },
    {
      institution: "Liceul de Coregrafie si Arta Dramatica Octavian Stroia",
      degree: "Theatrical Arts",
      period: "2011-2015"
    }
  ],
  
  languages: [
    {
      language: "Romanian",
      proficiency: "Native"
    },
    {
      language: "English",
      proficiency: "Professional working proficiency"
    }
  ],

  projects: [
    {
  id: "fellow",
  title: "FELLOW - YOUR CREATIVE WRITTER",
  company: "Concept Project",
  year: "2024",
  category: "AI Writing Platform",
  description: "FELLOW is an AI writing platform that helps writers beat creative blocks, build better characters and create stronger stories. It has specialized AI assistants for different parts of storytelling like character development and plot structure so writers at any level can actually finish their work",
  image: "/projects/fellow/hero.png",
  tags: ["UI/UX Design", "AI Product", "Writing Tools", "Web App"],
  caseStudy: {
    heroImage: "/projects/fellow/hero.png",
    overview: "FELLOW is an AI-powered creative writing platform designed to help writers overcome creative blocks, develop rich characters, and craft compelling narratives. The platform offers specialized AI assistants for different aspects of storytelling—from character psychology to plot structure—empowering writers of all levels to bring their stories to life.",
    problem: "Writers face significant challenges: creative block and blank page syndrome, creating multi-dimensional characters, organizing plot threads, tracking details across long projects, isolation in the creative process, and using multiple disconnected tools for different writing tasks.",
    role: "UI/UX Designer - Concept project exploring how AI can enhance creative writing without replacing the writer's voice.",
    timeline: "6 weeks",
    process: [
      {
        title: "Understanding the User",
        description: "Primary persona: The Aspiring Novelist (28-45 years old). Writers passionate about storytelling who struggle with technical craft aspects. They need structured guidance, help with character depth, organization tools, and AI assistance that enhances rather than replaces creativity.",
        image: "/projects/fellow/persona.png"
      },
      {
        title: "Information Architecture",
        description: "Organized into three main areas: AI Assistants Hub (pre-built and custom assistants), Notes & Writing (hierarchical organization with AI integration), and Documents (file management and version history). Top bar navigation with left sidebar for projects and right panel for AI assistance.",
        image: "/projects/fellow/sitemap.png"
      }
    ],
    features: [
  {
    title: "Specialized AI Assistants",
    description: "curated collection for specific tasks like character psychology mapper plot thread weaver emotional arc architect cliche detection shield etc.",
    video: "/projects/fellow/assistants.mp4", // ← Add video path
    // OR use image if you don't have video:
    // image: "/projects/fellow/assistants.png"
  },
  {
    title: "Custom Assistant Creation",
    description: "writers build their own personalized assistants. step by step wizard walks through naming it defining what it does setting how it acts and testing it",
    video: "/projects/fellow/create-assistant.mp4", // ← Video
  },
  {
    title: "Organized Note System",
    description: "hierarchical folders for unlimited notes character sheets with quick search and tags to link stuff across projects",
    video: "/projects/fellow/notes.mp4", // ← Video
  },
  {
    title: "Document Management",
    description: "drag and drop existing work. handles different file types shows previews organizes automatically and tracks version changes",
    video: "/projects/fellow/documents.mp4", // ← Video
  },
  {
    title: "Conversational Writing Interface",
    description: "chat naturally with ai that gives real time suggestions understands context lets you switch assistants mid convo and writes text straight into your docs",
    video: "/projects/fellow/chat.mp4", // ← Video
  }
],
    designDecisions: [
      {
        question: "Why conversation first design?",
        answer: "writers need ai that feels like a collaborator not a tool. chat makes it natural and intuitive plus context builds over time like working with a real editor"
      },
      {
        question: "Why specialized assistants instead of one general AI?",
        answer: "different writing problems need different expertise. character work needs psychology knowledge plot needs narrative theory. specialized assistants give deeper more relevant help than one generic ai"
      },
      {
        question: "Why allow custom assistant creation?",
        answer: "every writers process is different. fantasy writers need different help than literary fiction writers. custom assistants let people build exactly what they need for their genre style and workflow"
      },
      {
        question: "Why blue color scheme?",
        answer: "blue means trust professional and focus which matters for a writing tool. its calming so it reduces anxiety and people associate it with creativity and depth. not red which feels urgent or green which feels transactional"
      }
    ],
    impact: {
      description: "This concept project explored how AI can enhance creative writing without replacing the writer's voice. Key learnings: AI writing tools succeed when they enhance creativity rather than automate it, writers need both structure and flexibility, conversation interfaces require careful balance, and deep tools need simplified entry points.",
      metrics: [
        // { label: "AI Assistants", value: "6+", description: "Specialized tools for different writing challenges" },
        // { label: "Workflow Support", value: "4", description: "Planning, discovery, revision, and hybrid flows" },
        // { label: "Setup Time", value: "<2 min", description: "From registration to first AI conversation" }
      ]
    },
    allScreens: "/projects/fellow/final-designs.pdf"
  }
},
    {
  id: "generali-insurance",
  title: "GENERALI INSURANCE - MOBILE APP",
  company: "Concept Project",
  year: "2023",
  category: "Mobile App Design",
  description: "A concept redesign exploring how to modernize pension management and make insurance more accessible.",
  image: "/projects/generali/hero-mockup.png", // This shows on main page
  tags: ["UI/UX Design", "Mobile App", "Insurance", "Concept"],
  caseStudy: {
    heroImage: "/projects/generali/hero-mockup.png",
    overview: "A concept redesign of the Generali Insurance mobile application, exploring how to modernize pension management and make insurance more accessible through improved UX and visual design.",
    problem: "Insurance apps are notoriously complex and difficult to navigate. I wanted to explore how Generali's mobile experience could be reimagined to simplify pension information access, create a more intuitive onboarding flow, make insurance management feel less overwhelming, and modernize the visual design while respecting the brand.",
    role: "Solo UX/UI Designer - Concept project exploring better ways to present insurance information through user-centered design.",
    process: [
    {
    title: "Research & User Persona",
    description: "I researched existing insurance apps and identified common pain points: users struggle to understand their pension details, onboarding processes are lengthy and confusing, and navigation is buried in complex menus. To guide the design, I created 'Mitrea Mirela' - a 42-year-old Digital Manager who's tech-savvy but frustrated with complex insurance terminology. Her core problems: can't easily check pension statistics, finds information overwhelming, and wants quick, transparent access to her insurance.",
    image: "/projects/generali/persona.png"
  },
  {
    title: "Information Architecture",
    description: "Redesigned the app structure around 4 core sections: Home (dashboard with all active policies), Insurances (browse and purchase new coverage), Portfolio (deep dive into specific policies), and Profile (account management and settings). Created a detailed sitemap showing simplified user flows for key tasks.",
    image: "/projects/generali/app-map.png"
  },
      {
        title: "User Flows & Wireframes",
        description: "Designed streamlined flows for onboarding (3-step account activation with biometric option), login & password recovery (clear, simple authentication), dashboard navigation (card-based interface for quick policy access), and pension details (contribution history and policy information).",
        image: "/projects/generali/onboarding-flow.png"
      },
      {
        title: "Visual Design",
        description: "Maintained Generali's brand identity (red + venetian lion logo), created clean modern interface with generous white space, implemented card-based UI pattern for scannable information, used large accessible typography, and added color-coded status indicators (red/green for quick recognition).",
        image: "/projects/generali/dashboard-screens.png"
      }
    ],
    features: [
      {
        title: "Simplified Dashboard",
        description: "Card layout showing all policies with quick actions (View Details, Pay) on each card and status indicators for at-a-glance understanding.",
        image: "/projects/generali/dashboard-screens.png"
      },
      {
        title: "Streamlined Onboarding",
        description: "Reduced from 5+ steps to 3 clear steps with progress indicators throughout, biometric authentication option, and success confirmation with clear next steps.",
        image: "/projects/generali/onboarding-flow.png"
      },
      {
        title: "Insurance Discovery",
        description: "Visual card layout for browsing options with clear categorization (Life, Travel, Health) and direct CTAs for learning more or purchasing.",
        image: "/projects/generali/dashboard-screens.png"
      },
      {
        title: "Enhanced Profile",
        description: "Clean settings organization with easy contribution history access, document management, and support contact options.",
        image: "/projects/generali/dashboard-screens.png"
      }
    ],
    designDecisions: [
      {
        question: "Why card-based layout?",
        answer: "Cards create clear visual separation between different policies, making it easy to scan and find what you need quickly."
      },
      {
        question: "Why reduce onboarding steps?",
        answer: "Research shows users abandon lengthy sign-ups. By breaking it into 3 essential steps, we reduce friction while collecting necessary information."
      },
      {
        question: "Why persistent bottom navigation?",
        answer: "Insurance users need quick access to core features. A bottom tab bar keeps key sections always accessible."
      },
      {
        question: "Why large typography?",
        answer: "Insurance users span all age groups. Larger text improves accessibility and reduces cognitive load when dealing with complex information."
      }
    ],
    impact: {
      description: "This concept project taught me how to simplify complex financial information into digestible UI, the importance of clear information hierarchy in high-stakes apps, how visual design can reduce anxiety around insurance management, and the value of progressive disclosure - showing only what users need, when they need it.",
      metrics: [
        { label: "Onboarding steps reduced", value: "60%", description: "From 5+ steps to 3 clear steps" },
        { label: "Key actions visible", value: "100%", description: "All policies shown on dashboard" },
        { label: "Navigation depth reduced", value: "50%", description: "From 3+ levels to max 2 levels" }
      ]
    },
    allScreens: "/projects/generali/dashboard-screens.png"
  },
},
{
  id: "birdhop",
  title: "Birdhop",
  company: "Birdhop",
  year: "2024",
  category: "Travel App",
  description: "Social travel planning app for collaborative trip organization",
  image: "/projects/birdhop/hero.png",
  tags: ["Mobile App", "UI/UX", "Travel", "Social"],
  caseStudy: {}
},
{
  id: "archived",
  title: "Archived Projects",
  company: "Past Work",
  year: "2020-2022",
  category: "Collection",
  description: "A collection of past explorations and learning experiments that shaped my design journey.",
  image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80",
  tags: ["Archive", "Learning", "Exploration"]
}
  ]
}