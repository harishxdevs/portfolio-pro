/* Edit this file to change your projects. Everything else renders from it.
   links: array of { label, url }. */
window.PROJECTS = [
  {
    id: 'sales-savvy',
    title: 'Sales Savvy',
    year: '2025',
    blurb:
      'Full-stack e-commerce platform with product management, cart, secure checkout and Razorpay payments.',
    desc: 'An end-to-end e-commerce application. Customers register, browse by category, manage a cart and pay with Razorpay; admins manage the catalogue, users and business stats. The Spring Boot API uses JWT in HttpOnly cookies with role-based access, and is configured entirely through environment variables so the same build runs locally, in Docker, or on a free cloud host.',
    points: [
      'Spring Boot 3 REST API with Spring Data JPA and MySQL',
      'React + Vite storefront and admin dashboard',
      'JWT auth in HttpOnly cookies, role-based filter for customer and admin routes',
      'Razorpay order creation and signature verification',
      'Dockerised, with Render blueprint and GitHub Pages deployment',
    ],
    tags: ['Spring Boot', 'Java', 'ReactJS', 'MySQL', 'Razorpay'],
    links: [
      { label: 'Live demo', url: 'https://harishxdevs.github.io/sales-savvy-frontend/' },
      { label: 'Frontend code', url: 'https://github.com/harishxdevs/sales-savvy-frontend' },
      { label: 'Backend code', url: 'https://github.com/harishxdevs/sales-savvy-backend' },
    ],
  },
  {
    id: 'algolab',
    title: 'AlgoLab',
    year: '2026',
    blurb:
      'Interactive visualiser for six sorting and five pathfinding algorithms, with live stats and step mode.',
    desc: 'Every algorithm is written as a TypeScript generator that yields one frame per operation, and the UI plays those frames with requestAnimationFrame. Compare Bubble, Insertion, Selection, Merge, Quick and Heap sort on the same data, or draw walls and weighted cells and watch BFS, DFS, Dijkstra, A* and Greedy Best-First search the grid.',
    points: [
      'Algorithms as generators: the same code drives the animation and can be tested step by step',
      'Live comparison, write and elapsed-time counters with Big-O reference',
      'Grid editor with walls, weights, movable start and target, and a recursive-division maze generator',
      'Step mode, adjustable speed up to 600 steps per second, dark and light themes',
    ],
    tags: ['TypeScript', 'ReactJS', 'Vite', 'DSA'],
    links: [
      { label: 'Live demo', url: 'https://algo-visualizer1.vercel.app/' },
      { label: 'Source', url: 'https://github.com/harishxdevs/algo-visualizer' },
    ],
  },
  {
    id: 'task-tidy',
    title: 'Task Tidy',
    year: '2024',
    blurb:
      'A fast three-column task board with drag and drop, inline editing, filtering and local persistence.',
    desc: 'A focused task manager. Tasks move between Upcoming, In Progress and Finished by button or drag and drop, can be edited in place, filtered by text, and are saved in the browser so nothing is lost on refresh. Built in React with no UI libraries.',
    points: [
      'Drag and drop between lists with HTML5 DnD',
      'Double-click to edit, Enter to save, Esc to cancel',
      'Filter box, progress meter and empty states',
      'Persists to localStorage; fully responsive',
    ],
    tags: ['ReactJS', 'JavaScript', 'CSS'],
    links: [
      { label: 'Live demo', url: 'https://todotaskmanagement.vercel.app/' },
      { label: 'Source', url: 'https://github.com/harishxdevs/todo' },
    ],
  },
  {
    id: 'creative-portfolio',
    title: 'Creative portfolio',
    year: '2026',
    blurb:
      'An interactive, themed version of this portfolio: plain HTML, CSS and JavaScript with no frameworks or build step.',
    desc: 'A hand-built single-page site with six switchable visual themes, each with its own background scenery, typography, cursor and canvas particle system. Everything from the particle fields to the command palette is written in vanilla JavaScript with no dependencies, and deployed for free on GitHub Pages.',
    points: [
      'Six themes driven entirely by CSS custom properties',
      'Canvas particle systems and click effects that follow the active theme',
      'Project filters, detail modal and a Cmd+K command palette',
      'Draggable physics-based skill chips',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Live site', url: 'https://harishxdevs.github.io/portfolio/' },
      { label: 'Source', url: 'https://github.com/harishxdevs/portfolio' },
    ],
  },
]
