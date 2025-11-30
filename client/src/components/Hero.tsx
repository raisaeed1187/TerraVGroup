import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-black">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-slow-zoom"
          style={{ backgroundImage: `url(${assets.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-[10%] z-10 hidden lg:block animate-float-slow">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xs">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
               <Star className="w-6 h-6 text-white fill-white" />
             </div>
             <div>
               <p className="text-white font-bold text-lg">Premium Quality</p>
               <p className="text-white/60 text-sm">ISO Certified Standards</p>
             </div>
          </div>
          <p className="text-white/80 text-sm">Delivering excellence in every square meter of your space.</p>
        </div>
      </div>

      <div className="container relative z-20 px-4 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Redefining Technical Services</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.9] mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 font-heading">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">FUTURE</span> <br />
            <span className="text-primary italic pr-4">SPACES</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            Fit-Out, Renovation, and MEP Engineering solutions that merge aesthetic vision with technical precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Link href="/projects">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-200 transition-all hover:scale-105">
                Explore Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:border-white transition-all">
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/40 backdrop-blur-lg py-6 hidden md:block z-20">
        <div className="container mx-auto px-4 flex justify-between items-center text-white/80">
          <div className="flex gap-12">
            <div>
              <p className="text-3xl font-bold font-heading">15+</p>
              <p className="text-xs uppercase tracking-widest opacity-60">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-heading">200+</p>
              <p className="text-xs uppercase tracking-widest opacity-60">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-heading">100%</p>
              <p className="text-xs uppercase tracking-widest opacity-60">Client Satisfaction</p>
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer hover:text-primary transition-colors group">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary transition-colors">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <span className="text-sm font-medium tracking-widest uppercase">Watch Showreel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
