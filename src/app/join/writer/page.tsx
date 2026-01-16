'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PenTool,
    ArrowRight,
    CheckCircle,
    Send,
    BookOpen,
    Globe,
    Award,
    Upload,
    ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function WriterLanding() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        bio: '',
        links: '',
        file: null as File | null
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
                    type: 'writer',
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
                <Link href="/join" className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm text-samawah-navy hover:text-samawah-peach transition-all font-bold">
                    <ArrowRight size={18} /> العودة للاختيار
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-samawah-peach/10 to-white overflow-hidden text-center">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-samawah-peach/10 text-samawah-peach px-4 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-wider"
                    >
                        <PenTool size={16} /> برنامج الاستكتاب الثقافي
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-serif font-bold text-samawah-navy mb-8 leading-tight"
                    >
                        شاركنا <span className="text-samawah-peach italic">قلمك</span> <br /> وإبداعك الفكري
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-samawah-grey/70 text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        نبحث في سماوة عن الأقلام التي تلامس الروح وتثري العقل. إذا كنت تملك رؤية ثقافية فريدة، فنحن نوفر لك المنصة والجمهور لتصل بكلماتك إلى أبعد مدى.
                    </motion.p>
                </div>

                {/* Decorative floating shapes */}
                <div className="absolute top-1/4 left-10 w-24 h-24 bg-samawah-peach/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-samawah-teal/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-4 bg-samawah-beige/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-samawah-navy mb-4">لماذا تكتب في سماوة؟</h2>
                        <div className="w-20 h-1 bg-samawah-peach mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Globe className="text-samawah-peach" size={32} />,
                                title: "وصول لجمهور واسع",
                                desc: "مقالاتك ستصل لآلاف القراء المهتمين بالمحتوى الثقافي والفكري الرصين عبر مجلتنا ومنصاتنا."
                            },
                            {
                                icon: <Award className="text-samawah-peach" size={32} />,
                                title: "بناء هويتك ككاتب",
                                desc: "نخصص لك مساحة للتعريف بك وبأعمالك، مما يساهم في بناء اسمك في المشهد الثقافي."
                            },
                            {
                                icon: <BookOpen className="text-samawah-peach" size={32} />,
                                title: "مكافآت معنوية ومادية",
                                desc: "نقدر جهود مبدعينا من خلال أنظمة مكافآت تنافسية تليق بجودة الطرح والقيمة المعرفية."
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 transform -rotate-3 hover:rotate-0 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-samawah-navy mb-4">{benefit.title}</h3>
                                <p className="text-samawah-grey/60 leading-relaxed text-lg">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-samawah-beige overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                        {/* Form Sidebar */}
                        <div className="lg:col-span-2 bg-samawah-navy p-10 md:p-16 text-white flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">جاهز لترك بصمتك؟</h2>
                            <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">
                                قدم نماذج من أعمالك وتعرف علينا أكثر. نسعى لمراجعة كافة الطلبات خلال 5 أيام عمل.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm font-medium">
                                    <CheckCircle size={18} className="text-samawah-peach" /> مراجعة مهنية دقيقة
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium">
                                    <CheckCircle size={18} className="text-samawah-peach" /> خصوصية تامة لأعمالك
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium">
                                    <CheckCircle size={18} className="text-samawah-peach" /> تقدير كامل للملكية الفكرية
                                </li>
                            </ul>
                        </div>

                        {/* Actual Form */}
                        <div className="lg:col-span-3 p-10 md:p-16">
                            <AnimatePresence mode="wait">
                                {!isSuccess ? (
                                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                        {error && (
                                            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 font-serif italic border-r-4 border-red-500">
                                                {error}
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-samawah-navy pr-1 px-1">الاسم الثلاثي</label>
                                                    <input required type="text" className="w-full p-4 rounded-xl bg-samawah-beige/30 border border-samawah-beige focus:border-samawah-peach outline-none transition-all" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-samawah-navy pr-1 px-1">رقم الجوال</label>
                                                    <input required type="tel" className="w-full p-4 rounded-xl bg-samawah-beige/30 border border-samawah-beige focus:border-samawah-peach outline-none text-left ltr transition-all" value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })} />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-samawah-navy pr-1 px-1">البريد الإلكتروني</label>
                                                <input required type="email" className="w-full p-4 rounded-xl bg-samawah-beige/30 border border-samawah-beige focus:border-samawah-peach outline-none text-left ltr transition-all" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-samawah-navy pr-1 px-1">نبذة عنك وعن مجالات اهتمامك</label>
                                                <textarea required rows={4} className="w-full p-4 rounded-xl bg-samawah-beige/30 border border-samawah-beige focus:border-samawah-peach outline-none transition-all resize-none" value={formData.bio} onChange={e => setFormData({ ...formData, bio: e.target.value })}></textarea>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-samawah-navy pr-1 px-1">أرفق نماذج أعمال (PDF/Word)</label>
                                                <div className="relative border-2 border-dashed border-samawah-beige rounded-xl p-8 text-center hover:bg-samawah-peach/5 transition-all cursor-pointer group">
                                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={e => setFormData({ ...formData, file: e.target.files?.[0] || null })} />
                                                    <Upload className="mx-auto text-samawah-grey/20 group-hover:text-samawah-peach transition-colors mb-2" size={40} />
                                                    <p className="text-sm text-samawah-grey/50">
                                                        {formData.file ? formData.file.name : 'اسحب الملف هنا أو اضغط للاختيار'}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full bg-samawah-peach text-white p-5 rounded-xl font-bold text-xl hover:bg-samawah-navy transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 group mt-10"
                                            >
                                                {isSubmitting ? 'جاري إرسال طلبك...' : (
                                                    <>
                                                        إرسال طلب الاستكتاب <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={24} />
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
                                        className="text-center py-10"
                                    >
                                        <div className="w-20 h-20 bg-samawah-peach/10 rounded-full flex items-center justify-center text-samawah-peach mx-auto mb-8">
                                            <CheckCircle size={48} />
                                        </div>
                                        <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-6">تم إرسال قلمك بنجاح!</h2>
                                        <p className="text-samawah-grey/60 text-lg leading-relaxed mb-10 max-w-sm mx-auto font-sans">
                                            نقدر ثقتك بنا. سيقوم المحرر الثقافي بمراجعة النماذج المرسلة والتواصل معك عبر البريد الإلكتروني.
                                        </p>
                                        <Link href="/" className="inline-block bg-samawah-navy text-white px-10 py-3 rounded-xl font-bold text-lg hover:bg-samawah-peach transition-all shadow-md">
                                            العودة للرئيسية
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
