import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-mono text-xl font-bold uppercase tracking-tighter hover:text-primary transition-colors">
            <Terminal className="h-6 w-6" />
            <span>Gaurav_Nanda</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors font-mono uppercase"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
          <Button 
            variant="default" 
            className="brutal-btn bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-auto py-2"
            onClick={() => window.open("https://www.linkedin.com/in/gauravmuk/", "_blank")}
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-accent border border-transparent hover:border-border transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-lg font-medium hover:text-primary font-mono uppercase py-2 border-b border-border/50 last:border-0"
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="brutal-btn w-full mt-4 bg-primary text-primary-foreground rounded-none"
              onClick={() => window.open("https://www.linkedin.com/in/gauravmuk/", "_blank")}
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
