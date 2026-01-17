import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AnimatedSection from "@/components/AnimatedSection";
import { AnimatedContainer, AnimatedItem } from "@/components/AnimatedContainer";

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
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-hero"
            style={{ scale: heroScale }}
          />
          <motion.div 
            className="container mx-auto px-4 relative z-10"
            style={{ y: heroTextY, opacity: heroOpacity }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Customer Reviews
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-primary-foreground/90"
              >
                See what our clients say about their solar experience with Shaheen Solar Haripur
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Overall Rating */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="scaleIn" className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-muted p-8 rounded-lg">
                <div className="text-5xl font-bold text-primary mb-2">5.0</div>
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-muted-foreground">Based on 500+ customer reviews</div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {reviews.map((review, index) => (
                <AnimatedItem key={index}>
                  <Card className="shadow-card hover:shadow-hover transition-all duration-300 relative h-full">
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
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Testimonial Highlights */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fadeInUp">
                <h2 className="text-3xl font-bold text-center mb-12">Why Customers Choose Us</h2>
              </AnimatedSection>
              <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedItem>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      98%
                    </motion.div>
                    <div className="text-muted-foreground">Recommend Us</div>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      4.5
                    </motion.div>
                    <div className="text-muted-foreground">Avg. Payback (Years)</div>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      24/7
                    </motion.div>
                    <div className="text-muted-foreground">Customer Support</div>
                  </div>
                </AnimatedItem>
              </AnimatedContainer>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
