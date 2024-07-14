import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import ReactIcon from "../assets/svg/ReactIcon.svg"
import NextJS from "../assets/technologies/NextJS.svg"
import Mongo from "../assets/technologies/Mongo.svg"
import Node from "../assets/technologies/Node.svg"
import Express from "../assets/technologies/express.svg"
import vercel from "../assets/technologies/hostinger.svg"
import Lottie from "react-lottie";







export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "#features",
  },
  {
    id: "1",
    title: "Services",
    url: "#services",
  },
  {
    id: "2",
    title: "Workflow",
    url: "#workflow",
  },


  {
    id: "3",
    title: "Contact",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Mordern",
  "Customisable",
  "For Firms/Agencies/Personal",
  "Advanced Development Solutions",
  "Responsive"
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "1) Creating Visually Stunning Designs",
    text: "Collaborate with clients to craft detailed wireframes and mockups using Figma.",
    date: "Within 2 days",
    status: "done",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: roadmap1,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    },
    colorful: true,
  },
  {
    id: "1",
    title: "2) Bringing Designs to Life with Code",
    text: "Develop responsive and interactive interfaces.",
    date: "Within 1 week",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: roadmap2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    },
  },
  {
    id: "2",
    title: "3)Building Robust and Scalable Systems:",
    text: "Create reliable server-side logic, integrate secure databases.",
    date: "2nd Week",
    status: "done",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: roadmap3 ,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    },
  },
  {
    id: "3",
    title: "4) Making Your Application Live",
    text: "Optimize performance, deploy on reliable hosting platforms, and ensure continuous monitoring and maintenance.",
    date: "The Next day",
    status: "progress",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: roadmap4,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    },
  },
];

export const animations=[
  {
    
    "animation2": {
      "loop": true,
      "autoplay": true,
      "animationData": "./path/to/animationData2.json",
      "rendererSettings": {
        "preserveAspectRatio": "xMidYMid slice"
      }
    }
  }
  
];

export const collabText =
  "With the latest technology, it's the perfect solution for businesses looking to elevate their online presence";

export const collabContent = [
  {
    id: "0",
    title: "Seamless user Interface",
    text: collabText,
  },
  {
    id: "1",
    title: "Scalable",
  },
  {
    id: "2",
    title: "Multi Plaform Support",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "React",
    icon: ReactIcon,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "NextJS",
    icon: NextJS,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "NodeJs",
    icon: Node,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "express",
    icon: Express,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "MongoDB",
    icon: Mongo,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Vercel",
    icon: vercel,
    width: 22,
    height: 22,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "UI/UX",
    text: "We create user-friendly interfaces that captivate and engage. Our expert team designs intuitive, visually appealing, and functional experiences to elevate your brand and achieve your business goals.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Frontend",
    text: "We offer top-tier front-end development, crafting responsive, high-performance websites and applications. Using the latest Technologies we build visually stunning, interactive interfaces for a seamless user experience across all devices.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Backend",
    text: "We specialize in backend development, creating robust systems and APIs to power your applications. Our expertise includes Node.js, Express.js etc ensuring scalable, secure solutions tailored to your business.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "REST APIs",
    text: "Creating powerful and scalable REST APIs to drive seamless communication between applications and services.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Database",
    text: "Optimized database solutions for efficient data storage and management",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Maintenance",
    text: "Ongoing website maintenance for optimal performance, security, and functionality.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
