import { ProductsService, CartService } from './salla-api';
import { SallaProduct, SallaCartItem, CartResponse } from '@/types/salla';
import { FALLBACK_PRODUCTS } from '@/data/products';

/**
 * Salla API Client (Legacy/Compatibility Wrapper)
 * This file now delegates to salla-api.ts while maintaining the same interface.
 */

const isDevelopment = process.env.NODE_ENV === 'development';

const devLog = {
    info: (...args: unknown[]) => {
        if (isDevelopment) console.log(...args);
    },
    warn: (...args: unknown[]) => {
        if (isDevelopment) console.warn(...args);
    },
    error: (...args: unknown[]) => {
        console.error(...args);
    },
};

/**
 * Fetch Product by ID (Legacy function)
 */
export const getProduct = async (id: string): Promise<SallaProduct | null> => {
    devLog.info(`📡 Fetching product ${id}...`);

    try {
        const product = await ProductsService.getById(id);

        if (product) {
            devLog.info(`✅ Product fetched: ${product.name}`);
            return product;
        }

        devLog.warn(`⚠️ API returned no data, using fallback for ${id}`);
        return FALLBACK_PRODUCTS[id] || null;
    } catch (error) {
        devLog.error(`❌ Error fetching product ${id}:`, error);
        return FALLBACK_PRODUCTS[id] || null;
    }
};

/**
 * Add Item to Cart (Legacy function)
 */
export const addToCart = async (item: SallaCartItem): Promise<CartResponse | null> => {
    devLog.info(`🛒 Adding item to cart via API...`, item);
    return await CartService.addItem(item);
};
