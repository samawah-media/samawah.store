'use client';

import React, { useState } from 'react';
import { Download, Check, Play, BarChart3, Users, Map, Linkedin, Sparkles, ShieldCheck, Eye, Compass, Rocket, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import UpsellModal from '@/components/features/reports/UpsellModal';

const MediaAssetsReport: React.FC = () => {
    const [isUpsellOpen, setIsUpsellOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });

    // Function to handle scroll to form
    const scrollToForm = () => {
        document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDownloadClick = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate short loading state
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real scenario, this is where you'd call your API
        console.log('📊 Lead Collected:', {
            product: 'Media Assets Portfolio Report',
            customer: formData,
            timestamp: new Date().toISOString()
        });

        setIsSubmitting(false);
        setIsUpsellOpen(true);
    };

    return (
        <div className="bg-samawah-beige/30 min-h-screen pt-20">
            <UpsellModal isOpen={isUpsellOpen} onClose={() => setIsUpsellOpen(false)} />

            {/* 1. Hero Section */}
            <section className="relative bg-samawah-navy text-white overflow-hidden py-20 md:py-32">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-samawah-teal rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-samawah-coral rounded-full blur-[100px] opacity-5 translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-3/5 text-right animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 bg-samawah-teal/20 text-samawah-teal border border-samawah-teal/30 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
                                <ShieldCheck size={16} />
                                تقرير استراتيجي حصري لعام 2025
                            </div>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                                ميزانيتك الإعلامية.. <br />
                                <span className="text-samawah-teal">استثمار</span> يبني قيمة <br />
                                أم <span className="text-samawah-peach">مصروف</span> يحترق؟
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl ml-auto">
                                أول تقرير استراتيجي ينقلك من مطاردة الأرقام اللحظية إلى بناء إدارة إعلامية واعية. بدل الإنفاق على حملات عابرة، ابدأ تأسيس أصول إعلامية مستدامة تبقى معك لسنوات.
                            </p>

                            <div className="flex flex-col sm:flex-row-reverse gap-4">
                                <button
                                    onClick={scrollToForm}
                                    className="bg-samawah-teal text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-samawah-teal/80 transition-all flex items-center justify-center gap-3 shadow-lg shadow-samawah-teal/20"
                                >
                                    <Download size={22} />
                                    حمل نسختك المجانية (0 ر.س)
                                </button>
                                <div className="flex items-center justify-center gap-3 text-sm text-white/60 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10">
                                    <Users size={18} className="text-samawah-teal" />
                                    <span>أكثر من +500 قيادي حصلوا على التقرير</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5 relative group">
                            <div className="relative aspect-[3/4] max-w-[400px] mx-auto">
                                <div className="absolute -inset-4 bg-white/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 border-4 border-white/10">
                                    <Image
                                        src="/images/media-assets-report.png"
                                        alt="Report Cover"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-samawah-peach p-6 rounded-3xl shadow-xl transform group-hover:scale-110 transition-transform">
                                    <Sparkles className="text-samawah-navy" size={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The 3 Lenses Concept */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-samawah-teal font-bold tracking-[0.2em] text-sm uppercase block mb-4">آلية التحليل</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-samawah-navy">
                            ثلاث عدسات لرؤية المستقبل
                        </h2>
                        <div className="w-24 h-1 bg-samawah-teal mx-auto mt-6 rounded-full opacity-30"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Eye size={40} />,
                                title: "الاستبصار (Insight)",
                                desc: "فهم الواقع الحالي لإعلامك وتحليله كأصول مالية ومعنوية، وكيف يتفاعل مع جمهورك."
                            },
                            {
                                icon: <Compass size={40} />,
                                title: "الاستشراف (Foresight)",
                                desc: "رسم خرائط النمو المستقبلي وتوقع تحولات السوق الإعلامي قبل وقوعها بسنوات."
                            },
                            {
                                icon: <Rocket size={40} />,
                                title: "الرؤية التكاملية (Integrative)",
                                desc: "دمج الإعلام في صلب نموذج العمل التجاري لتحقيق نمو تراكمي لا يتوقف بانتهاء الحملة."
                            }
                        ].map((lens, idx) => (
                            <div key={idx} className="bg-samawah-beige/20 p-10 rounded-[2.5rem] border border-samawah-beige hover:border-samawah-teal/30 hover:shadow-xl hover:shadow-samawah-teal/5 transition-all text-center group">
                                <div className="w-20 h-20 bg-samawah-navy text-white rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                    {lens.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-samawah-navy mb-4">{lens.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {lens.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Transformation Map (Refined) */}
            <section className="py-24 bg-samawah-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                        <div className="w-full lg:w-1/2 text-right">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                                خارطة التحول من <span className="text-samawah-peach">الاستهلاك</span> <br />
                                إلى <span className="text-samawah-teal">الحيازة</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                بدلاً من السؤال التقليدي "كم صرفنا؟"، التقرير يعلمك كيف تسأل "ماذا حزنا؟" وكيف تحول كل فيديو ومقال وبوست إلى أصل مسجل في ميزانية الشركة.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <BarChart3 className="text-samawah-teal mb-3" size={24} />
                                    <h4 className="font-bold mb-2">تحليل العائد</h4>
                                    <p className="text-xs text-gray-500">من لايكات عابرة إلى قيمة سوقية ملموسة.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <Map className="text-samawah-peach mb-3" size={24} />
                                    <h4 className="font-bold mb-2">إستراتيجية ديزني</h4>
                                    <p className="text-xs text-gray-500">تطبيق نموذج ديزني على المؤسسات العربية.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 group cursor-pointer">
                                <Image
                                    src="https://picsum.photos/id/326/800/600"
                                    alt="Video Preview"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-samawah-teal text-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                        <Play fill="white" size={32} />
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 text-sm text-white/50 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
                                    معادلة كوكاكولا: Happiness Factory
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Form Section (Modernized) */}
            <section id="download-form" className="py-24 bg-white relative">
                <div className="absolute inset-0 bg-samawah-beige/30"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-samawah-beige">
                        <div className="grid grid-cols-1 lg:grid-cols-12">
                            <div className="lg:col-span-5 bg-samawah-navy p-12 text-white flex flex-col justify-center">
                                <h3 className="text-3xl font-serif font-bold mb-6 italic leading-snug">
                                    "هذا التقرير لا يُقرأ للتسلية، بل ليؤخذ كدليل عملي في غرف الاجتماعات."
                                </h3>
                                <div className="flex items-center gap-4 mt-8">
                                    <div className="w-12 h-12 rounded-full bg-samawah-teal/20 flex items-center justify-center text-samawah-teal font-bold border border-samawah-teal/30">
                                        س
                                    </div>
                                    <div>
                                        <p className="font-bold">فريق سماوة الاستراتيجي</p>
                                        <p className="text-xs text-white/40">قسم تطوير الأصول</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7 p-10 md:p-14">
                                <div className="mb-10 text-right">
                                    <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-3">احصل على نسختك الآن</h2>
                                    <p className="text-gray-500">سيتم إرسال التقرير بصيغة PDF مباشرة إلى بريدك الإلكتروني.</p>
                                </div>

                                <form onSubmit={handleDownloadClick} className="space-y-5">
                                    <button
                                        type="button"
                                        className="w-full bg-[#0077b5] text-white py-4 rounded-2xl font-bold mb-6 flex items-center justify-center gap-3 hover:bg-[#006396] transition-all shadow-md shadow-[#0077b5]/20"
                                    >
                                        <Linkedin size={22} />
                                        التحميل السريع عبر LinkedIn
                                    </button>

                                    <div className="relative mb-8 text-center flex items-center gap-4">
                                        <div className="flex-1 h-px bg-gray-200"></div>
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">أو يدوياً</span>
                                        <div className="flex-1 h-px bg-gray-200"></div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-bold text-samawah-navy mb-2 mr-1">الاسم بالكامل</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-samawah-beige/20 border-2 border-samawah-beige focus:border-samawah-teal rounded-2xl px-5 py-4 outline-none transition-all text-right"
                                                placeholder="الاسم يظهر في التقرير"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-samawah-navy mb-2 mr-1">البريد الإلكتروني المهني</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-samawah-beige/20 border-2 border-samawah-beige focus:border-samawah-teal rounded-2xl px-5 py-4 outline-none transition-all text-left"
                                                placeholder="example@company.com"
                                                dir="ltr"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-samawah-navy text-white py-5 rounded-2xl font-bold text-xl hover:bg-samawah-teal transition-all mt-6 shadow-xl shadow-samawah-navy/20 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>جاري التحميل... <span className="animate-spin">🌀</span></>
                                        ) : (
                                            <>تحميل التقرير - 0 ر.س <Download size={24} /></>
                                        )}
                                    </button>

                                    <p className="text-center text-[10px] text-gray-400 mt-6 leading-relaxed">
                                        بتحميلك للتقرير، أنت توافق على الانضمام لقائمة سماوة البريدية الحصرية لصناع القرار. يمكنك إلغاء الاشتراك في أي وقت.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 text-samawah-navy hover:text-samawah-teal font-bold transition-colors">
                            <ArrowLeft size={20} />
                            العودة للمتجر
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediaAssetsReport;
