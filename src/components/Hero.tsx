import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
            SCORCHZ
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-6 text-muted-foreground">
            Graphic Designer, Video Editor & Logo Designer
          </h2>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Helping creators and brands stand out with stunning visuals and engaging edits.
          </p>
          
          <button 
            onClick={scrollToContact}
            className="btn-primary group inline-flex items-center gap-3 text-lg"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;