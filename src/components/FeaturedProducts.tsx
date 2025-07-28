import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock product data
const featuredProducts = [
  {
    id: "1",
    name: "Full Cream Milk",
    price: 60,
    originalPrice: 70,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop&crop=center",
    category: "Fresh Milk",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: "Bestseller"
  },
  {
    id: "2", 
    name: "Pure Cow Ghee",
    price: 300,
    image: "https://images.unsplash.com/photo-1628773712345-77c14a1b0616?w=400&h=300&fit=crop&crop=center",
    category: "Dairy Products",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    badge: "Premium"
  },
  {
    id: "3",
    name: "Fresh Paneer",
    price: 90,
    originalPrice: 100,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop&crop=center",
    category: "Fresh Products",
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: "4",
    name: "Organic Buttermilk",
    price: 20,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop&crop=center",
    category: "Beverages",
    rating: 4.6,
    reviews: 73,
    inStock: true,
    badge: "Organic"
  }
];

interface FeaturedProductsProps {
  searchQuery?: string;
}

const FeaturedProducts = ({ searchQuery = "" }: FeaturedProductsProps) => {
  // Filter products based on search query
  const filteredProducts = featuredProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="products" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular dairy products, freshly sourced from local farms 
            and delivered with care to maintain quality and taste.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : searchQuery ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching "{searchQuery}"</p>
              <p className="text-sm text-muted-foreground mt-2">Try searching for milk, ghee, paneer, or other dairy products</p>
            </div>
          ) : (
            featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group" onClick={() => console.log('View All Products clicked')}>
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;