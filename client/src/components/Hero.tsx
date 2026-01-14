import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-border overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-accent text-accent-foreground font-mono text-sm font-bold uppercase tracking-wider"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
              </span>
              Turning Engineering Into Revenue
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              ENGINEERING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">LEADERSHIP.</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light border-l-4 border-primary pl-6 space-y-4"
            >
              <p>
                <span className="font-bold text-foreground">4x ARR growth ($10M → $40M). AI product 0 → $1M ARR in 6 months. 99.995% uptime from 95%. 110 engineers scaled from 55.</span>
              </p>
              <p className="text-lg text-muted-foreground/80">
                14 years building products that ship, teams that scale, and systems that don't break. <span className="font-bold text-foreground">Head of AI. VP Engineering.</span> I write code (Node.js, Go, Python), architect systems (Docker, Kubernetes), and turn engineering into revenue.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="brutal-btn bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 text-lg gap-2"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Impact <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="brutal-btn bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-none h-14 text-lg gap-2"
                onClick={() => window.open("https://www.linkedin.com/in/gauravmuk/", "_blank")}
              >
                Download CV <Download className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          
          {/* Visual Element / Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="brutal-shadow border border-border bg-card p-1">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive border border-destructive-foreground/20"></div>
                  <div className="w-3 h-3 rounded-full bg-accent border border-accent-foreground/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 border border-green-800/20"></div>
                </div>
                <div className="text-xs font-mono text-muted-foreground">gaurav@leadership:~/vision</div>
              </div>
              <div className="p-6 font-mono text-sm space-y-4 min-h-[300px]">
                <div className="flex gap-2">
                  <span className="text-primary">➜</span>
                  <span className="text-accent">~</span>
                  <span>cat revenue_impact.json</span>
                </div>
                <div className="text-muted-foreground pl-4">
                  &#123;<br/>
                  &nbsp;&nbsp;"arr_growth": "$10M → $40M (4x)",<br/>
                  &nbsp;&nbsp;"ai_product": "0 → $1M ARR (6mo)",<br/>
                  &nbsp;&nbsp;"team_scale": "55 → 110 engineers",<br/>
                  &nbsp;&nbsp;"uptime": "95% → 99.995%"<br/>
                  &#125;
                </div>

                <div className="flex gap-2">
                  <span className="text-primary">➜</span>
                  <span className="text-accent">~</span>
                  <span>echo $ROLE</span>
                </div>
                <div className="text-muted-foreground pl-4">
                  Head of AI | VP Engineering<br/>
                  Node.js | Go | Python | TypeScript<br/>
                  Docker | Kubernetes | Kafka
                </div>

                <div className="flex gap-2">
                  <span className="text-primary">➜</span>
                  <span className="text-accent">~</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-0 w-full border-t border-border bg-background py-2">
        <div className="container flex justify-between items-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span>Scroll for more</span>
          <div className="flex gap-4">
            <span>v2.0.0</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
