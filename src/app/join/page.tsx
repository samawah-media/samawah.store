'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, PenTool, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function JoinPortalPage() {
    return (
        <div className="min-h-screen bg-samawah-beige pt-32 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-samawah-navy mb-6"
                    >
                        انضم لعائلة سماوة
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-samawah-grey/70 text-xl max-w-2xl mx-auto"
                    >
                        نحن لا نبني مجرد منصة، نحن نبني مجتمعاً ثقافياً ينمو بإبداعكم وشغفكم. اختر طريقك للانضمام إلينا.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Ambassador Portal Card */}
                    <Link href="/join/ambassador">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-samawah-beige hover:border-samawah-teal hover:shadow-2xl transition-all group cursor-pointer h-full flex flex-col items-start text-right"
                        >
                            <div className="w-20 h-20 bg-samawah-teal/10 rounded-3xl flex items-center justify-center text-samawah-teal mb-8 group-hover:scale-110 transition-transform">
                                <Users size={40} />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-4">سفراء هدنة</h2>
                            <p className="text-samawah-grey/60 text-lg mb-8 leading-relaxed">
                                كن شريكاً في نشر الوعي والجمال المعرفي. انضم لبرنامج التسويق بالعمولة وساهم في وصول منتجاتنا لكل بيت.
                            </p>
                            <div className="mt-auto flex items-center gap-3 text-samawah-teal font-bold text-lg group-hover:gap-5 transition-all">
                                استكشف البرنامج <ChevronLeft size={24} />
                            </div>
                        </motion.div>
                    </Link>

                    {/* Writer Portal Card */}
                    <Link href="/join/writer">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-samawah-beige hover:border-samawah-peach hover:shadow-2xl transition-all group cursor-pointer h-full flex flex-col items-start text-right"
                        >
                            <div className="w-20 h-20 bg-samawah-peach/10 rounded-3xl flex items-center justify-center text-samawah-peach mb-8 group-hover:scale-110 transition-transform">
                                <PenTool size={40} />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-4">برنامج الاستكتاب</h2>
                            <p className="text-samawah-grey/60 text-lg mb-8 leading-relaxed">
                                هل تملك رؤية ثقافية وقلم ملمهم؟ نفتح لك أبواب مجلة هدنة لتشاركنا مقالاتك وتصل بكلماتك إلى آلاف القراء.
                            </p>
                            <div className="mt-auto flex items-center gap-3 text-samawah-peach font-bold text-lg group-hover:gap-5 transition-all">
                                شاركنا إبداعك <ChevronLeft size={24} />
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
