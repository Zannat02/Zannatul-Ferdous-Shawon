export const frontendProjects = [
  {
    slug: "recipe-finder",
    title: "Recipe Finder App",
    category: "Frontend Application",
    shortDescription:
      "A recipe discovery app where users can search dishes, save favorites, and view step-by-step cooking instructions.",
    overlayText: "Search, save, and cook — all in one clean interface.",
    thumbnail: "/projects/recipe-finder/thumbnail.png",
    highlights: [
      "Search and filter recipes by ingredients",
      "Save favorite recipes using local JSON data",
      "Step-by-step cooking instructions view",
      "Fully responsive card-based layout",
    ],
    technologies: ["React", "Tailwind CSS", "React Router", "JSON"],
    links: {
      live: "https://your-live-site.com",
      github: "https://github.com/your-username/recipe-finder",
    },
    details: {
      overview: {
        title: "What this project demonstrates",
        description:
          "Recipe Finder is a frontend-focused application that lets users browse, search, and save recipes using mock JSON data instead of a live backend.",
      },
      features: [
        "Recipe search and filtering",
        "Favorite recipes saved locally",
        "Recipe details page",
        "Responsive grid layout",
      ],
      role: {
        title: "My Role",
        description:
          "I designed and built the entire frontend, structured the mock data, and implemented search, filtering, and routing logic.",
      },
      challenges: [
        { title: "State Management", description: "Managing favorites and search state across multiple components without a backend." },
        { title: "Responsive Grid", description: "Building a card grid that adapts cleanly across mobile, tablet, and desktop." },
      ],
      futureImprovements: ["Connect to a real recipe API", "Add user accounts", "Add category filters"],
    },
    gallery: [
      { image: "/projects/recipe-finder/home.png", title: "Homepage" },
      { image: "/projects/recipe-finder/details.png", title: "Recipe Details" },
    ],
  },

  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    category: "Frontend Application",
    shortDescription:
      "A simple expense tracking app to log daily spending and visualize totals by category.",
    overlayText: "Track spending habits with a clean, simple dashboard.",
    thumbnail: "/projects/expense-tracker/thumbnail.png",
    highlights: [
      "Add and categorize daily expenses",
      "Mock authentication using JSON data",
      "Category-wise spending summary",
      "Responsive dashboard layout",
    ],
    technologies: ["React", "Tailwind CSS", "Chart.js", "JSON"],
    links: {
      live: "https://your-live-site.com",
      github: "https://github.com/your-username/expense-tracker",
    },
    details: {
      overview: {
        title: "What this project demonstrates",
        description:
          "Expense Tracker helps users log and visualize their daily spending, built entirely on the frontend with mock authentication and local data.",
      },
      features: [
        "Add and delete expenses",
        "Mock login and signup",
        "Category-based summary chart",
        "Responsive dashboard",
      ],
      role: {
        title: "My Role",
        description:
          "I built the complete UI, implemented mock authentication, and integrated chart visualizations for spending data.",
      },
      challenges: [
        { title: "Data Visualization", description: "Integrating chart library to clearly display category-wise spending." },
        { title: "Mock Auth Flow", description: "Simulating a realistic login flow without an actual backend." },
      ],
      futureImprovements: ["Add real backend and database", "Add monthly budget goals", "Export data as PDF"],
    },
    gallery: [
      { image: "/projects/expense-tracker/dashboard.png", title: "Dashboard" },
      { image: "/projects/expense-tracker/add-expense.png", title: "Add Expense" },
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