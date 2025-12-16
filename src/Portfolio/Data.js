import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaDatabase,FaLinkedin,FaExchangeAlt  } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiRedux,SiGithub } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import DataMarshall from './dm-logo_.png';
import Vhub from './vithub-logo.jpg';
import Cognifyz from './cognifyz-logo.png';
import logo from "./Project1.png";
import logo1 from "./Project2.png";
import logo2 from "./Project3.png";
import logo3 from "./Project4.png";


const Personal_Details = {
  name: "Hemanth Kumar Akurathi",
  Designation: ["Frontend Developer", "Python Developer", "Quality Auditor"],
  email: "hemanthkumar.akurathi2917@gmail.com",
  phone: "+91 6281143517",
  address: "Hyderabad, Telangana, India",
  socialLinks: {
    Github:{Icon:SiGithub, Link:"https://github.com/hemanthaarya"},
    LinkedIn:{Icon:FaLinkedin, Link:"https://www.linkedin.com/in/hemanth-kumar-akurathi-444609253/"},
    LeetCode:{Icon:TbBrandLeetcode, Link:"https://leetcode.com/u/hemanthaarya/"},
  },
  Resume: "",
  Description:
    "Quality Analyst at Data Marshall | Freelance Frontend Developer | Aspiring to Grow as a Frontend Developer | Skilled in HTML, CSS, JavaScript, ReactJS, ReduxJS, REST API | Passionate about crafting seamless user experiences and writing clean, efficient code.",
};

const EducationDetails = [
  {
    Level: "SSC",
    Institution: "ZPH School, Rajavolu, Guntur",
    YearOfCompletion: "2017",
    Percentage: "9.2 CGPA",
  },
  {
    Level: "Diploma",
    Institution: "GOVT Polytechnic College, Vijayawada",
    YearOfCompletion: "2020",
    Percentage: "7.2 CGPA",
  },
  {
    Level: "BTech",
    Institution: "Narasaraopeta Engineering College, Narasaraopeta",
    YearOfCompletion: "2023",
    Percentage: "7.8 CGPA",
  },
];

const Skills = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: RiJavascriptFill,
  ReactJS: FaReact,
  ReduxJS: SiRedux,
  "REST API": FaExchangeAlt,
  Python: FaPython,
  SQL: FaDatabase,
};

const Experiences = [
  {
    Company: "VIJAYAWADA INNOVATIVE TECHNOLOGY DEVELOPMENT HUB Pvt Ltd",
    Role: "Frontend Developer (Freelance)",
    Logo: Vhub,
    Location: "Vijayawada, Andhra Pradesh",
    Duration: "Freelance | March 2025 - Present",
    Description: "I am Working as a freelance Frontend Developer at VIJAYAWADA INNOVATIVE TECHNOLOGY DEVELOPMENT HUB Pvt Ltd, where I designed and developed their complete company webpage. Focused on creating a responsive, user-friendly interface using modern frontend technologies.",
  },
  {
    Company: "Data Marshall",
    Role: "Quality Analyst",
    Logo: DataMarshall,
    Location: "Irrumanzil, Hyderabad",
    Duration: "July 2024 - Present",
    Description: "I have started Working in the healthcare domain as a junior analyst managing claims adjudication, eligibility verification, and provider data with high accuracy. Consistent performance from problem solving skills and attention to detail earned me a promotion to Quality Analyst within six months.",
  },
  {
    Company: "Cognifyz Technologies Pvt Ltd",
    Role: "Web Development Intern",
    Logo: Cognifyz,
    Location: "Remote",
    Duration: "Internship | 1 Month",
    Description: "During my internship, I driven myself in the dynamic world of web development, adding my skills in front-end technologies. actively collaborated with a team of experienced developers, contributing to the design, development, and maintenance of responsive and user-friendly websites. I gained proficiency in HTML, CSS, React.JS to create interactive and visually appealing user interfaces. Moreover, I acquired hands-on experience in Front-end Technologies",
  },
];

const Projects = [
  {
    Image: logo,
    Title: "My Portfolio",
    Link: "https://keen-jelly-5087ca.netlify.app/",
  },
  {
    Image: logo,
    Title: "Shophub",
    Link: "https://main--lively-faun-f8109a.netlify.app/",
  },
  {    Image: logo2,
    Title: "VIT HUB",
    Link: "https://vhubinnovations.com/",
  },
  {
    Image: logo1, 
    Title: "Static Stacks Page",
    Link: "https://cute-cat-ea5249.netlify.app/",
  },
];

export  {
  Personal_Details,
  EducationDetails,
  Skills,
  Experiences,
  Projects,
};
