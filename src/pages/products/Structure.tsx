import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const structures = [
  {
    name: "Customize Structure",
    description: "Tailored mounting solutions designed specifically for your unique installation requirements"
  },
  {
    name: "Roof Structure",
    description: "Durable rooftop mounting systems compatible with various roof types including flat and pitched roofs"
  },
  {
    name: "Shade Structure",
    description: "Dual-purpose structures providing both solar power generation and shaded parking or outdoor spaces"
  },
  {
    name: "L2 L3 Stand",
    description: "Ground-mounted support structures ideal for large-scale installations and open land areas"
  },
];

const Structure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Structure Systems</h1>
              <p className="text-xl text-primary-foreground/90">
                Robust mounting solutions engineered for optimal panel performance and longevity
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                The structural foundation of your solar system is crucial for long-term performance and safety. We provide high-quality mounting structures made from corrosion-resistant materials, designed to withstand harsh weather conditions and ensure optimal panel positioning for maximum energy generation.
              </p>
            </div>
          </div>
        </section>

        {/* Structure Types */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {structures.map((structure, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{structure.name}</CardTitle>
                    <CardDescription className="text-base">
                      {structure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-background rounded-md flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/20">
                        {structure.name.split(' ')[0].charAt(0)}
                      </div>
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
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Structure Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Weather Resistant</h3>
                  <p className="text-muted-foreground">
                    Corrosion-resistant materials designed to withstand extreme weather conditions, UV exposure, and temperature variations
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Optimal Angle</h3>
                  <p className="text-muted-foreground">
                    Engineered for ideal panel tilt angles to maximize solar energy capture throughout the year
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Easy Installation</h3>
                  <p className="text-muted-foreground">
                    Pre-engineered components for faster, safer installation with minimal structural modifications required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Specifications */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Material Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Galvanized Steel</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Hot-dip galvanized for maximum corrosion protection</p>
                    <p>• High tensile strength for structural integrity</p>
                    <p>• 25+ year design life expectancy</p>
                    <p>• Suitable for all climate conditions</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Aluminum Alloy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Lightweight yet durable construction</p>
                    <p>• Natural corrosion resistance</p>
                    <p>• Ideal for rooftop applications</p>
                    <p>• Anodized finish for enhanced protection</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Structure;
