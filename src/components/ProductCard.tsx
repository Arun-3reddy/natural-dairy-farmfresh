import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 border-border/40 hover:border-primary/20 bg-gradient-card">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge && (
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
            )}
            {discount > 0 && (
              <Badge variant="destructive" className="bg-destructive text-destructive-foreground">
                {discount}% OFF
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <Badge variant="secondary" className="text-muted-foreground">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <p className="text-xs text-primary font-medium uppercase tracking-wide">
            {product.category}
          </p>

          {/* Title */}
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-muted-foreground'
                  }`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button 
              variant="cart" 
              className="flex-1" 
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;