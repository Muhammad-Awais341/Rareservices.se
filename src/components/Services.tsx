
import { useState, useEffect, useRef } from 'react';
import { Car, Code, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, image, index }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`service-card transform transition-all duration-700 delay-${index * 200} ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-primary mb-2">
              {icon}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" size="sm" className="mt-2">
          Learn More
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Premium Solutions for Modern Needs
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide exceptional transportation, technical expertise, and reliable delivery services
            all under one roof, designed to meet your diverse needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            title="Premium Taxi Service"
            description="Comfortable, timely, and professional taxi services for all your transportation needs, available 24/7."
            icon={<Car size={20} />}
            image="https://images.unsplash.com/photo-1603298518476-60492b366e87?q=80&w=1470&auto=format&fit=crop"
            index={0}
          />
          <ServiceCard
            title="Digital Tech Solutions"
            description="Expert software development, web design, and technical support services to elevate your digital presence."
            icon={<Code size={20} />}
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop"
            index={1}
          />
          <ServiceCard
            title="Courier Services"
            description="Fast, secure, and reliable delivery services for packages of all sizes, ensuring your items reach their destination safely."
            icon={<Package size={20} />}
            image="https://images.unsplash.com/photo-1616832880334-b1004d9808da?q=80&w=1470&auto=format&fit=crop"
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
