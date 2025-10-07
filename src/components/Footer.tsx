import { Github, Linkedin, Mail } from "lucide-react";
import type { PageType } from "../App";

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { key: "work", label: "Work" },
    { key: "blog", label: "Blog" },
    { key: "playground", label: "Playground" },
    { key: "connect", label: "Connect" },
  ];

  return (
    <footer className="relative mt-20 bg-white/10 backdrop-blur-2xl border-t border-white/20 transition-all duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <span className="font-medium text-foreground/90">
                Matthew Sabeta
              </span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20"></div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Navigation & Social */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key as PageType)}
                  className="text-sm text-muted-foreground hover:text-green-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              {[
                {
                  icon: Github,
                  href: "https://github.com/matthewsabeta",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/matthewsabeta",
                },
                {
                  icon: Mail,
                  href: "mailto:matthew.sabeta@example.com",
                },
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-white/15 transition-all duration-300 flex items-center justify-center group shadow-sm"
                >
                  <Icon className="w-5 h-5 text-foreground/90 group-hover:text-green-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-6 pt-6 border-t border-white/10">
          <nav className="flex justify-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key as PageType)}
                className="text-sm text-muted-foreground hover:text-green-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
