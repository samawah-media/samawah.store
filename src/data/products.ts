import { SallaProduct } from '@/types/salla';

/**
 * Fallback product data for graceful degradation
 */
export const FALLBACK_PRODUCTS: Record<string, SallaProduct> = {
    '548271829': {
        id: '548271829',
        name: 'مجلة هُدنة: في قلق المكانة والسعي للتقدير',
        description: 'الراقص الحقيقي لا ينتظر التصفيق، هو يرقص لأن الموسيقى في داخله لا تتوقف.',
        price: { amount: 61, currency: 'SAR' },
        main_image: '/images/hodna-product.JPG',
        images: [],
        url: 'https://samawah.store/product/548271829',
    },
    '1367448884': {
        id: '1367448884',
        name: 'فعالية سماوة الثقافية',
        description: 'فعالية ثقافية حصرية',
        price: { amount: 15, currency: 'SAR' },
        main_image: '/images/jalas-event.jpeg',
        images: [],
        url: 'https://samawah.store/product/1367448884',
    },
};
