import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  ArrowRight, 
  Phone,
  X,
  MapPin,
  Calendar,
  Ruler,
  CheckCircle2
} from "lucide-react";
import type { Project } from "@shared/schema";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fit-out", label: "Fit-Out" },
  { id: "renovation", label: "Renovation" },
  { id: "mep", label: "MEP" },
  { id: "civil", label: "Civil Works" },
  { id: "painting", label: "Painting" },
];

const projects: (Project & { 
  location: string; 
  year: string; 
  area: string; 
  highlights: string[];
})[] = [
  {
    id: "1",
    title: "Modern Office Complex",
    category: "fit-out",
    description: "Complete fit-out of a 50,000 sq ft corporate headquarters featuring open-plan workspaces, executive suites, and collaborative areas.",
    scope: "Full interior design, custom furniture, lighting systems, and IT infrastructure installation.",
    challenges: "Tight 4-month deadline with complex MEP coordination requirements and occupied building considerations.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    location: "Business District, City Center",
    year: "2024",
    area: "50,000 sq ft",
    highlights: ["Open-plan design", "Sustainable materials", "Smart lighting", "Acoustic solutions"],
  },
  {
    id: "2",
    title: "Heritage Building Renovation",
    category: "renovation",
    description: "Careful restoration of a century-old heritage building, preserving architectural character while introducing modern amenities.",
    scope: "Structural reinforcement, facade restoration, interior modernization, and MEP upgrades.",
    challenges: "Strict heritage conservation guidelines while meeting modern safety and accessibility codes.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    location: "Historic Quarter",
    year: "2023",
    area: "35,000 sq ft",
    highlights: ["Heritage preservation", "Structural upgrade", "Modern amenities", "Period details"],
  },
  {
    id: "3",
    title: "Healthcare Facility MEP",
    category: "mep",
    description: "Complete MEP installation for a state-of-the-art medical center with critical power systems and specialized HVAC requirements.",
    scope: "HVAC, electrical distribution, medical gas systems, fire protection, and building automation.",
    challenges: "Stringent healthcare compliance, clean room requirements, and 24/7 operational continuity.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    location: "Medical District",
    year: "2024",
    area: "75,000 sq ft",
    highlights: ["Critical power", "Medical gas systems", "Clean room HVAC", "Automation"],
  },
  {
    id: "4",
    title: "Retail Mall Expansion",
    category: "civil",
    description: "Major structural expansion of an existing retail complex, adding new floors and modernizing the entire structure.",
    scope: "Foundation work, structural steel, concrete construction, and facade installation.",
    challenges: "Construction during mall operations, complex logistics, and accelerated timeline.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    location: "Shopping District",
    year: "2023",
    area: "120,000 sq ft",
    highlights: ["Structural expansion", "Facade upgrade", "Foundation work", "Steel erection"],
  },
  {
    id: "5",
    title: "Luxury Hotel Interior",
    category: "painting",
    description: "Premium painting and finishing works for a 5-star hotel, including specialty finishes and decorative elements.",
    scope: "Interior and exterior painting, specialty finishes, murals, and protective coatings.",
    challenges: "Achieving luxury finishes with tight timeline and coordination with other trades.",
    imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    location: "Waterfront District",
    year: "2024",
    area: "45,000 sq ft",
    highlights: ["Specialty finishes", "Decorative painting", "Protective coatings", "Murals"],
  },
  {
    id: "6",
    title: "Tech Startup Campus",
    category: "fit-out",
    description: "Creative office fit-out for a leading tech company, featuring flexible workspaces, recreation areas, and innovative design.",
    scope: "Complete fit-out including custom installations, technology integration, and branded elements.",
    challenges: "Unique design requirements, rapid scaling needs, and complex AV integration.",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    location: "Tech Park",
    year: "2023",
    area: "30,000 sq ft",
    highlights: ["Creative design", "Tech integration", "Flexible spaces", "Branded elements"],
  },
  {
    id: "7",
    title: "Residential Tower Renovation",
    category: "renovation",
    description: "Comprehensive renovation of a 20-story residential tower, upgrading all common areas and building systems.",
    scope: "Lobby redesign, corridor updates, elevator modernization, and facade repairs.",
    challenges: "Minimal disruption to residents, phased construction, and coordination with building management.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    location: "Residential District",
    year: "2024",
    area: "200,000 sq ft",
    highlights: ["Lobby redesign", "Elevator upgrade", "Facade repair", "Common areas"],
  },
  {
    id: "8",
    title: "Data Center MEP",
    category: "mep",
    description: "Critical infrastructure installation for a Tier III data center with redundant power and precision cooling systems.",
    scope: "Redundant power systems, precision cooling, fire suppression, and monitoring systems.",
    challenges: "Strict uptime requirements, precision equipment installation, and testing protocols.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    location: "Industrial Zone",
    year: "2023",
    area: "40,000 sq ft",
    highlights: ["Redundant power", "Precision cooling", "Fire suppression", "Monitoring"],
  },
  {
    id: "9",
    title: "Industrial Warehouse",
    category: "civil",
    description: "Construction of a modern logistics warehouse with high-bay storage, loading docks, and office facilities.",
    scope: "Foundation, steel structure, concrete floor, roofing, and site works.",
    challenges: "Large-span structure requirements, heavy loading specifications, and fast-track delivery.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    location: "Logistics Hub",
    year: "2024",
    area: "80,000 sq ft",
    highlights: ["High-bay storage", "Loading docks", "Office facilities", "Site works"],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" data-testid="section-projects-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" data-testid="text-projects-hero-title">
              Projects That Speak Excellence
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Explore our diverse portfolio of successfully completed projects across 
              various sectors. Each project reflects our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-b border-border sticky top-16 md:top-20 z-40" data-testid="section-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20 bg-background" data-testid="section-projects-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                delay={index * 100}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge className="mb-2">
                      {categories.find(c => c.id === selectedProject.category)?.label}
                    </Badge>
                    <DialogTitle className="text-2xl md:text-3xl font-serif">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Main Image */}
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">{selectedProject.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="font-medium text-foreground">{selectedProject.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Ruler className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Area</p>
                      <p className="font-medium text-foreground">{selectedProject.area}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Scope */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Scope of Work</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.scope}
                  </p>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Challenges Overcome</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.highlights.map((highlight) => (
                      <div 
                        key={highlight}
                        className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <Link href="/contact" className="flex-1">
                    <Button className="w-full" data-testid="button-project-quote">
                      <Phone className="w-4 h-4 mr-2" />
                      Get a Similar Quote
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedProject(null)}
                    data-testid="button-project-close"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Stats Section */}
      <section className="py-16 bg-primary" data-testid="section-project-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-foreground">500+</p>
              <p className="text-primary-foreground/80">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-foreground">5M+</p>
              <p className="text-primary-foreground/80">Sq Ft Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-foreground">200+</p>
              <p className="text-primary-foreground/80">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-foreground">15+</p>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="section-projects-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life. Our team is ready 
            to help you create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-projects-cta-quote">
                <Phone className="w-5 h-5 mr-2" />
                Request a Quote
              </Button>
            </Link>
            <Link href="/execution">
              <Button size="lg" variant="outline" data-testid="button-projects-cta-process">
                See Our Process
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
