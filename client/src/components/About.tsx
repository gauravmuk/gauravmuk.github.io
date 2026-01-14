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
                <p className="text-muted-foreground mb-4">VP of Engineering @ JustCall & SaaS Labs</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs font-mono border border-accent/50">Engineering Leadership</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs font-mono border border-accent/50">Product Strategy</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs font-mono border border-accent/50">Hyper-Growth</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
            <p>
              <span className="font-bold bg-primary/20 px-1">Engineering leader with 12+ years building and scaling high-performing teams.</span> I've grown engineering organizations from 55 to 110+ engineers, improved system reliability from 95% to 99.995% uptime, and delivered complex cross-functional initiatives including SOC-2 and ISO certifications.
            </p>

            <p>
              As <span className="font-bold">VP of Engineering at JustCall & SaaS Labs</span>, I lead architectural strategy and technical execution. I architected container migrations that reduced load times by 63% and infrastructure costs by 35%. I introduced <span className="font-bold">JustCall AI</span>—real-time transcription, sentiment analysis, AI-driven coaching—now contributing 5% of MRR.
            </p>

            <p>
              <span className="font-bold">I'm a hands-on technical leader who codes.</span> I work with Node.js, Go, Python, TypeScript, Docker, Kubernetes, and build systems that scale. At VWO, I built SDKs in 8 languages for 500+ engineering teams and scaled VWO Engage to handle 2 billion monthly notifications. I've shipped 5 open-source libraries including <span className="font-bold">across-tabs</span> (1,700+ GitHub stars).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold font-mono text-xl mb-2">Execution & Delivery</h4>
                <p className="text-muted-foreground text-sm">
                  "Ship fast, measure impact, iterate relentlessly. I balance delivery velocity with long-term technical sustainability and measurable business outcomes."
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold font-mono text-xl mb-2">Technical Leadership</h4>
                <p className="text-muted-foreground text-sm">
                  "Great leaders stay technical. I write code, review architecture, debug production issues, and mentor engineers on system design and scalability."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
