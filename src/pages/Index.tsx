import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Car, 
  Code, 
  Package, 
  PhoneCall, 
  Clock, 
  CheckCircle, 
  MapPin,
  Users,
  Star,
  Send,
  Calendar,
  Plane
} from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';

const Index = () => {
  const form = useForm();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Features Section */}
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
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-medium text-base">24/7 Service</h3>
              <p className="text-xs text-gray-500 text-center mt-1">Always available</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-medium text-base">Reliable</h3>
              <p className="text-xs text-gray-500 text-center mt-1">Consistent quality</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-medium text-base">Local Expertise</h3>
              <p className="text-xs text-gray-500 text-center mt-1">Area knowledge</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-medium text-base">Professional</h3>
              <p className="text-xs text-gray-500 text-center mt-1">Expert team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Booking Section */}
      <section id="book" className="py-12 md:py-20 bg-primary/5">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 mb-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  Book Now
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready When You Are
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Experience our premium services today
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <span className="text-sm">+46 70 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span className="text-sm">contact@rareservices.se</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Stockholm, Sweden</span>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="w-full md:w-auto">Book a Service</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Book a Service</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to book our services. We'll get back to you shortly.
                    </DialogDescription>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => {})} className="space-y-4 pt-4">
                      <FormField
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="+46 70 123 4567" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                              >
                                <option value="taxi">Taxi Service</option>
                                <option value="airport">Airport Transfer</option>
                                <option value="reservation">Reservation</option>
                                <option value="tech">Digital Tech Solutions</option>
                                <option value="courier">Courier Delivery</option>
                              </select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date & Time (for Reservations)</FormLabel>
                            <FormControl>
                              <Input type="datetime-local" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Details</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Please provide details about your request..." {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">Submit Request</Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-2 gap-4 h-fit">
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <Car className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-center">Standard Fare</h3>
                <p className="text-xs text-gray-500 text-center">410 kr (15 min/10 km)</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <Plane className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-center">Airport Transfer</h3>
                <p className="text-xs text-gray-500 text-center">800 kr (to City)</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-center">Reservation</h3>
                <p className="text-xs text-gray-500 text-center">Book in advance</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <Code className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-sm font-medium text-center">Digital Tech Solutions</h3>
                <p className="text-xs text-gray-500 text-center">From 500 kr/hr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-gray-950">
        <div className="container max-w-5xl mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-3">Rare Services</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Premium transport & technology services in Sweden.
              </p>
              <div className="space-y-1">
                <p className="text-xs">Stockholm, Sweden</p>
                <p className="text-xs">Phone: +46 70 123 4567</p>
                <p className="text-xs">Email: contact@rareservices.se</p>
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
                    <a href="tel:+46701234567" className="text-xs hover:underline">+46 70 123 4567</a>
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
    </div>
  );
};

export default Index;
