import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const inverters = [
  { name: "MAXPOWER", type: "On-grid / Off-grid" },
  { name: "SOLARMAX", type: "On-grid / Off-grid" },
  { name: "INVEREX", type: "On-grid / Off-grid" },
  { name: "PRIMAX", type: "On-grid / Off-grid" },
  { name: "SUNGROW", type: "On-grid / Off-grid" },
  { name: "CHINT", type: "On-grid / Off-grid" },
  { name: "GOODWE", type: "On-grid / Off-grid" },
  { name: "FOX", type: "On-grid / Off-grid" },
  { name: "HUAWEI", type: "On-grid / Off-grid" },
  { name: "SAJ", type: "On-grid / Off-grid" },
  { name: "VOLTECK", type: "On-grid / Off-grid" },
  { name: "SMA", type: "On-grid / Off-grid" },
];

const SolarInverters = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Inverters</h1>
              <p className="text-xl text-primary-foreground/90">
                High-efficiency on-grid and off-grid inverters from leading brands
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Our solar inverters convert DC power from solar panels into usable AC power with maximum efficiency. We offer both on-grid and off-grid solutions from globally trusted manufacturers, ensuring reliable performance and long-lasting operation.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {inverters.map((inverter, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-center text-primary">{inverter.name}</CardTitle>
                    <CardDescription className="text-center">
                      {inverter.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-background rounded-md flex items-center justify-center mb-4">
                      <div className="text-6xl font-bold text-primary/20">
                        {inverter.name.charAt(0)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Inverter Types We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">On-Grid Inverters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Connect directly to the utility grid, allowing you to feed excess power back and reduce electricity bills through net metering.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Net metering compatible</li>
                      <li>High efficiency (98%+)</li>
                      <li>Cost-effective solution</li>
                      <li>Grid synchronization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Off-Grid Inverters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Operate independently from the grid with battery backup, providing reliable power in remote areas or during outages.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Battery storage integration</li>
                      <li>Complete energy independence</li>
                      <li>Backup power during outages</li>
                      <li>Remote location suitable</li>
                    </ul>
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

export default SolarInverters;
