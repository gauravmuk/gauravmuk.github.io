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
              I am an <span className="font-bold bg-primary/20 px-1">Engineering Leader, Manager, and Product Evangelist</span> who believes that great software is built at the intersection of technical excellence and deep customer empathy. With over 14 years of experience, I don't just manage teams; I cultivate cultures of innovation where engineering fuels product growth.
            </p>
            
            <p>
              Currently, as <span className="font-bold">VP of Engineering at JustCall & SaaS Labs</span>, I lead a 110+ engineer organization. My role transcends traditional engineering management—I partner closely with product and business leaders to define strategy, ensuring our technical roadmap directly accelerates our business goals, from AI-driven features to global infrastructure scaling.
            </p>
            
            <p>
              My journey through leadership roles at <span className="font-bold">Forto</span> and <span className="font-bold">VWO</span> has taught me that scaling systems is easy, but scaling teams and culture is the real challenge. I specialize in building autonomous, high-velocity teams that take ownership of their impact.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold font-mono text-xl mb-2">Leadership Philosophy</h4>
                <p className="text-muted-foreground text-sm">
                  "Empower teams with context, not control. Great leaders create environments where engineers can solve business problems, not just write code."
                </p>
              </div>
              
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold font-mono text-xl mb-2">Product Vision</h4>
                <p className="text-muted-foreground text-sm">
                  "Technology is the vehicle, but value is the destination. I advocate for engineering that is deeply aligned with user needs and market opportunities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
