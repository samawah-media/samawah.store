'use client';

import React, { useState } from 'react';
import { Download, Check, FileText, ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// تعريف بيانات التقارير
const reportsData = [
    {
        id: 'media-assets',
        title: 'حافظة الأصول الإعلامية',
        subtitle: 'الإصدار الأحدث والحصري',
        description: 'أول تقرير استراتيجي يطلعك من دوامة "لعبة المشاهدات" ويدخلك "عمق الإدارة". وقف ضخ فلوس في حملات مؤقتة، وابدأ ابني "محفظة أصول إعلامية" تعيش معك سنين.',
        image: 'https://picsum.photos/id/106/800/1000', // Placeholder style
        color: 'from-blue-900 to-brand-900',
        tags: ['استراتيجية', 'إدارة إعلامية'],
        hasLandingPage: true
    },
    {
        id: 'alwajeezi',
        title: 'تقرير الوجيسي 2025',
        subtitle: 'دراسة حالة محتوى المستخدم',
        description: 'تقرير "الوجيسي" - التنمية العفوية المدروسة. دراسة حالة محتوى المستخدم في المملكة العربية السعودية لعام 2025 وكيف يؤثر على السلوك الشرائي والاجتماعي.',
        image: 'https://picsum.photos/id/1/800/1000',
        color: 'from-gray-900 to-black',
        tags: ['ترند', 'سوشيال ميديا'],
        hasLandingPage: false
    },
    {
        id: 'long-shadow',
        title: 'صاحب الظل الطويل',
        subtitle: 'المحتوى الرقمي الهادف 2024',
        description: 'تقرير دراسة حالة المحتوى الرقمي الهادف في المملكة العربية السعودية. كيف يمكن للمحتوى الرصين أن يجد مكانه في عالم الخوارزميات المتسارعة.',
        image: 'https://picsum.photos/id/1015/800/1000',
        color: 'from-yellow-700 to-yellow-900',
        tags: ['صناعة محتوى', '2024'],
        hasLandingPage: false
    },
    {
        id: 'zero-viewer',
        title: 'تقرير المشاهد صفر',
        subtitle: 'عادات المشاهدين الجدد',
        description: 'دراسة لمعرفة عادات المشاهدين السعوديين الجدد للمحتوى التلفزيوني والرقمي خلال شهر رمضان. هل لا زال التلفزيون يجمع العائلة؟',
        image: 'https://picsum.photos/id/1035/800/1000',
        color: 'from-red-900 to-brand-900',
        tags: ['تلفزيون', 'رمضان'],
        hasLandingPage: false
    },
    {
        id: 'priority',
        title: 'ضروري ولا يتأجل',
        subtitle: 'سلسلة علوم وسلوم',
        description: 'تقرير اجتماعي لمعرفة عادات وسلوكيات مجتمعنا في ترتيب الأولويات. كيف نوازن بين الواجبات الاجتماعية والاحتياجات الشخصية؟',
        image: 'https://picsum.photos/id/1048/800/1000',
        color: 'from-green-800 to-emerald-900',
        tags: ['علوم وسلوم', 'مجتمع'],
        hasLandingPage: false
    },
    {
        id: 'captain',
        title: 'مركبك بقبطان ولا تايه؟',
        subtitle: 'سلسلة علوم وسلوم',
        description: 'تقرير اجتماعي يستكشف مدى إدارتنا لحياتنا الشخصية والمهنية. هل نقود دفتنا أم تتقاذفنا الأمواج؟',
        image: 'https://picsum.photos/id/1050/800/1000',
        color: 'from-cyan-800 to-blue-900',
        tags: ['علوم وسلوم', 'إدارة ذات'],
        hasLandingPage: false
    },
    {
        id: 'nature',
        title: 'بين خيارات الطبيعة',
        subtitle: 'سلسلة علوم وسلوم',
        description: 'تقرير اجتماعي لمعرفة علاقتنا مع الطبيعة والبيئة من حولنا في ظل التمدن السريع.',
        image: 'https://picsum.photos/id/1039/800/1000',
        color: 'from-green-700 to-green-900',
        tags: ['علوم وسلوم', 'بيئة'],
        hasLandingPage: false
    },
    {
        id: 'podcast-listeners',
        title: 'دراسة عن مستمعي البودكاست',
        subtitle: 'اكتشف أجواء المستمعين',
        description: 'جمهور البودكاست يتضاعف ويتسع. من حين وجوده وحتى اللحظة، لأنه يمكن الاستماع له في كل الأوقات. دراسة تكشف لك من هم وماذا يريدون.',
        image: 'https://picsum.photos/id/1062/800/1000',
        color: 'from-purple-900 to-indigo-900',
        tags: ['بودكاست', 'إحصائيات'],
        hasLandingPage: false
    },
    {
        id: 'saver',
        title: 'موفر ولا مظفر',
        subtitle: 'سلسلة علوم وسلوم',
        description: 'تقرير اجتماعي لمعرفة عادات وسلوكيات مجتمعنا المالية. بين الادخار والاستهلاك المظهري.',
        image: 'https://picsum.photos/id/1078/800/1000',
        color: 'from-teal-800 to-teal-950',
        tags: ['علوم وسلوم', 'مالية'],
        hasLandingPage: false
    },
    {
        id: 'eating',
        title: 'كل ما يعجبك',
        subtitle: 'سلسلة علوم وسلوم',
        description: 'لمعرفة عادات وسلوكيات أفراد مجتمعنا في الأكل، وتغير ثقافة المائدة السعودية.',
        image: 'https://picsum.photos/id/1080/800/1000',
        color: 'from-orange-800 to-red-900',
        tags: ['علوم وسلوم', 'لايف ستايل'],
        hasLandingPage: false
    },
    {
        id: 'podcast-creators',
        title: 'دراسة صناع البودكاست',
        subtitle: 'خلف الكواليس',
        description: 'إرادات صناعة البودكاست في المملكة خلال السنوات الأخيرة. دراسة لاكتشاف أسباب الانتشار، ومعرفة سلوكيات وتوجهات وتحديات الصناع.',
        image: 'https://picsum.photos/id/1082/800/1000',
        color: 'from-indigo-900 to-blue-950',
        tags: ['بودكاست', 'صناع محتوى'],
        hasLandingPage: false
    },
    {
        id: 'clean-house',
        title: 'اكنس بيتك',
        subtitle: 'سلسلة علوم وسلوم',
        description: 'تقرير اجتماعي بعنوان "اكنس بيتك" يرصد تحولات الخصوصية والعلاقات الأسرية.',
        image: 'https://picsum.photos/id/1084/800/1000',
        color: 'from-brand-800 to-brand-950',
        tags: ['علوم وسلوم', 'مجتمع'],
        hasLandingPage: false
    }
];

const ReportsLanding: React.FC = () => {
    const [activeReport, setActiveReport] = useState(reportsData[0]);

    const handleReportSelect = (report: typeof reportsData[0]) => {
        setActiveReport(report);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-sand-50 min-h-screen">

            {/* Hero Section (Active Report) */}
            <section className={`relative pt-32 pb-20 overflow-hidden transition-colors duration-700 bg-gradient-to-br ${activeReport.color}`}>
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Text & Form */}
                        <div className="text-white order-2 lg:order-1 animate-fade-in-up">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-white/10">
                                    {activeReport.tags[0]}
                                </span>
                                <span className="text-white/60 text-sm">{activeReport.subtitle}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                                {activeReport.title}
                            </h1>

                            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
                                {activeReport.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                                {activeReport.hasLandingPage && (
                                    <Link href="/reports/media-assets" className="flex-1 bg-white text-brand-900 py-3 rounded-lg font-bold transition-all hover:bg-gray-100 flex items-center justify-center gap-2 shadow-lg">
                                        <ExternalLink size={18} />
                                        عرض صفحة التقرير الكاملة
                                    </Link>
                                )}
                            </div>

                            {/* Quick Download Form */}
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl max-w-md mt-6 border border-white/20">
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm">
                                    <Download size={16} className="text-white/80" />
                                    تحميل سريع (نسخة مختصرة)
                                </h3>
                                <form className="space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 text-sm transition-all" placeholder="الاسم" />
                                        <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 text-sm transition-all" placeholder="البريد" />
                                    </div>
                                    <button type="button" className={`w-full py-2.5 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500`}>
                                        <Check size={16} />
                                        تحميل فوري
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Active Image Mockup */}
                        <div className="order-1 lg:order-2 flex justify-center perspective-1000">
                            {activeReport.hasLandingPage ? (
                                <Link href="/reports/media-assets" className="relative w-full max-w-sm aspect-[3/4] rounded-lg shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 cursor-pointer group">
                                    <img
                                        src={activeReport.image}
                                        alt={activeReport.title}
                                        className="w-full h-full object-cover rounded-lg border-4 border-white/20"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-lg group-hover:from-black/20 transition-all"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-2 rounded-full font-bold">اضغط للتفاصيل</span>
                                    </div>
                                </Link>
                            ) : (
                                <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 cursor-pointer group">
                                    <img
                                        src={activeReport.image}
                                        alt={activeReport.title}
                                        className="w-full h-full object-cover rounded-lg border-4 border-white/20"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-lg"></div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
                    <ChevronDown size={32} />
                </div>
            </section>

            {/* Reports Grid Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b border-brand-200 pb-6">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-brand-900 mb-2">المكتبة الرقمية</h2>
                        <p className="text-brand-600">تصفح كافة الدراسات والتقارير المتاحة للتحميل</p>
                    </div>
                    <div className="text-sm text-gray-500">
                        يتم عرض {reportsData.length} تقرير
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reportsData.map((report) => (
                        <div
                            key={report.id}
                            onClick={() => handleReportSelect(report)}
                            className={`group bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${activeReport.id === report.id ? 'ring-2 ring-brand-500 border-transparent shadow-lg' : 'border-gray-200'}`}
                        >
                            {/* Card Image */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <img
                                    src={report.image}
                                    alt={report.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t ${report.color} flex items-center justify-center`}>
                                    <span className="text-white font-bold border border-white px-4 py-2 rounded-full backdrop-blur-sm">عرض التقرير</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 px-2 py-1 rounded-md">
                                        {report.tags[0]}
                                    </span>
                                    {activeReport.id === report.id && (
                                        <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
                                    )}
                                </div>
                                <h3 className={`font-bold text-lg mb-2 leading-tight group-hover:text-brand-700 transition-colors ${activeReport.id === report.id ? 'text-brand-800' : 'text-gray-900'}`}>
                                    {report.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2 mt-auto">
                                    {report.description}
                                </p>
                            </div>

                            <div className="px-5 pb-5 pt-0">
                                <button className="w-full text-xs font-bold text-brand-600 flex items-center justify-between group-hover:underline">
                                    تفاصيل أكثر <ArrowUpRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default ReportsLanding;
