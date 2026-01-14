import { getProduct } from '@/lib/salla';
import MagazineDetails from '@/components/features/magazine/MagazineDetails';
import EventDetails from '@/components/features/event/EventDetails';
import { notFound } from 'next/navigation';

// Force dynamic rendering to avoid build-time API calls
export const dynamic = 'force-dynamic';

// Known Product IDs
const MAGAZINE_PRODUCT_ID = '548271829';
const EVENT_PRODUCT_ID = '1367448884';

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;

    // Fetch product data from Salla API
    const product = await getProduct(id);

    // Determine which UI to render based on product ID
    const isMagazine = id === MAGAZINE_PRODUCT_ID;
    const isEvent = id === EVENT_PRODUCT_ID;

    // If not a known product type, show 404
    if (!isMagazine && !isEvent) {
        notFound();
    }

    return (
        <main className="flex-grow">
            {isMagazine ? (
                <MagazineDetails product={product} />
            ) : (
                <EventDetails product={product} />
            )}
        </main>
    );
}
