import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  delay?: number;
}

const categoryLabels: Record<string, string> = {
  "fit-out": "Fit-Out",
  "renovation": "Renovation",
  "mep": "MEP",
  "civil": "Civil Works",
  "painting": "Painting",
};

export function ProjectCard({ project, onClick, delay = 0 }: ProjectCardProps) {
  return (
    <Card
      className="group overflow-hidden cursor-pointer border-border hover-elevate"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
      data-testid={`card-project-${project.id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <Badge 
          className="absolute top-4 left-4 bg-primary text-primary-foreground"
          data-testid={`badge-category-${project.category}`}
        >
          {categoryLabels[project.category]}
        </Badge>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-semibold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
          <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.description}
          </p>
          
          {/* View More Indicator */}
          <div className="flex items-center gap-2 mt-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Card>
  );
}
