import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Github,
  Linkedin,
  Mail,
  User,
  Code,
  Server,
  MessageCircle,
  Download,
} from "lucide-react";
import type { PageType } from "../App";

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const navigationCards = [
    {
      id: "about" as PageType,
      icon: User,
      title: "About Me",
      description: "Learn about my background",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      id: "projects" as PageType,
      icon: Server,
      title: "Projects",
      description: "See my work in action",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: "contact" as PageType,
      icon: MessageCircle,
      title: "Contact",
      description: "Let's work together",
      gradient: "from-teal-500 to-green-600",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 to-emerald-400/20 rounded-2xl blur-2xl scale-110"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwc2V0dXAlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5MjE5MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern technology workspace setup"
                className="relative z-10 w-32 h-20 md:w-48 md:h-32 rounded-2xl object-cover border-4 border-white/25 shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Matthew Sabeta
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-foreground/80 mb-6 font-medium">
            Software Developer & IT Support Specialist
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating efficient software solutions and providing
            comprehensive IT support. I bridge the gap between development and
            operations with expertise in both coding and system administration.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-16">
            <a
              href="https://github.com/Teosabz"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="http://linkedin.com/in/matthew-sabeta"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:matthewsabeta0@gmail.com"
              className="glass p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={() => onNavigate("projects")}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 shadow-lg"
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate("contact")}
            className="border-white/20 hover:bg-white/10"
          >
            Get In Touch
          </Button>

          {/* ✅ Download CV Button */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 hover:bg-white/10"
          >
            <a href="/Matthew_Sabeta_CV.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {navigationCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group text-left"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
