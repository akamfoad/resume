import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

import headshotUrl from "./headshot.png";

export const RESUME_DATA = {
  name: "Akam Foad",
  initials: "AF",
  location: "Erbil, Iraq",
  locationLink: "https://www.google.com/maps/place/Erbil",
  about: "Lead software engineer and Fullstack web developer.",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from idea to production. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and Remix. I have over 5 years of experience working remotely.",
  avatarUrl: headshotUrl.src,
  personalWebsiteUrl: "https://akamfoad.dev",
  contact: {
    email: "me@akamfoad.dev",
    tel: "+9647517456786",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/akamfoad",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akamfoad/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/akamfoad",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Salahaddin University | College of Engineering",
      degree: "Bachelor's Degree in Software Engineering and Informatics",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Gateway",
      link: "https://the-gw.com",
      badges: ["Hybrid"],
      title: "Lead Frontend Developer",
      start: "2023",
      end: "Present",
      description:
        "Started leading the frontend projects at First Iraqi Bank and Fastlink, meticulously architected applications depending on their goal, wether it's performance, scalability or change.",
    },
    {
      company: "Gateway",
      link: "https://the-gw.com",
      badges: ["Remote"],
      title: "Senior Frontend Developer",
      start: "2022",
      end: "2023",
      description:
        "Hired many great developers for various teams, First Iraqi Bank's launch was a successful one, started working and leading the team to build many great products and features, First Iraqi Bank's corporate platform among others.",
    },
    {
      company: "Gateway",
      link: "https://the-gw.com",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "July 2021",
      end: "Dec 2021",
      description:
        "Started working full time after graduating, the team was expanding and a lot of features were implemented that was necessary for FIB's public launch",
    },
    {
      company: "Gateway",
      link: "https://the-gw.com",
      badges: ["Remote"],
      title: "Part-Time Frontend Developer",
      start: "Nov 2020",
      end: "July 2021",
      description:
        "Implemented new features and maintained First Iraqi Bank's backoffice web application. Took on the initiative to rebuild their website",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Remix",
    "Node.js",
    "PWA",
  ],
  projects: [
    {
      title: "Passkeys",
      techStack: ["Side Project", "TypeScript", "Remix", "PWA"],
      description: "Secure and phishing-resistent way for authentication",
      link: {
        label: "passkeys.akamfoad.dev",
        href: "https://passkeys.akamfoad.dev",
      },
    },
    {
      title: "Hot Deals",
      techStack: ["TypeScript", "Remix"],
      description:
        "Finding Establishment's that give you cashback by paying with FIB",
      link: {
        label: "deals.fib.iq",
        href: "https://deals.fib.iq",
      },
    },
    {
      title: "Fraud Management System",
      techStack: ["TypeScript", "Remix"],
      description: "FIB's platform to detect and investigate fraud and more.",
    },
    {
      title: "Fastlink Selfcare",
      techStack: ["Full Stack Developer", "JavaScript", "Remix", "PWA"],
      description: "Selfcare portal for Fastlink Telecom customers.",
    },
    {
      title: "Fastlink Admin",
      techStack: ["Full Stack Developer", "JavaScript", "Remix"],
      description:
        "Admin portals for fastlink Customer Service as well as technical support team.",
    },
    {
      title: "FIB Corporate Platform",
      techStack: ["JavaScript", "React", "Redux"],
      description:
        "FIB's corporate platform, payroll distribution, terminal management",
    },
    {
      title: "akamfoad.dev",
      techStack: ["TypeScript", "Next.js"],
      description: "My personal portfolio and blog, built with Next.js and MDX",
      link: {
        label: "Personal Portfolio",
        href: "https://akamfoad.dev/",
      },
    },
    {
      title: "FIB's Website",
      techStack: ["JavaScript", "Next.js"],
      description: "First Iraqi Bank's website and developer docs",
      link: {
        label: "First Iraqi Bank Website",
        href: "https://fib.iq/en",
      },
    },
    {
      title: "FIB Backoffice Platform",
      techStack: ["JavaScript", "React"],
      description:
        "FIB's backoffice platform, user management, applicant management and more",
    },
  ],
} as const;
