// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Aidemax Consultant",
    firstName: "",
    LastName: "AIDEMAX",
    btnText: "Hire Us",
    image: Hero_person,
    hero_content: [
      {
        count: "9+",
        text: "Years of Experience in Web development",
      },
      {
        count: "47+",
        text: "Projects Worked our my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "OUR TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "popular tool for designing user interfaces and collaborating on design projects in real-time",
        logo: figma,
      },
      {
        name: "Node js",
        para: "build scalable and efficient server-side applications using JavaScript",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Tool for graphic design, photo editing, and creating visual content for web and print",
        logo: ps,
      },
      {
        name: "React js",
        para: "Interactive web applications with reusable components",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "create high-fidelity mockups, wireframes, and prototypes for web and mobile applications",
        logo: sketch,
      },
      {
        name: "Python",
        para: " build web applications",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT WE OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Crafting customized websites from scratch to meet each client's unique requirements.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Designing visually appealing and user-friendly interfaces that align with the brand's identity and engage users effectively.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "Designing custom graphics, logos, and icons to complement the website's design and branding.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "OUR CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "OUR CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with Aidemax was an absolute pleasure. They developed a stunning website for my business, exceeding all my expectations. Their attention to detail and commitment to delivering on time was impressive. Highly recommend their services!”",
        img: avatar1,
        name: "JOHN JACKSON",
      },
      {
        review:
          "“I approached Aidemax for UI/UX design assistance, and I'm thrilled with the results. They created a beautiful and intuitive interface that perfectly reflects my brand. Their team was responsive, professional, and truly understood my vision. I couldn't be happier with the outcome.”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“I can't thank Aidemax enough for revamping our outdated website. Not only did they modernize the design, but they also optimized its performance, resulting in increased traffic and conversions. Their expertise in web development is unmatched, and I wouldn't hesitate to work with them again.”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“The Photoshop editing services provided by Aidemax were exceptional. They transformed our product images, making them look professional and polished. The quick turnaround time and attention to detail were impressive. Will definitely be using their services for future projects.”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire US",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Aidemax is a web development consultancy specializing in crafting custom websites, UI/UX design, and Photoshop editing services. Committed to innovation and excellence, they provide tailored solutions to meet each client's unique needs. With a customer-centric approach and a team of skilled professionals, Aidemax empowers businesses to thrive in the digital landscape.",
    btnText: "Hire Us",
  },
  Contact: {
    title: "Contact Us",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "support@aidemax.com",
        icon: GrMail,
        link: "mailto:support@44mart.com",
      },
      {
        text: "+1 760 383 1338",
        icon: MdCall,
        link: "https://wa.me/7603831338",
      },
      {
        text: "aidemax",
        icon: BsInstagram,
        link: "https://www.instagram.com/aidemax/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
