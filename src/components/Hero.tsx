import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Leaf } from "lucide-react";
import heroDairyFarm from "@/assets/hero-dairy-farm.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroDairyFarm} 
          alt="Natural dairy farm with fresh products"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-medium text-sm tracking-wide uppercase">
                Farm Fresh • Naturally Pure
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Pure Dairy,
                <span className="block text-primary"> Delivered Fresh</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Experience the authentic taste of farm-fresh dairy products, 
              delivered to your doorstep within 12 hours of milking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" className="group" onClick={() => {
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="hero" onClick={() => console.log('Learn More clicked')}>
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>100% Pure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-4 w-4 text-primary" />
                <span>Organic</span>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="lg:justify-self-end animate-fade-in">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant max-w-md">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🥛</span>
                </div>
                <h3 className="text-xl font-bold text-primary">Special Offer</h3>
                <p className="text-sm text-muted-foreground">
                  Fresh Milk Delivered Within 12 Hours!
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary">₹50</p>
                  <p className="text-sm text-muted-foreground">per liter</p>
                </div>
                <Button variant="cart" className="w-full" onClick={() => {
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary-glow/10 rounded-full blur-lg animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;