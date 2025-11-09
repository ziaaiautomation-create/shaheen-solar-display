import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/shaheen-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Shaheen Solar Haripur" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Leading provider of solar energy solutions in Haripur, Pakistan. Powering a sustainable future with clean energy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/company-profile" className="text-muted-foreground hover:text-primary transition-colors text-sm">Company Profile</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">Projects</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions/residential" className="text-muted-foreground hover:text-primary transition-colors text-sm">Residential Solutions</Link></li>
              <li><Link to="/solutions/commercial" className="text-muted-foreground hover:text-primary transition-colors text-sm">Commercial Solutions</Link></li>
              <li><Link to="/solutions/industrial" className="text-muted-foreground hover:text-primary transition-colors text-sm">Industrial Solutions</Link></li>
              <li><Link to="/products/solar-panels" className="text-muted-foreground hover:text-primary transition-colors text-sm">Solar Panels</Link></li>
              <li><Link to="/products/solar-inverters" className="text-muted-foreground hover:text-primary transition-colors text-sm">Solar Inverters</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:shaheensolarharipur@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  shaheensolarharipur@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+923075630186" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +92 307 5630186
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Near circular road opposite CNG pump station gas filler one SMT Tool second floor
                </span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-full transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-full transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-full transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-full transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Shaheen Solar Haripur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
