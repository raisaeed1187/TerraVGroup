import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Hammer, 
  Wrench, 
  Zap, 
  Building2, 
  Paintbrush,
  ArrowRight,
  CheckCircle2,
  Phone
} from "lucide-react";

const services = [
  {
    id: "fit-out",
    icon: Hammer,
    title: "Fit-Out Services",
    subtitle: "Transform Empty Spaces Into Functional Environments",
    description: "Our comprehensive fit-out services cover everything from initial design concepts to final installation. We specialize in commercial, retail, and hospitality fit-outs that combine aesthetics with functionality.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: [
      "Complete interior design and planning",
      "Custom joinery and furniture installation",
      "Partition walls and ceiling systems",
      "Flooring solutions (wood, tile, carpet)",
      "Lighting design and installation",
      "Audio-visual and IT infrastructure",
    ],
  },
  {
    id: "renovation",
    icon: Wrench,
    title: "Renovation Works",
    subtitle: "Breathe New Life Into Existing Spaces",
    description: "Whether it's a complete overhaul or strategic updates, our renovation expertise ensures your space is modernized while respecting its original character and structural integrity.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    features: [
      "Structural assessment and reinforcement",
      "Space reconfiguration and optimization",
      "Kitchen and bathroom remodeling",
      "Window and door replacements",
      "Energy efficiency upgrades",
      "Historic building restoration",
    ],
  },
  {
    id: "mep",
    icon: Zap,
    title: "MEP Solutions",
    subtitle: "Mechanical, Electrical & Plumbing Excellence",
    description: "Our MEP division delivers integrated building systems that ensure comfort, efficiency, and reliability. From design to maintenance, we handle all aspects of mechanical, electrical, and plumbing works.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    features: [
      "HVAC system design and installation",
      "Electrical wiring and distribution",
      "Plumbing and water management",
      "Fire protection systems",
      "Building automation and controls",
      "Energy-efficient solutions",
    ],
  },
  {
    id: "civil",
    icon: Building2,
    title: "Civil Works",
    subtitle: "Strong Foundations for Lasting Structures",
    description: "Our civil engineering capabilities cover the full spectrum of structural work, from groundwork to finishing. We build foundations that stand the test of time using the latest techniques and materials.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    features: [
      "Site preparation and excavation",
      "Foundation and structural work",
      "Concrete and masonry construction",
      "Steel structure erection",
      "Road and pathway construction",
      "Drainage and utility installation",
    ],
  },
  {
    id: "painting",
    icon: Paintbrush,
    title: "Painting Works",
    subtitle: "Premium Finishes That Protect and Beautify",
    description: "Professional painting services that go beyond aesthetics. Our expert painters deliver flawless finishes that protect your property while creating the perfect ambiance for any space.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    features: [
      "Interior and exterior painting",
      "Surface preparation and repairs",
      "Specialty finishes and textures",
      "Protective coatings and sealants",
      "Wood staining and varnishing",
      "Epoxy floor coatings",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" data-testid="section-services-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" data-testid="text-services-hero-title">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              From initial concept to final handover, we offer a complete range of 
              construction and engineering services tailored to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-card border-b border-border" data-testid="section-services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid={`link-service-nav-${service.id}`}
              >
                <service.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{service.title.split(' ')[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
          data-testid={`section-service-${service.id}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Service {index + 1} of {services.length}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                  {service.title}
                </h2>
                <p className="text-lg text-primary font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <Button data-testid={`button-service-quote-${service.id}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Get a Quote
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold">100+</p>
                    <p className="text-sm opacity-90">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Service Comparison Table */}
      <section className="py-20 md:py-24 bg-background" data-testid="section-comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Compare Services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Find the Right Service for Your Project
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Not sure which service you need? Here's a quick comparison to help 
              you make the right choice.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Card className="border-border min-w-[800px]">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-4 font-semibold text-foreground">Service</th>
                      <th className="text-center p-4 font-semibold text-foreground">Commercial</th>
                      <th className="text-center p-4 font-semibold text-foreground">Residential</th>
                      <th className="text-center p-4 font-semibold text-foreground">Industrial</th>
                      <th className="text-center p-4 font-semibold text-foreground">Retail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <tr 
                        key={service.id} 
                        className={index < services.length - 1 ? 'border-b border-border' : ''}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <service.icon className="w-5 h-5 text-primary" />
                            <span className="font-medium text-foreground">{service.title}</span>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          {service.id !== 'painting' ? (
                            <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary" data-testid="section-services-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and 
            create a tailored solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-services-cta-quote">
                <Phone className="w-5 h-5 mr-2" />
                Request a Quote
              </Button>
            </Link>
            <Link href="/execution">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-services-cta-process"
              >
                Our Process
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
