import { FiGlobe, FiDatabase } from "react-icons/fi";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { LuServer } from "react-icons/lu";
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';

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
  export {skills ,technologies ,projects}
