import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Understanding Net Metering in Pakistan: A Complete Guide",
    excerpt: "Learn how net metering works in Pakistan and how it can help you maximize your solar investment returns.",
    category: "Solar Guide",
    date: "November 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Top 5 Benefits of Solar Energy for Pakistani Businesses",
    excerpt: "Discover why more businesses in Pakistan are switching to solar energy and how it can transform your operations.",
    category: "Business",
    date: "November 10, 2024",
    readTime: "7 min read"
  },
  {
    title: "How to Choose the Right Solar Panel for Your Home",
    excerpt: "A comprehensive guide to selecting the best solar panels based on efficiency, warranty, and budget.",
    category: "Solar Guide",
    date: "November 5, 2024",
    readTime: "6 min read"
  },
  {
    title: "Solar Energy ROI: What to Expect in Pakistan",
    excerpt: "Detailed analysis of solar energy return on investment, payback periods, and long-term savings in Pakistan.",
    category: "Finance",
    date: "October 28, 2024",
    readTime: "8 min read"
  },
  {
    title: "Maintaining Your Solar System: Best Practices",
    excerpt: "Essential maintenance tips to ensure your solar panels deliver optimal performance for decades.",
    category: "Maintenance",
    date: "October 20, 2024",
    readTime: "5 min read"
  },
  {
    title: "The Future of Solar Energy in Pakistan",
    excerpt: "Exploring the growth potential and future trends of solar energy adoption across Pakistan.",
    category: "Industry News",
    date: "October 15, 2024",
    readTime: "6 min read"
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Energy Blog</h1>
              <p className="text-xl text-primary-foreground/90">
                Expert insights, guides, and news about solar energy in Pakistan
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">Featured</Badge>
              <Card className="shadow-hover">
                <CardHeader>
                  <CardTitle className="text-3xl mb-2">
                    Complete Guide to Going Solar in Pakistan 2024
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 text-base">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      November 20, 2024
                    </span>
                    <span>•</span>
                    <span>10 min read</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to know about switching to solar energy in Pakistan - from choosing the right system size to understanding government policies, net metering, and financing options. This comprehensive guide walks you through every step of your solar journey.
                  </p>
                  <Link to="#" className="text-primary hover:underline inline-flex items-center font-medium">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <Badge variant="secondary" className="mb-3 w-fit">{post.category}</Badge>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-3 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link to="#" className="text-primary hover:underline inline-flex items-center text-sm font-medium">
                      Read More <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2">
                  Solar Guide
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2">
                  Business
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2">
                  Finance
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2">
                  Maintenance
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2">
                  Industry News
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2">
                  Technology
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
