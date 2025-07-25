import { Mail, Instagram, ExternalLink, ArrowRight } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:meenapushpendra400@gmail.com",
      handle: "meenapushpendra400@gmail.com"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/meenapushpendra400/",
      handle: "@meenapushpendra400"
    },
    {
      name: "Behance",
      icon: ExternalLink,
      url: "",
      handle: "not account"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch and let's discuss how we can 
            create something amazing together. I'm always excited to work on new projects!
          </p>
        </div>
        
        <div className="bg-card p-8 md:p-12 rounded-2xl border border-border card-hover mb-12 animate-scale-in">
          <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-secondary p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[hsl(var(--glow-primary))]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold mb-2">{link.name}</h4>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {link.handle}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Prefer email? Drop me a line and I'll get back to you within 24 hours.
          </p>
          
          <a 
            href="mailto:meenapushpendra400@gmail.com"
            className="btn-primary group inline-flex items-center gap-3"
          >
            Send me an email
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;