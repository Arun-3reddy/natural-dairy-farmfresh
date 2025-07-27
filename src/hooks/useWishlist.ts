import { useState, useCallback } from 'react';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const addToWishlist = useCallback((product: any) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const isInWishlist = useCallback((id: string) => {
    return wishlistItems.some(item => item.id === id);
  }, [wishlistItems]);

  const toggleWishlist = useCallback((product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }, [isInWishlist, addToWishlist, removeFromWishlist]);

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    wishlistCount: wishlistItems.length
  };
};