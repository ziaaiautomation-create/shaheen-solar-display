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

const solarPanels = [
  { name: "CANADIAN SOLAR", description: "High-efficiency monocrystalline panels with excellent performance", image: canadianSolar },
  { name: "JINKO SOLAR", description: "Industry-leading solar modules with superior quality", image: jinkoSolar },
  { name: "YINGLI SOLAR", description: "Reliable solar panels with proven track record", image: yingliSolar },
  { name: "JA SOLAR", description: "Advanced photovoltaic technology for maximum efficiency", image: jaSolar },
  { name: "LONGI SOLAR", description: "Premium monocrystalline solar panels", image: longiSolar },
  { name: "TRINA SOLAR", description: "Trusted brand with global presence and reliability", image: trinaSolar },
  { name: "ASTRONERGY", description: "High-performance solar modules for all applications", image: astronergySolar },
  { name: "AIKO", description: "Innovative solar technology with exceptional output", image: aikoSolar },
];

const SolarPanels = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Panels</h1>
              <p className="text-xl text-primary-foreground/90">
                Premium quality solar panels from world-renowned manufacturers
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                We offer a comprehensive range of solar panels from internationally recognized brands, ensuring high efficiency, durability, and optimal performance for your solar energy system. All our panels come with manufacturer warranties and are tested for Pakistan's climate conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {solarPanels.map((panel, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-center text-primary">{panel.name}</CardTitle>
                    <CardDescription className="text-center">
                      {panel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-2">
                    <div className="w-full h-80 bg-background rounded-md flex items-center justify-center p-2">
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Solar Panels?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">25+</span>
                  </div>
                  <h3 className="font-semibold mb-2">Year Warranty</h3>
                  <p className="text-sm text-muted-foreground">
                    Extended manufacturer warranties on all panels
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">22%</span>
                  </div>
                  <h3 className="font-semibold mb-2">High Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium efficiency ratings up to 22%+
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">✓</span>
                  </div>
                  <h3 className="font-semibold mb-2">Certified Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    International certifications and quality standards
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

export default SolarPanels;
