import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { AppProvider } from "@/contexts/AppContext";
import { Toaster } from "@/components/ui/toaster";

declare global {
  interface Window {
    searchProducts?: (query: string) => void;
  }
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Make search function globally available
    window.searchProducts = (query: string) => {
      setSearchQuery(query);
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
        </main>
        <Footer />
        <Toaster />
      </div>
    </AppProvider>
  );
};

export default Index;
