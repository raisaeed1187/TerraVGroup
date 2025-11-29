import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Construction Avenue", "Business District, City 12345"],
    action: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    action: "tel:+1234567890",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@terravision.com", "projects@terravision.com"],
    action: "mailto:info@terravision.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    action: null,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" data-testid="section-contact-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" data-testid="text-contact-hero-title">
              Let's Start Your Project
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out to us 
              for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-24 bg-background" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              
              <Card className="border-border">
                <CardContent className="p-6 md:p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <Card 
                    key={item.title} 
                    className="border-border hover-elevate"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          {item.details.map((detail, index) => (
                            <p key={index} className="text-muted-foreground text-sm">
                              {item.action ? (
                                <a 
                                  href={item.action}
                                  className="hover:text-primary transition-colors"
                                  data-testid={`link-contact-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact Card */}
              <Card className="mt-8 border-primary bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold text-foreground">Need Immediate Help?</h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    For urgent inquiries, please call us directly or use our WhatsApp chat.
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    data-testid="link-urgent-call"
                  >
                    <Phone className="w-4 h-4" />
                    +1 (234) 567-890
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="section-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Our Location
            </h2>
            <p className="text-muted-foreground">
              Visit our office or schedule an appointment
            </p>
          </div>
          
          {/* Map Placeholder */}
          <Card className="border-border overflow-hidden">
            <div className="aspect-[16/9] md:aspect-[21/9] bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Terravision Headquarters
                  </h3>
                  <p className="text-muted-foreground">
                    123 Construction Avenue, Business District, City 12345
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-4"
                    data-testid="link-google-maps"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              {/* Background pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary" data-testid="section-contact-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
            Prefer to Explore First?
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Check out our portfolio and services to learn more about what we can do for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <button className="px-6 py-3 bg-primary-foreground text-primary font-medium rounded-md hover:bg-primary-foreground/90 transition-colors" data-testid="button-contact-cta-projects">
                View Our Projects
              </button>
            </Link>
            <Link href="/services">
              <button className="px-6 py-3 bg-transparent border border-primary-foreground/30 text-primary-foreground font-medium rounded-md hover:bg-primary-foreground/10 transition-colors" data-testid="button-contact-cta-services">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
