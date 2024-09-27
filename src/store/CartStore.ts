import {create} from 'zustand';
import { Product } from '../types/Iproducts';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  calculateTotalPrice: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  
  addToCart: (product: Product) => set((state) => {
    const cart = [...state.cart];
    const itemIndex = cart.findIndex(item => item.product.id === product.id);
    if (itemIndex >= 0) {
      cart[itemIndex].quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return { cart };
  }),
  
  removeFromCart: (productId: number) => set((state) => {
    const cart = state.cart.filter(item => item.product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    return { cart };
  }),

  increaseQuantity: (productId: number) => set((state) => {
    const cart = state.cart.map(item => 
      item.product.id === productId 
      ? { ...item, quantity: item.quantity + 1 } 
      : item
    );
    localStorage.setItem('cart', JSON.stringify(cart));
    return { cart };
  }),

  decreaseQuantity: (productId: number) => set((state) => {
    const cart = state.cart.map(item => 
      item.product.id === productId && item.quantity > 1 
      ? { ...item, quantity: item.quantity - 1 } 
      : item
    ).filter(item => item.quantity > 0);
    localStorage.setItem('cart', JSON.stringify(cart));
    return { cart };
  }),

  calculateTotalPrice: () => set((state) => {
    const totalPrice = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    return { cart: state.cart, totalPrice };
  }),
}));
