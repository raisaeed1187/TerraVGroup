import { Card, CardContent } from "@/components/ui/card";
import { 
  Hammer, 
  Paintbrush, 
  Zap, 
  Building2, 
  Wrench,
  LucideIcon 
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "hammer": Hammer,
  "paintbrush": Paintbrush,
  "zap": Zap,
  "building": Building2,
  "wrench": Wrench,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
  delay?: number;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  imageUrl,
  delay = 0 
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Hammer;

  return (
    <Card 
      className="group overflow-hidden hover-elevate cursor-pointer border-border"
      style={{ animationDelay: `${delay}ms` }}
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Image */}
      {imageUrl && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <CardContent className="p-6">
        {/* Icon */}
        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        
        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
