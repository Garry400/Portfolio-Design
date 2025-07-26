import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import brandIdentity1 from "@/assets/brand-identity-1.jpg";
import brandIdentity2 from "@/assets/brand-identity-2.jpg";
import gamingThumbnail1 from "@/assets/gaming-thumbnail-1.jpg";
import gamingThumbnail2 from "@/assets/gaming-thumbnail-2.jpg";
import corporateBranding1 from "@/assets/corporate-branding-1.jpg";
import corporateBranding2 from "@/assets/corporate-branding-2.jpg";
import socialMedia1 from "@/assets/social-media-1.jpg";
import socialMedia2 from "@/assets/social-media-2.jpg";
import colorGrading1 from "@/assets/color-grading-1.jpg";
import colorGrading2 from "@/assets/color-grading-2.jpg";
import motionGraphics1 from "@/assets/motion-graphics-1.jpg";
import motionGraphics2 from "@/assets/motion-graphics-2.jpg";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: "Graphic Designing",
      category: "Graphic Design",
      image: portfolio1,
      type: "design" as const,
      description: "Complete brand identity system including logo design, color palette, typography, and brand guidelines. Created a cohesive visual identity that reflects the client's values and resonates with their target audience.",
      images: [brandIdentity1, brandIdentity2, portfolio1],
      tools: ["Photoshop", "Illustrator", "Figma", "InDesign"]
    },
    {
      id: 2,
      title: "Video Projects",
      category: "Video Editing",
      image: portfolio2,
      type: "video" as const,
      description: "Eye-catching gaming thumbnails designed to maximize click-through rates. Featuring bold typography, dynamic compositions, and vibrant colors that stand out in YouTube feeds.",
      images: [gamingThumbnail1, gamingThumbnail2, portfolio2],
      tools: ["Photoshop", "After Effects", "Canva", "Figma"]
    },
    {
      id: 3,
      title: "Websites",
      category: "UI/UX Design",
      image: portfolio3,
      type: "design" as const,
      description: "Professional corporate branding package including logo design, business stationery, and brand implementation across various touchpoints. Designed to convey trust and professionalism.",
      images: [corporateBranding1, corporateBranding2, portfolio3],
      tools: ["Illustrator", "InDesign", "Photoshop", "Figma"]
    },
    {
      id: 4,
      title: "Logo & Branding",
      category: "Graphic Design",
      image: portfolio4,
      type: "design" as const,
      description: "Engaging social media graphics designed for various platforms including Instagram, Facebook, and LinkedIn. Consistent visual style that drives engagement and brand awareness.",
      images: [socialMedia1, socialMedia2, portfolio4],
      tools: ["Canva", "Photoshop", "Figma", "Illustrator"]
    },
    /*{
      id: 5,
      title: "Color Grading Showcase",
      category: "Video Editing",
      image: portfolio5,
      type: "video" as const,
      description: "Professional color grading work showcasing cinematic looks and mood enhancement. Transforming raw footage into visually stunning content with proper color correction and creative grading.",
      images: [colorGrading1, colorGrading2, portfolio5],
      tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "LUTs"]
    },
    {
      id: 6,
      title: "Motion Graphics",
      category: "Video Editing",
      image: portfolio6,
      type: "video" as const,
      description: "Dynamic motion graphics animations including logo reveals, kinetic typography, and visual effects. Created to enhance storytelling and add professional polish to video content.",
      images: [motionGraphics1, motionGraphics2, portfolio6],
      tools: ["After Effects", "Cinema 4D", "Premiere Pro", "Illustrator"]
    }*/
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              onClick={() => handleProjectClick(item)}
              className="group bg-card rounded-xl overflow-hidden border border-border card-hover animate-scale-in cursor-pointer"
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
        
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default Portfolio;