import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { 
  PhoneCall, 
  Send, 
  MapPin,
  Car,
  Plane,
  Calendar,
  Code,
} from 'lucide-react';

const BookingSection = () => {
  const form = useForm();

  return (
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
                <span className="text-sm">+46 790343729</span>
              </div>
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                <span className="text-sm">rareservices.se@gmail.com</span>
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
  );
};

export default BookingSection;
