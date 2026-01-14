'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Star, Check, BookOpen, Sparkles, CheckCircle, Circle, Play, User, ChevronLeft, Calendar, Quote, Heart, Sun, Globe, Home } from 'lucide-react';
import Link from 'next/link';
import { IssueData, IssueArticle } from '@/data/magazine';
import { useCartStore } from '@/store/cartStore';

const MagazineProduct: React.FC = () => {
    // الحالة الافتراضية: الباقة السنوية
    const [selectedPlan, setSelectedPlan] = useState<'single' | 'annual'>('annual');
    const [selectedIssue, setSelectedIssue] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    // بيانات الأعداد (4 أعداد) - المحتوى المتغير
    const issuesData: Record<number, IssueData> = {
        1: {
            title: "العدد الأول: العزلة والانتماء",
            cover: "https://picsum.photos/id/24/800/1000",
            videoPoster: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
            date: "يناير 2025",
            editorQuote: {
                text: "الراقص الحقيقي لا ينتظر التصفيق، هو يرقص لأن الموسيقى في داخله لا تتوقف. في هذا العدد نبحث عن ذلك الإيقاع الداخلي وسط ضجيج التوقعات.",
                author: "أ. محمد أحمد بارحمة"
            },
            highlights: [
                "رحلة في عمق النفس البشرية: بين الرغبة في الانعزال والحاجة للانتماء.",
                "تحليل ظاهرة 'الهجرة للرياض' من منظور اجتماعي ونفسي.",
                "كيف تحولت 'المكانة' إلى سلعة نشتريها بدلاً من قيمة نكتسبها؟"
            ],
            articles: [
                { title: "الراقصون في العتمة", author: "د. محمد أحمد بارحمة", quote: "كيف تجد الرضا في العمل لا في تقدير الآخرين للعمل؟" },
                { title: "موسم الهجرة للرياض", author: "عبدالله المغلوث", quote: "المدن مثل البشر، لها جاذبية وقسوة. والرياض اليوم ورشة عمل مفتوحة." },
                { title: "هبة الامتيازات", author: "سارة العلي", quote: "المشقة ليست في الطريق، بل في وهم الوصول." },
                { title: "السربون", author: "ياسر حارب", quote: "في أروقة الجامعات العتيقة، نعيد تشكيل الانتماءات الأصيلة." },
            ]
        },
        2: {
            title: "العدد الثاني: فخ السرعة",
            cover: "https://picsum.photos/id/1016/800/1000",
            videoPoster: "https://images.unsplash.com/photo-1496167117681-944f702be1f4?q=80&w=1000&auto=format&fit=crop",
            date: "أبريل 2025",
            editorQuote: {
                text: "نركض لنسبق الزمن، لكننا ننسى أن الزمن لا يسابق أحدًا. هذا العدد محاولة لشد المكابح.",
                author: "أ. محمد أحمد بارحمة"
            },
            highlights: [
                "لماذا نشعر دائماً أننا متأخرون؟",
                "ثقافة 'الترند' وكيف تسرق منا لحظة الاستمتاع بالحاضر.",
                "قصص لأشخاص اختاروا المسار البطيء ونجحوا."
            ],
            articles: [
                { title: "سباق السلاحف", author: "أحمد الشقيري", quote: "الفوز أحياناً يكون في القدرة على التوقف والمشي ببطء متعمد." },
                { title: "الترند القاتل", author: "خالد الباتلي", quote: "حين يصبح الرأي العام موجة تركبها لتبقى موجوداً، تفقد صوتك الحقيقي." },
                { title: "قهوة باردة", author: "هيفاء السيد", quote: "عن تلك اللحظات التي نؤجل فيها الحياة." },
            ]
        },
        3: {
            title: "العدد الثالث: العودة للجذور",
            cover: "https://picsum.photos/id/1050/800/1000",
            videoPoster: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1000&auto=format&fit=crop",
            date: "يوليو 2025",
            editorQuote: {
                text: "لا شجر ينمو بلا جذور، ولا إنسان يكبر بلا ذاكرة. نعود للوراء قليلاً لنقفز للأمام بقوة.",
                author: "أ. محمد أحمد بارحمة"
            },
            highlights: [
                "نوستالجيا البيوت الطينية: حنين عابر أم هوية مفقودة؟",
                "نصوص لم تنشر من قبل للأديب غازي القصيبي.",
                "كيف نعيد تعريف الأصالة في عصر العولمة؟"
            ],
            articles: [
                { title: "رائحة الطين", author: "د. غازي القصيبي (أرشيف)", quote: "استعادة لنصوص لم تنشر عن علاقة الإنسان بالأرض." },
                { title: "بيوت الطين", author: "مشعل السديري", quote: "لماذا نشعر بالحنين لمباني لم نسكنها؟" },
            ]
        },
        4: {
            title: "العدد الرابع: الإنسان والآلة",
            cover: "https://picsum.photos/id/1070/800/1000",
            videoPoster: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
            date: "أكتوبر 2025",
            editorQuote: {
                text: "نحن لا نخاف أن تصبح الآلة ذكية، نخاف أن يصبح الإنسان آلة. هذا العدد هو صرخة إنسانية.",
                author: "أ. محمد أحمد بارحمة"
            },
            highlights: [
                "هل سيسرق الذكاء الاصطناعي أرواحنا قبل وظائفنا؟",
                "الفن البشري في مواجهة الفن الخوارزمي.",
                "مستقبل العلاقات الإنسانية في عالم رقمي."
            ],
            articles: [
                { title: "هل يحلم الذكاء الاصطناعي؟", author: "د. لمياء العبدالكريم", quote: "نخاف أن يصبح الإنسان آلة." },
                { title: "نهاية الوظيفة", author: "مازن الضراب", quote: "العمل ليس مجرد راتب، هو جزء من تعريف الذات." },
            ]
        }
    };

    const currentIssueData = issuesData[selectedIssue];

    // تعريف أبواب المجلة
    const magazineSections = [
        {
            title: "باب السرب",
            icon: <Home size={24} />,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
            desc: "عن السكينة النفسية، الانتماء، العائلة، والملاذ الآمن الذي نأوي إليه."
        },
        {
            title: "باب العافية",
            icon: <Heart size={24} />,
            image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
            desc: "صحة الجسد والروح، التشافي، والتوازن الذي يجعل للحياة طعماً."
        },
        {
            title: "باب القوت",
            icon: <Sun size={24} />,
            image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop",
            desc: "اقتصاديات الحياة، العمل، المال، وكل ما يقيم صلب أيامنا ومستقبلنا."
        },
        {
            title: "باب الحيازة",
            icon: <Globe size={24} />,
            image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
            desc: "جماليات الدنيا، الفنون، المعرفة، وكل ما يثري ذائقة الإنسان ويوسع مداركه."
        }
    ];

    // تعريف بيانات الباقات
    const plans = {
        single: {
            id: 'single',
            title: 'نسخة واحدة',
            price: 45,
            originalPrice: 45,
            features: ['العدد المختار فقط', 'بدون شحن مجاني'],
            label: ''
        },
        annual: {
            id: 'annual',
            title: 'الباقة السنوية (4 أعداد)',
            price: 205,
            originalPrice: 222,
            features: ['شحن مجاني', 'خصم خاص', 'ضمان ثبات السعر'],
            label: 'خيار القراء المفضل'
        }
    };

    const currentPlan = plans[selectedPlan];

    const handleAddToCart = () => {
        const magazineProduct = {
            id: selectedPlan === 'annual' ? '548271829-annual' : '548271829-single',
            name: selectedPlan === 'annual'
                ? 'مجلة هُدنة - الباقة السنوية (4 أعداد)'
                : `مجلة هُدنة - ${currentIssueData.title}`,
            description: 'مجلة ثقافية فكرية تهتم بالشأن العربي',
            price: { amount: selectedPlan === 'annual' ? 205 : 45, currency: 'SAR' },
            main_image: '/images/hodna-product.JPG',
            images: [],
            url: '#'
        };
        addItem(magazineProduct, 1);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
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

                    {/* Left: Gallery (Cover) */}
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

                            {/* Badge for future issues */}
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
                            مجلة هُدنة - {selectedIssue === 1 ? 'العدد الأول' : selectedIssue === 2 ? 'العدد الثاني' : selectedIssue === 3 ? 'العدد الثالث' : 'العدد الرابع'}
                        </h1>
                        <p className="text-xl text-samawah-teal font-serif mb-6">"{currentIssueData.title}"</p>

                        {/* Sneak Peek Quote (General) */}
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            مجلة ثقافية مطبوعة، تأتيك بجودة فاخرة وملمس ورقي يعيد لك متعة القراءة المتأنية. في هذا العدد، نحاول أن نبطئ الزمن قليلاً لنفهم الحياة بعمق أكبر.
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
                                            <span className="text-xs text-samawah-teal font-medium">شحن مجاني + توفير 17 ريال</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block font-bold text-xl text-samawah-navy">205 ر.س</span>
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
                                        <span className="block font-bold text-xl text-samawah-navy">45 ر.س</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Add to Cart Action */}
                        <div className="flex flex-col gap-4 mt-auto">
                            <button
                                onClick={handleAddToCart}
                                className={`w-full px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-[0.98] ${isAdded
                                        ? 'bg-green-500 text-white'
                                        : 'bg-samawah-navy text-white hover:bg-samawah-teal'
                                    }`}
                            >
                                <ShoppingBag size={20} />
                                {isAdded
                                    ? 'تمت الإضافة للسلة!'
                                    : selectedPlan === 'annual'
                                        ? 'اشترك في الباقة السنوية'
                                        : 'إضافة العدد للسلة'
                                }
                            </button>
                            <p className="text-center text-xs text-gray-500">
                                {selectedPlan === 'annual' ? 'سيصلك العدد الأول فوراً، وبقية الأعداد فور صدورها.' : 'تطبق رسوم الشحن عند إتمام الطلب للطلبات الفردية.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* 1. Reels & Opening Section (Split View) */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Right Column (Video Reel) */}
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
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-right">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold">هـ</div>
                                        <span className="font-bold text-sm">مجلة هدنة</span>
                                    </div>
                                    <p className="text-sm line-clamp-2">جولة سريعة بين صفحات العدد.. الورق له ريحة ثانية! 📖✨</p>
                                </div>
                            </div>
                        </div>

                        {/* Left Column (Text & Hooks) */}
                        <div className="lg:col-span-7 order-2 text-right">
                            <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-6 flex items-center gap-2">
                                <Quote size={24} className="text-samawah-teal rotate-180" />
                                افتتاحية العدد
                            </h2>

                            {/* Editor's Quote Block */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-samawah-beige mb-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-2 h-full bg-samawah-navy"></div>
                                <p className="text-xl md:text-2xl font-serif text-samawah-navy leading-relaxed mb-6 relative z-10">
                                    "{currentIssueData.editorQuote.text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-samawah-teal/10 flex items-center justify-center text-samawah-navy font-bold">
                                        م
                                    </div>
                                    <div>
                                        <span className="block font-bold text-samawah-navy">{currentIssueData.editorQuote.author}</span>
                                        <span className="text-xs text-samawah-teal">رئيس التحرير</span>
                                    </div>
                                </div>
                                <Sparkles className="absolute bottom-4 left-4 text-samawah-beige opacity-50" size={64} />
                            </div>

                            {/* Highlights List */}
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

                {/* 2. Magazine Sections (Abwab) - New Section */}
                <section className="mb-24 relative">
                    {/* Prophetic Hadith Intro */}
                    <div className="text-center mb-16 px-4">
                        <span className="text-samawah-teal font-bold tracking-widest text-xs uppercase mb-2 block">فلسفة المجلة</span>
                        <div className="inline-block relative">
                            <Quote className="text-samawah-teal/10 absolute -top-8 -right-8" size={60} />
                            <h2 className="text-2xl md:text-4xl font-serif font-bold text-samawah-navy leading-relaxed max-w-4xl mx-auto relative z-10">
                                "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ، مُعَافًى فِي جَسَدِهِ، عِنْدَهُ قُوتُ يَوْمِهِ، فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا"
                            </h2>
                        </div>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            من هذا المنطلق النبوي الشريف، قسمنا أبواب مجلة هدنة لتغطي أركان الحياة الهانئة.
                        </p>
                    </div>

                    {/* Abwab Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {magazineSections.map((section, idx) => (
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

                {/* 3. Inside the Issue Section (Dynamic) */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-samawah-beige">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-2">تجد في العدد {selectedIssue}</h2>
                        <p className="text-gray-500">مقتطفات مختارة بأقلام نخبة الكتاب</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {currentIssueData.articles.map((article: IssueArticle, idx: number) => (
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
                                    <span className="absolute -top-2 -right-2 text-4xl text-samawah-teal/20 font-serif opacity-50">"</span>
                                    <p className="text-gray-600 italic font-serif leading-relaxed relative z-10 px-4">
                                        {article.quote}
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <span className="text-xs font-bold text-samawah-teal/60 group-hover:text-samawah-teal flex items-center gap-1 transition-colors cursor-pointer">
                                        قراءة المزيد <ChevronLeft size={14} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-gray-400">والكثير من الزوايا الثقافية، الفنية، والاجتماعية في {selectedPlan === 'annual' ? 'انتظارك طوال العام' : 'انتظارك داخل العدد'}.</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default MagazineProduct;
