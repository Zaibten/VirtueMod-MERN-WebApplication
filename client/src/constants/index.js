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
  brandone,
  brandtwo,
  brandthree,
  brandfour,
  brandfive,
  brandsix,
  brandseven,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
    {
    id: "1",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "3D Model",
    url: "#3dmodel",
  },
    {
    id: "4",
    title: "Team",
    url: "#team",
  },
    {
    id: "5",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "6",
    title: "Sign in",
    url: "/register",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, brandone, brandtwo, brandthree, brandfour,brandfive,brandsix,brandseven];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
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
    title: "AI Model Image Generation",
    text: "Develop advanced AI algorithms to generate realistic images of male and female models from user prompts or uploaded photos.",
    date: "May 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Enhanced Image Customization",
    text: "Add options for users to customize generated models’ poses, outfits, and backgrounds to personalize their creations.",
    date: "March 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Real-time Photo Enhancement",
    text: "Integrate photo enhancement features that improve user images and generated content with smart filters and adjustments.",
    date: "April 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Seamless Platform Integration",
    text: "Enable easy integration with popular social media and design platforms for effortless sharing and exporting of generated images.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Empower your team with intuitive AI tools, real-time collaboration, and enterprise-grade security.";

export const collabContent = [
  {
    id: "0",
    title: "Effortless Collaboration",
    text: collabText,
  },
  {
    id: "1",
    title: "AI-Powered Productivity",
  },
  {
    id: "2",
    title: "Secure & Reliable by Design",
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
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
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
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
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
    title: "Instant Insights",
    text: "Virtua Mod delivers answers in real-time so you can move from question to clarity instantly.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Smarter Every Day",
    text: "Powered by continual learning, Virtua Mod improves with every interaction to serve you better.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Universal Access",
    text: "Use Virtua Mod on any device, from any location—your assistant is always within reach.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Blazing Speed",
    text: "Optimized for performance, Virtua Mod responds faster than traditional AI systems.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Human-Like Interaction",
    text: "Enjoy a seamless, natural language experience that feels more like a conversation than a query.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Seamless Integrations",
    text: "Connect Virtua Mod to your tools and platforms to streamline your workflow effortlessly.",
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
