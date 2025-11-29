import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { 
  ArrowRight, 
  Phone, 
  Shield, 
  Clock, 
  Award, 
  Users,
  CheckCircle2
} from "lucide-react";
import type { Project, Testimonial } from "@shared/schema";

const services = [
  {
    id: "1",
    title: "Fit-Out Services",
    description: "Complete interior fit-out solutions from design to execution. We transform empty spaces into functional, beautiful environments.",
    icon: "hammer",
  },
  {
    id: "2",
    title: "Renovation Works",
    description: "Breathe new life into existing spaces with our expert renovation services. Modern updates while preserving structural integrity.",
    icon: "wrench",
  },
  {
    id: "3",
    title: "MEP Solutions",
    description: "Mechanical, Electrical & Plumbing installations with precision. Energy-efficient systems designed for optimal performance.",
    icon: "zap",
  },
  {
    id: "4",
    title: "Civil Works",
    description: "From foundation to finish, our civil engineering expertise ensures solid, lasting structures built to the highest standards.",
    icon: "building",
  },
  {
    id: "5",
    title: "Painting Works",
    description: "Professional painting services for interiors and exteriors. Premium finishes that protect and beautify your property.",
    icon: "paintbrush",
  },
];

const featuredProjects: Project[] = [
  {
    id: "1",
    title: "Modern Office Complex",
    category: "fit-out",
    description: "Complete fit-out of a 50,000 sq ft corporate headquarters with modern amenities and sustainable design.",
    scope: "Full interior design and fit-out",
    challenges: "Tight deadline with complex MEP requirements",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "2",
    title: "Heritage Building Renovation",
    category: "renovation",
    description: "Careful restoration of a century-old building, preserving its character while adding modern functionality.",
    scope: "Structural renovation and interior updates",
    challenges: "Preserving historical elements while meeting modern codes",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "3",
    title: "Healthcare Facility MEP",
    category: "mep",
    description: "Complete MEP installation for a state-of-the-art medical center with critical power and HVAC systems.",
    scope: "Full MEP design and installation",
    challenges: "Strict healthcare compliance requirements",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures Inc.",
    text: "Terravision transformed our office space beyond our expectations. Their attention to detail and commitment to deadlines made the entire process seamless. Highly recommended!",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Property Developer",
    company: "Skyline Properties",
    text: "We've worked with Terravision on multiple projects, and they consistently deliver exceptional quality. Their MEP expertise is unmatched in the industry.",
  },
  {
    id: "3",
    name: "Amanda Foster",
    role: "Facility Manager",
    company: "Global Healthcare",
    text: "The renovation of our medical facility was handled with utmost professionalism. Terravision understood the unique requirements of healthcare environments.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team Members" },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous quality control at every stage ensures exceptional results.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects on schedule, every time.",
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Skilled professionals with years of industry experience.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your vision is our priority. We listen, adapt, and deliver.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-start overflow-hidden"
        data-testid="section-hero"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')",
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              Trusted by 500+ Clients Worldwide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
              End-to-End Fit-Out, Renovation, MEP & Civil Works Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Transform your vision into reality with Terravision. We deliver exceptional 
              construction and engineering services with uncompromising quality and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-base" data-testid="button-hero-quote">
                  <Phone className="w-5 h-5 mr-2" />
                  Request a Quote
                </Button>
              </Link>
              <Link href="/projects">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-hero-projects"
                >
                  View Our Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm md:text-base" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From concept to completion, we offer a full range of construction and engineering 
              services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="section-featured-projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our diverse portfolio of successfully completed projects across 
              various sectors and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-24 bg-background" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Building Excellence, Delivering Trust
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With over 15 years of experience in the construction industry, Terravision 
                has established itself as a leader in delivering exceptional fit-out, 
                renovation, and engineering solutions.
              </p>
              
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={item.title} 
                    className="flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="mt-8" size="lg" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction team at work"
                className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                loading="lazy"
                data-testid="img-why-choose-us"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border border-border max-w-xs hidden lg:block">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <span className="font-semibold text-foreground">ISO Certified</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Quality management systems certified to international standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our satisfied clients 
              have to say about working with Terravision.
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 md:py-24 relative overflow-hidden"
        data-testid="section-cta"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541976590-713941681591?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today for a free consultation and quote. 
            Let's bring your vision to life together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-base"
                data-testid="button-cta-quote"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request a Quote
              </Button>
            </Link>
            <Link href="/execution">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-cta-process"
              >
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
