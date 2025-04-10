
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-block px-3 py-1 mb-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex gap-1 mb-3 text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              "The taxi service was punctual and professional. I'll definitely use them again for my transportation needs."
            </p>
            <p className="text-sm font-medium">— Sarah T.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex gap-1 mb-3 text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              "Their IT team helped us develop a custom solution that streamlined our operations. Excellent service!"
            </p>
            <p className="text-sm font-medium">— Mark J., Business Owner</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex gap-1 mb-3 text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              "Fast courier delivery when I needed it most. The package arrived intact and on time. Great service!"
            </p>
            <p className="text-sm font-medium">— Lisa R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
