import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-maritime.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/80 to-primary-light/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 fade-in">
          <h1 className="text-primary-foreground font-bold leading-tight text-balance">
            Engineering Excellence
            <br />
            <span className="text-secondary">for a Sustainable Future</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/95 max-w-2xl mx-auto text-balance">
            Leading global provider of innovative marine engineering, offshore construction, and
            infrastructure solutions for the world's most complex projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Explore Our Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-1">50+</div>
              <div className="text-sm text-primary-foreground/90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-1">500+</div>
              <div className="text-sm text-primary-foreground/90">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-1">75+</div>
              <div className="text-sm text-primary-foreground/90">Countries Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-1">10K+</div>
              <div className="text-sm text-primary-foreground/90">Team Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
