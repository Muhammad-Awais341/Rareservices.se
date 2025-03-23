
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute inset-0">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="section-container flex flex-col md:flex-row items-center">
        <div className={`md:w-1/2 space-y-6 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>
            <p className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Premium Transport & Technology Services
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
            Driving Technology <br className="hidden md:block" /><span className="text-primary">Forward</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional taxi services complemented by expert IT and courier solutions—all in one place.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#book">Book a Ride</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
        
        <div className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto parallax-container">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/40 rounded-3xl transform rotate-3 animate-float"></div>
            <div className="absolute inset-0 bg-card border border-border shadow-xl rounded-3xl overflow-hidden transform -rotate-3 animate-float" style={{animationDelay: '1s'}}>
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1470&auto=format&fit=crop" 
                alt="Premium service" 
                className="w-full h-full object-cover"
                onLoad={() => setIsLoaded(true)} 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToServices}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          aria-label="Scroll to services"
        >
          <ChevronDown size={24} className="text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
