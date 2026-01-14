'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '../animations/FadeIn';

// ========================================
// FeaturedGrid Component - Products Showcase
// ========================================

const FeaturedGrid: React.FC = () => {
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
                        إصدارات وفعاليات مختارة
                    </h2>
                    <p className="text-samawah-grey/70 max-w-2xl mx-auto text-sm md:text-base">
                        نجمع لك بين أصالة الورق وتفاعلية اللقاءات الحية في مكان واحد.
                    </p>
                </div>
            </FadeIn>

            {/* Grid - Mobile: Stacked, Desktop: Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:h-[600px]">

                {/* Magazine Card - Large */}
                <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2 h-full" fullWidth>
                    <Link
                        href="/magazine"
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
                                مجلة هدنة: العدد الأول 2025
                            </h3>
                            <p className="text-gray-200 mb-3 md:mb-4 line-clamp-2 text-sm md:text-base">
                                &quot;ممر هادئ إلى روحك&quot;. مقالات في التوق إلى المكانة والتقدير، الراقصون في العتمة، وموسم الهجرة إلى الرياض.
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
                        {/* Coming Soon Badge */}
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium flex items-center gap-1 z-10">
                            <Clock size={12} aria-hidden="true" />
                            قريباً
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-8 flex-1 flex flex-col justify-center items-start text-white z-10">
                            <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">لقاء جُلاس القادم</h3>
                            <p className="text-gray-300 text-sm mb-4 md:mb-6">صالون ثقافي ومعرفي يجمع النخبة.</p>

                            {/* Countdown */}
                            <div className="flex gap-2 mb-2 md:mb-4">
                                <div className="bg-white/10 p-2 rounded text-center min-w-[45px] md:min-w-[50px]">
                                    <span className="block font-bold text-base md:text-lg">04</span>
                                    <span className="text-[10px]">أيام</span>
                                </div>
                                <div className="bg-white/10 p-2 rounded text-center min-w-[45px] md:min-w-[50px]">
                                    <span className="block font-bold text-base md:text-lg">12</span>
                                    <span className="text-[10px]">ساعة</span>
                                </div>
                            </div>
                        </div>

                        {/* Background Image */}
                        <Image
                            src="https://picsum.photos/id/452/400/300"
                            alt=""
                            fill
                            aria-hidden="true"
                            className="object-cover opacity-40 group-hover:opacity-30 transition-opacity"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </Link>
                </FadeIn>

                {/* Reports Card */}
                <FadeIn delay={0.3}>
                    <Link
                        href="/reports"
                        className="group relative h-full min-h-[140px] rounded-2xl md:rounded-3xl overflow-hidden bg-samawah-beige border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-5 md:p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-samawah-navy mb-2">تقارير إعلامية</h3>
                            <p className="text-samawah-grey/70 text-sm">تحليلات معمقة لواقع السوق الإعلامي.</p>
                        </div>
                        <div className="self-end bg-samawah-mint p-2 rounded-full group-hover:bg-samawah-navy group-hover:text-white transition-colors">
                            <ArrowLeft size={20} aria-hidden="true" />
                        </div>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};

export default FeaturedGrid;
