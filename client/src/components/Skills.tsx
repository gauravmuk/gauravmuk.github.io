import { Cpu, Database, Globe, Layout, Server, Shield, Code, Terminal, BarChart } from "lucide-react";

const skillCategories = [
  {
    title: "Leadership & Execution",
    icon: <Shield className="h-6 w-6" />,
    skills: ["Managing Managers", "Team Scaling (55→110)", "Mission/Vision/Roadmap", "Stakeholder Management", "OKRs", "Risk Mitigation", "Delivery Outcomes"]
  },
  {
    title: "Backend & Systems",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Go", "Python", "TypeScript", "Microservices", "System Design", "Distributed Systems", "SDK Design", "Scalability"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Globe className="h-6 w-6" />,
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "Kafka", "RabbitMQ", "Containerisation", "Cost Optimization", "Reliability Engineering"]
  },
  {
    title: "Frontend & Web",
    icon: <Layout className="h-6 w-6" />,
    skills: ["React.js", "Vue.js", "TypeScript", "HTML5/CSS3", "SPA Architecture", "Web Performance", "Mobile Web"]
  },
  {
    title: "Data & Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Real-time Processing", "AI/ML Integration", "Sentiment Analysis", "Data Pipelines"]
  },
  {
    title: "Process & Delivery",
    icon: <BarChart className="h-6 w-6" />,
    skills: ["Agile/Scrum/Kanban", "DORA Metrics", "SOC-2", "ISO 27001", "Technical Debt Reduction", "Cross-Functional Delivery"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-border bg-muted/30">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground font-mono">dependencies.json</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="border border-border bg-background p-6 hover:border-primary transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-mono uppercase">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 text-sm border border-border bg-muted/50 hover:bg-primary/10 hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
