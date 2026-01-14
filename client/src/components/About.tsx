import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-border bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-2 bg-primary mb-8"></div>
            
            <div className="brutal-shadow border border-border bg-card p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-mono mb-2">Current Status</h3>
                <p className="text-muted-foreground mb-4">Head of AI & VP Engineering @ JustCall</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs font-mono border border-accent/50">AI Leadership</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs font-mono border border-accent/50">Revenue Growth</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs font-mono border border-accent/50">Hands-on Technical</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
            <p>
              <span className="font-bold bg-primary/20 px-1">I turn engineering into revenue.</span> 14 years building products that ship, teams that scale, and systems that don't break. Drove 4x ARR growth ($10M → $40M) and 15pp NRR improvement in 18 months. Launched AI product from 0 to $1M ARR in 6 months.
            </p>

            <p>
              As <span className="font-bold">Head of AI & VP of Engineering at JustCall & SaaS Labs</span>, I lead 110 engineers across product lines. I architected container migrations (63% faster load times, 35% cost reduction). Built JustCall AI—real-time transcription, sentiment analysis, AI-driven coaching—now <span className="font-bold">20% of MRR</span>. Led AI Voice Agent from 0 to $1M ARR in 6 months.
            </p>

            <p>
              <span className="font-bold">I'm a hands-on technical leader who codes.</span> Node.js, Go, Python, TypeScript. Docker, Kubernetes, Kafka, Redis. At VWO, I built SDKs in 8 languages for 500+ teams and scaled infrastructure to 2B monthly notifications. Shipped 5 open-source libraries including <span className="font-bold">across-tabs</span> (1,700+ GitHub stars). I debug production, review PRs, and architect systems that scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold font-mono text-xl mb-2">Revenue-Focused Execution</h4>
                <p className="text-muted-foreground text-sm">
                  "Build what drives revenue. Every architectural decision, every team hire, every technical bet—measured by business impact. Ship fast, measure ruthlessly, scale what works."
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold font-mono text-xl mb-2">Technical Leadership</h4>
                <p className="text-muted-foreground text-sm">
                  "Great leaders stay technical. I write code, review architecture, debug production issues, and mentor engineers on system design. Hands-on when it matters."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
