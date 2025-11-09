import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, TrendingDown, Leaf, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import commercialImg from "@/assets/commercial-solar.jpg";

const CommercialSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={commercialImg} alt="Commercial Solar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Building className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Commercial Solar Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Reduce operational costs and enhance your business sustainability with commercial solar energy
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Smart Energy Solutions for Your Business</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our commercial solar solutions help businesses of all sizes reduce energy costs, improve sustainability credentials, and achieve energy independence. From small offices to large retail centers, we design and install solar systems that deliver maximum ROI and long-term value.
              </p>
              <p className="text-lg text-muted-foreground">
                With rising electricity costs in Pakistan, solar energy has become a strategic investment for forward-thinking businesses. Our commercial installations typically achieve payback in 3-5 years, followed by decades of low-cost, clean energy.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits for Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="shadow-card">
                <CardHeader>
                  <TrendingDown className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Lower Operating Costs</CardTitle>
                  <CardDescription>
                    Reduce electricity expenses by 60-80% and improve profit margins
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Enhanced Brand Image</CardTitle>
                  <CardDescription>
                    Demonstrate environmental commitment and attract eco-conscious customers
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Leaf className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Tax Benefits</CardTitle>
                  <CardDescription>
                    Take advantage of accelerated depreciation and renewable energy incentives
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Building className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Increase Property Value</CardTitle>
                  <CardDescription>
                    Solar installations enhance commercial property value and attractiveness
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Ideal for Various Commercial Sectors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Retail & Shopping Centers</h3>
                  <p className="text-sm text-muted-foreground">
                    Offset high daytime electricity consumption with solar power while attracting environmentally conscious shoppers
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Office Buildings</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce overhead costs and create a comfortable working environment while demonstrating corporate responsibility
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Hotels & Restaurants</h3>
                  <p className="text-sm text-muted-foreground">
                    Lower operational expenses and promote your green initiatives to attract eco-tourists and conscious consumers
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Educational Institutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce operating costs while providing students with real-world examples of renewable energy technology
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Healthcare Facilities</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure reliable power supply with hybrid systems while reducing energy costs for better patient care
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Agricultural Operations</h3>
                  <p className="text-sm text-muted-foreground">
                    Power irrigation systems, cold storage, and processing facilities with clean, cost-effective solar energy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Solar Approach</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Energy Audit & Analysis</h3>
                    <p className="text-muted-foreground">
                      Comprehensive assessment of your facility's energy consumption patterns, peak demand periods, and solar potential to design the optimal system.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom System Design</h3>
                    <p className="text-muted-foreground">
                      Tailored solar solution designed to maximize ROI based on your energy needs, available space, and budget constraints.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Financial Modeling</h3>
                    <p className="text-muted-foreground">
                      Detailed financial analysis including ROI projections, payback period, tax benefits, and long-term savings estimates.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                    <p className="text-muted-foreground">
                      Minimal disruption to your operations with efficient installation by certified technicians, typically completed within 1-2 weeks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Monitoring & Maintenance</h3>
                    <p className="text-muted-foreground">
                      Real-time system monitoring, regular maintenance, and performance optimization to ensure maximum energy production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Your Business with Solar Energy</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Contact us for a free commercial solar assessment and discover how much you can save
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get Free Business Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommercialSolutions;
