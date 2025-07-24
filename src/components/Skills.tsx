import { Badge, Star, Award, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: Badge,
      color: "text-primary",
      skills: ["Adobe Photoshop", "Figma", "Canva", "Illustrator", "InDesign"]
    },
    {
      title: "Video Editing",
      icon: Award,
      color: "text-accent",
      skills: ["Premiere Pro", "CapCut", "After Effects", "DaVinci Resolve", "Final Cut Pro"]
    },
    {
      title: "Specializations",
      icon: Star,
      color: "text-primary",
      skills: ["Brand Identity", "Motion Graphics", "Color Grading", "YouTube Content", "Social Media"]
    },
    {
      title: "Soft Skills",
      icon: Zap,
      color: "text-accent",
      skills: ["Creative Direction", "Client Communication", "Project Management", "Deadline Management", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for bringing creative visions to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-card p-8 rounded-xl border border-border card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <IconComponent className={`w-8 h-8 ${category.color} mr-3`} />
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-[hsl(var(--card-hover))] transition-colors duration-300"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <span className="font-medium">{skill}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 h-4 ${i < 4 ? category.color : 'text-muted-foreground'} fill-current`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;