import { ArrowUpRight, Github, Layers, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "JustCall AI",
    description: "Real-time meeting transcription, sentiment analysis, and AI-driven coaching system. Architected scalable ML pipeline processing thousands of concurrent calls. Contributes 5% of current MRR.",
    tech: ["AI/ML", "Real-time Processing", "Python", "Microservices"],
    stats: { label: "Revenue Impact", value: "5% MRR" }
  },
  {
    title: "JustCall AI Voice Agent",
    description: "AI-powered voice agent for automated customer interactions. Built NLP pipeline for intent recognition and response generation with sub-second latency.",
    tech: ["AI/ML", "Voice AI", "NLP", "Go"],
    stats: { label: "Latency", value: "<1s" }
  },
  {
    title: "Container Migration & Cost Optimization",
    description: "Architected and led migration from VMs to containerised infrastructure. Reduced load times by 63%, infrastructure costs by 35%, and enabled global data centre expansion.",
    tech: ["Docker", "Kubernetes", "Infrastructure", "Cost Optimization"],
    stats: { label: "Cost Savings", value: "35%" }
  },
  {
    title: "Platform Reliability Engineering",
    description: "Improved system uptime from 95% to 99.995% through architectural improvements, monitoring, and SLO implementation. Increased G2 product score to 4.3.",
    tech: ["Reliability", "Monitoring", "SLOs", "Distributed Systems"],
    stats: { label: "Uptime", value: "99.995%" }
  },
  {
    title: "VWO FullStack SDKs",
    description: "Led development of SDKs in 8 languages (JavaScript, Python, Java, Ruby, PHP, Go, C#, Node.js) for server-side A/B testing. Designed unified architecture ensuring consistency across 500+ engineering teams globally.",
    tech: ["Polyglot Programming", "SDK Design", "Architecture"],
    stats: { label: "Adoption", value: "500+ Teams" }
  },
  {
    title: "VWO Engage - High-Scale Notification Platform",
    description: "Built from ground up and scaled to 20 engineers. Handles 2 billion monthly Web Push Notifications with 10% MoM growth. Architected distributed queue system with Kafka and Redis. Contributes 10% of company revenue.",
    tech: ["Kafka", "Redis", "Node.js", "Distributed Systems"],
    stats: { label: "Scale", value: "2B/mo" }
  },
  {
    title: "Browser-Side Ingestion Optimization",
    description: "Redesigned visitor journey visualization by offloading CPU-intensive tasks from servers to browsers. Reduced infrastructure costs by 90% while improving data accuracy and real-time processing.",
    tech: ["JavaScript", "Performance", "Edge Computing"],
    stats: { label: "Cost Savings", value: "90%" }
  },
  {
    title: "across-tabs",
    description: "Open-source JavaScript library for cross-tab communication using Browser APIs. Enables real-time data sync across browser tabs. Used in production by multiple companies.",
    tech: ["JavaScript", "Open Source", "Browser API"],
    stats: { label: "GitHub Stars", value: "1.7k+" },
    link: "https://github.com/wingify/across-tabs"
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
