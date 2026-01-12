import { FiGlobe, FiDatabase } from "react-icons/fi";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { LuServer } from "react-icons/lu";
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';


const aboutContent = {
  title: 'About Me',
  introduction:
    "I'm a passionate full stack developer with a focus on creating efficient, scalable, and user-friendly web applications.",
  journey: {
    title: 'My Journey',
    description:
      'Full Stack Developer with 1 year of hands-on experience as a Front-End Developer, specializing in building scalable, responsive web applications. Proficient in modern front-end and back-end technologies, UI development, API integration, and performance optimization, with a strong focus on clean code and user experience.',
  },
  education: {
    title: 'Education & Experience',
    degree: 'Bachelor of Computer Science',
    institution: 'Acharya Prafulla Chandra College (2015-2019)',
    experience: {
      title: 'Frontend Developer',
      company: 'Shyam Steel Industries Limited',
      achievements: [
        'Developed and maintained scalable React.js applications, improving performance and usability.',
        'Built responsive, pixel-perfect UI from Figma designs using TailwindCSS.',
        'Integrated RESTful APIs with Axios/Fetch and optimized Redux state management.',
        {
          text: 'Improved UI performance by ',
          highlight: '30%',
          suffix: ' and reduced load times.',
        },
        {
          text: 'Delivered bi-weekly feature updates, maintaining ',
          highlight: '99.9% uptime',
          suffix: ' for ',
          highlight2: '2,000+ active users',
          end: '.',
        },
      ],
    },
  },
  skillsTitle: 'My Skills',
  technologiesTitle: 'What I Do',
};

const skills = [
    'Java',
    'Javascript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'HTML/CSS',
    'Tailwind CSS',
    'figma',
    'Bootstrap',
    'Git',
    'Postman',
    'REST API',
  ];
  // 'TypeScript', 'AWS', 'Next.js','Docker','DSA'

const technologies = [
  {
    logo: FiGlobe,
    heading: 'Frontend Development',
    Body: 'Creating responsive, accessible, and beautiful user interfaces with modern frameworks.',
  },
  {
    logo: LuServer,
    heading: 'Backend Development',
    Body: 'Building robust server-side applications and APIs that power web applications.',
  },
  {
    logo: FiDatabase,
    heading: 'Database Design',
    Body: 'Designing and implementing efficient database structures for optimal performance.',
  },
  {
    logo: RiExpandLeftRightLine,
    heading: 'API Development',
    Body: 'Creating RESTful APIs that connect frontend and backend systems.',
  },
];
const projects = [
    {
      image: project_1,
      project_name: 'React E-Commerce Web Application',
      description:
        'Built a responsive e-commerce web application using React.js and Tailwind CSS with Firebase authentication, Firestore real-time data management, Razorpay payment integration, and optimized form handling using React Hook Form.',
      tech: [
        'React',
        'Tailwind Css',
        'React-hook-form',
        'Razorpay',
        'Firebase',
      ],
      live_demo: 'https://ecommerce-store-liard-iota.vercel.app',
      code: 'https://github.com/abhi1994j/Ecommerce_Store',
    },
    {
      image: project_2,
      project_name: 'Zoomify- A real time video conferencing app',
      description:
        'Developed a high-performance Zoom-clone using React and Node.js, implementing scalable WebRTC protocols for video and optimizing frontend efficiency through reusable component architecture.',
      tech: [
        'React',
        'Tailwind Css',
        'React-hook-form',
        'WebRTC',
        'Node Js',
        'MongoDB',
        'Express js',
        'Socket.io',
      ],
      live_demo: 'https://zoomify-ruddy.vercel.app',
      code: 'https://github.com/abhi1994j/Zoomify',
    },
  ];
  export {aboutContent , skills ,technologies ,projects}
