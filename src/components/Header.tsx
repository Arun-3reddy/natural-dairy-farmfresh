import { ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";
import CartDrawer from "./CartDrawer";
import SearchBar from "./SearchBar";

const Header = () => {
  const { cart, wishlist } = useApp();

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Add search logic here
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover-scale cursor-pointer">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-primary">Natural Dairy</h1>
              <p className="text-xs text-muted-foreground">Naturally Pure, Wholesomely Yours</p>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover-scale" 
              onClick={() => console.log('Wishlist clicked')}
            >
              <Heart className={`h-5 w-5 ${wishlist.wishlistCount > 0 ? 'text-red-500 fill-current' : ''}`} />
              {wishlist.wishlistCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white animate-scale-in"
                >
                  {wishlist.wishlistCount}
                </Badge>
              )}
            </Button>
            
            <CartDrawer
              cartItems={cart.cartItems}
              cartCount={cart.getCartCount()}
              cartTotal={cart.getCartTotal()}
              isOpen={cart.isOpen}
              setIsOpen={cart.setIsOpen}
              updateQuantity={cart.updateQuantity}
              removeFromCart={cart.removeFromCart}
            />
            
            <Button variant="outline" size="sm" className="hover-scale" onClick={() => console.log('Login clicked')}>
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="border-t border-border/40 py-3">
          <div className="flex items-center justify-center space-x-8">
            <Button variant="ghost" className="text-sm story-link" onClick={() => console.log('Home clicked')}>Home</Button>
            <Button variant="ghost" className="text-sm story-link" onClick={() => console.log('All Products clicked')}>All Products</Button>
            <Button variant="ghost" className="text-sm story-link" onClick={() => console.log('Milk clicked')}>Milk</Button>
            <Button variant="ghost" className="text-sm story-link" onClick={() => console.log('Dairy Products clicked')}>Dairy Products</Button>
            <Button variant="ghost" className="text-sm story-link" onClick={() => console.log('Organic clicked')}>Organic</Button>
            <Button variant="ghost" className="text-sm story-link" onClick={() => console.log('Contact clicked')}>Contact</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;