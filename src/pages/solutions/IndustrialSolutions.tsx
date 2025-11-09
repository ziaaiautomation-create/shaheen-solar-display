import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Zap, TrendingDown, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import industrialImg from "@/assets/industrial-solar.jpg";

const IndustrialSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={industrialImg} alt="Industrial Solar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Factory className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Industrial Solar Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Large-scale solar power systems designed to meet the high energy demands of industrial facilities
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Powering Industrial Excellence with Solar Energy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                For energy-intensive industrial operations, electricity costs represent a significant portion of operational expenses. Our industrial solar solutions are engineered to handle high power demands while delivering substantial cost savings and energy security.
              </p>
              <p className="text-lg text-muted-foreground">
                We specialize in large-scale solar installations for factories, manufacturing plants, warehouses, and industrial complexes, providing robust systems that operate reliably in demanding environments and deliver predictable, low-cost energy for 25+ years.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Industrial Solar Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="shadow-card">
                <CardHeader>
                  <TrendingDown className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Massive Cost Savings</CardTitle>
                  <CardDescription>
                    Reduce energy costs by 50-70% and protect against rising electricity tariffs
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Energy Security</CardTitle>
                  <CardDescription>
                    Reduce dependence on grid and ensure stable power supply for operations
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Predictable Energy Costs</CardTitle>
                  <CardDescription>
                    Lock in low electricity rates and improve financial forecasting
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Factory className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Scalable Solutions</CardTitle>
                  <CardDescription>
                    Systems designed to grow with your business and energy needs
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Industrial Applications */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Industrial Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Manufacturing Plants</h3>
                  <p className="text-sm text-muted-foreground">
                    Power production lines, machinery, and HVAC systems with reliable solar energy, reducing production costs and improving competitiveness
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Textile & Garment Factories</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet high electricity demands of industrial machines, dyeing processes, and climate control systems with cost-effective solar power
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Food Processing Facilities</h3>
                  <p className="text-sm text-muted-foreground">
                    Power cold storage, processing equipment, and packaging lines while maintaining strict hygiene and temperature requirements
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Warehouses & Logistics</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilize large roof spaces for solar installations to power lighting, material handling equipment, and climate control
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Chemical & Pharmaceutical</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure reliable power for critical processes, cleanrooms, and quality control systems with hybrid solar solutions
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Steel & Metal Industries</h3>
                  <p className="text-sm text-muted-foreground">
                    Supplement high energy consumption of furnaces, processing equipment, and fabrication machinery with large-scale solar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Features */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Industrial System Features</h2>
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>High-Capacity Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      We design and install industrial solar systems ranging from 100kW to multi-megawatt capacity, utilizing:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ High-efficiency commercial-grade solar panels with 21%+ efficiency</li>
                      <li>✓ Industrial-scale inverters with maximum power output and reliability</li>
                      <li>✓ Robust mounting structures designed for heavy loads and wind resistance</li>
                      <li>✓ Advanced monitoring and control systems for performance optimization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Hybrid & Off-Grid Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      For facilities requiring uninterrupted power or operating in remote locations:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Battery storage integration for 24/7 operation capability</li>
                      <li>✓ Backup power during grid outages and load shedding</li>
                      <li>✓ Diesel generator integration for complete energy security</li>
                      <li>✓ Microgrid solutions for remote industrial sites</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Performance Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Real-time system monitoring and analytics for industrial operations:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Cloud-based monitoring accessible from anywhere</li>
                      <li>✓ Production tracking and performance analytics</li>
                      <li>✓ Automated alerts for maintenance requirements</li>
                      <li>✓ Integration with existing energy management systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Project Execution */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Industrial Project Approach</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Detailed Energy Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive load profiling and energy audit to understand your consumption patterns
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Site Assessment & Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Structural evaluation, shading analysis, and optimal system design
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Financial Modeling</h3>
                    <p className="text-sm text-muted-foreground">
                      ROI analysis, payback calculations, and financing options
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Turnkey Installation</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete project management with minimal disruption to operations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Commissioning & Training</h3>
                    <p className="text-sm text-muted-foreground">
                      System testing, staff training, and performance verification
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Long-term Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Preventive maintenance, performance optimization, and technical support
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
            <h2 className="text-3xl font-bold mb-6">Power Your Industrial Operations with Solar</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Contact us for a comprehensive industrial solar assessment and ROI analysis
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Request Industrial Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustrialSolutions;
