export const frontendProjects = [
  {
    slug: "jobtrack",
    title: "JobTrack – A Smart Job Hunting Platform",
    category: "Full Stack Application",
    shortDescription:
      "A modern job portal where users can explore job opportunities across multiple companies, filter jobs by category, search jobs, and view detailed job descriptions with a complete Firebase authentication system.",
    overlayText: "Search, explore, and apply — all in one place.",
    thumbnail: "/projects/jobtrack/thumbnail.png",
    highlights: [
      "Firebase authentication with email/password and Google login",
      "Protected routes for company, job, and category pages",
      "Dynamic job category dropdown generated from JSON data",
      "Job search from the home banner with a dedicated results page",
      "Animated About page with image slider and stats counter",
      "Blog section with career tips and industry insights",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Firebase Authentication", "Framer Motion", "DaisyUI", "JSON"],
    links: {
      live: "https://job-track-c15bf.web.app",
      github: "https://github.com/Zannat02/JobTrack-Find-Your-Job",
    },
    details: {
      overview: {
        title: "What this project demonstrates",
        description:
          "JobTrack is a full-featured job portal that connects job seekers with opportunities across multiple companies. It combines a complete Firebase authentication system, protected routing, dynamic data-driven filtering, and polished UI animations into a single cohesive platform.",
      },
      features: [
        "Email/password and Google authentication",
        "Protected routes with redirect-back-after-login",
        "Company listing with detailed job breakdown",
        "Job search and category-based filtering",
        "Job application modal with form validation",
        "Blog section with listing and details pages",
        "Animated, full-width About page with image slider and stats counter",
      ],
      role: {
        title: "My Role",
        description:
          "I designed and built the entire frontend, implemented the Firebase authentication flow with protected routes, structured the JSON-based job/company data, and built the search, filtering, and animation logic across the app.",
      },
      challenges: [
        { title: "Protected Routing", description: "Redirecting unauthenticated users to login while preserving their intended destination for a smooth post-login redirect." },
        { title: "Dynamic Filtering", description: "Building category and search filtering that reads job types directly from JSON data instead of hardcoded values." },
        { title: "Full-Width Sections", description: "Breaking decorative and slider sections out of a constrained layout container to span the full viewport width while keeping content properly centered." },
      ],
      futureImprovements: [
        "Connect to a real backend instead of static JSON data",
        "Add a dashboard for updating user profile and viewing applied jobs",
        "Add toast notifications for auth and form feedback",
        "Add sort and filter options on search and job listing pages",
      ],
    },
    gallery: [
      
      { image: "/projects/jobtrack/category.png", title: "Category" },
      { image: "/projects/jobtrack/job-details.png", title: "Job Details" },
      { image: "/projects/jobtrack/about.png", title: "About Page" },
      { image: "/projects/jobtrack/blog.png", title: "Blog Page" },
    ],
  },

  {
  slug: "dragon-news",
  title: "Dragon News",
  category: "Frontend Application",
  shortDescription:
    "A responsive news portal with category-based browsing and Firebase authentication.",
  overlayText: "Stay informed with news that adapts to any screen.",
  thumbnail: "/projects/dragon-news/thumbnail.png",
  highlights: [
    "Category-based news browsing across 10+ categories",
    "Firebase authentication with email/password and Google sign-in",
    "Protected news details route requiring login",
    "Fully responsive layout for mobile, tablet, and desktop",
  ],
  technologies: ["React", "React Router", "Firebase", "Tailwind CSS", "DaisyUI"],
  links: {
    live: "https://dragon-news-breaking-de231.web.app/category/1",
    github: "https://github.com/Zannat02/Dragon-news-firebase",
  },
  details: {
    overview: {
      title: "What this project demonstrates",
      description:
        "Dragon News is a digital news platform that delivers organized, category-wise news with secure authentication and a layout that adapts smoothly across mobile, tablet, and desktop screens.",
    },
    features: [
      "Browse news by category with dynamic filtering",
      "Register, login, and Google sign-in via Firebase",
      "Protected routes for viewing full news details",
      "Live scrolling news ticker (marquee)",
      "Collapsible drawers for categories and widgets on mobile/tablet",
      "Toast notifications for user feedback",
    ],
    role: {
      title: "My Role",
      description:
        "I built the complete frontend, implemented Firebase authentication (email/password and Google), designed the responsive layout system with collapsible drawers, and fixed several structural and logic bugs across the codebase.",
    },
    challenges: [
      {
        title: "Responsive Multi-Panel Layout",
        description:
          "Converting a fixed three-column desktop layout (categories, content, widgets) into a mobile-friendly design using toggleable slide-in drawers.",
      },
      {
        title: "Protected Route Redirects",
        description:
          "Ensuring users redirected to login from a protected news details page are sent back to that exact page after successful login.",
      },
      {
        title: "Module Interop Issues",
        description:
          "Resolving a CommonJS-to-ESM interop conflict with a marquee library that caused rendering errors under Vite's bundling.",
      },
    ],
    futureImprovements: [
      "Add GitHub OAuth login",
      "Add bookmarking/save-for-later functionality",
      "Add search functionality across news articles",
      "Add pagination or infinite scroll for category pages",
    ],
  },
  gallery: [
    { image: "/projects/dragon-news/about.png", title: "About Page" },
    { image: "/projects/dragon-news/category.png", title: "Category News" },
    { image: "/projects/dragon-news/news-details.png", title: "News Details" },
    { image: "/projects/dragon-news/login.png", title: "Login Page" },
  ],
},

  {
    slug: "movie-explorer",
    title: "Movie Explorer",
    category: "Frontend Application",
    shortDescription:
      "A movie browsing app to search titles, view details, and maintain a personal watchlist.",
    overlayText: "Browse movies and build your own watchlist.",
    thumbnail: "/projects/movie-explorer/thumbnail.png",
    highlights: [
      "Movie search and browsing",
      "Watchlist saved with JSON data",
      "Detailed movie info page",
      "Responsive card-based UI",
    ],
    technologies: ["React", "Tailwind CSS", "React Router", "JSON"],
    links: {
      live: "https://your-live-site.com",
      github: "https://github.com/your-username/movie-explorer",
    },
    details: {
      overview: {
        title: "What this project demonstrates",
        description:
          "Movie Explorer lets users search and browse movies, view details, and manage a personal watchlist, using mock JSON data on the frontend.",
      },
      features: [
        "Movie search and filtering",
        "Watchlist add/remove functionality",
        "Movie details page",
        "Responsive layout",
      ],
      role: {
        title: "My Role",
        description:
          "I handled the full frontend build, including routing, search logic, and watchlist state management.",
      },
      challenges: [
        { title: "Search Performance", description: "Keeping search responsive while filtering a larger mock dataset." },
        { title: "Watchlist Persistence", description: "Maintaining watchlist state across page navigation." },
      ],
      futureImprovements: ["Integrate a real movie API", "Add user ratings", "Add genre-based recommendations"],
    },
    gallery: [
      { image: "/projects/movie-explorer/home.png", title: "Homepage" },
      { image: "/projects/movie-explorer/details.png", title: "Movie Details" },
    ],
  },
];