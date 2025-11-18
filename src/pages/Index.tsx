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
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Solar Installation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              POWER YOUR FUTURE WITH CLEAN ENERGY
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto">
              Leading solar energy solutions provider in Haripur, Pakistan
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-7 hover:scale-105 transition-transform">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">Benefits to Save Energy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-[1600px] mx-auto">
              <Card className="shadow-card hover:shadow-hover transition-all duration-300 text-center p-10 md:p-12">
                <CardHeader>
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-primary/20">
                    <Settings className="h-14 w-14 md:h-16 md:w-16 text-primary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-6">RELIABLE POWER</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Our solar systems provide a steady and dependable power supply, even during load-shedding.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 text-center p-10 md:p-12">
                <CardHeader>
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-primary/20">
                    <DollarSign className="h-14 w-14 md:h-16 md:w-16 text-primary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-6">COST SAVINGS</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Switching to solar energy helps reduce your electricity bills, saving you money in the long run.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 text-center p-10 md:p-12">
                <CardHeader>
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-primary/20">
                    <Wrench className="h-14 w-14 md:h-16 md:w-16 text-primary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-6">LOW MAINTENANCE</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Solar systems require minimal maintenance, offering you hassle-free, long-term energy solutions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 text-center p-10 md:p-12">
                <CardHeader>
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-primary/20">
                    <Leaf className="h-14 w-14 md:h-16 md:w-16 text-primary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-6">ECO-FRIENDLY</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    By using solar energy, you reduce your carbon footprint and contribute to a cleaner, greener planet.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Our Solar Solutions</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solar energy systems tailored to your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-[1600px] mx-auto">
              <Card className="shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
                <div className="w-full h-80 md:h-96 overflow-hidden">
                  <img src={residentialImg} alt="Residential Solar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="p-8">
                  <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl mb-4">
                    <Home className="h-8 w-8 text-primary" />
                    Residential Solar Solutions
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Efficient solar systems for homes to reduce electricity bills and increase energy independence
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Link to="/solutions/residential">
                    <Button variant="outline" className="w-full py-6 text-lg">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
                <div className="w-full h-80 md:h-96 overflow-hidden">
                  <img src={commercialImg} alt="Commercial Solar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="p-8">
                  <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl mb-4">
                    <Sun className="h-8 w-8 text-primary" />
                    Commercial Solar Solutions
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Cost-effective solar installations for businesses to maximize ROI and sustainability
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Link to="/solutions/commercial">
                    <Button variant="outline" className="w-full py-6 text-lg">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
                <div className="w-full h-80 md:h-96 overflow-hidden">
                  <img src={industrialImg} alt="Industrial Solar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="p-8">
                  <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl mb-4">
                    <Factory className="h-8 w-8 text-primary" />
                    Industrial Solar Solutions
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Large-scale solar solutions for industrial facilities to reduce operational costs
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Link to="/solutions/industrial">
                    <Button variant="outline" className="w-full py-6 text-lg">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Work Process Section */}
        <section className="py-24 md:py-32 bg-muted/20">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Our Work Process</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A streamlined process that takes you from consultation to installation and beyond.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-[1600px] mx-auto">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-36 h-36 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-18 h-18 md:w-20 md:h-20 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Consultation & Survey</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  We assess your energy needs and conduct a site survey to determine the best solar solution.
                </p>
              </div>
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-36 h-36 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Sun className="w-18 h-18 md:w-20 md:h-20 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Customized Design</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Our experts design a tailored solar system that maximizes efficiency and savings.
                </p>
              </div>
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-36 h-36 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Factory className="w-18 h-18 md:w-20 md:h-20 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Expert Installation</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Professional installation by certified technicians ensuring quality and safety standards.
                </p>
              </div>
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-36 h-36 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <HeadphonesIcon className="w-18 h-18 md:w-20 md:h-20 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg">
                    4
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Support & Maintenance</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
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
        <section className="py-24 md:py-32 bg-muted/20">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Why Choose Us?</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                We combine expertise, quality, and dedication to deliver exceptional solar solutions.
              </p>
            </div>
            
            {/* Logo Only */}
            <div className="flex justify-center mb-20">
              <img src={shaheenSolarIcon} alt="Shaheen Solar" className="w-40 h-40 md:w-48 md:h-48 object-contain" />
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-[1400px] mx-auto">
              <Card className="shadow-card hover:shadow-hover transition-all duration-300 p-8">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mb-6 shadow-md">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary mb-4">Expert Team</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Highly trained and certified solar professionals with years of industry experience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 p-8">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mb-6 shadow-md">
                    <Award className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary mb-4">Cost Efficiency</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Competitive pricing and maximum ROI with significant energy savings.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 p-8">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mb-6 shadow-md">
                    <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary mb-4">Quality Products</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Premium solar panels and equipment from trusted international manufacturers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 p-8">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mb-6 shadow-md">
                    <Award className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary mb-4">Warranty & Support</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Comprehensive warranty coverage and responsive after-sales support.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 p-8">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mb-6 shadow-md">
                    <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary mb-4">Proven Track Record</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Hundreds of successful installations across residential and commercial sectors.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 p-8">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mb-6 shadow-md">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-primary mb-4">Customer Satisfaction</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    Dedicated to exceeding expectations and building long-term relationships.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary">
          <div className="w-full px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
              Harness Solar Power for a Brighter Future
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto">
              Ready to make the switch to clean, renewable energy? Our experts are here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+923175486662">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-7 text-xl shadow-lg">
                  +92 317 5486662
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-12 py-7 text-xl shadow-lg">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ & Quote Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-[1600px] mx-auto">
              {/* FAQ Section */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">FAQ's</h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12">Answers To Your Questions</p>
                
                <div className="space-y-6">
                  <div className="bg-background p-8 rounded-lg shadow-card hover:shadow-hover transition-all">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">How much can I save with solar energy?</h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Savings depend on your energy consumption and system size. Most customers see 50-80% reduction in electricity bills.</p>
                  </div>
                  
                  <div className="bg-background p-8 rounded-lg shadow-card hover:shadow-hover transition-all">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">What is the warranty on solar panels?</h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Our solar panels come with 25-year performance warranty and 10-year product warranty from manufacturers.</p>
                  </div>
                  
                  <div className="bg-background p-8 rounded-lg shadow-card hover:shadow-hover transition-all">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">How long does installation take?</h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Residential installations typically take 1-3 days. Commercial projects vary based on size and complexity.</p>
                  </div>
                  
                  <div className="bg-background p-8 rounded-lg shadow-card hover:shadow-hover transition-all">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Do you provide maintenance services?</h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Yes, we offer comprehensive maintenance packages to ensure your system operates at peak efficiency.</p>
                  </div>
                </div>
              </div>

              {/* Quote Form */}
              <div>
                <Card className="bg-background shadow-card p-8 md:p-10 lg:p-12">
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Request a Quote</CardTitle>
                    <CardDescription className="text-lg md:text-xl">Fill out the form and our team will get back to you within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <form className="space-y-6">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-6 py-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base md:text-lg"
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full px-6 py-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base md:text-lg"
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full px-6 py-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base md:text-lg"
                      />
                      <input 
                        type="text" 
                        placeholder="Location/City" 
                        className="w-full px-6 py-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base md:text-lg"
                      />
                      <textarea 
                        placeholder="Tell us about your project requirements" 
                        rows={5}
                        className="w-full px-6 py-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none text-base md:text-lg"
                      ></textarea>
                      <Button type="submit" className="w-full py-7 text-xl font-semibold shadow-lg">
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
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
