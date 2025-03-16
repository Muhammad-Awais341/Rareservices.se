
import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    "24/7 availability for all services",
    "Professional and experienced team",
    "Modern fleet and technology",
    "Competitive pricing structure",
    "Customer satisfaction guarantee",
    "Integrated service solutions"
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div ref={sectionRef} className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 delay-100 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-xl"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1469&auto=format&fit=crop" 
                  alt="Our team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <p className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Committed to Excellence in Every Service
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded with a vision to provide integrated solutions for modern needs, our company combines the best of transportation, technology, and logistics under one roof.
            </p>
            <p className="text-muted-foreground mb-8">
              We take pride in our attention to detail, professional staff, and commitment to exceeding customer expectations in every service we provide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
