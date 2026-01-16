'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import { PRODUCT_LINKS } from '@/data/products-map';

// ========================================
// SubscriptionPackages Component - Pricing Section
// ========================================

interface PlanFeatureProps {
    children: React.ReactNode;
    highlighted?: boolean;
}

const PlanFeature: React.FC<PlanFeatureProps> = memo(({ children, highlighted = false }) => (
    <li className="flex gap-2 items-center">
        <Check size={16} className={highlighted ? 'text-samawah-peach shrink-0' : 'text-samawah-teal shrink-0'} aria-hidden="true" />
        {children}
    </li>
));

PlanFeature.displayName = 'PlanFeature';

const SubscriptionPackages: React.FC = () => {
    return (
        <section
            className="py-12 md:py-20 bg-samawah-beige"
            aria-labelledby="packages-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-8 md:mb-12">
                        <h2
                            id="packages-heading"
                            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-samawah-navy mb-3 md:mb-4"
                        >
                            باقات اشتراك مجلة هدنة
                        </h2>
                        <p className="text-samawah-grey/80 max-w-2xl mx-auto text-sm md:text-base">
                            استثمر في وعيك، واختر الباقة التي تناسبك لتصلك المعرفة حتى باب منزلك.
                        </p>
                    </div>
                </FadeIn>

                {/* Packages Grid - Reversed order on mobile for priority */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start max-w-4xl mx-auto">

                    {/* Annual Package (Highlighted) - Shows first on mobile */}
                    <FadeIn delay={0.2} direction="up" className="h-full">
                        <div className="bg-samawah-navy rounded-2xl p-6 md:p-8 border-2 border-samawah-navy shadow-2xl relative md:-translate-y-4 h-full flex flex-col order-first md:order-last">
                            {/* Most Popular Badge */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-samawah-peach text-samawah-navy px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg flex items-center gap-1">
                                <Sparkles size={14} aria-hidden="true" />
                                الأكثر توفيراً
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 mt-2 md:mt-0">الباقة السنوية</h3>
                            <p className="text-gray-300 text-sm mb-4 md:mb-6">راحة البال طوال العام</p>

                            {/* Price */}
                            <div className="flex items-end gap-2 mb-4 md:mb-6">
                                <div className="text-3xl md:text-4xl font-bold text-white">
                                    205 <span className="text-sm md:text-base font-normal text-gray-300">ر.س</span>
                                </div>
                                <div className="text-base md:text-lg text-samawah-mint line-through mb-1">222 ر.س</div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm text-gray-100 flex-grow">
                                <PlanFeature highlighted><strong>4 أعداد</strong> (تصلك ربع سنوياً)</PlanFeature>
                                <PlanFeature highlighted><strong>شحن مجاني</strong> لباب بيتك</PlanFeature>
                                <PlanFeature highlighted>ضمان ثبات السعر</PlanFeature>
                            </ul>

                            {/* CTA */}
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href={`/product/${PRODUCT_LINKS.magazine_issue.id}?plan=annual`}
                                    className="block w-full text-center py-3.5 md:py-4 rounded-xl bg-white text-samawah-navy font-bold hover:bg-samawah-coral hover:text-white transition-all shadow-lg touch-target"
                                >
                                    اشترك الآن
                                </Link>
                            </motion.div>
                        </div>
                    </FadeIn>

                    {/* Single Issue */}
                    <FadeIn delay={0.4} direction="up" className="h-full">
                        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all h-full flex flex-col order-last md:order-first">
                            <h3 className="text-lg md:text-xl font-bold text-samawah-navy mb-2">العدد الفردي</h3>
                            <p className="text-gray-500 text-sm mb-4 md:mb-6">للتجربة والقراءة الهادئة</p>

                            {/* Price */}
                            <div className="text-2xl md:text-3xl font-bold text-samawah-grey mb-4 md:mb-6">
                                45 <span className="text-sm md:text-base font-normal text-gray-500">ر.س</span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-6 md:mb-8 text-sm text-gray-600 flex-grow">
                                <PlanFeature>عدد واحد (الحالي)</PlanFeature>
                                <PlanFeature>جودة طباعة فاخرة</PlanFeature>
                            </ul>

                            {/* CTA */}
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href={`/product/${PRODUCT_LINKS.magazine_issue.id}?plan=single`}
                                    className="block w-full text-center py-3.5 md:py-3 rounded-xl border-2 border-samawah-teal text-samawah-teal font-bold hover:bg-samawah-teal hover:text-white transition-all touch-target"
                                >
                                    شراء نسخة
                                </Link>
                            </motion.div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default memo(SubscriptionPackages);

