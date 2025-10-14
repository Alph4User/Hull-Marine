import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, Ship, Waves, Building2, Wind, Wrench } from "lucide-react";

import projectWind from "@/assets/project-wind.jpg";
import projectDredging from "@/assets/project-dredging.jpg";
import projectBridge from "@/assets/project-bridge.jpg";

const Index = () => {
  const featuredProjects = [
    {
      title: "Offshore Wind Farm Installation",
      location: "North Sea, Europe",
      date: "2024",
      category: "Renewable Energy",
      image: projectWind,
      description:
        "Installation of 100+ wind turbines using advanced marine construction vessels, contributing to sustainable energy generation.",
    },
    {
      title: "Port Expansion & Dredging",
      location: "Singapore",
      date: "2023-2024",
      category: "Infrastructure",
      image: projectDredging,
      description:
        "Major dredging operation to expand port capacity, enhancing maritime trade capabilities in Southeast Asia.",
    },
    {
      title: "Coastal Bridge Construction",
      location: "Middle East",
      date: "2023",
      category: "Civil Engineering",
      image: projectBridge,
      description:
        "Engineering excellence in constructing a landmark coastal bridge connecting major economic zones.",
    },
  ];

  const services = [
    {
      icon: Anchor,
      title: "Marine Engineering",
      description:
        "Comprehensive marine engineering solutions for offshore platforms, subsea installations, and maritime infrastructure.",
    },
    {
      icon: Ship,
      title: "Offshore Construction",
      description:
        "Expert offshore construction services for oil & gas, renewable energy, and complex maritime structures.",
    },
    {
      icon: Waves,
      title: "Dredging Solutions",
      description:
        "Advanced dredging and land reclamation services for ports, harbors, and coastal development projects.",
    },
    {
      icon: Building2,
      title: "Infrastructure Development",
      description:
        "Large-scale infrastructure projects including bridges, tunnels, and coastal protection systems.",
    },
    {
      icon: Wind,
      title: "Renewable Energy",
      description:
        "Pioneering offshore wind farm installation and maintenance, driving the clean energy transition.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "24/7 maintenance and technical support services ensuring optimal performance of maritime assets.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Mission Statement */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to delivering world-class marine engineering and offshore construction
              solutions that drive innovation, sustainability, and excellence. Our team of experts
              combines decades of experience with cutting-edge technology to tackle the world's most
              challenging maritime projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our portfolio of groundbreaking projects that showcase engineering excellence
              across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="default" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive maritime engineering services powered by innovation and industry-leading
              expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Latest News</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with our latest projects, innovations, and industry insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="group border border-border rounded-lg overflow-hidden hover-lift bg-card"
              >
                <div className="h-48 bg-muted" />
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">March {i}, 2024</div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    Major Milestone in Offshore Project
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    Our team successfully completed a critical phase of the offshore wind installation...
                  </p>
                  <Button variant="link" className="p-0 h-auto group/btn">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden corporate-hero">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground to-transparent animate-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-primary-foreground">
            <h2>Ready to Start Your Project?</h2>
            <p className="text-lg opacity-95">
              Partner with us to bring your maritime engineering vision to life. Our team of experts is
              ready to deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg">
                Get a Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
