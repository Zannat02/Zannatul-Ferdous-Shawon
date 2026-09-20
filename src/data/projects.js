export const fullStackProjects = [
  {
    slug: "career-code",
    title: "Career-Code",
    category: "Full-Stack Web Application",
    shortDescription:
      "A full-stack job portal that connects job seekers with employers and simplifies the job application process.",
    thumbnail: "/projects/career-code/thumbnail.png",
    highlights: [
      "Full-stack MERN job portal",
      "Secure user authentication",
      "Job posting and application management",
      "REST API integration",
    ],
    technologies: ["React", "Vite", "React Router", "Tailwind CSS", "DaisyUI", "Firebase", "Node.js", "Express.js", "MongoDB"],
    links: {
      live: "https://your-live-site.com",
      github: "https://github.com/your-username/career-code",
    },
    details: {
      overview: {
        title: "What this project demonstrates",
        description:
          "Career-Code is a full-stack job portal designed to connect job seekers and employers. Users can browse available jobs, view job details, apply for suitable positions, and manage their applications.",
      },
      features: [
        "User registration and login",
        "Google authentication",
        "Job search and browsing",
        "Job details page",
        "Online job application",
        "Create job posting",
        "Update job information",
        "Delete job posting",
        "Application management",
        "Responsive design",
      ],
      role: {
        title: "My Role",
        description:
          "I was responsible for developing the responsive frontend, implementing authentication, integrating REST APIs, creating reusable components, and connecting the frontend with backend services.",
      },
      challenges: [
        { title: "Authentication", description: "Implementing secure authentication and protecting private routes for authenticated users." },
        { title: "API Integration", description: "Connecting the React frontend with REST APIs and handling loading, error, and response states." },
        { title: "Responsive Design", description: "Creating a responsive interface that works smoothly across desktop, tablet, and mobile devices." },
      ],
      futureImprovements: [
        "Advanced job filtering and search",
        "Real-time notifications",
        "Improved employer dashboard",
        "Email notifications for applications",
      ],
    },
    gallery: [
      { image: "/projects/career-code/home.png", title: "Homepage" },
      { image: "/projects/career-code/jobs.png", title: "Jobs Page" },
      { image: "/projects/career-code/job-details.png", title: "Job Details" },
      { image: "/projects/career-code/dashboard.png", title: "Dashboard" },
      { image: "/projects/career-code/mobile.png", title: "Mobile View" },
    ],
  },

  {
    slug: "freelance-marketplace",
    title: "Freelance Marketplace",
    category: "Freelance Platform",
    shortDescription:
      "A responsive freelance task marketplace where clients can post tasks and freelancers can browse tasks, view details, and place bids.",
    thumbnail: "/projects/freelance-marketplace/thumbnail.png",

    highlights: [
      "Firebase authentication",
      "Complete task CRUD operations",
      "Task bidding system",
      "Protected routes",
      "Dark and light theme",
      "Responsive design",
    ],

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    links: {
      live: "https://freelance-marketplace-client.vercel.app/",
      github:
        "https://github.com/Zannat02/freelance-marketplace-client",
    },

    details: {
      overview: {
        title: "What this project demonstrates",
        description:
          "Freelance Marketplace is a full-stack web application that connects clients and freelancers through a task-based marketplace. Clients can create and manage tasks, while freelancers can browse available opportunities, view task details, and place bids. The project demonstrates authentication, protected routes, CRUD operations, API integration, database management, and responsive frontend development.",
      },

      features: [
        "Firebase Authentication with Email/Password and Google Sign-In",
        "Protected Routes for authenticated users",
        "Complete Task CRUD Management",
        "Task Bidding System with Dynamic Bid Counts",
        "Featured Tasks with Deadline-Based Sorting",
        "Responsive Marketplace UI for Mobile, Tablet, and Desktop",
        "Dark / Light Theme with Custom Hero Slider",
        "MongoDB & Express.js API Integration",
      ],

      role: {
        title: "My Role",
        description:
          "I developed the complete project, including the frontend interface, authentication flow, protected routes, task management functionality, API integration, database operations, responsive layouts, theme switching, animations, and overall user experience.",
      },

      challenges: [
        {
          title: "Authentication & Protected Routes",
          description:
            "Implementing Firebase authentication and making sure private pages were accessible only to authenticated users while maintaining a smooth login, signup, and logout flow.",
        },
        {
          title: "Complete CRUD Operations",
          description:
            "Building the complete task management flow from creating and displaying tasks to updating and deleting them, while keeping the frontend and backend data synchronized.",
        },
        {
          title: "Bid Management",
          description:
            "Handling task bidding and keeping the bid count updated correctly when users place bids.",
        },
        {
          title: "Frontend & Backend Integration",
          description:
            "Connecting the React frontend with the Express and MongoDB backend and handling data fetching, submitting, updating, and deleting through API requests.",
        },
        {
          title: "Responsive UI",
          description:
            "Making the interface work properly across mobile, tablet, and desktop screen sizes while keeping the navigation, task cards, forms, and hero section usable.",
        },
        {
          title: "Theme Switching",
          description:
            "Implementing a dark and light theme while maintaining readable text, suitable backgrounds, cards, and section styling throughout the home page.",
        },
      ],

      futureImprovements: [
        "Add real-time chat between clients and freelancers",
        "Add user ratings and reviews",
        "Add advanced task search and filtering",
        "Add notifications for bids and task updates",
        "Add a payment system for completed tasks",
      ],
    },

    gallery: [
      {
        image: "/projects/freelance-marketplace/home.png",
        title: "Homepage",
      },
      {
        image: "/projects/freelance-marketplace/browse-tasks.png",
        title: "Browse Tasks",
      },
      {
        image: "/projects/freelance-marketplace/task-details.png",
        title: "Task Details",
      },
      {
        image: "/projects/freelance-marketplace/add-task.png",
        title: "Add Task",
      },
      {
        image: "/projects/freelance-marketplace/my-tasks.png",
        title: "My Tasks",
      },
    ],
  },

  {
    slug: "espresso-emporium",
    title: "Espresso Emporium",
    category: "Full-Stack Web Application",
    shortDescription:
      "A full-stack coffee shop platform where users can browse, add, update, and manage coffee products with secure authentication and a fully responsive coffee-themed UI.",
    thumbnail: "/projects/espresso-emporium/thumbnail.png",
    highlights: [
      "Full-stack coffee shop e-commerce platform",
      "Firebase authentication with Google Sign-In",
      "Complete coffee product CRUD management",
      "Fully responsive across all devices",
    ],
    technologies: ["React", "Vite", "React Router", "Tailwind CSS", "DaisyUI", "TanStack Query", "Firebase", "Node.js", "Express.js", "MongoDB"],
    links: {
      live: "https://coffee-store-client-with-auth.vercel.app/",
      github: "https://github.com/Zannat02/coffee-store-client-with-auth",
    },
    details: {
      overview: {
        title: "What this project demonstrates",
        description:
          "Espresso Emporium is a full-stack coffee shop application built around a custom coffee-and-white brand theme. Users can explore the coffee catalog, view product details, and authenticated users can add, update, and delete coffee items, while everyone can learn about the brand and get in touch through a contact form.",
      },
      features: [
        "User registration and login",
        "Google authentication",
        "Coffee product browsing and details page",
        "Add new coffee products",
        "Update existing coffee information",
        "Delete coffee products",
        "Auth-protected actions with redirect to Sign In",
        "User management page with responsive table/card views",
        "Custom brand-themed UI with a dedicated heading font",
        "Fully responsive design",
      ],
      role: {
        title: "My Role",
        description:
          "I designed and built the entire application end-to-end — the responsive frontend UI, Firebase authentication (email/password and Google), REST API integration with the Express/MongoDB backend, reusable components for every section (navbar, banners, product cards, footer, etc.), and the backend API itself for coffee and user management.",
      },
      challenges: [
        { title: "Authentication State", description: "Syncing Firebase auth state across the app and gating add/edit/delete actions for unauthenticated users." },
        { title: "Responsive Data Table", description: "Designing a user data table that stays readable and functional across desktop, tablet, and mobile without breaking layout." },
        { title: "Custom Theming", description: "Building a consistent coffee-and-white visual identity with a custom heading font across many distinct page sections." },
      ],
      futureImprovements: [
        "Route-level private route protection",
        "Backend integration for the contact/footer message form",
        "Pagination for coffee and user lists",
        "Order and cart functionality",
      ],
    },
    gallery: [
      { image: "/projects/espresso-emporium/addCoffee.png", title: "Add Coffee" },
      { image: "/projects/espresso-emporium/about.png", title: "About Page" },
      { image: "/projects/espresso-emporium/contact.png", title: "Contact Page" },
      { image: "/projects/espresso-emporium/users.png", title: "Users Page" },
    
    ],
  },

  {
    slug: "notice-board-management-system",
    title: "Notice Board Management System",
    category: "Full-Stack Web Application",
    shortDescription:
      "A full-stack Notice Board Management System that allows HR/Admin users to create, publish, and manage notices for departments or individual employees, with dynamic status handling and a fully responsive, professional UI.",
    thumbnail: "/projects/notice-board/thumbnail.png",
    highlights: [
      "Centralized HR/Admin dashboard for internal communication",
      "Published and Draft notice management with dynamic status",
      "Dedicated Draft Notices page for unpublished notices",
      "Fully responsive across all devices",
    ],
    technologies: ["React", "Vite", "React Router", "Tailwind CSS", "React Icons", "SweetAlert2", "Node.js", "Express.js", "MongoDB"],
    links: {
      live: "https://notice-board-client.vercel.app/",
      github: "https://github.com/Zannat02/Notice-board-client",
    },
    details: {
      overview: {
        title: "What this project demonstrates",
        description:
          "Notice Board Management System is a full-stack internal communication tool built for HR/Admin teams. Admins can create notices with a title, type, target audience (department or individual), and attachments, then publish them instantly or save them as drafts. All notices are tracked from a centralized dashboard, with dynamic status handling separating Published notices from Drafts.",
      },
      features: [
        "Create notices with title, type, target audience, and attachments",
        "Publish notices instantly or save them as drafts",
        "Centralized dashboard with active vs draft notice counts",
        "Dedicated Draft Notices page listing all unpublished notices",
        "Dynamic notice status handling (Published / Unpublished)",
        "Sidebar navigation with collapsible mobile drawer",
        "Responsive table (desktop) and card view (mobile/tablet) for notices",
        "Toast/alert notifications for create and draft actions",
        "Fully responsive design",
      ],
      role: {
        title: "My Role",
        description:
          "I designed and built the entire application end-to-end — the responsive frontend UI, the notice creation form with multi-select notice types and dynamic status handling, the centralized dashboard and Draft Notices page, reusable components for every section (header, sidebar, notice table/cards, etc.), and the backend REST API for creating and fetching notices connected to MongoDB Atlas.",
      },
      challenges: [
        { title: "Responsive Layout Overhaul", description: "Reworking a desktop-only layout into a fully responsive system — a collapsible sidebar drawer with a hamburger menu, and converting the notices table into a card view on mobile and tablet without losing readability." },
        { title: "Dropdown Behavior Across Devices", description: "Fixing multi-select and single-select dropdown menus (Target, Designation, Notice Type) that broke or appeared with transparent backgrounds due to stacking-context and overflow issues, and adding outside-click-to-close behavior." },
        { title: "Dynamic Status Management", description: "Handling Published vs Draft notice states cleanly across the dashboard, notice table, and a separate Draft Notices view, all reading from the same API data." },
      ],
      futureImprovements: [
        "Edit and Delete functionality for existing notices",
        "Actual file upload/storage for notice attachments (currently only filename is sent)",
        "Authentication and role-based access for HR/Admin",
        "Navigation for remaining sidebar menu items (Payroll, Attendance, etc.)",
      ],
    },
    gallery: [
      { image: "/projects/notice-board/thumbnail.png", title: "Dashboard" },
      { image: "/projects/notice-board/add-notice.png", title: "Create Notice" },
      { image: "/projects/notice-board/draft-notices.png", title: "Draft Notices" },
      
    ],
  }
];

export const frontendProjects = [];