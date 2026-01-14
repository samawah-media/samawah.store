'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Monitor, Users, CheckCircle, Info, FileText, User, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const EventProduct: React.FC = () => {
    const [ticketType, setTicketType] = useState<'in-person' | 'online'>('in-person');
    const [isAdded, setIsAdded] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        const ticketProduct = {
            id: ticketType === 'in-person' ? '1367448884-inperson' : '1367448884-online',
            name: ticketType === 'in-person' ? 'تذكرة جُلاس - حضور شخصي' : 'تذكرة جُلاس - بث مباشر',
            description: ticketType === 'in-person' ? 'حضور شخصي في مقر المجلس بجدة' : 'بث مباشر عبر Zoom',
            price: { amount: ticketType === 'in-person' ? 150 : 50, currency: 'SAR' },
            main_image: 'https://picsum.photos/id/1073/400/500',
            images: [],
            url: '#'
        };
        addItem(ticketProduct, 1);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="bg-white pt-24 min-h-screen">

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-samawah-beige md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <button
                    onClick={handleAddToCart}
                    className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isAdded
                            ? 'bg-green-500 text-white'
                            : 'bg-samawah-navy text-white hover:bg-samawah-teal'
                        }`}
                >
                    <ShoppingBag size={20} />
                    {isAdded ? 'تمت الإضافة!' : `حجز مقعد (${ticketType === 'in-person' ? '150' : '50'} ر.س)`}
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl overflow-hidden mb-8 relative">
                            <img src="https://picsum.photos/id/1073/800/450" alt="Jlas Event" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-brand-900 font-bold shadow-lg">
                                لقاء جُلاس #25
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6 leading-tight">
                            المجلات: المناجم المدفونة
                        </h1>

                        <div className="flex flex-wrap gap-4 text-gray-600 mb-8 border-b border-gray-100 pb-8">
                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                                <Calendar size={18} className="text-brand-500" />
                                <span>الأربعاء، 17 ديسمبر 2025</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                                <Clock size={18} className="text-brand-500" />
                                <span>8:00 م - 10:00 م</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full hover:bg-brand-50 cursor-pointer transition-colors">
                                <MapPin size={18} className="text-brand-500" />
                                <span className="underline decoration-dotted">جدة (يصل الموقع للمشتركين)</span>
                            </div>
                        </div>

                        {/* About Event */}
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-2">
                                <Info size={20} className="text-brand-500" />
                                عن الفعالية
                            </h3>
                            <div className="prose prose-lg text-gray-600 max-w-none leading-relaxed">
                                <p className="mb-4 font-medium text-brand-800">
                                    "المجلات هي ابن الأدب البار، لكن هل هي الابن المُفضَّل؟"
                                </p>
                                <p className="mb-4">
                                    لماذا وصفناها بـ "المناجم المدفونة"؟ لأن المجلات الأدبية القديمة ليست مجرد أوراق صفراء؛ بل هي السجل الحي لنبض الثقافة في لحظتها الراهنة. هي المسودة الأولى للتاريخ، وساحة المعارك الفكرية التي صاغت وعينا اليوم.
                                </p>
                                <p>
                                    في هذا اللقاء، سننفض الغبار عن رفوف الذاكرة. سنغوص في أعماق هذه "المناجم" لنستخرج منها نفائس النصوص، ومعارك الأدباء، وقصصاً لم تتسع لها الكتب الرسمية. دعوة لاكتشاف "الأرشيف" لا كماضٍ مضى، بل كمنجم ذهب نسيناه.
                                </p>
                            </div>
                        </div>

                        {/* About Speaker */}
                        <div className="bg-sand-50 rounded-2xl p-6 border border-brand-100 mb-10">
                            <h3 className="text-xl font-bold text-brand-900 mb-6 flex items-center gap-2">
                                <User size={20} className="text-brand-500" />
                                ضيف اللقاء
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    {/* Placeholder for Speaker Image */}
                                    <img src="https://ui-avatars.com/api/?name=Abdulrahman+Qaed&background=2d383f&color=fff&size=256" alt="د. عبدالرحمن قائد" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-brand-900 mb-1">د. عبدالرحمن قائد</h4>
                                    <span className="text-brand-500 text-sm block mb-3">باحث ومحقق في التراث العربي</span>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        عُرف بشغفه العميق بالمخطوطات والنوادر الأدبية. يمتلك د. عبدالرحمن خبرة واسعة في "التنقيب" المعرفي، مما يجعله الدليل الأمثل لهذه الرحلة في ذاكرة المجلات الأدبية وتاريخها الثري.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Agenda */}
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-brand-900 mb-6 border-r-4 border-brand-500 pr-4">أجندة اللقاء</h3>
                            <div className="space-y-6 relative border-r-2 border-gray-100 mr-2 pr-8">
                                <div className="relative">
                                    <span className="absolute -right-[39px] top-1 w-4 h-4 rounded-full bg-brand-500 ring-4 ring-white"></span>
                                    <span className="font-bold text-brand-900 ml-4">7:45 م</span>
                                    <span className="text-gray-600">الاستقبال</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute -right-[39px] top-1 w-4 h-4 rounded-full bg-brand-300 ring-4 ring-white"></span>
                                    <span className="font-bold text-brand-900 ml-4">8:00 م</span>
                                    <span className="text-gray-600">بداية الحوار: في حضرة المجلات القديمة</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute -right-[39px] top-1 w-4 h-4 rounded-full bg-brand-300 ring-4 ring-white"></span>
                                    <span className="font-bold text-brand-900 ml-4">9:15 م</span>
                                    <span className="text-gray-600">مداخلات الجمهور والنقاش المفتوح</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute -right-[39px] top-1 w-4 h-4 rounded-full bg-brand-300 ring-4 ring-white"></span>
                                    <span className="font-bold text-brand-900 ml-4">10:00 م</span>
                                    <span className="text-gray-600">ختام اللقاء</span>
                                </div>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-brand-900 mb-4 flex items-center gap-2 text-base">
                                <FileText size={18} />
                                شروط وأحكام التذكرة
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                                <li>التذكرة مخصصة لفرد واحد فقط.</li>
                                <li>المبلغ المدفوع غير قابل للاسترداد أو الإلغاء.</li>
                                <li>يرجى إبراز الباركود الخاص بالتذكرة عند بوابة الدخول.</li>
                                <li>المقاعد محدودة، والأولوية للحجز المبكر.</li>
                                <li>يرجى الحضور قبل الموعد بـ 15 دقيقة لضمان انسيابية الدخول.</li>
                            </ul>
                        </div>

                    </div>

                    {/* Sticky Sidebar for Desktop */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-4">اختر نوع التذكرة</h3>

                            {/* Ticket Toggle */}
                            <div className="space-y-3 mb-6">
                                <label className={`block cursor-pointer border-2 rounded-xl p-4 transition-all ${ticketType === 'in-person' ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-brand-200'}`} onClick={() => setTicketType('in-person')}>
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2 font-bold text-brand-900">
                                            <Users size={18} /> حضور شخصي
                                        </div>
                                        <div className="w-5 h-5 rounded-full border-2 border-brand-600 flex items-center justify-center">
                                            {ticketType === 'in-person' && <div className="w-2.5 h-2.5 rounded-full bg-brand-600"></div>}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">في مقر المجلس بجدة • مقاعد محدودة</p>
                                    <div className="text-xl font-bold text-brand-700">150 ر.س</div>
                                </label>

                                <label className={`block cursor-pointer border-2 rounded-xl p-4 transition-all ${ticketType === 'online' ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-brand-200'}`} onClick={() => setTicketType('online')}>
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2 font-bold text-brand-900">
                                            <Monitor size={18} /> بث مباشر
                                        </div>
                                        <div className="w-5 h-5 rounded-full border-2 border-brand-600 flex items-center justify-center">
                                            {ticketType === 'online' && <div className="w-2.5 h-2.5 rounded-full bg-brand-600"></div>}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">رابط Zoom تفاعلي • من أي مكان</p>
                                    <div className="text-xl font-bold text-brand-700">50 ر.س</div>
                                </label>
                            </div>

                            {/* Benefits based on selection */}
                            <div className="bg-gray-50 rounded-xl p-4 mb-6">
                                <h4 className="font-bold text-sm text-gray-700 mb-3">مميزات التذكرة:</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {ticketType === 'in-person' ? (
                                        <>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-600 shrink-0" /> لقاء وتفاعل مباشر مع الضيف</li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-600 shrink-0" /> مخالطة مجتمع جُلاس النوعي</li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-600 shrink-0" /> ضيافة المجلس</li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-600 shrink-0" /> بث مباشر عالي الجودة</li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-600 shrink-0" /> إمكانية إرسال المداخلات والأسئلة</li>
                                            <li className="flex gap-2"><CheckCircle size={16} className="text-green-600 shrink-0" /> تسجيل اللقاء متاح لمدة أسبوع</li>
                                        </>
                                    )}
                                </ul>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className={`w-full py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 transition-all ${isAdded
                                        ? 'bg-green-500 text-white'
                                        : 'bg-samawah-navy text-white hover:bg-samawah-teal'
                                    }`}
                            >
                                <ShoppingBag size={20} />
                                {isAdded ? 'تمت الإضافة للسلة!' : 'احجز مقعدك الآن'}
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                المناجم مليئة بالذهب، ونحن بانتظار من يشاركنا الاكتشاف.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventProduct;
