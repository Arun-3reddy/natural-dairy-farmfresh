import { useState, useCallback } from 'react';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = useCallback((product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const isInWishlist = useCallback((id) => {
    return wishlistItems.some(item => item.id === id);
  }, [wishlistItems]);

  const toggleWishlist = useCallback((product) => {
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