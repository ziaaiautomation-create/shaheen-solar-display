import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/shaheen-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Shaheen Solar Haripur" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </Link>
            <Link to="/company-profile" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
              COMPANY PROFILE
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium flex items-center">
                OUR PRODUCTS <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                  <Link to="/products/solar-panels" className="block px-4 py-3 hover:bg-muted transition-colors">
                    Solar Panels
                  </Link>
                  <Link to="/products/solar-inverters" className="block px-4 py-3 hover:bg-muted transition-colors">
                    Solar Inverters
                  </Link>
                  <Link to="/products/batteries" className="block px-4 py-3 hover:bg-muted transition-colors">
                    Batteries (Lithium-ion)
                  </Link>
                  <Link to="/products/structure" className="block px-4 py-3 hover:bg-muted transition-colors">
                    Structure
                  </Link>
                  <Link to="/products/metering" className="block px-4 py-3 hover:bg-muted transition-colors">
                    Metering
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium flex items-center">
                OUR SOLUTIONS <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                  <Link to="/solutions/residential" className="block px-4 py-3 hover:bg-muted transition-colors">
                    Residential Solar Solutions
                  </Link>
                  <Link to="/solutions/commercial" className="block px-4 py-3 hover:bg-muted transition-colors">
                    Commercial Solar Solutions
                  </Link>
                  <Link to="/solutions/industrial" className="block px-4 py-3 hover:bg-muted transition-colors">
                    Industrial Solar Solutions
                  </Link>
                </div>
              )}
            </div>

            <Link to="/projects" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
              PROJECTS
            </Link>
            <Link to="/reviews" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
              REVIEWS
            </Link>
            <Link to="/blog" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
              BLOG
            </Link>
            <Link to="/contact" className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium rounded-md ml-2">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-foreground">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <Link to="/" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors" onClick={toggleMenu}>
              HOME
            </Link>
            <Link to="/company-profile" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors" onClick={toggleMenu}>
              COMPANY PROFILE
            </Link>
            
            {/* Mobile Products */}
            <div className="px-4 py-2">
              <div className="font-medium text-foreground mb-2">OUR PRODUCTS</div>
              <Link to="/products/solar-panels" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={toggleMenu}>
                Solar Panels
              </Link>
              <Link to="/products/solar-inverters" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={toggleMenu}>
                Solar Inverters
              </Link>
              <Link to="/products/batteries" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={toggleMenu}>
                Batteries (Lithium-ion)
              </Link>
              <Link to="/products/structure" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={toggleMenu}>
                Structure
              </Link>
              <Link to="/products/metering" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={toggleMenu}>
                Metering
              </Link>
            </div>

            {/* Mobile Solutions */}
            <div className="px-4 py-2">
              <div className="font-medium text-foreground mb-2">OUR SOLUTIONS</div>
              <Link to="/solutions/residential" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={toggleMenu}>
                Residential Solar Solutions
              </Link>
              <Link to="/solutions/commercial" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={toggleMenu}>
                Commercial Solar Solutions
              </Link>
              <Link to="/solutions/industrial" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={toggleMenu}>
                Industrial Solar Solutions
              </Link>
            </div>

            <Link to="/projects" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors" onClick={toggleMenu}>
              PROJECTS
            </Link>
            <Link to="/reviews" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors" onClick={toggleMenu}>
              REVIEWS
            </Link>
            <Link to="/blog" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors" onClick={toggleMenu}>
              BLOG
            </Link>
            <Link to="/contact" className="block mx-4 my-2 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center rounded-md" onClick={toggleMenu}>
              CONTACT US
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
