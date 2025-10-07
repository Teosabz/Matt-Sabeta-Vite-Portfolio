import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Monitor, Code } from "lucide-react";

// ✅ import images from src/assets
import tasteluxeImg from "../assets/tl.png";
import whispersImg from "../assets/whisper.png";
import bakersImg from "../assets/bakers.png";
import flickImg from "../assets/flick.png";
import picksyImg from "../assets/p.png";
import styleImg from "../assets/sty.png";
import eliteImg from "../assets/elite.png";
import zenImg from "../assets/ze.png";
import cooksyImg from "../assets/kuk.png";
import playhubImg from "../assets/playhub.png";
import newsImg from "../assets/news.png";
import takacoolerImg from "../assets/takacooler.png";
import comingSoonVideo from "../assets/coming-soon.mp4"; //  video

// ✅ Define type so github/demo are optional
type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: string;
  view?: string;
  github?: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "Tasteluxe",
      description:
        "TasteLuxe is a premium culinary app for food lovers, gourmets, and home chefs. It combines recipe discovery, restaurant insights, and personalized culinary experiences in a stylish, modern platform.",
      image: tasteluxeImg,
      technologies: ["HTML", "CSS", "JavaScript"],
      type: "development",
      view: "https://play-hub-theta.vercel.app/",
      github: "https://github.com/teosabz/tasteluxe",
    },
    {
      title: "Whispers-Of-Yore",
      description:
        "A folktale app built using Next.js, Tailwind CSS, and Node.js, featuring story browsing, filtering, and user interactions.",
      image: whispersImg,
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      type: "development",
      view: "https://whispers-of-yore.vercel.app/",
    },
    {
      title: "Baker's Inn Website",
      description:
        "A responsive clone of the Baker’s Inn homepage built with Next.js and Tailwind CSS. Includes dynamic sections, animations, and optimized images.",
      image: bakersImg,
      technologies: ["Next.js", "Tailwind CSS", "React"],
      type: "development",
      view: "https://bakers-inn-project.vercel.app/",
    },
    {
      title: "FlickPick-movieverse",
      description:
        "FlickPick lets you discover movies, watch trailers, and save your favorites.",
      image: flickImg,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "React"],
      type: "development",
      view: "https://flickpick-movieverse.vercel.app/",
    },
    {
      title: "Picksy",
      description:
        "Picksy, A modern e-commerce product catalog that makes browsing, searching, and filtering products simple and enjoyable.",
      image: picksyImg,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "React"],
      type: "development",
      view: "https://flickpick-movieverse.vercel.app/",
    },
    {
      title: "StyleSphere",
      description:
        "StyleSphere, A fashion discovery and style inspiration web app.",
      image: styleImg,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "React"],
      type: "development",
      view: "https://style-sphere-qjdeo2tnb-matthew-sabetas-projects.vercel.app/",
    },
    {
      title: "Elite Wheels",
      description:
        "Elite Wheels is a luxury car discovery web app designed to showcase high-end and exotic vehicles.",
      image: eliteImg,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "React"],
      type: "development",
      view: "https://elite-wheels.vercel.app/",
    },
    {
      title: "Zen Escape",
      description:
        "Zen Escape is a luxury wellness & relaxation app that helps people find calming retreats, spas, and relaxation experiences worldwide.",
      image: zenImg,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "React"],
      type: "development",
      view: "https://zen-escape.vercel.app/",
    },
    {
      title: "Cooksy",
      description:
        "Cooksy helps users turn whatever’s in their kitchen into delicious meals.",
      image: cooksyImg,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "React"],
      type: "development",
      view: "https://zen-escape.vercel.app/",
    },
    {
      title: "Playhub",
      description:
        "PlayHub is a central hub for gamers, offering discovery, social interaction, and tracking across all types of games.",
      image: playhubImg,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "React"],
      type: "development",
      view: "https://play-hub-theta.vercel.app/",
    },
    {
      title: "NewsPulse",
      description:
        "NewsPulse is a modern, responsive platform that delivers the latest headlines in a clean and engaging interface.",
      image: newsImg,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "React"],
      type: "development",
      view: "https://news-pulse-58pt.vercel.app/",
    },
    {
      title: "SpotOnEvents (Takacooler)",
      description:
        "SpotOnEvents is a modern event discovery and management platform designed to help users find, attend, and organize events that match their interests.",
      image: takacoolerImg,
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "React"],
      type: "development",
      view: "https://spoton-events-aka-takacooler.vercel.app/",
    },
    {
      title: "Coming Soon",
      description: "More projects on the way!",
      image: comingSoonVideo, // 🎥 will show <video>
      technologies: [],
      type: "upcoming",
    },
    {
      title: "Coming Soon",
      description: "More projects on the way!",
      image: comingSoonVideo, // 🎥 will show <video>
      technologies: [],
      type: "upcoming",
    },
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "development":
        return <Code className="w-5 h-5" />;
      case "infrastructure":
        return <Monitor className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case "development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "infrastructure":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "devops":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "hybrid":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "upcoming":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section className="py-20 px-6 flex-1 flex items-center">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent web apps and creative builds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 flex items-center overflow-hidden">
                {project.image.endsWith(".mp4") ? (
                  <video
                    src={project.image}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <Badge className={getProjectTypeColor(project.type)}>
                    <div className="flex items-center gap-1">
                      {getProjectIcon(project.type)}
                      <span className="capitalize">{project.type}</span>
                    </div>
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.view && (
                    <Button size="sm" asChild>
                      <a
                        href={project.view}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
