"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useState } from "react";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

type TabType = "websites" | "extensions" | "google apps script";

// Add new projects here that will only show on this page
const ADDITIONAL_PROJECTS = [
  {
    title: "Luneshark",
    href: "https://luneshark.com",
    dates: "May 2025 - Jun 2025",
    active: true,
    description: "Luneshark is an AI-powered Web3 platform that combines Solana blockchain analytics, AI-driven chat and image generation, and real-time cryptocurrency insights. Built with Next.js 14, it delivers token analytics, trending assets, wallet integration, and intelligent media tools through a modern, scalable, and responsive interface.",
    technologies: ["Next.js", "Typescript", "shadcn/ui", "Solana Web3.js", "APIs", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://luneshark.com",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Luneshark_New",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "luneshark.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Solana Tracker",
    href: "https://solan-nine.vercel.app/",
    dates: "Aug 2025 - Sep 2025",
    active: true,
    description: "Solana Tracker is a modern Web3 portfolio dashboard for tracking Solana wallets in real time. It features Phantom wallet integration, live token balances, trending assets, and detailed wallet analytics, all wrapped in a sleek glassmorphic UI with dark/light theme support and responsive design.",
    technologies: ["Next.js", "Typescript", "shadcn/ui", "Solana Web3.js", "Solana RPC", "APIs", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://solan-nine.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Solana_User_Dashboard",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "solanatracker.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Flowkey",
    href: "https://flowkey-two.vercel.app/",
    dates: "Sep 2025 - Oct 2025",
    active: true,
    description: "FlowKey is a modern browser extension and web platform for stylish bookmark and workspace management. It features Phantom wallet authentication, custom layouts, privacy-first local storage, and a glassmorphic UI with interactive animations, delivering a seamless Web3-enhanced browsing experience.",
    technologies: ["React.js", "Javascript", "Lucide React", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://flowkey-two.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Flowkey_Homepage",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "flowkeyhomepage.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Polybiuos",
    href: "https://eigencode.vercel.app/",
    dates: "Jun 2025 - Jul 2025",
    active: true,
    description: "POLYBIUOS is an AI-powered developer platform for intelligent code generation, analysis, and media transformation. Featuring a cyberpunk, terminal-inspired UI, it leverages modern web technologies and OpenAI integration to automate workflows and enhance developer productivity across devices.",
    technologies: ["Next.js", "Typescript", "Radix UI", "TailwindCSS", "Framer Motion"],
    links: [
      {
        type: "Website",
        href: "https://eigencode.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Polybiuos_Project",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "polybiuos.mp4",
    category: "websites" as TabType,
  },
  {
    title: "Alphyre",
    href: "https://aphyre.vercel.app/",
    dates: "Nov 2025 - Dec 2025",
    active: true,
    description: "Alphyre is an advanced crypto trading intelligence platform that delivers real-time market analytics, multi-chain token tracking, AI-powered insights, and wallet analytics. Built with modern Web3 infrastructure, it features Solana-based USDC micro-payments via the X402 protocol, Phantom wallet integration, and a high-performance dashboard designed for serious crypto traders and researchers.",
    technologies: ["Next.js", "Typescript", "shadcn/ui", "TailwindCSS", "Charts", "Solana Web3.js", "APIs" , "x402 Protocol" , "USDC Payments"],
    links: [
      {
        type: "Website",
        href: "https://aphyre.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "source",
        href: "https://github.com/pasindupiumal03/Alphyre_Dashboard",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "Alphyre.mp4",
    category: "websites" as TabType,
  },

];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("websites");

  // Combine DATA.projects with additional projects
  const allProjects = [
    ...DATA.projects.map(p => ({ ...p, category: getProjectCategory(p.title) })),
    ...ADDITIONAL_PROJECTS
  ];

  const filteredProjects = allProjects.filter((project) => {
    return project.category === activeTab;
  });

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div
              className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
            />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">My Projects</span>
            </div>
            <div
              className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
            />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I&apos;ve worked on a variety of projects, from simple
              websites to complex web applications. Here are a few of my
              favorites.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 border border-border rounded-lg p-1 bg-muted/50">
            <button
              onClick={() => setActiveTab("websites")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "websites"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveTab("extensions")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "extensions"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Extensions
            </button>
            <button
              onClick={() => setActiveTab("google apps script")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "google apps script"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Google Apps Script
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
          {filteredProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to categorize existing projects
function getProjectCategory(title: string): TabType {
  if (title === "Bonk Terminal" || title === "Fraktom") {
    return "websites";
  } else if (title === "FlowKey - Bookmark & Layout Manager" || title === "FullGrab - Screenshot & Full Page Capture") {
    return "extensions";
  }
  return "google apps script";
}
