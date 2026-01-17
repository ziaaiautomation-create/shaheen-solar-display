import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedContainer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-primary-foreground/90"
              >
                Get in touch with our team for any inquiries or to schedule a free consultation
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Information Cards */}
              <AnimatedContainer className="space-y-6">
                <AnimatedItem>
                  <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                    <CardHeader>
                      <Mail className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>Email Us</CardTitle>
                      <CardDescription>Send us an email anytime</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a href="mailto:shaheensolarharipur@gmail.com" className="text-primary hover:underline">
                        shaheensolarharipur@gmail.com
                      </a>
                    </CardContent>
                  </Card>
                </AnimatedItem>

                <AnimatedItem>
                  <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                    <CardHeader>
                      <Phone className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>Call Us</CardTitle>
                      <CardDescription>Mon-Sat from 9am to 6pm</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a href="tel:+923075630186" className="text-primary hover:underline">
                        +92 307 5630186
                      </a>
                    </CardContent>
                  </Card>
                </AnimatedItem>

                <AnimatedItem>
                  <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                    <CardHeader>
                      <MapPin className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>Visit Us</CardTitle>
                      <CardDescription>Our office location</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Near circular road opposite CNG pump station gas filler one SMT Tool second floor
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedItem>
              </AnimatedContainer>

              {/* Contact Form */}
              <AnimatedSection animation="fadeInRight" className="lg:col-span-2">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+92 xxx xxxxxxx"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or inquiry..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full hover:scale-[1.02] transition-transform">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fadeInUp">
                <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={0.2}>
                <div className="aspect-video bg-background rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d72.9!3d33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shaheen Solar Haripur Location"
                  ></iframe>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
