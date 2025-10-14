import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  location: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

const ProjectCard = ({ title, location, date, category, image, description }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift border-border">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button variant="link" className="group/btn p-0 h-auto">
          View Details
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
