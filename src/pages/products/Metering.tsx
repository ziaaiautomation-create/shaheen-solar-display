import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingDown, Leaf, CheckCircle2 } from "lucide-react";

const Metering = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Zap className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Net Metering</h1>
              <p className="text-xl text-primary-foreground/90">
                Maximize your solar investment with net metering solutions
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">What is Net Metering?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. When your solar panels produce more electricity than you use, the excess power is fed back to the utility grid, and you receive credits on your electricity bill.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How Net Metering Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Solar Generation</h3>
                  <p className="text-sm text-muted-foreground">
                    Your solar panels generate electricity during daylight hours
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Power Usage</h3>
                  <p className="text-sm text-muted-foreground">
                    Electricity powers your home or business first
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Export to Grid</h3>
                  <p className="text-sm text-muted-foreground">
                    Excess power is exported to the utility grid
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Earn Credits</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive credits on your electricity bill
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Net Metering Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <TrendingDown className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Reduced Electricity Bills</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Significantly lower your monthly electricity costs by offsetting grid consumption with solar credits, potentially reducing bills by 70-90%
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <Zap className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Faster ROI</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Accelerate your return on investment through billing credits, typically achieving payback in 3-5 years instead of 7-10 years
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <Leaf className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Environmental Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Contribute to a cleaner grid by supplying renewable energy, reducing carbon emissions and supporting sustainable development
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Net Metering Requirements in Pakistan</h2>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">System Capacity</h4>
                        <p className="text-sm text-muted-foreground">
                          Residential systems up to 1MW and commercial/industrial systems as per approved capacity
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Bi-directional Meter</h4>
                        <p className="text-sm text-muted-foreground">
                          Installation of a bidirectional meter to measure both import and export of electricity
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">NEPRA Approval</h4>
                        <p className="text-sm text-muted-foreground">
                          Generation license from National Electric Power Regulatory Authority (NEPRA) - we assist with the application process
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Utility Agreement</h4>
                        <p className="text-sm text-muted-foreground">
                          Net metering agreement with your local distribution company (DISCO) - we handle all documentation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Safety Standards</h4>
                        <p className="text-sm text-muted-foreground">
                          Compliance with Pakistan's electrical safety standards and grid connection requirements
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Net Metering Services</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We handle the entire net metering process for you, from initial application to final commissioning:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-muted p-6 rounded-lg text-left">
                  <h3 className="font-semibold text-lg mb-2">Documentation & Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete preparation and submission of all required documents to NEPRA and your local DISCO
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg text-left">
                  <h3 className="font-semibold text-lg mb-2">System Design & Installation</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional installation of grid-tied solar systems with all necessary safety equipment
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg text-left">
                  <h3 className="font-semibold text-lg mb-2">Meter Installation Coordination</h3>
                  <p className="text-sm text-muted-foreground">
                    Coordination with utility company for bidirectional meter installation and system testing
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg text-left">
                  <h3 className="font-semibold text-lg mb-2">Commissioning & Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Final system commissioning and ongoing support for net metering operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Metering;
