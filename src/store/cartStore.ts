'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SallaProduct, SallaCartItem } from '@/types/salla';

/**
 * Cart Store using Zustand
 * Manages local cart state and interactions
 */

interface CartState {
    items: SallaCartItem[];
    isOpen: boolean;

    // Actions
    addItem: (product: SallaProduct, quantity?: number, options?: Record<string, string | number>) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    toggleCart: (open?: boolean) => void;

    // Computed (Calculated within actions or via the component)
    getTotalPrice: () => number;
    getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (product, quantity = 1, options = {}) => {
                const currentItems = get().items;
                const existingItemIndex = currentItems.findIndex(
                    (item) => item.product_id === product.id
                );

                if (existingItemIndex > -1) {
                    // Update existing item quantity
                    const updatedItems = [...currentItems];
                    const item = updatedItems[existingItemIndex];
                    item.quantity += quantity;
                    item.total = (item.product?.price.amount || 0) * item.quantity;
                    set({ items: updatedItems, isOpen: true });
                } else {
                    // Add new item
                    const newItem: SallaCartItem = {
                        product_id: product.id,
                        quantity: quantity,
                        options: options,
                        total: product.price.amount * quantity,
                        product: product, // Save full product details
                    };
                    set({ items: [...currentItems, newItem], isOpen: true });
                }
            },

            removeItem: (productId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.product_id !== productId),
                }));
            },

            updateQuantity: (productId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }

                set((state) => ({
                    items: state.items.map((item) =>
                        item.product_id === productId
                            ? {
                                ...item,
                                quantity,
                                total: (item.product?.price.amount || 0) * quantity
                            }
                            : item
                    ),
                }));
            },

            clearCart: () => set({ items: [] }),

            toggleCart: (open) => set((state) => ({
                isOpen: open !== undefined ? open : !state.isOpen
            })),

            // These are helper functions to get computed values
            getTotalPrice: () => {
                // Note: Real total should ideally come from Salla API
                // This is a local estimation
                return get().items.reduce((total, item) => {
                    return total + (item.total || 0);
                }, 0);
            },

            getItemCount: () => {
                return get().items.reduce((count, item) => count + item.quantity, 0);
            },
        }),
        {
            name: 'samawah-cart-storage', // Persistence key
        }
    )
);
