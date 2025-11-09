import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CompanyProfile from "./pages/CompanyProfile";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import SolarPanels from "./pages/products/SolarPanels";
import SolarInverters from "./pages/products/SolarInverters";
import Batteries from "./pages/products/Batteries";
import Structure from "./pages/products/Structure";
import Metering from "./pages/products/Metering";
import ResidentialSolutions from "./pages/solutions/ResidentialSolutions";
import CommercialSolutions from "./pages/solutions/CommercialSolutions";
import IndustrialSolutions from "./pages/solutions/IndustrialSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products/solar-panels" element={<SolarPanels />} />
          <Route path="/products/solar-inverters" element={<SolarInverters />} />
          <Route path="/products/batteries" element={<Batteries />} />
          <Route path="/products/structure" element={<Structure />} />
          <Route path="/products/metering" element={<Metering />} />
          <Route path="/solutions/residential" element={<ResidentialSolutions />} />
          <Route path="/solutions/commercial" element={<CommercialSolutions />} />
          <Route path="/solutions/industrial" element={<IndustrialSolutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
