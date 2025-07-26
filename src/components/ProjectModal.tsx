import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    images: string[];
    tools: string[];
    type: "design" | "video";
  } | null;
}

const VideoPlayer = ({ src, alt }: { src: string; alt: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative group">
      <video
        src={src}
        className="w-full h-auto rounded-lg"
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black/50 rounded-full p-3">
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white" />
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-card border-border">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-20 h-8 w-8 bg-background/80 hover:bg-background"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <DialogHeader className="p-6 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="secondary" className="text-xs">
                {project.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {project.type === 'video' ? 'Video' : 'Design'}
              </Badge>
            </div>
            <DialogTitle className="text-2xl font-bold text-gradient">
              {project.title}
            </DialogTitle>
            <p className="text-muted-foreground mt-2">
              {project.description}
            </p>
          </DialogHeader>

          <div className="px-6">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {project.images.map((media, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-lg">
                      {project.type === 'video' ? (
                        <VideoPlayer 
                          src={media} 
                          alt={`${project.title} - Video ${index + 1}`}
                        />
                      ) : (
                        <img
                          src={media}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-auto object-cover max-h-[50vh]"
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-border" />
              <CarouselNext className="right-4 bg-background/80 hover:bg-background border-border" />
            </Carousel>
            
            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-4 mb-6">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30"
                />
              ))}
            </div>
          </div>

          <div className="p-6 pt-0 border-t border-border bg-secondary/20">
            <h4 className="text-sm font-semibold mb-3 text-foreground">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs bg-primary/10 border-primary/20 text-primary hover:bg-primary/20"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;