import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 corporate-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="mb-6 fade-in">About Maritime Engineering</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95 fade-in">
            Five decades of engineering excellence, innovation, and commitment to delivering world-class maritime solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 1973, Maritime Engineering Corp has grown from a small dredging company to
                  one of the world's leading marine engineering and offshore construction firms. Our
                  journey has been marked by innovation, technical excellence, and an unwavering
                  commitment to sustainable development.
                </p>
                <p>
                  Today, we operate a fleet of state-of-the-art vessels and employ over 10,000
                  professionals across 75 countries. From offshore wind farms to major port expansions,
                  our projects shape the future of global infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering the highest quality in every project we undertake",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working together with clients and partners for mutual success",
              },
              {
                icon: Globe,
                title: "Sustainability",
                description: "Building a better future through responsible engineering",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "Pioneering new solutions to complex engineering challenges",
              },
            ].map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { year: "1973", title: "Foundation", description: "Company established with a focus on dredging services" },
              { year: "1990", title: "Global Expansion", description: "Operations extended to Asia and Middle East" },
              { year: "2005", title: "Renewable Energy", description: "Entered offshore wind farm construction market" },
              { year: "2024", title: "Industry Leader", description: "500+ projects completed across 75 countries" },
            ].map((milestone, index) => (
              <div key={milestone.year} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-secondary">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 pt-2">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index !== 3 && <div className="w-0.5 h-24 bg-border ml-2 mt-2" />}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
