import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TimelineStep } from "@/components/TimelineStep";
import { 
  ArrowRight, 
  Phone,
  Shield,
  Award,
  Clock,
  CheckCircle2,
  Users,
  Wrench,
  ClipboardCheck
} from "lucide-react";

const timelineSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We begin by understanding your vision, requirements, and objectives. Our team conducts a thorough discussion to capture every detail of your project needs.",
    icon: "message-square",
  },
  {
    step: 2,
    title: "Site Inspection",
    description: "Our experts visit your site to assess conditions, take measurements, and identify any potential challenges. This forms the foundation for accurate planning.",
    icon: "search",
  },
  {
    step: 3,
    title: "Planning & Costing",
    description: "Based on our assessment, we develop detailed plans, schedules, and transparent cost estimates. You'll receive a comprehensive proposal with no hidden surprises.",
    icon: "file-text",
  },
  {
    step: 4,
    title: "Execution",
    description: "Our skilled teams execute the project with precision, adhering to timelines and quality standards. Regular updates keep you informed throughout the process.",
    icon: "hammer",
  },
  {
    step: 5,
    title: "Quality Control & Handover",
    description: "Rigorous quality checks ensure everything meets our high standards. We provide a complete handover with documentation and after-sales support.",
    icon: "check-circle",
  },
];

const processFeatures = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero-tolerance safety policy with regular training and compliance monitoring on all sites.",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Detailed scheduling and milestone tracking to ensure on-time project delivery.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Multi-stage quality checks at every phase, documented and verified before proceeding.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Assigned project manager and team who stay with you from start to finish.",
  },
  {
    icon: Wrench,
    title: "Expert Execution",
    description: "Skilled craftsmen and certified technicians using industry-best practices.",
  },
  {
    icon: ClipboardCheck,
    title: "Documentation",
    description: "Complete project documentation, warranties, and maintenance guidelines.",
  },
];

const guarantees = [
  "100% transparency in pricing and progress",
  "Regular progress reports and updates",
  "Dedicated project manager for communication",
  "Quality materials from trusted suppliers",
  "Compliance with all safety regulations",
  "Post-project support and warranty",
];

export default function Execution() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" data-testid="section-execution-hero">
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
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" data-testid="text-execution-hero-title">
              From Vision to Reality
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Our proven 5-step execution process ensures every project is delivered 
              with precision, quality, and complete transparency. Here's how we work.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-24 bg-background" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              The Terravision Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A systematic approach that ensures excellence at every stage of your project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineSteps.map((step, index) => (
              <TimelineStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === timelineSteps.length - 1}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Features */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Why Our Process Works
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Built for Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Key pillars that make our execution process stand out from the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processFeatures.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="border-border hover-elevate"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guarantee */}
      <section className="py-20 md:py-24 bg-background" data-testid="section-guarantee">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Our Commitment
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                The Terravision Guarantee
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                When you choose Terravision, you're not just getting a contractor—you're 
                getting a partner committed to your project's success. Here's what we promise:
              </p>

              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{guarantee}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button className="mt-8" size="lg" data-testid="button-execution-quote">
                  <Phone className="w-5 h-5 mr-2" />
                  Start Your Project
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Terravision team executing a project"
                className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden lg:block">
                <p className="text-4xl font-bold">98%</p>
                <p className="text-sm opacity-90">On-Time Delivery Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project duration varies based on scope and complexity. A typical fit-out project takes 8-16 weeks, while larger civil works may take 6-12 months. We provide detailed timelines during the planning phase.",
              },
              {
                question: "Do you handle permits and approvals?",
                answer: "Yes, we manage all necessary permits, approvals, and regulatory compliance as part of our comprehensive service. This ensures a hassle-free experience for our clients.",
              },
              {
                question: "What about project changes during execution?",
                answer: "We understand that changes may be needed. Our flexible approach allows for modifications, with transparent communication about any impact on timeline or cost before proceeding.",
              },
              {
                question: "How do you ensure quality?",
                answer: "We implement multi-stage quality checks, use certified materials, and have dedicated quality control teams. Every milestone is documented and verified before proceeding to the next phase.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary" data-testid="section-execution-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Experience Our Process?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's start with a consultation. Our team will guide you through every 
            step and ensure your project's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-execution-cta-consultation">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-execution-cta-projects"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
