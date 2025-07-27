import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { AppProvider } from "@/contexts/AppContext";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <FeaturedProducts />
        </main>
        <Footer />
        <Toaster />
      </div>
    </AppProvider>
  );
};

export default Index;
