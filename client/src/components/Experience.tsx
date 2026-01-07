import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    company: "JustCall & SaaS Labs",
    role: "VP - Engineering",
    period: "Apr 2022 - Present",
    location: "New Delhi, India",
    description: "Leading a 110-engineer team focusing on B2B Sales Enablement. Responsible for JustCall, Helpwise, AI & Incubation Projects.",
    achievements: [
      "Introduced JustCall IQ (AI/ML), contributing to 5% of current MRR through real-time transcription & sentiment analysis.",
      "Scaled team from 55 to 110 engineers, reducing hiring time from 8 weeks to 3 weeks via automation.",
      "Led SOC-2 Type 1 & ISO 27001:2013 Certification efforts.",
      "Migrated to Containers, cutting load time by 63% and costs by 35%.",
      "Improved uptime from 95% to 99.995%, boosting G2 product score to 4.3.",
      "Enhanced developer satisfaction by 50% by introducing Go & Node.js."
    ],
    tags: ["Engineering Leadership", "AI/ML", "System Design", "SOC-2", "Cost Optimization"]
  },
  {
    company: "Forto",
    role: "Engineering Manager",
    period: "Aug 2021 - Jan 2022",
    location: "Berlin, Germany",
    description: "Led customer onboarding and platform integration initiatives for a leading digital freight forwarder.",
    achievements: [
      "Increased customer retention by 5% and lowered ramp-up time by 15%.",
      "Revamped Frontend Hiring process, improving hiring funnel by 30%.",
      "Increased DORA metric MTTR by 15% through 'Failure Friday' incident response training."
    ],
    tags: ["Team Leadership", "Hiring Strategy", "DORA Metrics", "NestJS", "React.js"]
  },
  {
    company: "VWO (Wingify)",
    role: "Associate Director - Engineering",
    period: "Jun 2015 - Jul 2021",
    location: "New Delhi, India",
    description: "Responsible for building VWO, Engineering Culture, Hiring & Open Source. Rose from Senior Engineer to Associate Director.",
    achievements: [
      "Led creation of VWO FullStack SDKs in 8 languages, used by 500+ engineering teams.",
      "Developed VWO Engage from scratch, scaling to 20 engineers and ~10% of revenue.",
      "Expanded infrastructure to handle 2 billion monthly notifications with 10% MoM growth.",
      "Reduced infrastructure costs by 90% for ingestion module via CPU task offloading.",
      "Released 5 open-source libraries, including 'across-tabs' (1700+ GitHub stars)."
    ],
    tags: ["Scalability", "Open Source", "SDK Design", "Infrastructure", "High Volume Systems"]
  },
  {
    company: "PayU Payments",
    role: "Software Engineer",
    period: "Jan 2015 - Jun 2015",
    location: "New Delhi, India",
    description: "Fintech development focused on merchant experience.",
    achievements: [
      "Developed Merchant Onboarding & Dashboard, reducing onboarding time by 50%."
    ],
    tags: ["Fintech", "Productivity", "Dashboard"]
  },
  {
    company: "Compro Technologies",
    role: "Software Engineer",
    period: "Jul 2012 - Jan 2015",
    location: "New Delhi, India",
    description: "Full-stack development for educational technology.",
    achievements: [
      "Transferred 30+ modules from Flex 3 to HTML5.",
      "Delivered mobile website increasing reader engagement by 20%."
    ],
    tags: ["Migration", "HTML5", "Mobile Web"]
  }
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 border-b border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
              Work <span className="text-primary">Log</span>
            </h2>
            <p className="text-muted-foreground font-mono">/var/log/career_history.txt</p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-sm font-mono text-muted-foreground">Total Experience</div>
            <div className="text-3xl font-bold">12+ YEARS</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={cn(
                "group relative border border-border transition-all duration-300",
                expandedIndex === index ? "bg-muted/30" : "bg-background hover:bg-muted/10"
              )}
            >
              {/* Header / Summary View */}
              <div 
                className="p-6 cursor-pointer flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-2xl font-bold uppercase tracking-tight">{exp.company}</h3>
                    <span className="hidden md:inline text-muted-foreground">|</span>
                    <h4 className="text-xl font-bold text-primary">{exp.role}</h4>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="hidden md:block">•</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex gap-2">
                    {exp.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-mono border border-border px-2 py-1">
                        {tag}
                      </span>
                    ))}
                    {exp.tags.length > 3 && (
                      <span className="text-xs font-mono border border-border px-2 py-1">+{exp.tags.length - 3}</span>
                    )}
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-none">
                    {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </div>
              </div>

              {/* Expanded Details View */}
              {expandedIndex === index && (
                <div className="px-6 pb-6 pt-0 animate-in slide-in-from-top-2 duration-200">
                  <div className="h-px w-full bg-border mb-6"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8">
                      <p className="text-lg mb-6 font-medium leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <h5 className="font-mono font-bold uppercase text-sm text-muted-foreground mb-4">Key Achievements</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-base">
                            <span className="text-primary font-bold mt-1">➜</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:col-span-4">
                      <h5 className="font-mono font-bold uppercase text-sm text-muted-foreground mb-4">Technologies & Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 text-xs font-mono font-bold border border-border bg-background uppercase hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Brutalist Shadow on Hover (only when collapsed) */}
              {expandedIndex !== index && (
                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity translate-x-1 translate-y-1"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
