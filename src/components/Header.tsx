import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import type { PageType } from "../App";

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/20 backdrop-blur-2xl border-b border-white/20"
          : "bg-white/10 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">MS</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl blur-lg opacity-30"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Matthew Sabeta
              </h1>
              <p className="text-xs text-muted-foreground">
                Developer & IT Specialist
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { key: "home", label: "Home" },
              { key: "about", label: "About" },
              { key: "projects", label: "Projects" },
              { key: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key as PageType)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.key
                    ? "text-primary bg-white/10"
                    : "text-foreground/80 hover:text-primary hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => handleNavigation("contact")}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 shadow-lg"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white/20 backdrop-blur-2xl border-t border-white/20 rounded-xl">
            <nav className="flex flex-col gap-2">
              {[
                { key: "home", label: "Home" },
                { key: "about", label: "About" },
                { key: "projects", label: "Projects" },
                { key: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key as PageType)}
                  className={`px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                    currentPage === item.key
                      ? "text-primary bg-white/10"
                      : "text-foreground/80 hover:text-primary hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavigation("contact")}
                className="mt-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0"
              >
                Let's Connect
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
