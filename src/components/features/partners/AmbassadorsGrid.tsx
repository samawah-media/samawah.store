'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import FadeIn from '../../animations/FadeIn';

/**
 * بيانات تجريبية للسفراء
 */
const AMBASSADORS = [
    {
        id: 1,
        name: 'د. محمد أحمد بارحمة',
        role: 'رئيس التحرير',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'أ. سارة العتيبي',
        role: 'سفيرة المحتوى الثقافي',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'أ. فهد الشمري',
        role: 'منسق فعاليات جُلاس',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 4,
        name: 'أ. نورة القحطاني',
        role: 'محررة أدبية',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    },
];

const AmbassadorCard: React.FC<{ name: string; role: string; image: string; index: number }> = memo(({ name, role, image, index }) => (
    <FadeIn delay={index * 0.1} direction="up" className="group">
        <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            {/* Image Container with Fixed Aspect Ratio (3:4) */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" aria-hidden="true" />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-samawah-navy mb-1 group-hover:text-samawah-teal transition-colors">
                    {name}
                </h3>
                <p className="text-sm text-samawah-grey/70">
                    {role}
                </p>
            </div>
        </div>
    </FadeIn>
));

AmbassadorCard.displayName = 'AmbassadorCard';

const AmbassadorsGrid: React.FC = () => {
    return (
        <section className="w-full" aria-labelledby="ambassadors-title">
            <div className="max-w-7xl mx-auto">
                {/* Grid System: 1 Mobile, 2 Tablet, 4 Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {AMBASSADORS.map((ambassador, index) => (
                        <AmbassadorCard
                            key={ambassador.id}
                            name={ambassador.name}
                            role={ambassador.role}
                            image={ambassador.image}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(AmbassadorsGrid);
