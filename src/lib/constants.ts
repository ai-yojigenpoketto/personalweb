import { NavItem, SocialLink } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ai-yojigenpoketto",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/lei-zhou-phd",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:rzhou213@gmail.com",
    icon: "mail",
  },
];

export const PROFILE = {
  name: "Lei Zhou",
  title: "Ph.D. Data Scientist",
  tagline: "Building Production GenAI & Agentic Applications",
  location: "Cary, NC",
  yearsExperience: "6+",
  bio: `Ph.D. Data Scientist with 6+ years of experience building scalable data and ML systems.
Currently focused on Production Generative AI and Agentic Applications at Lenovo.
Passionate about turning complex AI research into practical, production-ready solutions.`,
  education: [
    {
      degree: "Ph.D. Neuroscience",
      school: "McGill University",
    },
    {
      degree: "B.S. Biochemistry",
      school: "Wuhan University",
    },
  ],
};
