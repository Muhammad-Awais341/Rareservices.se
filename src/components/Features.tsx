
import React from 'react';
import { 
  Clock, 
  CheckCircle, 
  MapPin,
  Users,
} from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-block px-3 py-1 mb-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            The Rare Services Advantage
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
            Experience premium service with attention to every detail
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-4 bg-[#F1F0FB] dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
            <Clock className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium text-base">24/7 Service</h3>
            <p className="text-xs text-gray-500 text-center mt-1">Always available</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-[#F1F0FB] dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
            <CheckCircle className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium text-base">Reliable</h3>
            <p className="text-xs text-gray-500 text-center mt-1">Consistent quality</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-[#F1F0FB] dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium text-base">Local Expertise</h3>
            <p className="text-xs text-gray-500 text-center mt-1">Area knowledge</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-[#F1F0FB] dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
            <Users className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium text-base">Professional</h3>
            <p className="text-xs text-gray-500 text-center mt-1">Expert team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
