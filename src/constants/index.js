import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
} from "../assets";





import tictactoeImage from "../assets/tictactoe.png";
import rockPaperScissorImage from "../assets/rock-paper-scissor.png";
import portfolioImg from "../assets/portfolio.png";
// import portfolioImage from '../assets/portfolio.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Exploring Backend",
    icon: backend,
  },
  {
    title: "Video Editing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "gitHub",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Starbucks",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Proficient in building dynamic and responsive websites using JavaScript and React, with a strong emphasis on creating intuitive and interactive user interfaces.",
      "Adept at developing websites that are optimized for various devices and screen sizes, ensuring a consistent and engaging user experience across all platforms.",
      "Focused on optimizing frontend performance, including fast loading times and smooth interactions, to deliver high-quality web experiences.",
      "Committed to staying current with the latest frontend technologies and best practices, continually improving skills to adapt to evolving industry standards.",
    ],
  },
  {
    title: "React Developer",
    company_name: "React JS",
    // icon: reactjs,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Proficient in building interactive and dynamic web applications using React",
      "Focused on developing responsive React applications that perform optimally across different devices and screen sizes, enhancing user experience.",
      "Experienced in integrating React with modern tools and libraries, such as Vite for faster builds and Tailwind CSS for streamlined styling.",
    ],
  },
  {
    title: "Exploring Backend",
    company_name: "Shopify",
    // icon: backend1,
    iconBg: "#383E56",
    date: "",
    points: [
      "Actively learning backend development to complement frontend skills, focusing on server-side technologies and how they integrate with frontend applications.",
      "Aiming to build complete, full-stack solutions by understanding and implementing both frontend and backend components for more comprehensive and robust web applications.",
      "Gaining experience with databases, including design, querying, and management, to effectively handle data storage and retrieval in backend development.",
    ],
  },
  {
    title: "Video Editing",
    company_name: "Meta",
    // icon: videoediting,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Proficient in video editing, using creative techniques to enhance visual storytelling and produce engaging content.",
      "Applies a unique perspective from video editing to frontend development, enriching web projects with creative design elements and multimedia.",
      "Experienced with various video editing software and tools, such as Adobe Premiere Pro or Cap Cut, to create high-quality and polished video content.",
      "Leverages video editing skills to enhance overall project presentation, integrating multimedia effectively into web development and other tech-related work.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Darshan proved me wrong.",
    name: "Om Kariya",
    designation: "Student",
    company: "VVP Engg. College",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Darshan does.",
    name: "Dhaval Parmar",
    designation: "Student",
    company: "VVP Engg. College",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Darshan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vasu Kalavadiya",
    designation: "Student",
    company: "VVP Engg. College",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Tic-Tac-Toe",
    description:
      "I created a Tic-Tac-Toe game using HTML, CSS, and JavaScript that provides a simple yet engaging user experience. The game features a clean and responsive design, built with CSS for layout and styling. The JavaScript code handles the game logic, including alternating turns between players, checking for win conditions, and detecting draws. The game highlights the winning combination or notifies when there's a tie.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoeImage,
    source_code_link: "https://github.com/",
    live_demo_link: "https://darshan192004.github.io/Tic_tac_toe-game/ttt.html",
  },
  {
    name: "Rock Paper Scissor",
    description:
      "I developed a Rock, Paper, Scissors game using HTML, CSS, and JavaScript that offers an interactive and fun experience. The user-friendly interface is styled with a responsive design. The JavaScript code manages the game mechanics, allowing players to choose between rock, paper, or scissors and face off against the computer's random choice. The game instantly displays the result, indicating whether the player wins, loses, or ties.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: rockPaperScissorImage,
    source_code_link: "https://github.com/",
    live_demo_link:
      "https://darshan192004.github.io/Rock-Paper-Scissor/rps.html",
  },
  {
    name: "Portfolio Website",
    description:
      "I built a portfolio website using HTML, CSS, and JavaScript to showcase my projects and skills. The website has a clean and simple design, making it easy for visitors to navigate. The HTML structure organizes the content, while CSS adds styles for a modern and responsive look, ensuring the site works well on different screen sizes. JavaScript is used to add interactive features like smooth scrolling and responsive menu buttons.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioImg,
    source_code_link: "https://github.com/",
    live_demo_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects};
