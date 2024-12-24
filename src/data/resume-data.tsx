import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rajnish Kumar",
  initials: "RK",
  location: "Bhariwas, Haryana, India",
  locationLink: "https://maps.app.goo.gl/sEkHWLGRKvEuxZEJ6",
  about:
    "Creative and solution-driven Full Stack Engineer focused on delivering efficient and innovative web applications.",
  summary: (
    <>
      From crafting intuitive interfaces using modern front-end frameworks to
      designing efficient server-side applications, I thrive in bridging the gap
      between user experience and complex back-end processes.
    </>
  ),
  avatarUrl: "/profile.jpg",
  personalWebsiteUrl:
    "https://drive.google.com/file/d/1uKyd3BhUAi5ZIFpUUflhYDBaXAY8WZSo/view?usp=sharing",
  contact: {
    email: "raj21chahar@gmail.com",
    tel: "+919350410492",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Rajnish2105",
        icon: GitHubIcon,
        title: "Github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajnish-kumar21",
        icon: LinkedInIcon,
        title: "LinkedIn",
      },
      {
        name: "X",
        url: "https://x.com/raj21chahar",
        icon: XIcon,
        title: "X.com",
      },
    ],
  },
  education: [
    {
      school: "Guru Jambheshwar University of Science and Technology",
      degree: "B.Tech in Electronics and Communication",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Architect",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Postgresql",
    "Express",
    "MongoDB",
    "WebSockets",
    "Node.js",
    "Docker",
    "AWS",
    "C++ (DSA)",
    "Go (basic)",
  ],
  projects: [
    {
      title: "SnapRealm",
      techStack: [
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "AWS EC2",
        "WebSocket",
        "Node js",
        "Docker",
        "Prisma",
        "NeonDB",
      ],
      description:
        "Developed SnapRealm, an Instagram-like platform with Next.js, Prisma, PostgreSQL, and Cloudinary. Features include real-time chat with WebSocket, NextAuth authentication, infinite scrolling, responsive navigation, and optimized performance. Deployed on Vercel and EC2 for scalability.",
      logo: MonitoLogo,
      link: {
        label: "snaprealm.rajnishchahar.tech",
        href: "https://snaprealm.rajnishchahar.tech/",
      },
    },
    {
      title: "NextLevelFood",
      techStack: [
        "TypeScript",
        "Next.js",
        "Prisma",
        "Tailwind CSS",
        "PostgreSQL",
        "Cloudinary",
      ],
      description:
        "Developed NextFood, a recipe-sharing app with Next.js, TypeScript, and Prisma, serving multiple users at once. Features include recipe uploads, detailed pages, and contact functionality. Integrated Cloudinary for optimized image management and deployed on Vercel with responsive design, and Used NeonDB (online db) storage.",
      logo: ConsultlyLogo,
      link: {
        label: "nextlevelfood.rajnishchahar.tech",
        href: "https://nextlevelfood.rajnishchahar.tech",
      },
    },
    {
      title: "ColorPicker",
      techStack: [
        "React.js",
        "JSS",
        "Chroma-js",
        "Material UI",
        "react-router-dom",
      ],
      description:
        "Create my own color picker using react js. where you can create your own templates for color, pick a color in any format from any provided/made pallet in the webapp. Used Material UI for better UI interface",
      logo: MonitoLogo,
      link: {
        label: "color-picker",
        href: "https://color-picker-six-puce.vercel.app/",
      },
    },
  ],
  opensource: [
    {
      title: "Zeus",
      techStack: [
        "TypeScript",
        "Next.js",
        "Node. JS",
        "Supabase",
        "EC2",
        "PostgreSQL",
      ],
      description:
        "Gym Management System: Built for small gyms, supporting 100 daily users with features like admin dashboard, membership tracking, real-time updates, and a fast, responsive Next.js frontend.",
      logo: MonitoLogo,
      link: {
        label: "zeus.vishawdeepsingh.dev",
        href: "https://zeus.vishawdeepsingh.in/",
      },
    },
    {
      title: "Cinny",
      techStack: ["TypeScript", "JavaScript", "SCSS", "React", "MatrixSDK"],
      description:
        "Cinny is an open-source, modern, and user-friendly self-hosted Discord client built with a focus on privacy and customizability. It's designed to be lightweight and provide a more streamlined, distraction-free experience when interacting with Discord.",
      logo: MonitoLogo,
      link: {
        label: "cinny.in",
        href: "https://cinny.in/",
      },
    },
    {
      title: "p5.js Editor",
      techStack: [
        "JavaScript",
        "SCSS",
        "p5.js",
        "React",
        "HCL",
        "Shell",
        "Docker",
        "MDX",
      ],
      description:
        "The p5.js Editor is a website for creating p5.js sketches, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! You can create, share, or remix p5.js sketches without needing to download or configure anything. It is designed with beginners in mind, limiting features and frills. The editor is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone.",
      logo: MonitoLogo,
      link: {
        label: "editor.p5js.org",
        href: "https://editor.p5js.org/",
      },
    },
  ],
} as const;
