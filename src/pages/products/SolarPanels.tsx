import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import canadianSolar from "@/assets/products/canadian-solar.png";
import jinkoSolar from "@/assets/products/jinko-solar.png";
import yingliSolar from "@/assets/products/yingli-solar.png";
import jaSolar from "@/assets/products/ja-solar.png";
import longiSolar from "@/assets/products/longi-solar.png";
import trinaSolar from "@/assets/products/trina-solar.png";
import astronergySolar from "@/assets/products/astronergy-solar.png";
import aikoSolar from "@/assets/products/aiko-solar.png";
import jinkoTigerNeo from "@/assets/products/jinko-tiger-neo.png";

const solarPanels = [
  { name: "CANADIAN SOLAR", description: "High-efficiency monocrystalline panels with excellent performance", image: canadianSolar },
  { name: "JINKO SOLAR", description: "Industry-leading solar modules with superior quality", image: jinkoSolar },
  { name: "YINGLI SOLAR", description: "Reliable solar panels with proven track record", image: yingliSolar },
  { name: "JA SOLAR", description: "Advanced photovoltaic technology for maximum efficiency", image: jaSolar },
  { name: "LONGI SOLAR", description: "Premium monocrystalline solar panels", image: longiSolar },
  { name: "TRINA SOLAR", description: "Trusted brand with global presence and reliability", image: trinaSolar },
  { name: "ASTRONERGY", description: "High-performance solar modules for all applications", image: astronergySolar },
  { name: "AIKO", description: "Innovative solar technology with exceptional output", image: aikoSolar },
  { name: "Jinko Solar Panel Tiger Neo 60HL4-(V) 470-500W", description: "N-type Bifacial Module with HOT 2.0 Technology for maximum efficiency", image: jinkoTigerNeo },
];

const SolarPanels = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-24 md:py-32">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">Solar Panels</h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90">
                Premium quality solar panels from world-renowned manufacturers
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                We offer a comprehensive range of solar panels from internationally recognized brands, ensuring high efficiency, durability, and optimal performance for your solar energy system. All our panels come with manufacturer warranties and are tested for Pakistan's climate conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-[1800px] mx-auto">
              {solarPanels.map((panel, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
                  <CardHeader className="p-8 md:p-10">
                    <CardTitle className="text-center text-primary text-2xl md:text-3xl mb-4">{panel.name}</CardTitle>
                    <CardDescription className="text-center text-base md:text-lg">
                      {panel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 md:p-10 pt-0">
                    <div className="w-full h-80 md:h-96 bg-background rounded-md flex items-center justify-center p-4 transition-transform hover:scale-105">
                      <img 
                        src={panel.image} 
                        alt={panel.name} 
                        className="w-full h-full object-contain"
                      />
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
              <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16 md:mb-20">Why Choose Our Solar Panels?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                <div className="text-center p-8 md:p-10 bg-muted/30 rounded-lg">
                  <div className="text-5xl md:text-6xl mb-6">✓</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">International Standards</h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    All panels meet IEC and international quality certifications
                  </p>
                </div>
                <div className="text-center p-8 md:p-10 bg-muted/30 rounded-lg">
                  <div className="text-5xl md:text-6xl mb-6">🔒</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">Comprehensive Warranty</h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    25-year performance warranty on all solar panels
                  </p>
                </div>
                <div className="text-center p-8 md:p-10 bg-muted/30 rounded-lg">
                  <div className="text-5xl md:text-6xl mb-6">⚡</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">High Efficiency</h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Maximum energy output with monocrystalline technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="w-full px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Ready to Go Solar?</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
              Contact us today for a free consultation and quote
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-7 rounded-lg text-xl font-semibold shadow-lg transition-all hover:scale-105">
                Get Started
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarPanels;
