'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Monitor, Users, CheckCircle, Info, FileText, ShoppingBag } from 'lucide-react';
import GuestsMarquee from '@/components/features/event/GuestsMarquee';
import { UPCOMING_EVENT } from '@/data/products-map';

const EventProduct: React.FC = () => {
    const [ticketType, setTicketType] = useState<'in-person' | 'online'>('in-person');
    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = () => {
        setIsLoading(true);
        // Redirect logic to Salla
        const targetUrl = ticketType === 'in-person'
            ? UPCOMING_EVENT.ticket_attend
            : UPCOMING_EVENT.ticket_online;

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500);
    };

    return (
        <div className="bg-white pt-24 min-h-screen">

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-samawah-beige md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 bg-samawah-navy text-white hover:bg-samawah-teal disabled:opacity-50"
                >
                    <ShoppingBag size={20} />
                    {isLoading ? 'جاري التحويل...' : `حجز مقعد (${ticketType === 'in-person' ? '150' : '50'} ر.س)`}
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl overflow-hidden mb-8 relative group">
                            <img
                                src={UPCOMING_EVENT.image}
                                alt={UPCOMING_EVENT.title}
                                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-samawah-navy font-bold shadow-lg">
                                لقاء جُلاس القادم
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-samawah-navy mb-6 leading-tight">
                            {UPCOMING_EVENT.title}
                        </h1>

                        <div className="flex flex-wrap gap-4 text-gray-600 mb-8 border-b border-samawah-beige pb-8">
                            <div className="flex items-center gap-2 bg-samawah-beige/50 px-3 py-1 rounded-full">
                                <Calendar size={18} className="text-samawah-teal" />
                                <span>{UPCOMING_EVENT.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-samawah-beige/50 px-3 py-1 rounded-full">
                                <Clock size={18} className="text-samawah-teal" />
                                <span>{UPCOMING_EVENT.time}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-samawah-beige/50 px-3 py-1 rounded-full hover:bg-samawah-beige transition-colors cursor-pointer">
                                <MapPin size={18} className="text-samawah-teal" />
                                <span className="underline decoration-dotted">{UPCOMING_EVENT.location}</span>
                            </div>
                        </div>

                        {/* About Event */}
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-samawah-navy mb-4 flex items-center gap-2">
                                <Info size={20} className="text-samawah-teal" />
                                عن الفعالية
                            </h3>
                            <div className="prose prose-lg text-samawah-grey/80 max-w-none leading-relaxed">
                                <p className="mb-4 font-medium text-samawah-navy text-xl">
                                    "مساحة ثقافية للحوار الفكري المتزن"
                                </p>
                                <p className="mb-4">
                                    يتم تحديث تفاصيل ومحاور كل لقاء في مجلس جُلاس باستمرار، لتعبر عن القضايا الثقافية والفكرية الراهنة التي تهم المجتمع المعرفي.
                                </p>
                            </div>
                        </div>

                        {/* Agenda */}
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-samawah-navy mb-6 border-r-4 border-samawah-teal pr-4">أجندة اللقاء</h3>
                            <div className="space-y-6 relative border-r-2 border-samawah-beige mr-2 pr-8">
                                <div className="relative">
                                    <span className="absolute -right-[39px] top-1 w-4 h-4 rounded-full bg-samawah-teal ring-4 ring-white"></span>
                                    <span className="font-bold text-samawah-navy ml-4">7:45 م</span>
                                    <span className="text-gray-600">الاستقبال والضيافة</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute -right-[39px] top-1 w-4 h-4 rounded-full bg-samawah-mint ring-4 ring-white"></span>
                                    <span className="font-bold text-samawah-navy ml-4">8:05 م</span>
                                    <span className="text-gray-600">بدء الجلسة الحوارية</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute -right-[39px] top-1 w-4 h-4 rounded-full bg-samawah-mint ring-4 ring-white"></span>
                                    <span className="font-bold text-samawah-navy ml-4">9:30 م</span>
                                    <span className="text-gray-600">نقاشات مفتوحة</span>
                                </div>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="bg-samawah-beige/20 p-6 rounded-xl border border-samawah-beige">
                            <h3 className="font-bold text-samawah-navy mb-4 flex items-center gap-2 text-base">
                                <FileText size={18} />
                                تنبيهات الحجز
                            </h3>
                            <ul className="space-y-2 text-sm text-samawah-grey/70 list-disc list-inside">
                                <li>التذكرة غير قابلة للاسترجاع.</li>
                                <li>يمنع التصوير داخل المجلس للحفاظ على خصوصية الحوار.</li>
                                <li>يصل رابط البث المباشر (للمشتركين أونلاين) قبل اللقاء بساعتين.</li>
                            </ul>
                        </div>

                    </div>

                    {/* Sticky Sidebar for Desktop */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-3xl shadow-xl border border-samawah-beige p-6">
                            <h3 className="font-bold text-lg text-samawah-navy mb-4">احجز مكانك في المجلس</h3>

                            {/* Ticket Toggle */}
                            <div className="space-y-3 mb-6">
                                <label className={`block cursor-pointer border-2 rounded-xl p-4 transition-all ${ticketType === 'in-person' ? 'border-samawah-teal bg-samawah-teal/5' : 'border-gray-200 hover:border-samawah-teal/20'}`} onClick={() => setTicketType('in-person')}>
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2 font-bold text-samawah-navy">
                                            <Users size={18} /> حضور شخصي
                                        </div>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${ticketType === 'in-person' ? 'border-samawah-teal' : 'border-gray-300'}`}>
                                            {ticketType === 'in-person' && <div className="w-2.5 h-2.5 rounded-full bg-samawah-teal"></div>}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">مقاعد محدودة جداً</p>
                                    <div className="text-xl font-bold text-samawah-navy">150 ر.س</div>
                                </label>

                                <label className={`block cursor-pointer border-2 rounded-xl p-4 transition-all ${ticketType === 'online' ? 'border-samawah-teal bg-samawah-teal/5' : 'border-gray-200 hover:border-samawah-teal/20'}`} onClick={() => setTicketType('online')}>
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2 font-bold text-samawah-navy">
                                            <Monitor size={18} /> بث مباشر
                                        </div>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${ticketType === 'online' ? 'border-samawah-teal' : 'border-gray-300'}`}>
                                            {ticketType === 'online' && <div className="w-2.5 h-2.5 rounded-full bg-samawah-teal"></div>}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">عبر Zoom • تفاعلي</p>
                                    <div className="text-xl font-bold text-samawah-navy">50 ر.س</div>
                                </label>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                disabled={isLoading}
                                className="w-full py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 bg-samawah-navy text-white hover:bg-samawah-teal transition-all disabled:opacity-50"
                            >
                                <ShoppingBag size={20} />
                                {isLoading ? 'جاري التحويل...' : 'احجز مقعدك الآن'}
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                يتم إرسال الموقع والتفاصيل عبر البريد بعد الدفع
                            </p>
                        </div>
                    </div>

                </div>

                {/* Guests Marquee Section */}
                <GuestsMarquee />
            </div>
        </div>
    );
};

export default EventProduct;
