import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Calendar } from "lucide-react";

const projects = [
  {
    title: "Residential Installation - DHA Islamabad",
    capacity: "10kW",
    type: "Residential",
    location: "Islamabad",
    date: "November 2024",
    description: "Complete on-grid solar system with net metering for a luxury home"
  },
  {
    title: "Commercial Building - Blue Area",
    capacity: "50kW",
    type: "Commercial",
    location: "Islamabad",
    date: "October 2024",
    description: "Rooftop solar installation for office complex reducing monthly bills by 75%"
  },
  {
    title: "Textile Factory - Haripur",
    capacity: "200kW",
    type: "Industrial",
    location: "Haripur",
    date: "September 2024",
    description: "Large-scale industrial solar system with battery backup"
  },
  {
    title: "School Building - Abbottabad",
    capacity: "30kW",
    type: "Commercial",
    location: "Abbottabad",
    date: "August 2024",
    description: "Educational institution solar project reducing operational costs"
  },
  {
    title: "Warehouse Facility - Taxila",
    capacity: "100kW",
    type: "Industrial",
    location: "Taxila",
    date: "July 2024",
    description: "Complete solar solution for logistics warehouse with monitoring system"
  },
  {
    title: "Restaurant Chain - Multiple Locations",
    capacity: "75kW",
    type: "Commercial",
    location: "Rawalpindi",
    date: "June 2024",
    description: "Multi-site solar installation for restaurant chain"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-24 md:py-32">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">Our Projects</h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90">
                Explore our portfolio of successful solar installations across Pakistan
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-[1600px] mx-auto">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">500+</div>
                <div className="text-muted-foreground text-lg md:text-xl">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">50MW+</div>
                <div className="text-muted-foreground text-lg md:text-xl">Total Capacity Installed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">98%</div>
                <div className="text-muted-foreground text-lg md:text-xl">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">15+</div>
                <div className="text-muted-foreground text-lg md:text-xl">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-[1800px] mx-auto">
              {projects.map((project, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
                  <CardHeader className="p-8 md:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-base px-4 py-2">{project.type}</Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-5 w-5 mr-2" />
                        {project.date}
                      </div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-4">{project.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg leading-relaxed mb-6">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 md:p-10 pt-0 space-y-4">
                    <div className="flex items-center text-foreground">
                      <Zap className="h-6 w-6 mr-3 text-primary" />
                      <span className="font-semibold text-lg">Capacity: {project.capacity}</span>
                    </div>
                    <div className="flex items-center text-foreground">
                      <MapPin className="h-6 w-6 mr-3 text-primary" />
                      <span className="font-semibold text-lg">{project.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="w-full px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Start Your Solar Journey Today</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
              Join hundreds of satisfied customers who have made the switch to clean, renewable energy
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

export default Projects;
