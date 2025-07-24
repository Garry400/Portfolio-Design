import { ExternalLink, Play } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Graphic Design",
      image: portfolio1,
      type: "design"
    },
    {
      id: 2,
      title: "Gaming Content Thumbnail",
      category: "Video Editing",
      image: portfolio2,
      type: "video"
    },
    {
      id: 3,
      title: "Corporate Branding",
      category: "Graphic Design",
      image: portfolio3,
      type: "design"
    },
    {
      id: 4,
      title: "Social Media Content",
      category: "Graphic Design",
      image: portfolio4,
      type: "design"
    },
    {
      id: 5,
      title: "Color Grading Showcase",
      category: "Video Editing",
      image: portfolio5,
      type: "video"
    },
    {
      id: 6,
      title: "Motion Graphics",
      category: "Video Editing",
      image: portfolio6,
      type: "video"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Work Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my latest projects in graphic design and video editing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="group bg-card rounded-xl overflow-hidden border border-border card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === 'video' ? (
                    <Play className="w-12 h-12 text-white" />
                  ) : (
                    <ExternalLink className="w-12 h-12 text-white" />
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-accent font-medium mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Click to view full project details and process
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;