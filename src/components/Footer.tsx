import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-gray-950">
      <div className="container max-w-5xl mx-auto py-8 px-4 md:px-6">
        <div className="text-center mb-6">
          <p className="text-primary italic font-medium">"Your satisfaction is our business"</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo className="mb-3" />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Premium transport & technology services in Sweden.
            </p>
            <div className="space-y-1">
              <p className="text-xs">Stockholm, Sweden</p>
              <p className="text-xs">Phone: +46 790343729</p>
              <p className="text-xs">Email: rareservices.se@gmail.com</p>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Services</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#services" className="text-xs hover:underline">Taxi</a>
                </li>
                <li>
                  <a href="#services" className="text-xs hover:underline">Digital Tech Solutions</a>
                </li>
                <li>
                  <a href="#services" className="text-xs hover:underline">Courier</a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#about" className="text-xs hover:underline">About Us</a>
                </li>
                <li>
                  <a href="#features" className="text-xs hover:underline">Features</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-xs hover:underline">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Contact</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#book" className="text-xs hover:underline">Book Now</a>
                </li>
                <li>
                  <a href="tel:+46790343729" className="text-xs hover:underline">+46 790343729</a>
                </li>
                <li>
                  <a href="mailto:contact@rareservices.se" className="text-xs hover:underline">Email Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
          &copy; {new Date().getFullYear()} Rare Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
