import { Badge, Star, Award, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: Badge,
      color: "text-primary",
      skills: [
        { name: "Adobe Photoshop", rating: 5 },
        { name: "Adobe Illustrator", rating: 4 },
        { name: "Figma", rating: 5 },
        { name: "Canva", rating: 5 },
        { name: "Framer", rating: 5 }
      ]
    },
    {
      title: "Video Editing",
      icon: Award,
      color: "text-accent",
      skills: [
        { name: "Premiere Pro", rating: 5 },
        { name: "DaVinci Resolve", rating: 4 },
        { name: "After Effects", rating: 3 },
        { name: "CapCut", rating: 5 }
      ]
    },
    {
      title: "Specializations",
      icon: Star,
      color: "text-primary",
      skills: [
        { name: "Brand Identity", rating: 4 },
        { name: "Motion Graphics", rating: 3 },
        { name: "Color Grading", rating: 4 },
        { name: "YouTube Content", rating: 5 },
        { name: "Social Media", rating: 4 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Zap,
      color: "text-accent",
      skills: [
        { name: "Creative Direction", rating: 5 },
        { name: "Client Communication", rating: 5 },
        { name: "Project Management", rating: 5 },
        { name: "Deadline Management", rating: 4 },
        { name: "Problem Solving", rating: 5 }
      ]
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
                      key={skill.name}
                      className="flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-[hsl(var(--card-hover))] transition-colors duration-300"
                      style={{
                        animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                      }}
                    >
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < skill.rating
                                ? category.color
                                : "text-muted-foreground"
                            } fill-current`}
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
