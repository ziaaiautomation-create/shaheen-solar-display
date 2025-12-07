import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Sun, Calculator } from "lucide-react";
import logo from "@/assets/shaheen-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+923001234567" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+92 300 123 4567</span>
            </a>
            <a href="mailto:info@shaheensolar.pk" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@shaheensolar.pk</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-secondary" />
              <span>Pakistan's Trusted Solar Partner</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-background border-b border-border"
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={logo}
                alt="Shaheen Solar Haripur"
                className="h-14 lg:h-18 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className={`px-4 py-2 font-semibold transition-all duration-300 rounded-md ${
                  isActive("/")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/company-profile"
                className={`px-4 py-2 font-semibold transition-all duration-300 rounded-md ${
                  isActive("/company-profile")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                COMPANY PROFILE
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 font-semibold transition-all duration-300 rounded-md flex items-center gap-1 ${
                    location.pathname.includes("/products")
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  OUR PRODUCTS
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${
                    activeDropdown === "products"
                      ? "opacity-100 scale-y-100 translate-y-0"
                      : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    {[
                      { path: "/products/solar-panels", label: "Solar Panels" },
                      { path: "/products/solar-inverters", label: "Solar Inverters" },
                      { path: "/products/batteries", label: "Batteries (Lithium-ion)" },
                      { path: "/products/structure", label: "Structure" },
                      { path: "/products/metering", label: "Metering" },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-5 py-3 transition-all duration-200 ${
                          isActive(item.path)
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "hover:bg-muted hover:pl-6 text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 font-semibold transition-all duration-300 rounded-md flex items-center gap-1 ${
                    location.pathname.includes("/solutions")
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  OUR SOLUTIONS
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === "solutions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-xl shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${
                    activeDropdown === "solutions"
                      ? "opacity-100 scale-y-100 translate-y-0"
                      : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    {[
                      { path: "/solutions/residential", label: "Residential Solar Solutions" },
                      { path: "/solutions/commercial", label: "Commercial Solar Solutions" },
                      { path: "/solutions/industrial", label: "Industrial Solar Solutions" },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-5 py-3 transition-all duration-200 ${
                          isActive(item.path)
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "hover:bg-muted hover:pl-6 text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/projects"
                className={`px-4 py-2 font-semibold transition-all duration-300 rounded-md ${
                  isActive("/projects")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                PROJECTS
              </Link>
              <Link
                to="/reviews"
                className={`px-4 py-2 font-semibold transition-all duration-300 rounded-md ${
                  isActive("/reviews")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                REVIEWS
              </Link>
              <Link
                to="/solar-calculator"
                className={`px-4 py-2 font-semibold transition-all duration-300 rounded-md flex items-center gap-1 ${
                  isActive("/solar-calculator")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Calculator className="h-4 w-4" />
                CALCULATOR
              </Link>
              <Link
                to="/blog"
                className={`px-4 py-2 font-semibold transition-all duration-300 rounded-md ${
                  isActive("/blog")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                BLOG
              </Link>
              <Link
                to="/contact"
                className="ml-4 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-primary/90 hover:to-primary"
              >
                CONTACT US
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-xl bg-muted/50 text-foreground hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-border space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={toggleMenu}
              >
                HOME
              </Link>
              <Link
                to="/company-profile"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/company-profile") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={toggleMenu}
              >
                COMPANY PROFILE
              </Link>

              {/* Mobile Products */}
              <div className="px-4 py-2">
                <div className="font-bold text-primary mb-2 flex items-center gap-2">
                  <div className="w-1 h-4 bg-primary rounded-full"></div>
                  OUR PRODUCTS
                </div>
                <div className="ml-4 space-y-1">
                  {[
                    { path: "/products/solar-panels", label: "Solar Panels" },
                    { path: "/products/solar-inverters", label: "Solar Inverters" },
                    { path: "/products/batteries", label: "Batteries (Lithium-ion)" },
                    { path: "/products/structure", label: "Structure" },
                    { path: "/products/metering", label: "Metering" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                        isActive(item.path)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Solutions */}
              <div className="px-4 py-2">
                <div className="font-bold text-primary mb-2 flex items-center gap-2">
                  <div className="w-1 h-4 bg-primary rounded-full"></div>
                  OUR SOLUTIONS
                </div>
                <div className="ml-4 space-y-1">
                  {[
                    { path: "/solutions/residential", label: "Residential Solar Solutions" },
                    { path: "/solutions/commercial", label: "Commercial Solar Solutions" },
                    { path: "/solutions/industrial", label: "Industrial Solar Solutions" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                        isActive(item.path)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/projects"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/projects") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={toggleMenu}
              >
                PROJECTS
              </Link>
              <Link
                to="/reviews"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/reviews") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={toggleMenu}
              >
                REVIEWS
              </Link>
              <Link
                to="/solar-calculator"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  isActive("/solar-calculator") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={toggleMenu}
              >
                <Calculator className="h-4 w-4" />
                CALCULATOR
              </Link>
              <Link
                to="/blog"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/blog") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={toggleMenu}
              >
                BLOG
              </Link>
              <Link
                to="/contact"
                className="block mx-4 my-4 px-6 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center font-bold rounded-xl shadow-lg"
                onClick={toggleMenu}
              >
                CONTACT US
              </Link>

              {/* Mobile Contact Info */}
              <div className="px-4 py-4 mt-4 border-t border-border">
                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <a href="tel:+923001234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+92 300 123 4567</span>
                  </a>
                  <a href="mailto:info@shaheensolar.pk" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>info@shaheensolar.pk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
