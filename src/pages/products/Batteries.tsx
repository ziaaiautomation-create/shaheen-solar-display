import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Zap, Shield, Clock } from "lucide-react";

const Batteries = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Battery className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Lithium-ion Batteries</h1>
              <p className="text-xl text-primary-foreground/90">
                Advanced energy storage solutions for your solar system
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Our lithium-ion battery solutions provide reliable energy storage for your solar power system. With superior efficiency, longer lifespan, and faster charging capabilities compared to traditional batteries, lithium-ion technology ensures you have power when you need it most.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Lithium-ion Batteries?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <Zap className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>High Efficiency</CardTitle>
                    <CardDescription>
                      Up to 95% charge/discharge efficiency for maximum energy utilization
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <Clock className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Long Lifespan</CardTitle>
                    <CardDescription>
                      10+ years of reliable performance with minimal degradation
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <Battery className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Fast Charging</CardTitle>
                    <CardDescription>
                      Rapid charging capability to store energy quickly during peak production
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <Shield className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Safe & Reliable</CardTitle>
                    <CardDescription>
                      Advanced BMS protection with multiple safety features built-in
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Battery Storage Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Energy Independence</h3>
                  <p className="text-muted-foreground">
                    Store excess solar energy during the day and use it at night or during power outages, reducing your reliance on the grid.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Cost Savings</h3>
                  <p className="text-muted-foreground">
                    Avoid peak electricity rates by using stored solar energy, significantly reducing your monthly electricity bills.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Backup Power</h3>
                  <p className="text-muted-foreground">
                    Ensure continuous power supply during grid outages or load shedding, keeping your essential appliances running.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Environmental Impact</h3>
                  <p className="text-muted-foreground">
                    Maximize your use of clean solar energy and minimize dependence on fossil fuel-based grid electricity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-b border-border pb-4">
                      <h4 className="font-semibold mb-1">Capacity Range</h4>
                      <p className="text-muted-foreground">5kWh to 50kWh+ configurations available</p>
                    </div>
                    <div className="border-b border-border pb-4">
                      <h4 className="font-semibold mb-1">Cycle Life</h4>
                      <p className="text-muted-foreground">6000+ charge/discharge cycles</p>
                    </div>
                    <div className="border-b border-border pb-4">
                      <h4 className="font-semibold mb-1">Depth of Discharge</h4>
                      <p className="text-muted-foreground">90-95% DoD for maximum usable capacity</p>
                    </div>
                    <div className="border-b border-border pb-4">
                      <h4 className="font-semibold mb-1">Operating Temperature</h4>
                      <p className="text-muted-foreground">-10°C to 50°C</p>
                    </div>
                    <div className="pb-4">
                      <h4 className="font-semibold mb-1">Warranty</h4>
                      <p className="text-muted-foreground">10 years manufacturer warranty</p>
                    </div>
                    <div className="pb-4">
                      <h4 className="font-semibold mb-1">Protection</h4>
                      <p className="text-muted-foreground">IP65 rated, weather-resistant enclosure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Batteries;
