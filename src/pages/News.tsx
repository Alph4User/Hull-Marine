import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Major Offshore Wind Project Completed Ahead of Schedule",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Project Update",
      excerpt:
        "Our team successfully completed the North Sea offshore wind installation project two months ahead of schedule, installing 120 turbines with zero safety incidents.",
    },
    {
      id: 2,
      title: "Partnership Announcement: Expanding Renewable Energy Portfolio",
      date: "March 10, 2024",
      author: "Michael Chen",
      category: "Company News",
      excerpt:
        "Maritime Engineering announces strategic partnership with leading renewable energy developer to expand offshore wind capabilities in Asia-Pacific region.",
    },
    {
      id: 3,
      title: "Innovation Award for Sustainable Dredging Technology",
      date: "March 5, 2024",
      author: "Emma Williams",
      category: "Awards",
      excerpt:
        "Industry recognition for our pioneering eco-friendly dredging technology that reduces environmental impact by 40% while improving efficiency.",
    },
    {
      id: 4,
      title: "New Fleet Addition: State-of-the-Art Construction Vessel",
      date: "February 28, 2024",
      author: "David Martinez",
      category: "Fleet Update",
      excerpt:
        "Introduction of our latest heavy-lift construction vessel featuring advanced positioning systems and increased lifting capacity for complex operations.",
    },
    {
      id: 5,
      title: "Safety Milestone: 10 Million Work Hours Without Incident",
      date: "February 20, 2024",
      author: "Lisa Anderson",
      category: "Safety",
      excerpt:
        "Celebrating a major safety achievement across all global operations, demonstrating our unwavering commitment to worker safety and excellence.",
    },
    {
      id: 6,
      title: "Sustainability Report 2024: Progress Towards Net Zero",
      date: "February 15, 2024",
      author: "James Thompson",
      category: "Sustainability",
      excerpt:
        "Annual sustainability report highlights 25% reduction in carbon emissions and outlines roadmap for achieving net-zero operations by 2040.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 corporate-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="mb-6 fade-in">Latest News</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95 fade-in">
            Stay updated with our latest projects, innovations, and industry insights.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="group border border-border rounded-lg overflow-hidden hover-lift bg-card"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto group/btn">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
