import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  productId: string;
  handle: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (productId: string, size?: string, color?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string, color?: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
}

const itemKey = (id: string, size?: string, color?: string) =>
  `${id}-${size || ""}-${color || ""}`;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item, quantity = 1) => {
        set((state) => {
          const key = itemKey(item.productId, item.size, item.color);
          const existing = state.items.find(
            (i) => itemKey(i.productId, i.size, i.color) === key
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                itemKey(i.productId, i.size, i.color) === key
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
              isOpen: true,
            };
          }
          return {
            items: [...state.items, { ...item, quantity }],
            isOpen: true,
          };
        });
      },

      removeItem: (productId, size, color) => {
        const key = itemKey(productId, size, color);
        set((state) => ({
          items: state.items.filter(
            (i) => itemKey(i.productId, i.size, i.color) !== key
          ),
        }));
      },

      updateQuantity: (productId, quantity, size, color) => {
        const key = itemKey(productId, size, color);
        if (quantity <= 0) {
          get().removeItem(productId, size, color);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            itemKey(i.productId, i.size, i.color) === key
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      name: "enem-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
