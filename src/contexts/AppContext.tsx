import { createContext, useContext, ReactNode } from 'react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useToast } from '@/hooks/use-toast';

interface AppContextType {
  cart: ReturnType<typeof useCart>;
  wishlist: ReturnType<typeof useWishlist>;
  toast: ReturnType<typeof useToast>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const cart = useCart();
  const wishlist = useWishlist();
  const toast = useToast();

  return (
    <AppContext.Provider value={{ cart, wishlist, toast }}>
      {children}
    </AppContext.Provider>
  );
};