import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Anchor, Ship, Waves, Building2, Wind, Wrench, Shield, LineChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Anchor,
      title: "Marine Engineering",
      description:
        "Comprehensive marine engineering solutions for offshore platforms, subsea installations, and maritime infrastructure with cutting-edge technology.",
    },
    {
      icon: Ship,
      title: "Offshore Construction",
      description:
        "Expert offshore construction services for oil & gas, renewable energy, and complex maritime structures with proven track record.",
    },
    {
      icon: Waves,
      title: "Dredging Solutions",
      description:
        "Advanced dredging and land reclamation services for ports, harbors, and coastal development projects worldwide.",
    },
    {
      icon: Building2,
      title: "Infrastructure Development",
      description:
        "Large-scale infrastructure projects including bridges, tunnels, and coastal protection systems with innovative approaches.",
    },
    {
      icon: Wind,
      title: "Renewable Energy",
      description:
        "Pioneering offshore wind farm installation and maintenance, driving the clean energy transition with sustainable solutions.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "24/7 maintenance and technical support services ensuring optimal performance of maritime assets and infrastructure.",
    },
    {
      icon: Shield,
      title: "Safety & Quality",
      description:
        "Comprehensive safety management and quality assurance programs ensuring compliance with international standards.",
    },
    {
      icon: LineChart,
      title: "Project Management",
      description:
        "End-to-end project management services from planning and design to execution and delivery with proven methodologies.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 corporate-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="mb-6 fade-in">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95 fade-in">
            Comprehensive maritime engineering services powered by innovation and industry-leading expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-xl">Experience & Expertise</h3>
                <p className="text-muted-foreground">
                  Over 50 years of experience delivering complex maritime projects across 75 countries with a team of 10,000+ professionals.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-xl">Innovation & Technology</h3>
                <p className="text-muted-foreground">
                  State-of-the-art equipment and cutting-edge technology ensuring efficient, safe, and sustainable project delivery.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-xl">Safety First</h3>
                <p className="text-muted-foreground">
                  Industry-leading safety standards with comprehensive training programs and rigorous quality control measures.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-xl">Sustainability</h3>
                <p className="text-muted-foreground">
                  Committed to environmental responsibility with sustainable practices and renewable energy solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
