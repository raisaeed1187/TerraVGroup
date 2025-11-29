import { 
  MessageSquare, 
  Search, 
  FileText, 
  Hammer, 
  CheckCircle2,
  LucideIcon 
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "message-square": MessageSquare,
  "search": Search,
  "file-text": FileText,
  "hammer": Hammer,
  "check-circle": CheckCircle2,
};

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
  delay?: number;
}

export function TimelineStep({ 
  step, 
  title, 
  description, 
  icon, 
  isLast = false,
  delay = 0 
}: TimelineStepProps) {
  const IconComponent = iconMap[icon] || CheckCircle2;
  const isEven = step % 2 === 0;

  return (
    <div 
      className="relative"
      style={{ animationDelay: `${delay}ms` }}
      data-testid={`timeline-step-${step}`}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center">
        {/* Left Content (for odd steps) */}
        <div className={`flex-1 ${isEven ? 'order-3' : 'order-1'}`}>
          {!isEven && (
            <div className="pr-8 text-right animate-fade-in-left">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                Step {step}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          )}
        </div>

        {/* Center Line & Icon */}
        <div className="order-2 flex flex-col items-center z-10">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <IconComponent className="w-7 h-7 text-primary-foreground" />
          </div>
          {!isLast && (
            <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-border" />
          )}
        </div>

        {/* Right Content (for even steps) */}
        <div className={`flex-1 ${isEven ? 'order-1' : 'order-3'}`}>
          {isEven && (
            <div className="pl-8 text-left animate-fade-in-right">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                Step {step}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden">
        {/* Line & Icon */}
        <div className="flex flex-col items-center mr-6">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shrink-0">
            <IconComponent className="w-5 h-5 text-primary-foreground" />
          </div>
          {!isLast && (
            <div className="w-0.5 flex-1 min-h-[80px] bg-gradient-to-b from-primary to-border" />
          )}
        </div>

        {/* Content */}
        <div className="pb-8 animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
            Step {step}
          </span>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
