import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

import projectWind from "@/assets/project-wind.jpg";
import projectDredging from "@/assets/project-dredging.jpg";
import projectBridge from "@/assets/project-bridge.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Renewable Energy", "Infrastructure", "Civil Engineering", "Dredging"];

  const projects = [
    {
      title: "Offshore Wind Farm Installation",
      location: "North Sea, Europe",
      date: "2024",
      category: "Renewable Energy",
      image: projectWind,
      description: "Installation of 100+ wind turbines using advanced marine construction vessels.",
    },
    {
      title: "Port Expansion & Dredging",
      location: "Singapore",
      date: "2023-2024",
      category: "Infrastructure",
      image: projectDredging,
      description: "Major dredging operation to expand port capacity in Southeast Asia.",
    },
    {
      title: "Coastal Bridge Construction",
      location: "Middle East",
      date: "2023",
      category: "Civil Engineering",
      image: projectBridge,
      description: "Engineering excellence in constructing a landmark coastal bridge.",
    },
    {
      title: "Offshore Platform Installation",
      location: "Gulf of Mexico",
      date: "2023",
      category: "Infrastructure",
      image: projectWind,
      description: "Complex offshore platform installation for oil and gas operations.",
    },
    {
      title: "Harbor Deepening Project",
      location: "Rotterdam, Netherlands",
      date: "2022-2023",
      category: "Dredging",
      image: projectDredging,
      description: "Large-scale harbor deepening to accommodate next-generation vessels.",
    },
    {
      title: "Renewable Energy Hub",
      location: "Baltic Sea",
      date: "2024",
      category: "Renewable Energy",
      image: projectWind,
      description: "Development of integrated offshore renewable energy infrastructure.",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 corporate-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="mb-6 fade-in">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95 fade-in">
            Explore our portfolio of innovative marine engineering projects delivered across the globe.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
