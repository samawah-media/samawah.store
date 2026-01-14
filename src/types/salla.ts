/**
 * Salla API Type Definitions
 * Based on Salla Storefront API documentation
 */

export interface SallaError {
    status: number;
    message: string;
    code?: string;
}

export interface SallaProduct {
    id: string;
    name: string;
    price: {
        amount: number;
        currency: string;
    };
    description: string;
    main_image: string;
    images: string[];
    url: string;
    promotion?: {
        title: string;
    };
    regular_price?: {
        amount: number;
        currency: string;
    };
}

// Backward compatibility alias
export type Product = SallaProduct;

export interface SallaCartItem {
    id?: string; // Item ID in the cart
    product_id: string;
    quantity: number;
    options?: Record<string, string | number>;
    notes?: string;
    total?: number;
    product?: SallaProduct; // Added for local display
}

// Backward compatibility alias
export type CartItem = SallaCartItem;

export interface SallaUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    avatar?: string;
}

export interface CartResponse {
    id: string;
    total: {
        amount: number;
        currency: string;
    };
    items: SallaCartItem[];
}

export interface APIResponse<T> {
    status: number;
    success: boolean;
    data: T;
    error?: SallaError;
}
