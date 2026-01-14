'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Sparkles, CheckCircle, Circle, Play, User, Calendar, Quote } from 'lucide-react';
import { Product, SallaProduct } from '@/types/salla';
import { MAGAZINE_ISSUES, MAGAZINE_SECTIONS, IssueData } from '@/data/magazine';
import { useCartStore } from '@/store/cartStore';

interface MagazineDetailsProps {
    product: Product | null;
}

const MagazineDetails: React.FC<MagazineDetailsProps> = ({ product }) => {
    const [selectedPlan, setSelectedPlan] = useState<'single' | 'annual'>('annual');
    const [selectedIssue, setSelectedIssue] = useState(1);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    // Cart store
    const addItem = useCartStore((state) => state.addItem);

    // Combine static data with dynamic product images
    const issuesData = Object.entries(MAGAZINE_ISSUES).reduce((acc, [key, data]) => {
        acc[Number(key)] = {
            ...data,
            cover: Number(key) === 1 ? (product?.main_image || "https://picsum.photos/id/24/800/1000") : `https://picsum.photos/id/${1010 + Number(key) * 5}/800/1000`
        } as IssueData;
        return acc;
    }, {} as Record<number, IssueData>);

    const currentIssueData = issuesData[selectedIssue];

    const basePrice = product?.price?.amount || 45;
    const plans = {
        single: { price: basePrice, label: 'نسخة واحدة' },
        annual: { price: Math.round(basePrice * 4 * 0.85), label: 'الباقة السنوية' },
    };

    const handleAddToCart = () => {
        if (!product) return;
        setIsAddingToCart(true);

        // Create a product object for the cart
        const cartProduct: SallaProduct = {
            id: product.id,
            name: selectedPlan === 'annual'
                ? `${product.name} - الباقة السنوية`
                : product.name,
            description: product.description,
            price: {
                amount: selectedPlan === 'annual' ? plans.annual.price : plans.single.price,
                currency: product.price.currency
            },
            main_image: product.main_image,
            images: product.images,
            url: product.url,
        };

        // Add to local cart store
        addItem(cartProduct, selectedPlan === 'annual' ? 1 : 1);

        setTimeout(() => {
            setIsAddingToCart(false);
        }, 500);
    };

    return (
        <div className="bg-samawah-beige/30 pt-24 min-h-screen">
            {/* Issues Navigation Bar */}
            <div className="bg-white border-b border-samawah-beige sticky top-20 z-40 shadow-sm overflow-x-auto">
                <div className="max-w-7xl mx-auto px-4 flex justify-start md:justify-center gap-2 py-4">
                    {[1, 2, 3, 4].map((num) => (
                        <button
                            key={num}
                            onClick={() => setSelectedIssue(num)}
                            className={`flex flex-col items-center min-w-[100px] px-4 py-2 rounded-xl transition-all ${selectedIssue === num
                                ? 'bg-samawah-navy text-white shadow-md transform scale-105'
                                : 'bg-samawah-beige/50 text-samawah-navy/60 hover:bg-samawah-beige'
                                }`}
                        >
                            <span className="text-xs font-medium opacity-80">العدد</span>
                            <span className="font-serif font-bold text-xl">{num === 1 ? 'الأول' : num === 2 ? 'الثاني' : num === 3 ? 'الثالث' : 'الرابع'}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Product Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-fade-in-up">
                    {/* Left: Cover */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 relative group">
                            {selectedPlan === 'annual' && (
                                <div className="absolute top-4 right-4 bg-samawah-peach text-samawah-navy px-4 py-1 rounded-full font-bold shadow-md z-10 flex items-center gap-2">
                                    <Sparkles size={16} /> شامل الشحن المجاني
                                </div>
                            )}
                            <Image
                                src={currentIssueData.cover}
                                alt="Hudna Magazine Cover"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {selectedIssue > 1 && (
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center text-white">
                                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur mb-2 border border-white/30">قريباً في</span>
                                    <span className="text-3xl font-serif font-bold">{currentIssueData.date}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Details & Pricing */}
                    <div className="flex flex-col justify-start">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="bg-samawah-teal/10 text-samawah-teal px-3 py-1 rounded-full text-xs font-bold">مجلة فصلية</span>
                            <span className="text-gray-400 text-xs flex items-center gap-1"><Calendar size={12} /> إصدار {currentIssueData.date}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-samawah-navy mb-4 leading-tight">
                            {product?.name || `مجلة هُدنة - ${selectedIssue === 1 ? 'العدد الأول' : selectedIssue === 2 ? 'العدد الثاني' : selectedIssue === 3 ? 'العدد الثالث' : 'العدد الرابع'}`}
                        </h1>
                        <p className="text-xl text-samawah-teal font-serif mb-6">&quot;{currentIssueData.title}&quot;</p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            مجلة ثقافية مطبوعة، تأتيك بجودة فاخرة وملمس ورقي يعيد لك متعة القراءة المتأنية.
                        </p>

                        {/* Plan Selector */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-samawah-beige mb-8">
                            <h3 className="font-bold text-samawah-navy mb-4">اختر الباقة المناسبة:</h3>
                            <div className="space-y-3">
                                {/* Annual Plan */}
                                <div
                                    onClick={() => setSelectedPlan('annual')}
                                    className={`relative cursor-pointer border-2 rounded-xl p-4 transition-all flex justify-between items-center ${selectedPlan === 'annual' ? 'border-samawah-teal bg-samawah-teal/5' : 'border-gray-200 hover:border-samawah-teal/30'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        {selectedPlan === 'annual' ? <CheckCircle className="text-samawah-teal" /> : <Circle className="text-gray-300" />}
                                        <div>
                                            <span className="font-bold text-samawah-navy block">الباقة السنوية (تصلك الـ 4 أعداد)</span>
                                            <span className="text-xs text-samawah-teal font-medium">شحن مجاني + توفير</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block font-bold text-xl text-samawah-navy">{plans.annual.price} ر.س</span>
                                    </div>
                                </div>

                                {/* Single Plan */}
                                <div
                                    onClick={() => setSelectedPlan('single')}
                                    className={`relative cursor-pointer border-2 rounded-xl p-4 transition-all flex justify-between items-center ${selectedPlan === 'single' ? 'border-samawah-teal bg-samawah-teal/5' : 'border-gray-200 hover:border-samawah-teal/30'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        {selectedPlan === 'single' ? <CheckCircle className="text-samawah-teal" /> : <Circle className="text-gray-300" />}
                                        <div>
                                            <span className="font-bold text-samawah-navy block">نسخة واحدة (هذا العدد فقط)</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block font-bold text-xl text-samawah-navy">{plans.single.price} ر.س</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart Action */}
                        <div className="flex flex-col gap-4 mt-auto">
                            <button
                                onClick={handleAddToCart}
                                disabled={isAddingToCart}
                                className="w-full bg-samawah-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-samawah-teal transition-all shadow-lg flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                            >
                                <ShoppingBag size={20} />
                                {isAddingToCart ? 'جاري الإضافة...' : selectedPlan === 'annual' ? 'اشترك في الباقة السنوية' : 'إضافة العدد للسلة'}
                            </button>
                            <p className="text-center text-xs text-gray-500">
                                {selectedPlan === 'annual' ? 'سيصلك العدد الأول فوراً، وبقية الأعداد فور صدورها.' : 'تطبق رسوم الشحن عند إتمام الطلب.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Editor Quote Section */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1">
                            <div className="relative w-[300px] h-[530px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden group cursor-pointer transform hover:-rotate-2 transition-all duration-500">
                                <Image
                                    src={currentIssueData.videoPoster}
                                    alt="Video Poster"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                                        <Play fill="white" className="text-white ml-1" size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 order-2 text-right">
                            <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-6 flex items-center gap-2">
                                <Quote size={24} className="text-samawah-teal rotate-180" />
                                افتتاحية العدد
                            </h2>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-samawah-beige mb-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-2 h-full bg-samawah-navy"></div>
                                <p className="text-xl md:text-2xl font-serif text-brand-900 leading-relaxed mb-6 relative z-10">
                                    &quot;{currentIssueData.editorQuote.text}&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-samawah-teal/10 flex items-center justify-center text-samawah-teal font-bold">
                                        م
                                    </div>
                                    <div>
                                        <span className="block font-bold text-samawah-navy">{currentIssueData.editorQuote.author}</span>
                                        <span className="text-xs text-samawah-teal">رئيس التحرير</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pr-4">
                                <h3 className="font-bold text-lg text-samawah-navy mb-4">في هذا العدد تقرأ:</h3>
                                <ul className="space-y-4">
                                    {currentIssueData.highlights.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-lg text-gray-700">
                                            <CheckCircle size={20} className="text-samawah-teal shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Magazine Sections */}
                <section className="mb-24 relative">
                    <div className="text-center mb-16 px-4">
                        <span className="text-samawah-teal font-bold tracking-widest text-xs uppercase mb-2 block">فلسفة المجلة</span>
                        <div className="inline-block relative">
                            <Quote className="text-samawah-teal/10 absolute -top-8 -right-8" size={60} />
                            <h2 className="text-2xl md:text-4xl font-serif font-bold text-samawah-navy leading-relaxed max-w-4xl mx-auto relative z-10">
                                &quot;مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ، مُعَافًى فِي جَسَدِهِ، عِنْدَهُ قُوتُ يَوْمِهِ، فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا&quot;
                            </h2>
                        </div>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            من هذا المنطلق النبوي الشريف، قسمنا أبواب مجلة هدنة لتغطي أركان الحياة الهانئة.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MAGAZINE_SECTIONS.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-samawah-beige hover:border-samawah-teal/30 hover:shadow-lg transition-all group flex flex-col h-full">
                                <div className="h-48 overflow-hidden relative">
                                    <Image src={section.image} alt={section.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-samawah-navy/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-samawah-beige rounded-full flex items-center justify-center text-samawah-teal mb-4 -mt-12 relative z-10 border-4 border-white">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-samawah-navy mb-3">{section.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{section.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Articles Section */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-samawah-beige">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-2">تجد في العدد {selectedIssue}</h2>
                        <p className="text-gray-500">مقتطفات مختارة بأقلام نخبة الكتاب</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {currentIssueData.articles.map((article, idx: number) => (
                            <div key={idx} className="bg-samawah-beige/20 p-8 rounded-2xl border border-samawah-beige hover:border-samawah-teal/20 transition-all group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-samawah-teal/10 flex items-center justify-center text-samawah-teal">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-samawah-navy text-lg">{article.title}</h4>
                                        <span className="text-xs text-samawah-teal font-medium">{article.author}</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <span className="absolute -top-2 -right-2 text-4xl text-samawah-teal/20 font-serif opacity-50">&quot;</span>
                                    <p className="text-gray-600 italic font-serif leading-relaxed relative z-10 px-4">
                                        {article.quote}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MagazineDetails;
