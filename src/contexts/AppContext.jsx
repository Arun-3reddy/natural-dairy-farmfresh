import { createContext, useContext } from 'react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useToast } from '@/hooks/use-toast';

const AppContext = createContext(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const cart = useCart();
  const wishlist = useWishlist();
  const toast = useToast();

  return (
    <AppContext.Provider value={{ cart, wishlist, toast }}>
      {children}
    </AppContext.Provider>
  );
};