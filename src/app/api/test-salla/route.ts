import { NextResponse } from 'next/server';
import { getProduct } from '@/lib/salla';

/**
 * Test endpoint for Salla API connection
 * GET /api/test-salla
 */
export async function GET() {
    try {

        // Test by fetching a known product
        const product = await getProduct('548271829');

        if (product) {
            return NextResponse.json({
                status: 'success',
                message: 'Salla API connection successful',
                data: {
                    productName: product.name,
                    productPrice: product.price,
                },
            });
        }

        return NextResponse.json({
            status: 'warning',
            message: 'Using fallback data - API may be unavailable',
        });

    } catch (error) {
        console.error("Salla API test error:", error);

        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        return NextResponse.json({
            status: 'error',
            message: errorMessage,
        }, { status: 500 });
    }
}
