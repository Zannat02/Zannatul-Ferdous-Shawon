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
    slug: "freshbasket",
    title: "FreshBasket",
    category: "E-commerce Application",
    shortDescription:
      "A responsive grocery e-commerce platform with category-based browsing, cart management, and Firebase authentication.",
    overlayText: "Fresh groceries, delivered with a smooth shopping experience.",
    thumbnail: "/projects/freshbasket/thumbnail.png",
    highlights: [
      "112+ products organized across 6 categories and 20+ subcategories",
      "Global cart system with localStorage persistence and live cart badge",
      "Firebase authentication with protected account and address management",
      "Firestore-backed address book with add/edit/delete and default address",
      "Fully responsive layout for mobile, tablet, and desktop",
    ],
    technologies: ["React", "React Router", "Firebase", "Tailwind CSS", "DaisyUI"],
    links: {
      live: "https://fresh-basket-dusky.vercel.app/",
      github: "https://github.com/Zannat02/FreshBasket",
    },
    details: {
      overview: {
        title: "What this project demonstrates",
        description:
          "FreshBasket is a grocery e-commerce web app that lets users browse products by category, manage a persistent shopping cart, and maintain a personal account with a saved address book, all within a fully responsive interface.",
      },
      features: [
        "Category and subcategory browsing with a dynamic dropdown navbar",
        "Auto-rotating hero slider with animated text transitions",
        "Catalog page with filtering, sorting, and pagination",
        "Cart with quantity controls, order summary, and toast notifications",
        "Register, login, and logout via Firebase Authentication",
        "Protected My Account and Addresses pages with Firestore CRUD",
        "Collapsible mobile/tablet navigation with an accordion category menu",
      ],
      role: {
        title: "My Role",
        description:
          "I built the complete frontend, designed the responsive navigation and product browsing system, implemented Firebase authentication and Firestore-backed address management, and structured the cart system using React Context with localStorage persistence.",
      },
      challenges: [
        {
          title: "Smooth Scroll-Based Navbar Transition",
          description:
            "Animating the navbar from a multi-row layout (announcement bar, search, categories) into a single collapsed row on scroll without a jarring layout jump, solved using CSS grid-template-rows transitions.",
        },
        {
          title: "Category-to-Product Data Matching",
          description:
            "Reconciling human-readable category names in the product data with URL-safe slugs used in routing, solved with a shared slug utility used by both the navbar and the shop pages.",
        },
        {
          title: "Cross-Device Theming Inconsistency",
          description:
            "Text and backgrounds appeared correct on desktop but broke on mobile/tablet due to DaisyUI auto-switching to a dark theme based on system preference, fixed by locking DaisyUI to a single light theme.",
        },
      ],
      futureImprovements: [
        "Add a Product Details page with a full description and related products",
        "Add a Recharts-based price breakdown chart on the Cart page",
        "Add a checkout flow with address selection and order placement",
        "Add order history backed by a Firestore orders collection",
      ],
    },
    gallery: [
      { image: "/projects/freshbasket/products.png", title: "All Products Page" },
      { image: "/projects/freshbasket/catalog.png", title: "Catalog Page" },
      { image: "/projects/freshbasket/cart.png", title: "Cart Page" },
      { image: "/projects/freshbasket/account.png", title: "My Account & Addresses" },
    ],
}

 ,
];