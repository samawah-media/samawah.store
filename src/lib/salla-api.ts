import { getAccessToken } from './auth';
import { APIResponse, SallaProduct, SallaCartItem, CartResponse, SallaError } from '@/types/salla';

/**
 * Salla API Service Layer
 * Centralized logic for all Salla API interactions
 */

const BASE_URL = process.env.SALLA_API_URL || 'https://api.salla.dev/store/v1';
const TIMEOUT_MS = 15000;

/**
 * Handle API responses and errors
 */
const handleResponse = async <T>(response: Response): Promise<APIResponse<T>> => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
            status: response.status,
            message: errorData.error?.message || response.statusText,
            code: errorData.error?.code,
        } as SallaError;
    }
    return await response.json();
};

/**
 * Core Request function
 */
async function request<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T | null> {
    const token = await getAccessToken();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options.headers,
    };

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers,
            signal: controller.signal,
        });

        const result = await handleResponse<T>(response);
        return result.data;
    } catch (error) {
        console.error(`📡 Salla API Error [${endpoint}]:`, error);
        return null;
    } finally {
        clearTimeout(timeoutId);
    }
}

/**
 * Products Service
 */
export const ProductsService = {
    /**
     * Get all products (with optional filters)
     */
    async getAll(): Promise<SallaProduct[]> {
        const data = await request<SallaProduct[]>('/products');
        return data || [];
    },

    /**
     * Get product details by ID
     */
    async getById(id: string): Promise<SallaProduct | null> {
        return await request<SallaProduct>(`/products/${id}`);
    },
};

/**
 * Cart Service
 */
export const CartService = {
    /**
     * Get current cart details
     */
    async get(): Promise<CartResponse | null> {
        return await request<CartResponse>('/cart');
    },

    /**
     * Add item to cart
     */
    async addItem(item: SallaCartItem): Promise<CartResponse | null> {
        return await request<CartResponse>('/cart/items', {
            method: 'POST',
            body: JSON.stringify(item),
        });
    },

    /**
     * Update cart item quantity
     */
    async updateItem(itemId: string, quantity: number): Promise<CartResponse | null> {
        return await request<CartResponse>(`/cart/items/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify({ quantity }),
        });
    },

    /**
     * Remove item from cart
     */
    async removeItem(itemId: string): Promise<CartResponse | null> {
        return await request<CartResponse>(`/cart/items/${itemId}`, {
            method: 'DELETE',
        });
    },
};
