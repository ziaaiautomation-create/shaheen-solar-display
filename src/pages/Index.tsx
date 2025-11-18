import { Link } from "react-router-dom";
import { ArrowRight, Sun, Factory, Home, CheckCircle2, Users, Award, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-solar.jpg";
import residentialImg from "@/assets/residential-solar.jpg";
import commercialImg from "@/assets/commercial-solar.jpg";
import industrialImg from "@/assets/industrial-solar.jpg";

const Index = () => {
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium quality solar equipment from world-renowned manufacturers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
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

              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
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

              <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle>Solar Batteries</CardTitle>
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
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Shaheen Solar Haripur?</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Your trusted partner for sustainable energy solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <CheckCircle2 className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                <p className="text-primary-foreground/80">
                  Premium solar equipment from internationally recognized brands
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-primary-foreground/80">
                  Experienced professionals dedicated to excellence
                </p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-primary-foreground/80">
                  Successful installations across residential, commercial, and industrial sectors
                </p>
              </div>
              <div className="text-center">
                <HeadphonesIcon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-primary-foreground/80">
                  Comprehensive after-sales service and maintenance
                </p>
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
