import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Sun, Zap, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import residentialImg from "@/assets/residential-solar.jpg";

const ResidentialSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={residentialImg} alt="Residential Solar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Home className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Residential Solar Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Power your home with clean, renewable energy and significantly reduce your electricity bills
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Transform Your Home with Solar Energy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our residential solar solutions are designed to meet the unique energy needs of homeowners in Pakistan. Whether you want to reduce your electricity bills, protect against rising energy costs, or reduce your carbon footprint, we provide customized solar systems that deliver reliable performance for decades.
              </p>
              <p className="text-lg text-muted-foreground">
                With professional installation, premium components, and comprehensive support, we make the transition to solar energy seamless and rewarding.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Residential Solar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="shadow-card">
                <CardHeader>
                  <Sun className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Lower Electricity Bills</CardTitle>
                  <CardDescription>
                    Reduce your monthly electricity costs by up to 90% with solar energy
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Energy Independence</CardTitle>
                  <CardDescription>
                    Generate your own clean energy and reduce reliance on the grid
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Increase Home Value</CardTitle>
                  <CardDescription>
                    Solar installations can increase your property value by up to 4%
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Home className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>25+ Year Warranty</CardTitle>
                  <CardDescription>
                    Long-term peace of mind with extended manufacturer warranties
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Residential Services</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Free Site Assessment</h3>
                    <p className="text-muted-foreground">
                      Our experts visit your home to evaluate your roof, energy consumption, and provide a detailed solar potential analysis at no cost.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom System Design</h3>
                    <p className="text-muted-foreground">
                      Tailored solar system design optimized for your home's energy needs, roof configuration, and budget.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                    <p className="text-muted-foreground">
                      Certified technicians install your system with minimal disruption, typically completing residential installations in 1-3 days.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Net Metering Setup</h3>
                    <p className="text-muted-foreground">
                      Complete assistance with net metering application, documentation, and utility coordination to maximize your savings.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
                    <p className="text-muted-foreground">
                      Comprehensive after-sales support including system monitoring, regular maintenance, and prompt troubleshooting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Options */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Residential System Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">On-Grid Solar System</CardTitle>
                  <CardDescription>Connected to utility grid with net metering</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Perfect for homeowners who want to reduce electricity bills while staying connected to the grid.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Lower installation costs (no batteries required)</li>
                    <li>✓ Sell excess power back to the grid</li>
                    <li>✓ Net metering benefits</li>
                    <li>✓ Minimal maintenance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Hybrid Solar System</CardTitle>
                  <CardDescription>Grid-tied with battery backup</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Ideal for areas with frequent power outages, combining grid connection with energy storage.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Backup power during outages</li>
                    <li>✓ Store excess solar energy</li>
                    <li>✓ Use stored power during peak rates</li>
                    <li>✓ Maximum energy independence</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Go Solar?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Get a free consultation and customized solar solution for your home today
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Schedule Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResidentialSolutions;
