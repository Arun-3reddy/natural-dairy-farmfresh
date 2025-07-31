import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import OrganicMilkSection from "@/components/OrganicMilkSection";
import CustomerSignupForm from "@/components/CustomerSignupForm";
import ContactOwnerForm from "@/components/ContactOwnerForm";
import Footer from "@/components/Footer";
import { AppProvider } from "@/contexts/AppContext";
import { Toaster } from "@/components/ui/toaster";


const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Make search function globally available
    window.searchProducts = (query) => {
      setSearchQuery(query);
      // Scroll to products section when searching
      if (query) {
        const productsSection = document.getElementById('products');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    return () => {
      delete window.searchProducts;
    };
  }, []);

  return (
    <AppProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <FeaturedProducts searchQuery={searchQuery} />
          <OrganicMilkSection />
          <CustomerSignupForm />
          <ContactOwnerForm />
        </main>
        <Footer />
        <Toaster />
      </div>
    </AppProvider>
  );
};

export default Index;
