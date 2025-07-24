import { Palette, Video, Sparkles } from "lucide-react";

const About = () => {
  const tools = [
    "Photoshop", "Canva", "Figma", "CapCut", "Premiere Pro", "After Effects"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              I'm a passionate creative professional with years of experience in graphic design and video editing. 
              I specialize in creating compelling visual narratives that resonate with audiences and drive engagement.
            </p>
            
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              Whether it's designing eye-catching graphics, editing long-form content, or creating brand identities, 
              I bring creativity, technical expertise, and attention to detail to every project.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Tools I Use:</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={tool}
                    className="bg-secondary px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-primary transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border card-hover">
              <Palette className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
              <p className="text-muted-foreground">
                Creating stunning visuals, brand identities, and marketing materials that capture attention and communicate effectively.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border card-hover">
              <Video className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Video Editing</h3>
              <p className="text-muted-foreground">
                Transforming raw footage into compelling stories through expert editing, color grading, and post-production.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border card-hover">
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Creative Direction</h3>
              <p className="text-muted-foreground">
                Bringing vision to life with strategic creative direction that aligns with brand goals and audience needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;