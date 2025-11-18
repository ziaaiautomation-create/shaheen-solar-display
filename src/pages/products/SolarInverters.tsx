import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import maxpowerImg from "@/assets/products/maxpower-inverter.png";
import solarmaxImg from "@/assets/products/solarmax-inverter.png";
import inverexImg from "@/assets/products/inverex-inverter.png";
import primaxImg from "@/assets/products/primax-inverter.png";
import sungrowImg from "@/assets/products/sungrow-inverter.png";
import chintImg from "@/assets/products/chint-inverter.png";
import goodweImg from "@/assets/products/goodwe-inverter.png";
import foxImg from "@/assets/products/fox-inverter.png";
import huaweiImg from "@/assets/products/huawei-inverter.png";
import sajImg from "@/assets/products/saj-inverter.png";
import volteckImg from "@/assets/products/volteck-inverter.png";
import smaImg from "@/assets/products/sma-inverter.png";

const inverters = [
  { name: "MAXPOWER", type: "On-grid / Off-grid", image: maxpowerImg },
  { name: "SOLARMAX", type: "On-grid / Off-grid", image: solarmaxImg },
  { name: "INVEREX", type: "On-grid / Off-grid", image: inverexImg },
  { name: "PRIMAX", type: "On-grid / Off-grid", image: primaxImg },
  { name: "SUNGROW", type: "On-grid / Off-grid", image: sungrowImg },
  { name: "CHINT", type: "On-grid / Off-grid", image: chintImg },
  { name: "GOODWE", type: "On-grid / Off-grid", image: goodweImg },
  { name: "FOX", type: "On-grid / Off-grid", image: foxImg },
  { name: "HUAWEI", type: "On-grid / Off-grid", image: huaweiImg },
  { name: "SAJ", type: "On-grid / Off-grid", image: sajImg },
  { name: "VOLTECK", type: "On-grid / Off-grid", image: volteckImg },
  { name: "SMA", type: "On-grid / Off-grid", image: smaImg },
];

const SolarInverters = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-24 md:py-32">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">Solar Inverters</h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90">
                High-efficiency on-grid and off-grid inverters from leading brands
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Our solar inverters convert DC power from solar panels into usable AC power with maximum efficiency. We offer both on-grid and off-grid solutions from globally trusted manufacturers, ensuring reliable performance and long-lasting operation.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-[1800px] mx-auto">
              {inverters.map((inverter, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
                  <CardHeader className="p-8 md:p-10">
                    <CardTitle className="text-center text-primary text-2xl md:text-3xl mb-4">{inverter.name}</CardTitle>
                    <CardDescription className="text-center text-base md:text-lg">
                      {inverter.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 md:p-10 pt-0">
                    <div className="w-full h-80 md:h-96 bg-background rounded-md flex items-center justify-center p-4 transition-transform hover:scale-105">
                      {inverter.image ? (
                        <img 
                          src={inverter.image} 
                          alt={inverter.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-6xl font-bold text-primary/20">
                          {inverter.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-[1600px] mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16 md:mb-20">Inverter Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="text-center p-8 md:p-10 bg-muted/30 rounded-lg">
                  <div className="text-5xl md:text-6xl mb-6">⚡</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">High Efficiency</h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Up to 98% conversion efficiency for maximum power output
                  </p>
                </div>
                <div className="text-center p-8 md:p-10 bg-muted/30 rounded-lg">
                  <div className="text-5xl md:text-6xl mb-6">🔄</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">Smart Grid Technology</h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Advanced grid management and seamless power switching
                  </p>
                </div>
                <div className="text-center p-8 md:p-10 bg-muted/30 rounded-lg">
                  <div className="text-5xl md:text-6xl mb-6">📱</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">Remote Monitoring</h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Real-time system monitoring via mobile app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="w-full px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Choose the Right Inverter</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
              Get expert advice on selecting the perfect inverter for your solar system
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-7 rounded-lg text-xl font-semibold shadow-lg transition-all hover:scale-105">
                Contact Us
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarInverters;
