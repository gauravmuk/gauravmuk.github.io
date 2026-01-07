import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-md">
              Interested in discussing scalable systems, backend architecture, or potential opportunities? I'm always open to meaningful conversations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 border border-border bg-muted/20">
                <div className="p-3 bg-primary text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground uppercase">Email</div>
                  <a href="mailto:gauravn@duck.com" className="text-lg font-bold hover:text-primary transition-colors">
                    gauravn@duck.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 border border-border bg-muted/20">
                <div className="p-3 bg-primary text-primary-foreground">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground uppercase">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/gauravmuk/" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-primary transition-colors">
                    linkedin.com/in/gauravmuk
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 border border-border bg-muted/20">
                <div className="p-3 bg-primary text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground uppercase">Location</div>
                  <div className="text-lg font-bold">
                    New Delhi, India
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="brutal-shadow border border-border bg-card p-8">
            <h3 className="text-2xl font-bold font-mono mb-6 uppercase">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold font-mono uppercase">Name</label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="John Doe" 
                    className="rounded-none border-border focus-visible:ring-primary h-12 bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold font-mono uppercase">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="john@example.com" 
                    className="rounded-none border-border focus-visible:ring-primary h-12 bg-background"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold font-mono uppercase">Subject</label>
                <Input 
                  id="subject" 
                  required 
                  placeholder="Project Inquiry" 
                  className="rounded-none border-border focus-visible:ring-primary h-12 bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold font-mono uppercase">Message</label>
                <Textarea 
                  id="message" 
                  required 
                  placeholder="Tell me about your project..." 
                  className="rounded-none border-border focus-visible:ring-primary min-h-[150px] bg-background resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full brutal-btn bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 text-lg gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="h-5 w-5" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
