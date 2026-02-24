'use client';

import React, { memo, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '../animations/FadeIn';
import { PRODUCT_LINKS } from '@/data/products-map';

// ========================================
// Report Covers Data
// ========================================
const reportCovers = [
    {
        id: 1,
        title: 'تقرير الأصول الإعلامية 2025',
        image: '/images/media-assets-report.png',
    },
    {
        id: 2,
        title: 'تحليل السوق الإعلامي',
        image: 'https://picsum.photos/id/24/400/560',
    },
    {
        id: 3,
        title: 'دليل الاستراتيجية الرقمية',
        image: 'https://picsum.photos/id/367/400/560',
    },
    {
        id: 4,
        title: 'مستقبل صناعة المحتوى',
        image: 'https://picsum.photos/id/180/400/560',
    },
    {
        id: 5,
        title: 'أداء المنصات الرقمية',
        image: 'https://picsum.photos/id/201/400/560',
    },
];

// ========================================
// FeaturedGrid Component - Products Showcase
// ========================================

const FeaturedGrid: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goToNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % reportCovers.length);
    }, []);

    // Auto-rotate every 3.5 seconds
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(goToNext, 3500);
        return () => clearInterval(interval);
    }, [isPaused, goToNext]);

    return (
        <section
            className="py-12 md:py-20 px-4 max-w-7xl mx-auto"
            aria-labelledby="featured-heading"
        >
            {/* Section Header */}
            <FadeIn>
                <div className="text-center mb-8 md:mb-12">
                    <h2
                        id="featured-heading"
                        className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-samawah-navy mb-3 md:mb-4"
                    >
                        إصدارات وفعاليات مُختارة
                    </h2>
                    <p className="text-samawah-grey/70 max-w-2xl mx-auto text-sm md:text-base">
                        من أصالة الورق إلى اللقاءات الحيّة، مسار واحد للمعرفة التجربة
                    </p>
                </div>
            </FadeIn>

            {/* Grid - Mobile: Stacked, Desktop: Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:h-[600px]">

                {/* Magazine Card - Large */}
                <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2 h-full" fullWidth>
                    <Link
                        href={`/product/${PRODUCT_LINKS.magazine_issue.id}`}
                        className="group relative h-full w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                        <Image
                            src="https://picsum.photos/id/24/800/800"
                            alt="مجلة هدنة - العدد الأول"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 66vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 md:p-8 flex flex-col justify-end">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                                مجلة هدنة: في قلق المكانة والسعي للتقدير
                            </h3>
                            <p className="text-gray-200 mb-3 md:mb-4 line-clamp-2 text-sm md:text-base">
                                الراقص الحقيقي لا ينتظر التصفيق، هو يرقص لأن الموسيقى في داخله لا تتوقف.
                            </p>
                            <span className="inline-flex items-center text-white font-bold group-hover:gap-2 transition-all text-sm md:text-base">
                                اكتشف العدد
                                <ArrowLeft size={18} className="mr-2" aria-hidden="true" />
                            </span>
                        </div>
                    </Link>
                </FadeIn>

                {/* Event Card */}
                <FadeIn delay={0.2}>
                    <Link
                        href="/event"
                        className="group relative h-full min-h-[200px] rounded-2xl md:rounded-3xl overflow-hidden bg-samawah-navy shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                        {/* Season Status Badge */}
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium flex items-center gap-1 z-10">
                            <Clock size={12} aria-hidden="true" />
                            في انتظار الموسم الرابع
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-8 flex-1 flex flex-col justify-center items-start text-white z-10">
                            <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">مجلس جُلاس</h3>
                            <p className="text-gray-300 text-sm mb-4 md:mb-6">صالون ثقافي ومعرفي يجمع النخبة. ترقبوا الموسم الرابع بإذن الله.</p>

                            {/* Season Info */}
                            <div className="bg-white/10 px-4 py-2 rounded-lg text-sm text-white/80">
                                ✨ 26 لقاء في 3 مواسم
                            </div>
                        </div>

                        {/* Background Image */}
                        <Image
                            src="/images/jalas-event.jpeg"
                            alt="مجلس جُلاس"
                            fill
                            aria-hidden="true"
                            className="object-cover opacity-40 group-hover:opacity-30 transition-opacity"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </Link>
                </FadeIn>

                {/* Reports Carousel Card */}
                <FadeIn delay={0.3}>
                    <Link
                        href="/reports"
                        className="group relative h-full min-h-[180px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Report Cover Images */}
                        {reportCovers.map((cover, idx) => (
                            <div
                                key={cover.id}
                                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                                style={{ opacity: idx === activeIndex ? 1 : 0 }}
                            >
                                <Image
                                    src={cover.image}
                                    alt={cover.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority={idx === 0}
                                />
                            </div>
                        ))}

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-samawah-navy/90 via-samawah-navy/30 to-transparent z-10" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 z-20 p-4 md:p-5 flex flex-col justify-end">
                            {/* Title */}
                            <h3 className="text-base md:text-lg font-bold text-white mb-1 drop-shadow-lg">
                                تقارير إعلامية
                            </h3>
                            {/* Current cover title */}
                            <p className="text-white/70 text-xs mb-3 drop-shadow transition-all duration-500 line-clamp-1">
                                {reportCovers[activeIndex].title}
                            </p>

                            {/* Navigation Dots + Arrow */}
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    {reportCovers.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setActiveIndex(idx);
                                            }}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
                                                ? 'w-5 bg-white'
                                                : 'w-1.5 bg-white/40 hover:bg-white/60'
                                                }`}
                                            aria-label={`عرض التقرير ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                                    <ArrowLeft size={16} className="text-white" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};

export default memo(FeaturedGrid);

