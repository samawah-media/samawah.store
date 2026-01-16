'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ArrowLeft } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { PRODUCT_LINKS } from '@/data/products-map';

// ========================================
// Hero Component - Mobile-First Design
// ========================================

const Hero: React.FC = () => {
    return (
        <section
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
            aria-label="القسم الرئيسي"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?q=80&w=2070&auto=format&fit=crop"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

                {/* Gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    aria-hidden="true"
                />
            </div>

            {/* Content - Mobile-First Spacing */}
            <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto pt-20 pb-8 md:pt-0 md:pb-0">
                {/* Badge */}
                <FadeIn delay={0.2} direction="down">
                    <span className="inline-block bg-samawah-mint text-samawah-navy font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
                        إصدارات جديدة
                    </span>
                </FadeIn>

                {/* Main Heading - Responsive Typography */}
                <FadeIn delay={0.4}>
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 max-w-2xl mx-auto leading-tight"
                    >
                        استعد توازنك مع كل صفحة تقرأها
                    </h1>
                </FadeIn>

                {/* Subtitle - Responsive */}
                <FadeIn delay={0.6}>
                    <p
                        className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed"
                    >
                        في متجر هُدنة، ننتقي لك بعناية المجلات والمحتوى الذي يلامس الروح ويرتقي بالفكر.
                    </p>
                </FadeIn>

                {/* CTA Buttons Container */}
                <FadeIn delay={0.8}>
                    <div className="flex flex-col items-center gap-4 sm:gap-6">
                        {/* Primary CTA */}
                        <Link
                            href={`/product/${PRODUCT_LINKS.magazine_issue.id}`}
                            className="w-full sm:w-auto bg-samawah-teal text-white font-bold py-3.5 sm:py-3 px-8 rounded-full hover:bg-samawah-coral hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 touch-target"
                        >
                            تصفح الإصدارات
                            <ArrowLeft size={20} aria-hidden="true" />
                        </Link>

                        {/* Secondary Value Prop */}
                        <div
                            className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 animate-bounce-slow text-sm sm:text-base font-medium"
                            role="note"
                        >
                            <Truck size={18} className="text-samawah-mint shrink-0" aria-hidden="true" />
                            <span>يصلك 4 أعداد لباب بيتك</span>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Scroll Indicator - Hidden on very small screens */}
            <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/60 animate-bounce"
                aria-hidden="true"
            >
                <span className="text-xs">اسحب للأسفل</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/60 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default memo(Hero);
