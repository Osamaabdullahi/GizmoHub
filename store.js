import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      totalAmount: 0,

      addItem: (item) => {
        const existingItemIndex = get().cart.findIndex(
          (i) => i.name === item.name
        );
        if (existingItemIndex !== -1) {
          const updatedCart = [...get().cart];
          const existing = updatedCart[existingItemIndex];
          updatedCart[existingItemIndex] = {
            ...existing,
            quantity: existing.quantity + item.quantity,
            total: existing.total + item.price * item.quantity,
          };
          set({ cart: updatedCart });
        } else {
          set((state) => ({
            cart: [
              ...state.cart,
              { ...item, total: item.price * item.quantity },
            ],
          }));
        }
        get().calculateTotalAmount();
      },

      incrementItem: (name) => {
        const updatedCart = get().cart.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1, total: item.total + item.price }
            : item
        );
        set({ cart: updatedCart });
        get().calculateTotalAmount();
      },

      decrementItem: (name) => {
        const updatedCart = get().cart.map((item) =>
          item.name === name && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1, total: item.total - item.price }
            : item
        );
        set({ cart: updatedCart });
        get().calculateTotalAmount();
      },

      removeItem: (name) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.name !== name),
        }));
        get().calculateTotalAmount();
      },

      calculateTotalAmount: () => {
        const total = get().cart.reduce((acc, item) => acc + item.total, 0);
        set({ totalAmount: total });
      },

      clearCart: () => {
        set({ cart: [], totalAmount: 0 });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;

export const useAppStore = create(
  persist(
    (set) => ({
      night: false,
      setNight: () => set((state) => ({ night: !state.night })),
      openModal: true,
      setOpen: () => set((state) => ({ openModal: !state.openModal })),
    }),
    {
      name: "app-settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAdmin: false,
      isLoggedIn: false,

      login: (userInfo) => {
        return set({ user: userInfo, isAdmin: false, isLoggedIn: true });
      },

      logout: () => {
        set({ user: null, isAdmin: false, isLoggedIn: false });
      },

      checkAdmin: () => {
        const { user } = get();
        return user && user.role === "admin";
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
