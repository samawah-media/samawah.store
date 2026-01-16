'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    ArrowRight,
    CheckCircle,
    Send,
    DollarSign,
    Zap,
    BarChart3,
    ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function AmbassadorLanding() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        socialLink: '',
        followers: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'ambassador',
                    ...formData
                }),
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Failed to submit');

            setIsSuccess(true);
        } catch (err: any) {
            console.error('Submission Error:', err);
            setError('عذراً، حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation / Back Button */}
            <div className="fixed top-24 right-4 md:right-8 z-50">
                <Link href="/join" className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm text-samawah-navy hover:text-samawah-teal transition-all font-bold">
                    <ArrowRight size={18} /> العودة للاختيار
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-samawah-teal/5 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-samawah-teal/10 text-samawah-teal px-4 py-2 rounded-full font-bold text-sm mb-6"
                    >
                        <Users size={16} /> برنامج سفراء هدنة
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-serif font-bold text-samawah-navy mb-8 leading-tight"
                    >
                        كن شريكاً في <br /> <span className="text-samawah-teal">نشر الوعي الثقافي</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-samawah-grey/60 text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        هل تملك جمهوراً يبحث عن المحتوى الرصين؟ انضم لبرنامج السفراء، شارك منتجات سماوة مع مجتمعك، واحصل على مكافآت مجزية مقابل كل تأثير تصنعه.
                    </motion.p>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-samawah-teal rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-samawah-peach rounded-full blur-[120px]"></div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <DollarSign className="text-samawah-teal" size={32} />,
                                title: "عمولة مجزية",
                                desc: "نظام عمولات سخي يضمن لك دخلاً متنامياً مع كل عملية شراء تتم عبر رابطك الخاص."
                            },
                            {
                                icon: <Zap className="text-samawah-teal" size={32} />,
                                title: "محتوى جاهز",
                                desc: "نوفر لك تصاميم ومواد تسويقية احترافية جاهزة للنشر لتسهيل مهمتك."
                            },
                            {
                                icon: <BarChart3 className="text-samawah-teal" size={32} />,
                                title: "تتبع دقيق",
                                desc: "لوحة تحكم ذكية تتيح لك متابعة مبيعاتك وأرباحك لحظة بلحظة وبكل شفافية."
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-samawah-beige/30 border border-samawah-beige hover:bg-white hover:shadow-xl transition-all"
                            >
                                <div className="mb-6">{benefit.icon}</div>
                                <h3 className="text-2xl font-serif font-bold text-samawah-navy mb-4">{benefit.title}</h3>
                                <p className="text-samawah-grey/60 leading-relaxed text-lg">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 px-4 bg-samawah-navy relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl">
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-samawah-navy mb-4">ابدأ رحلتك معنا الآن</h2>
                                        <p className="text-samawah-grey/60 text-lg">املأ البيانات بالأسفل وسيتواصل معك فريقنا قريباً.</p>
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-8 font-bold border border-red-100 italic">
                                            {error}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-samawah-navy pr-1 font-sans">الاسم الكامل</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="اسمك الثلاثي"
                                                    className="w-full p-4 rounded-2xl bg-samawah-beige/50 border border-samawah-beige focus:border-samawah-teal outline-none transition-all placeholder:text-gray-400"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-samawah-navy pr-1 font-sans">رقم الجوال</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="05xxxx"
                                                    className="w-full p-4 rounded-2xl bg-samawah-beige/50 border border-samawah-beige focus:border-samawah-teal outline-none text-left ltr transition-all"
                                                    value={formData.mobile}
                                                    onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-samawah-navy pr-1 font-sans">البريد الإلكتروني</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="email@example.com"
                                                className="w-full p-4 rounded-2xl bg-samawah-beige/50 border border-samawah-beige focus:border-samawah-teal outline-none text-left ltr transition-all"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-samawah-navy pr-1 font-sans">رابط حسابك الأساسي</label>
                                                <input
                                                    required
                                                    type="url"
                                                    placeholder="https://..."
                                                    className="w-full p-4 rounded-2xl bg-samawah-beige/50 border border-samawah-beige focus:border-samawah-teal outline-none text-left ltr transition-all"
                                                    value={formData.socialLink}
                                                    onChange={e => setFormData({ ...formData, socialLink: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-samawah-navy pr-1 font-sans">عدد المتابعين</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="+5k"
                                                    className="w-full p-4 rounded-2xl bg-samawah-beige/50 border border-samawah-beige focus:border-samawah-teal outline-none transition-all"
                                                    value={formData.followers}
                                                    onChange={e => setFormData({ ...formData, followers: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full bg-samawah-navy text-white p-5 rounded-2xl font-bold text-xl hover:bg-samawah-teal transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-50 mt-8 group"
                                        >
                                            {isSubmitting ? 'جاري إرسال طلبك...' : (
                                                <>
                                                    إرسال طلب الانضمام <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={24} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8 shadow-inner">
                                        <CheckCircle size={56} />
                                    </div>
                                    <h2 className="text-4xl font-serif font-bold text-samawah-navy mb-6">تم استلام طلبك!</h2>
                                    <p className="text-samawah-grey/60 text-xl leading-relaxed mb-10 max-w-sm mx-auto">
                                        شكراً لاهتمامك ببرنامج السفراء. سيقوم فريقنا بمراجعة حسابك والتواصل معك قريباً للهبوط بأول شراكة بيننا.
                                    </p>
                                    <Link href="/" className="inline-block bg-samawah-navy text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-samawah-teal transition-all">
                                        العودة للرئيسية
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Decorative circles for navy section */}
                <div className="absolute top-20 left-0 w-32 h-32 bg-samawah-teal rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute bottom-10 right-0 w-48 h-48 bg-samawah-peach rounded-full blur-[120px] opacity-20"></div>
            </section>
        </div>
    );
}
