import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Target, Eye, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanyProfile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Building2 className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Company Profile</h1>
              <p className="text-xl text-primary-foreground/90">
                Leading the solar energy revolution in Haripur, Pakistan
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About Shaheen Solar Haripur</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Shaheen Solar Haripur is a premier provider of solar energy solutions in Pakistan, dedicated to transforming the way businesses and homeowners power their properties. With years of experience in the renewable energy sector, we specialize in designing, installing, and maintaining high-quality solar power systems.
                </p>
                <p>
                  Our commitment to excellence is reflected in every project we undertake. From residential rooftops to large-scale industrial installations, we deliver customized solar solutions that maximize energy efficiency while minimizing environmental impact.
                </p>
                <p>
                  We partner with world-leading manufacturers to ensure our clients receive only the best solar panels, inverters, and battery storage systems. Our team of certified professionals brings technical expertise and dedication to every installation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-card">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide sustainable, reliable, and cost-effective solar energy solutions that empower our clients to reduce their carbon footprint while achieving energy independence. We strive to make solar power accessible to everyone in Pakistan through innovative technology and exceptional service.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <Eye className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be Pakistan's most trusted solar energy company, leading the transition to renewable energy and creating a sustainable future for generations to come. We envision a Pakistan powered by clean, renewable solar energy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality, using only premium components from internationally recognized manufacturers
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Our clients' satisfaction and success drive everything we do, from consultation to after-sales support
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay ahead of industry trends, continuously adopting the latest solar technology and best practices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose Shaheen Solar Haripur?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Experienced Team</h3>
                  <p className="text-primary-foreground/90">
                    Certified professionals with extensive experience in solar installations across all sectors
                  </p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Premium Products</h3>
                  <p className="text-primary-foreground/90">
                    Top-tier solar equipment from brands like Canadian Solar, Jinko, Huawei, and more
                  </p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Service</h3>
                  <p className="text-primary-foreground/90">
                    From initial consultation to ongoing maintenance, we're with you every step
                  </p>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
                  <p className="text-primary-foreground/90">
                    Deep understanding of Haripur's energy needs and climate conditions
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

export default CompanyProfile;
