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
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-primary-foreground/90">
                Explore our portfolio of successful solar installations across Pakistan
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50MW+</div>
                <div className="text-muted-foreground">Total Capacity Installed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{project.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Zap className="h-4 w-4 mr-1" />
                        {project.capacity}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {project.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Start Your Solar Journey?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied customers who have switched to clean, affordable solar energy
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
