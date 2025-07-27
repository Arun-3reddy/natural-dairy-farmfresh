import { ShoppingCart, Heart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-primary">Natural Dairy</h1>
              <p className="text-xs text-muted-foreground">Naturally Pure, Wholesomely Yours</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for dairy products..."
                className="pl-10 bg-secondary/50 border-primary/20 focus:border-primary/40"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground"
              >
                3
              </Badge>
            </Button>
            
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="border-t border-border/40 py-3">
          <div className="flex items-center justify-center space-x-8">
            <Button variant="ghost" className="text-sm">Home</Button>
            <Button variant="ghost" className="text-sm">All Products</Button>
            <Button variant="ghost" className="text-sm">Milk</Button>
            <Button variant="ghost" className="text-sm">Dairy Products</Button>
            <Button variant="ghost" className="text-sm">Organic</Button>
            <Button variant="ghost" className="text-sm">Contact</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;