
import React from 'react';
import Navbar from '@/components/Navbar';
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
  Send
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

const Index = () => {
  const form = useForm();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Premium Taxi, IT, & Courier Service
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Professional transportation, IT solutions, and reliable courier services all in one place.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="px-8">
                  <a href="#book">Book Now</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#services">Our Services</a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg animate-float">
                <img
                  src="/placeholder.svg"
                  alt="Taxi Service"
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a comprehensive suite of professional services to meet your needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Car className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Taxi Services</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Safe, reliable transportation with professional drivers for any occasion
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Code className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">IT Solutions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Custom programming, technical support, and digital consulting services
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Package className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Courier Delivery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Fast, secure delivery of packages and documents throughout the city
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience the difference with our premium services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="font-bold">24/7 Service</h3>
              <p className="text-sm text-gray-500 text-center">Available whenever you need us</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary" />
              <h3 className="font-bold">Reliable</h3>
              <p className="text-sm text-gray-500 text-center">Consistent quality you can depend on</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="font-bold">Local Expertise</h3>
              <p className="text-sm text-gray-500 text-center">Deep knowledge of the area</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="font-bold">Professional Team</h3>
              <p className="text-sm text-gray-500 text-center">Experienced staff ready to serve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-20 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Trusted by individuals and businesses alike
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between p-6 bg-gray-50 rounded-lg dark:bg-gray-900">
              <div>
                <div className="flex gap-1 mb-4">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                </div>
                <p className="mb-2 text-gray-600 dark:text-gray-300">
                  "The taxi service was punctual and professional. I'll definitely use them again for my transportation needs."
                </p>
              </div>
              <p className="font-medium">- Sarah T.</p>
            </div>
            <div className="flex flex-col justify-between p-6 bg-gray-50 rounded-lg dark:bg-gray-900">
              <div>
                <div className="flex gap-1 mb-4">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                </div>
                <p className="mb-2 text-gray-600 dark:text-gray-300">
                  "Their IT team helped us develop a custom solution that streamlined our operations. Excellent service!"
                </p>
              </div>
              <p className="font-medium">- Mark J., Business Owner</p>
            </div>
            <div className="flex flex-col justify-between p-6 bg-gray-50 rounded-lg dark:bg-gray-900">
              <div>
                <div className="flex gap-1 mb-4">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                </div>
                <p className="mb-2 text-gray-600 dark:text-gray-300">
                  "Fast courier delivery when I needed it most. The package arrived intact and on time. Great service!"
                </p>
              </div>
              <p className="font-medium">- Lisa R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book Our Services</h2>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  Ready to experience our premium services? Book now or contact us for more information.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <span>Call us: (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Email: info@ultraride.com</span>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full md:w-auto">Book Now</Button>
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
                              <Input placeholder="(123) 456-7890" {...field} />
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
                                <option value="it">IT Solution</option>
                                <option value="courier">Courier Delivery</option>
                              </select>
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
            <div className="flex items-center justify-center p-6 rounded-lg border bg-gray-50 dark:bg-gray-900">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg dark:bg-gray-800">
                  <Car className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium text-center">Standard Fare</h3>
                  <p className="text-sm text-gray-500 text-center">From $10</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg dark:bg-gray-800">
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium text-center">IT Consulting</h3>
                  <p className="text-sm text-gray-500 text-center">From $50/hr</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg dark:bg-gray-800">
                  <Package className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium text-center">Local Delivery</h3>
                  <p className="text-sm text-gray-500 text-center">From $15</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg dark:bg-gray-800">
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium text-center">Express Service</h3>
                  <p className="text-sm text-gray-500 text-center">+$5 fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-gray-950">
        <div className="container flex flex-col gap-4 py-10 md:py-16 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">UltraRide</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your premium taxi, IT & courier service provider.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div className="space-y-2">
                <h4 className="font-medium">Services</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#services" className="text-sm hover:underline">Taxi</a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm hover:underline">IT Solutions</a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm hover:underline">Courier</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Company</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-sm hover:underline">About Us</a>
                  </li>
                  <li>
                    <a href="#features" className="text-sm hover:underline">Features</a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-sm hover:underline">Testimonials</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Contact</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#book" className="text-sm hover:underline">Book Now</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:underline">(123) 456-7890</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:underline">info@ultraride.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            &copy; {new Date().getFullYear()} UltraRide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
