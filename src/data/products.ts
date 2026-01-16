import { SallaProduct } from '@/types/salla';

/**
 * Fallback product data for graceful degradation
 */
export const FALLBACK_PRODUCTS: Record<string, SallaProduct> = {
    '548271829': {
        id: '548271829',
        name: 'مجلة هُدنة - العدد الأول',
        description: 'مجلة ثقافية فكرية تهتم بالشأن العربي',
        price: { amount: 75, currency: 'SAR' },
        main_image: '/images/hodna-product.JPG',
        images: [],
        url: 'https://samawah.store/product/548271829',
    },
    '1367448884': {
        id: '1367448884',
        name: 'فعالية سماوة الثقافية',
        description: 'فعالية ثقافية حصرية',
        price: { amount: 150, currency: 'SAR' },
        main_image: 'https://cdn.salla.sa/images/event-cover.jpg',
        images: [],
        url: 'https://samawah.store/product/1367448884',
    },
};
