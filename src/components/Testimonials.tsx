import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Content Creator",
      avatar: "AR",
      rating: 5,
      text: "Garry transformed my YouTube channel with incredible thumbnails and video edits. My engagement rates have doubled since working with them!"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Business Owner",
      avatar: "SC",
      rating: 5,
      text: "The brand identity Garry created for my business perfectly captured our vision. Professional, creative, and delivered on time."
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Influencer",
      avatar: "MJ",
      rating: 5,
      text: "Working with Garry was a game-changer. Their video editing skills brought my content to the next level. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-card p-6 rounded-xl border border-border card-hover animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;