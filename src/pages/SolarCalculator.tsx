import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calculator, Minus, Plus, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedContainer";

interface Appliance {
  name: string;
  watts: number;
  quantity: number;
}

const SolarCalculator = () => {
  const [appliances, setAppliances] = useState<Appliance[]>([
    { name: "Tube Light", watts: 40, quantity: 0 },
    { name: "Energy Savers", watts: 25, quantity: 0 },
    { name: "LED Bulbs", watts: 7, quantity: 0 },
    { name: "Fans", watts: 100, quantity: 0 },
    { name: "TVs", watts: 250, quantity: 0 },
    { name: "LED TVs 32\"", watts: 50, quantity: 0 },
    { name: "Washing Machines", watts: 800, quantity: 0 },
    { name: "Freezers", watts: 350, quantity: 0 },
    { name: "Refrigerators", watts: 350, quantity: 0 },
    { name: "Computers", watts: 250, quantity: 0 },
    { name: "Water Pumps 1HP", watts: 700, quantity: 0 },
    { name: "Irons", watts: 1000, quantity: 0 },
    { name: "Split ACs 1 Ton", watts: 1800, quantity: 0 },
    { name: "Split ACs 1.5 Ton", watts: 2400, quantity: 0 },
    { name: "Split ACs 2 Ton", watts: 3000, quantity: 0 },
    { name: "Split ACs 3.5 Ton", watts: 7500, quantity: 0 },
    { name: "Split ACs 4 Ton", watts: 8000, quantity: 0 },
    { name: "Inverter ACs 1 Ton", watts: 1000, quantity: 0 },
    { name: "Inverter ACs 1.5 Ton", watts: 1500, quantity: 0 },
    { name: "Inverter ACs 2 Ton", watts: 2000, quantity: 0 },
  ]);

  const updateQuantity = (index: number, delta: number) => {
    setAppliances((prev) =>
      prev.map((appliance, i) =>
        i === index
          ? { ...appliance, quantity: Math.max(0, appliance.quantity + delta) }
          : appliance
      )
    );
  };

  const totalLoad = appliances.reduce(
    (sum, appliance) => sum + appliance.watts * appliance.quantity,
    0
  );

  const recommendedSystemSize = Math.ceil(totalLoad / 1000);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6"
            >
              <Calculator className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Solar System Price Calculator
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Solar system in Pakistan price calculator by Shaheen Solar offers comprehensive price quotes for your desired solar solutions. Calculate your load and get an instant estimate.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="w-full py-12 md:py-20">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Please Select Quantity of Appliances
              </h2>
              <p className="text-muted-foreground">
                Use the + and - buttons to add or remove appliances from your calculation
              </p>
            </AnimatedSection>

            {/* Calculator Table */}
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold text-lg">
                  <div className="px-6 py-4">Appliances</div>
                  <div className="px-6 py-4 text-center">Watts</div>
                  <div className="px-6 py-4 text-center">Quantity</div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-border">
                  {appliances.map((appliance, index) => (
                    <motion.div
                      key={appliance.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className={`grid grid-cols-3 items-center ${
                        index % 2 === 0 ? "bg-background" : "bg-muted/30"
                      } hover:bg-primary/5 transition-colors`}
                    >
                      <div className="px-6 py-4">
                        <span className="text-primary font-medium text-base md:text-lg">
                          {appliance.name}
                        </span>
                      </div>
                      <div className="px-6 py-4 text-center">
                        <span className="text-foreground font-semibold text-base md:text-lg">
                          {appliance.watts}W
                        </span>
                      </div>
                      <div className="px-6 py-4 flex items-center justify-center gap-2">
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="w-10 h-10 flex items-center justify-center bg-primary hover:bg-primary/80 text-primary-foreground rounded-md transition-colors font-bold text-xl"
                          aria-label={`Decrease ${appliance.name} quantity`}
                        >
                          <Minus className="h-5 w-5" />
                        </button>
                        <div className="w-16 h-10 flex items-center justify-center bg-background border border-border rounded-md">
                          <span className="text-foreground font-semibold text-lg">
                            {appliance.quantity}
                          </span>
                        </div>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="w-10 h-10 flex items-center justify-center bg-primary hover:bg-primary/80 text-primary-foreground rounded-md transition-colors font-bold text-xl"
                          aria-label={`Increase ${appliance.name} quantity`}
                        >
                          <Plus className="h-5 w-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Total Load Section */}
                <div className="grid grid-cols-3 items-center bg-secondary/20 border-t-2 border-primary">
                  <div className="px-6 py-6">
                    <span className="text-primary font-bold text-lg md:text-xl flex items-center gap-2">
                      <Zap className="h-6 w-6" />
                      Total Load (in Watts)
                    </span>
                  </div>
                  <div className="px-6 py-6 col-span-2 flex justify-center">
                    <motion.div
                      key={totalLoad}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="bg-background border-2 border-primary rounded-lg px-8 py-3 min-w-[200px] text-center"
                    >
                      <span className="text-foreground font-bold text-2xl md:text-3xl">
                        {totalLoad.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground ml-2">W</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Recommended System Size */}
            {totalLoad > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
              >
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    Recommended System Size
                  </h3>
                  <motion.p
                    key={recommendedSystemSize}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  >
                    {recommendedSystemSize} kW
                  </motion.p>
                  <p className="text-muted-foreground">
                    Based on your total load of {totalLoad.toLocaleString()}W
                  </p>
                </div>
              </motion.div>
            )}

            {/* Get Quote Button */}
            <AnimatedSection animation="scaleIn" delay={0.4} className="mt-10 text-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="px-12 py-6 text-lg md:text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  GET A QUOTE
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How to Use This Calculator
              </h2>
            </AnimatedSection>
            <AnimatedContainer className="grid md:grid-cols-3 gap-8 mt-10">
              <AnimatedItem>
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-full">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Select Appliances</h3>
                  <p className="text-muted-foreground">
                    Use the + button to add the appliances you want to run on solar power
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-full">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">View Total Load</h3>
                  <p className="text-muted-foreground">
                    See your total power consumption in Watts and recommended system size
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-full">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Get Your Quote</h3>
                  <p className="text-muted-foreground">
                    Click the button to receive a customized quote for your solar system
                  </p>
                </div>
              </AnimatedItem>
            </AnimatedContainer>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarCalculator;
