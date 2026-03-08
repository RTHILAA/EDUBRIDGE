import UI_UX from "../../assets/images/UI_UX.jpg";
import ProjectDesign from "../../assets/images/ProjectDesign.jpg";
import WebDevelopment from "../../assets/images/WebDevelopment.jpg";


const CoursesData = [
  {
    id: 1,
    img: UI_UX,
    department: "Design Academy",
    title: "UI/UX Masterclass",
    rating: "4.8",
    description:
      "Design stunning interfaces and master user psychology. Go beyond aesthetics to create products that solve real problems and delight users.",
    sales: "120+ Sales",
    originalPrice: 11.99,
    discountPrice: 4.99,
    duration: "22h 30m",
    lessons: "64 Lessons",
  },

  {
    id: 2,
    img: ProjectDesign,
    department: "Software Engineering",
    title: "Strategic Project Architecture",
    rating: "4.6",
    description:
      "Bridge the gap between ideas and execution. Learn to architect scalable software systems and lead development teams with confidence.",
    sales: "190+ Sales",
    originalPrice: 15.99,
    discountPrice: 7.99,
    duration: "30h 30m",
    lessons: "121 Lessons",
  },

  {
    id: 3,
    img: WebDevelopment,
    department: "Full-Stack Development",
    title: "Modern Web Development",
    rating: "4.9",
    description:
      "Fast-track your journey to becoming a frontend developer. Master the core technologies of the web and build a portfolio of live projects.",
    sales: "320+ Sales",
    originalPrice: 10.99,
    discountPrice: 8.99,
    duration: "16h 40m",
    lessons: "107 Lessons",
  },
];

export default CoursesData;