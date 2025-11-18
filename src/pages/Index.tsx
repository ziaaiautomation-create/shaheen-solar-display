import { Link } from "react-router-dom";
import { ArrowRight, Sun, Factory, Home, CheckCircle2, Users, Award, HeadphonesIcon, ChevronLeft, ChevronRight, Settings, DollarSign, Wrench, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-solar.jpg";
import residentialImg from "@/assets/residential-solar.jpg";
import commercialImg from "@/assets/commercial-solar.jpg";
import industrialImg from "@/assets/industrial-solar.jpg";
import shaheenSolarIcon from "@/assets/shaheen-solar-icon.jpg";


const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Solar Installation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              POWER YOUR FUTURE WITH CLEAN ENERGY
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Leading solar energy solutions provider in Haripur, Pakistan
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Benefits to Save Energy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="shadow-card hover:shadow-hover transition-all duration-300 text-center p-8">
                <CardHeader>
                  <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-border">
                    <Settings className="h-12 w-12 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-4">RELIABLE POWER</CardTitle>
                  <CardDescription className="text-base">
                    Our solar systems provide a steady and dependable power supply, even during load-shedding.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 text-center p-8">
                <CardHeader>
                  <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-border">
                    <DollarSign className="h-12 w-12 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-4">COST SAVINGS</CardTitle>
                  <CardDescription className="text-base">
                    Switching to solar energy helps reduce your electricity bills, saving you money in the long run.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 text-center p-8">
                <CardHeader>
                  <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-border">
                    <Wrench className="h-12 w-12 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-4">LOW MAINTENANCE</CardTitle>
                  <CardDescription className="text-base">
                    Solar systems require minimal maintenance, offering you hassle-free, long-term energy solutions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 text-center p-8">
                <CardHeader>
                  <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-border">
                    <Leaf className="h-12 w-12 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-4">ECO-FRIENDLY</CardTitle>
                  <CardDescription className="text-base">
                    By using solar energy, you reduce your carbon footprint and contribute to a cleaner, greener planet.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Solar Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solar energy systems tailored to your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <img src={residentialImg} alt="Residential Solar" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-6 w-6 text-primary" />
                    Residential Solar Solutions
                  </CardTitle>
                  <CardDescription>
                    Efficient solar systems for homes to reduce electricity bills and increase energy independence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/solutions/residential">
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <img src={commercialImg} alt="Commercial Solar" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-6 w-6 text-primary" />
                    Commercial Solar Solutions
                  </CardTitle>
                  <CardDescription>
                    Cost-effective solar installations for businesses to maximize ROI and sustainability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/solutions/commercial">
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <img src={industrialImg} alt="Industrial Solar" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="h-6 w-6 text-primary" />
                    Industrial Solar Solutions
                  </CardTitle>
                  <CardDescription>
                    Large-scale solar power systems for industrial facilities to cut operational costs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/solutions/industrial">
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Work Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Work Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A streamlined process that takes you from consultation to installation and beyond.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Consultation & Survey</h3>
                <p className="text-muted-foreground text-sm">
                  We assess your energy needs and conduct a site survey to determine the best solar solution.
                </p>
              </div>
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Sun className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Customized Design</h3>
                <p className="text-muted-foreground text-sm">
                  Our experts design a tailored solar system that maximizes efficiency and savings.
                </p>
              </div>
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Factory className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Expert Installation</h3>
                <p className="text-muted-foreground text-sm">
                  Professional installation by certified technicians ensuring quality and safety standards.
                </p>
              </div>
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <HeadphonesIcon className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Support & Maintenance</h3>
                <p className="text-muted-foreground text-sm">
                  Ongoing support and maintenance to keep your system running at peak performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium quality solar equipment from world-renowned manufacturers
              </p>
            </div>
            
            {/* Scrollable Products Container */}
            <div className="relative">
              {/* Left Scroll Button */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Right Scroll Button */}
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <Card className="min-w-[350px] shadow-card hover:shadow-hover transition-all duration-300 flex-shrink-0">
                  <CardHeader>
                    <CardTitle>Solar Inverters</CardTitle>
                    <CardDescription>
                      High-efficiency inverters from leading brands for reliable power conversion
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/products/solar-inverters">
                      <Button variant="outline" className="w-full">
                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="min-w-[350px] shadow-card hover:shadow-hover transition-all duration-300 flex-shrink-0">
                  <CardHeader>
                    <CardTitle>Solar Panels</CardTitle>
                    <CardDescription>
                      Premium solar panels with high efficiency and long-lasting performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/products/solar-panels">
                      <Button variant="outline" className="w-full">
                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="min-w-[350px] shadow-card hover:shadow-hover transition-all duration-300 flex-shrink-0">
                  <CardHeader>
                    <CardTitle>Batteries</CardTitle>
                    <CardDescription>
                      Advanced lithium-ion batteries for efficient energy storage
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/products/batteries">
                      <Button variant="outline" className="w-full">
                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="min-w-[350px] shadow-card hover:shadow-hover transition-all duration-300 flex-shrink-0">
                  <CardHeader>
                    <CardTitle>Structure</CardTitle>
                    <CardDescription>
                      Durable mounting structures and support systems for solar installations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/products/structure">
                      <Button variant="outline" className="w-full">
                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="min-w-[350px] shadow-card hover:shadow-hover transition-all duration-300 flex-shrink-0">
                  <CardHeader>
                    <CardTitle>Net Metering</CardTitle>
                    <CardDescription>
                      Advanced metering solutions for monitoring and optimizing energy usage
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/products/metering">
                      <Button variant="outline" className="w-full">
                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine expertise, quality, and dedication to deliver exceptional solar solutions.
              </p>
            </div>
            
            {/* Logo Only */}
            <div className="flex justify-center mb-16">
              <img src={shaheenSolarIcon} alt="Shaheen Solar" className="w-32 h-32 object-contain" />
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-3">
                    <Users className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">Expert Team</CardTitle>
                  <CardDescription>
                    Highly trained and certified solar professionals with years of industry experience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-3">
                    <Award className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">Cost Efficiency</CardTitle>
                  <CardDescription>
                    Competitive pricing and maximum ROI with significant energy savings.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">Quality Products</CardTitle>
                  <CardDescription>
                    Premium solar panels and equipment from trusted international manufacturers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">Compliance & Safety</CardTitle>
                  <CardDescription>
                    All installations meet international safety standards and local regulations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-3">
                    <Sun className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">Tailored Solutions</CardTitle>
                  <CardDescription>
                    Customized solar systems designed specifically for your unique requirements.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-3">
                    <HeadphonesIcon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">Customer Satisfaction</CardTitle>
                  <CardDescription>
                    Dedicated support team ensuring your complete satisfaction at every step.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Harness Solar Power for a Brighter Future
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Ready to make the switch to clean, renewable energy? Our experts are here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+923175486662">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                  📞 +92 317 5486662
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ & Quote Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* FAQ Section */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">FAQ's</h2>
                <p className="text-lg text-muted-foreground">Answers To Your Questions</p>
              </div>

              {/* Request Quote Form */}
              <div>
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Request a Quote</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name*</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email*</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone*</label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <Button type="submit" className="w-full">Submit Request</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
                <div className="text-primary-foreground/80 text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">15+</div>
                <div className="text-primary-foreground/80 text-sm md:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">98%</div>
                <div className="text-primary-foreground/80 text-sm md:text-base">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">50+</div>
                <div className="text-primary-foreground/80 text-sm md:text-base">Expert Team Members</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
