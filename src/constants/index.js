const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  // {
  //   id: 1,
  //   date: "Sep 2, 2025",
  //   title:
  //     "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
  //   image: "/images/blog1.png",
  //   link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  // },
  // {
  //   id: 2,
  //   date: "Aug 28, 2025",
  //   title: "The Ultimate Guide to Mastering Three.js for 3D Development",
  //   image: "/images/blog2.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  // },
  // {
  //   id: 3,
  //   date: "Aug 15, 2025",
  //   title: "The Ultimate Guide to Mastering GSAP Animations",
  //   image: "/images/blog3.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  // },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#05b6f6",
    link: "https://github.com/daroen7",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://jsmastery.com/",
  // },
  // {
  //   id: 3,
  //   text: "Twitter/X",
  //   icon: "/icons/twitter.svg",
  //   bg: "#ff866b",
  //   link: "https://x.com/jsmasterypro",
  // },
  {
    id: 4,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#f4656b",
    link: "https://www.instagram.com/syai_hann",
  },
  {
    id: 5,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/syaihan-hidayatullah-daroini",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 1,
      name: "Movie Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Movie Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-5",
          description: [
            "The Movie Website Application is a sleek and modern platform designed for browsing and discovering the latest movies."
          ],
        },
        {
          id: 2,
          name: "movie-website.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://movies-drab.vercel.app/",
          position: "top-40 left-5",
        },
        {
          id: 4,
          name: "movie-poster.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 left-45",
          imageUrl: "/images/movie-poster.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-35 right-35",
        // },
      ],
    },

    // // ▶ Project 2
    {
      id: 2,
      name: "Task-Management-React App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Task-Management-React App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-5",
          description: [
            "A clean daily task manager built to keep you focused and organized.",
            "Easily add, complete, and delete tasks with a smooth and minimal interface.",
            "Built with React, Tailwind CSS v4, and Vite — fast, lightweight, and fully responsive.",
          ],
        },
                {
          id: 2,
          name: "Task-Management-React.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://task-management-react-azure.vercel.app/",
          position: "top-40 left-30",
        },
        {
          id: 5,
          name: "todolist.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-50 left-60",
          imageUrl: "/images/todolist.png",
        },
        {
          id: 4,
          name: "dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 left-60",
          imageUrl: "/images/dashboard.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 3,
      name: "Expense Tracker Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-75",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Expense Tracker App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-10",
          description: [
            "Our Expense Tracker App is a convenient way to track your Expense.",
            "Think of it like your personal assistant to track your finances. Just name your list, give how much money u got or u cost, and it will calculate and show your balance, income, and expenses.",
            "Built with React and vite — fast, lightweight, and fully responsive."
          ],
        },
        {
          id: 2,
          name: "expense-tracker.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://expense-tracker-react-sigma-wine.vercel.app/",
          position: "top-10 left-55",
        },
        {
          id: 4,
          name: "Expense-Tracker-App.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-50 right-80",
          imageUrl: "/images/expense-tracker.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/syaihan5.jpg",
    },
    {
      id: 2,
      name: "chilling-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/syaihan-2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-70",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/syaihan.jpg",
      description: [
        "Hey! I'm Syaihan 👋 — a web developer who builds websites that actually look good and work properly.",
        "My stack of choice? JavaScript, React, and Next.js. I'm all about smooth interactions, fast load times, and UI that feels just right.",
        "I write clean, readable code — the kind your future self won't curse you for.",
        "When I'm not coding, I'm probably redesigning something at midnight, hunting down the perfect cup of coffee, or convincing myself a new gadget is a 'productivity investment' 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    // {
    //   id: 1,
    //   name: "trash1.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-10",
    //   imageUrl: "/images/trash-1.png",
    // },
    // {
    //   id: 2,
    //   name: "trash2.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-40 left-80",
    //   imageUrl: "/images/trash-2.png",
    // },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };