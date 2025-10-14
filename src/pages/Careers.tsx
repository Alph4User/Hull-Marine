import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Marine Engineer",
      location: "Rotterdam, Netherlands",
      type: "Full-time",
      department: "Engineering",
      description:
        "Lead complex offshore engineering projects and provide technical expertise for marine construction operations.",
    },
    {
      title: "Project Manager - Offshore Wind",
      location: "London, UK",
      type: "Full-time",
      department: "Project Management",
      description:
        "Oversee offshore wind farm installation projects from planning through execution, ensuring delivery on time and budget.",
    },
    {
      title: "Dredging Operations Supervisor",
      location: "Singapore",
      type: "Full-time",
      department: "Operations",
      description:
        "Supervise dredging operations, manage crew, and ensure compliance with safety and environmental standards.",
    },
    {
      title: "Naval Architect",
      location: "Houston, USA",
      type: "Full-time",
      department: "Design",
      description:
        "Design and analyze marine vessels and offshore structures using advanced engineering software and methodologies.",
    },
    {
      title: "Safety Manager",
      location: "Dubai, UAE",
      type: "Full-time",
      department: "HSE",
      description:
        "Develop and implement safety programs, conduct audits, and ensure compliance with international safety standards.",
    },
    {
      title: "Mechanical Engineer - Subsea",
      location: "Aberdeen, Scotland",
      type: "Full-time",
      department: "Engineering",
      description:
        "Design and maintain subsea equipment and systems for offshore oil and gas operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 corporate-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="mb-6 fade-in">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95 fade-in">
            Build your career with a global leader in maritime engineering and offshore construction.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-6">Why Work With Us</h2>
            <p className="text-muted-foreground text-lg">
              Join a team of passionate professionals working on the world's most challenging and
              rewarding maritime engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl">Career Growth</h3>
              <p className="text-muted-foreground">
                Continuous learning opportunities and clear career progression paths in a global organization.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl">Global Opportunities</h3>
              <p className="text-muted-foreground">
                Work on international projects across 75 countries with diverse and multicultural teams.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Competitive benefits, flexible working arrangements, and comprehensive wellness programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Current Openings</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our current job opportunities and find your next career move.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.title} className="group hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded text-sm font-semibold">
                      {job.department}
                    </span>
                    <span className="text-sm text-muted-foreground">{job.type}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full group/btn">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
