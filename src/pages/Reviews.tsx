import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Ahmed Khan",
    role: "Homeowner, Islamabad",
    rating: 5,
    review: "Exceptional service from start to finish. The Shaheen Solar team installed a 15kW system at my home and I'm saving over 80% on my electricity bills. Highly professional and knowledgeable!"
  },
  {
    name: "Sarah Malik",
    role: "Business Owner, Haripur",
    rating: 5,
    review: "Our restaurant's energy costs have dropped dramatically since installing solar. The team was professional, installation was quick, and the system works flawlessly. Best investment we've made!"
  },
  {
    name: "Muhammad Rashid",
    role: "Factory Manager, Taxila",
    rating: 5,
    review: "We installed a 200kW industrial system and it's exceeded all expectations. The ROI calculations were accurate and we're on track to recover our investment in 4 years. Excellent work!"
  },
  {
    name: "Fatima Noor",
    role: "School Principal, Abbottabad",
    rating: 5,
    review: "The solar system has significantly reduced our school's operational costs. Shaheen Solar handled everything including the net metering paperwork. Very satisfied with their service!"
  },
  {
    name: "Imran Siddiqui",
    role: "Warehouse Owner, Rawalpindi",
    rating: 5,
    review: "Professional installation, quality components, and excellent after-sales support. The monitoring system lets me track production from my phone. Couldn't be happier!"
  },
  {
    name: "Ayesha Tariq",
    role: "Homeowner, Haripur",
    rating: 5,
    review: "From consultation to installation, everything was smooth. The team answered all our questions and the system has been working perfectly for 6 months now. Highly recommend!"
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
              <p className="text-xl text-primary-foreground/90">
                See what our clients say about their solar experience with Shaheen Solar Haripur
              </p>
            </div>
          </div>
        </section>

        {/* Overall Rating */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-muted p-8 rounded-lg">
                <div className="text-5xl font-bold text-primary mb-2">5.0</div>
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-muted-foreground">Based on 500+ customer reviews</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.role}</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{review.review}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Highlights */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Customers Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Recommend Us</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4.5</div>
                  <div className="text-muted-foreground">Avg. Payback (Years)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Customer Support</div>
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

export default Reviews;
