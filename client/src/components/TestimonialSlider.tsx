import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export function TestimonialSlider({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000 
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, testimonials.length]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto" data-testid="testimonial-slider">
      <Card className="border-border bg-card">
        <CardContent className="p-8 md:p-12 text-center">
          {/* Quote Icon */}
          <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Quote className="w-6 h-6 text-primary" />
          </div>

          {/* Testimonial Text */}
          <blockquote 
            className={`text-lg md:text-xl text-foreground italic leading-relaxed mb-8 transition-opacity duration-500 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            "{current.text}"
          </blockquote>

          {/* Author */}
          <div 
            className={`flex flex-col items-center gap-4 transition-opacity duration-500 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Avatar className="w-16 h-16 border-2 border-primary">
              <AvatarImage src={current.avatar} alt={current.name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                {current.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{current.name}</p>
              <p className="text-sm text-muted-foreground">
                {current.role}, {current.company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-card border border-border shadow-sm"
            onClick={goToPrev}
            disabled={isAnimating}
            data-testid="button-testimonial-prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-card border border-border shadow-sm"
            onClick={goToNext}
            disabled={isAnimating}
            data-testid="button-testimonial-next"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </>
      )}

      {/* Dots Navigation */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-6 bg-primary' 
                  : 'bg-muted hover:bg-muted-foreground'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              data-testid={`button-testimonial-dot-${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
