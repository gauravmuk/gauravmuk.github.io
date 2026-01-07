import { ArrowUpRight, Github, Layers, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "JustCall IQ (AI/ML)",
    description: "Real-time meeting transcription, sentiment analysis, and data-driven coaching system. Contributes to 5% of current MRR.",
    tech: ["AI/ML", "Real-time Processing", "Sentiment Analysis", "Python"],
    stats: { label: "Revenue Impact", value: "5% MRR" }
  },
  {
    title: "VWO FullStack SDKs",
    description: "Created SDKs in 8 different languages enabling server-level Feature Rollout and A/B Testing. Utilized by 500+ engineering teams worldwide.",
    tech: ["Polyglot Programming", "SDK Design", "Server-side Testing"],
    stats: { label: "Adoption", value: "500+ Teams" }
  },
  {
    title: "across-tabs",
    description: "Open-source library for cross-tab communication. Facilitated hiring and garnered significant community attention.",
    tech: ["JavaScript", "Open Source", "Browser API"],
    stats: { label: "GitHub Stars", value: "1.7k+" },
    link: "https://github.com/wingify/across-tabs"
  },
  {
    title: "VWO Engage",
    description: "Developed from ground up and scaled to 20 engineers. Enables marketing teams to engage audiences via Web Push Notifications.",
    tech: ["Web Push", "Scalability", "Team Building"],
    stats: { label: "Revenue", value: "~10%" }
  },
  {
    title: "Notification Infrastructure",
    description: "Expanded infrastructure to send 2 billion monthly notifications with consistent 10% month-over-month growth.",
    tech: ["High Scale", "Distributed Systems", "Infrastructure"],
    stats: { label: "Volume", value: "2B/mo" }
  },
  {
    title: "Ingestion Module Optimization",
    description: "Enhanced visitor journey visualization ingestion, reducing infrastructure costs by 90% through CPU task offloading to browsers.",
    tech: ["Performance", "Cost Optimization", "Edge Computing"],
    stats: { label: "Cost Savings", value: "90%" }
  },
  {
    title: "Flappy Ball (JS13k)",
    description: "Physics-based casual game built under 13kb constraint. Featured in JS13k Games competition.",
    tech: ["Creative Coding", "Physics Engine", "Constraint Engineering"],
    stats: { label: "Size Limit", value: "< 13KB" },
    link: "https://play.js13kgames.com/flappy-ball/",
    github: "https://github.com/gauravmuk/flappy-ball-js13k16"
  },
  {
    title: "Lost Cruise (JS13k)",
    description: "Survival strategy game built under 13kb constraint. Demonstrates complex game logic in minimal footprint.",
    tech: ["Game Dev", "Optimization", "JS13k"],
    stats: { label: "Size Limit", value: "< 13KB" },
    link: "https://js13kgames.com/2017/games/lost-cruise",
    github: "https://github.com/gauravmuk/lost-cruise-js13k17"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-border bg-background">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground font-mono">git log --oneline --graph</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col h-full border border-border bg-card brutal-shadow hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_var(--color-border)] transition-all duration-200"
            >
              <div className="p-6 border-b border-border bg-muted/20 flex justify-between items-center">
                <Layers className="h-6 w-6 text-primary" />
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold font-mono">{project.title}</h3>
                  {project.stats && (
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground">{project.stats.label}</span>
                      <span className="text-sm font-bold text-primary">{project.stats.value}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-2 py-1 bg-primary/10 text-primary border border-primary/20 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.link ? (
                      <Button 
                        variant="outline" 
                        className="flex-1 justify-between group rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <span>{project.title.includes("JS13k") ? "Play Game" : "View Project"}</span>
                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    ) : (
                      <div className="h-10 flex-1 border border-border/20 bg-muted/10 flex items-center justify-center text-xs font-mono text-muted-foreground uppercase">
                        Internal / Proprietary
                      </div>
                    )}
                    
                    {/* @ts-ignore */}
                    {project.github && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-none border-border hover:bg-foreground hover:text-background transition-colors w-10 shrink-0"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            variant="ghost" 
            className="font-mono underline underline-offset-4 hover:text-primary"
            onClick={() => window.open("https://github.com/wingify", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View Open Source Contributions
          </Button>
        </div>
      </div>
    </section>
  );
}
