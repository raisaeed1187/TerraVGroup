import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Clock, 
  Award, 
  Users,
  ArrowRight,
  CheckCircle2,
  Building2,
  Phone
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality",
    description: "We never compromise on quality. Every project is executed with meticulous attention to detail and the highest standards of craftsmanship.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description: "Time is valuable. We commit to deadlines and deliver projects on schedule through efficient planning and execution.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honesty and transparency are at the core of our business. We build trust through ethical practices and open communication.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in partnership. Working closely with clients ensures we understand and exceed their expectations.",
  },
];

const team = [
  {
    name: "Robert Anderson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    description: "25+ years of experience in construction and engineering leadership.",
  },
  {
    name: "Emily Martinez",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    description: "Expert in project management and operational excellence.",
  },
  {
    name: "David Kim",
    role: "Chief Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    description: "Leading our technical teams with innovative engineering solutions.",
  },
  {
    name: "Sarah Williams",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    description: "Creating stunning interiors that blend function with aesthetics.",
  },
];

const milestones = [
  { year: "2008", title: "Founded", description: "Terravision established with a vision for excellence" },
  { year: "2012", title: "Expansion", description: "Opened second office, grew to 50+ employees" },
  { year: "2016", title: "ISO Certified", description: "Achieved ISO 9001:2015 certification" },
  { year: "2020", title: "500+ Projects", description: "Milestone of 500 completed projects" },
  { year: "2024", title: "Industry Leader", description: "Recognized as a top construction firm" },
];

const strengths = [
  "Experienced team with 15+ years in the industry",
  "End-to-end project management capabilities",
  "Commitment to on-time, on-budget delivery",
  "Rigorous quality control processes",
  "Strong safety record with zero tolerance policy",
  "Sustainable and eco-friendly practices",
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" data-testid="section-about-hero">
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
              About Terravision
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" data-testid="text-about-hero-title">
              Building Tomorrow's Spaces Today
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              For over 15 years, Terravision has been at the forefront of construction 
              excellence, delivering innovative solutions that transform spaces and exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 md:py-24 bg-background" data-testid="section-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                A Legacy of Excellence in Construction
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2008, Terravision began as a small fit-out company with a 
                  big vision: to revolutionize how construction projects are delivered. 
                  Our founder, Robert Anderson, saw an opportunity to bring innovation, 
                  quality, and reliability to an industry often plagued by delays and 
                  cost overruns.
                </p>
                <p>
                  Today, we've grown into a full-service construction and engineering 
                  firm, offering comprehensive solutions from fit-out and renovation to 
                  MEP installations and civil works. Our team of 50+ professionals brings 
                  together decades of combined experience across diverse sectors.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to client satisfaction. 
                  We don't just build spaces—we build relationships. Every project is an 
                  opportunity to demonstrate why so many clients trust Terravision with 
                  their most important construction needs.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Terravision team at construction site"
                className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden lg:block">
                <div className="text-center">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="section-mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction and engineering solutions that 
                  exceed client expectations, while maintaining the highest standards 
                  of quality, safety, and sustainability. We strive to be the trusted 
                  partner for every project, from concept to completion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading construction and engineering firm recognized for 
                  innovation, reliability, and excellence. We envision a future where 
                  every space we create contributes positively to communities and 
                  sets new benchmarks in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-24 bg-background" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These core values are the foundation of everything we do, shaping our 
              culture and defining how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="border-border hover-elevate"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-value-${value.title.toLowerCase()}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-value-title-${index}`}>{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Milestones & Achievements
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
            
            <div className="grid md:grid-cols-5 gap-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className="relative text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`milestone-${milestone.year}`}
                >
                  <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="md:pt-8">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded mb-2" data-testid={`text-milestone-year-${index}`}>
                      {milestone.year}
                    </span>
                    <h4 className="font-semibold text-foreground mb-1" data-testid={`text-milestone-title-${index}`}>{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 md:py-24 bg-background" data-testid="section-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our experienced leadership team brings together decades of expertise 
              to guide every project to success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="border-border overflow-hidden group hover-elevate"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    data-testid={`img-team-${index}`}
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-foreground" data-testid={`text-team-name-${index}`}>{member.name}</h4>
                  <p className="text-primary text-sm font-medium mb-2" data-testid={`text-team-role-${index}`}>{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="section-why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Modern building completed by Terravision"
                className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Why Choose Terravision
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Your Trusted Construction Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                When you choose Terravision, you're choosing a partner dedicated to 
                turning your vision into reality with uncompromising quality.
              </p>

              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{strength}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button className="mt-8" size="lg" data-testid="button-about-contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary" data-testid="section-about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-12 h-12 mx-auto text-primary-foreground/80 mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who have trusted Terravision with 
            their construction and engineering needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-about-cta-quote">
                Request a Quote
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-about-cta-projects"
              >
                View Our Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
