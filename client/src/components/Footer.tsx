import { Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-muted/50 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-mono text-xl font-bold uppercase tracking-tighter">
            <Terminal className="h-6 w-6" />
            <span>Gaurav_Nanda</span>
          </div>
          
          <div className="text-sm text-muted-foreground font-mono text-center md:text-right">
            <p>&copy; {currentYear} Gaurav Nanda. All rights reserved.</p>
            <p className="mt-1">Built with React, Tailwind & Neo-Brutalism.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
