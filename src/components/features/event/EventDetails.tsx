'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Monitor, Users, CheckCircle, Info, FileText, User, ShoppingBag } from 'lucide-react';
import { Product, SallaProduct } from '@/types/salla';
import { EVENT_DATA } from '@/data/events';
import { useCartStore } from '@/store/cartStore';

interface EventDetailsProps {
    product: Product | null;
}

const EventDetails: React.FC<EventDetailsProps> = ({ product }) => {
    const [ticketType, setTicketType] = useState<'in-person' | 'online'>('in-person');
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    // Cart store
    const addItem = useCartStore((state) => state.addItem);

    const inPersonPrice = product?.price?.amount || 150;
    const onlinePrice = Math.round(inPersonPrice * 0.33);

    const handleAddToCart = () => {
        if (!product) return;
        setIsAddingToCart(true);

        const cartProduct: SallaProduct = {
            id: product.id,
            name: ticketType === 'in-person'
                ? `${product.name} - حضور شخصي`
                : `${product.name} - بث مباشر`,
            description: product.description,
            price: {
                amount: ticketType === 'in-person' ? inPersonPrice : onlinePrice,
                currency: product.price.currency
            },
            main_image: product.main_image,
            images: product.images,
            url: product.url,
        };

        addItem(cartProduct, 1);

        setTimeout(() => {
            setIsAddingToCart(false);
        }, 500);
    };

    return (
        <div className="bg-white pt-24 min-h-screen">
            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <button
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                    className="w-full bg-brand-900 text-white py-3 rounded-xl font-bold disabled:opacity-50"
                >
                    {isAddingToCart ? 'جاري الحجز...' : `حجز مقعد (${ticketType === 'in-person' ? inPersonPrice : onlinePrice} ر.س)`}
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl overflow-hidden mb-8 relative">
                            <img
                                src={product?.main_image || "https://picsum.photos/id/1073/800/450"}
                                alt={product?.name || EVENT_DATA.name}
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-brand-900 font-bold shadow-lg">
                                لقاء جُلاس #25
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6 leading-tight">
                            {product?.name || EVENT_DATA.name}
                        </h1>

                        <div className="flex flex-wrap gap-4 text-gray-600 mb-8 border-b border-gray-100 pb-8">
                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                                <Calendar size={18} className="text-brand-500" />
                                <span>{EVENT_DATA.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                                <Clock size={18} className="text-brand-500" />
                                <span>{EVENT_DATA.timeRange}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full hover:bg-brand-50 cursor-pointer transition-colors">
                                <MapPin size={18} className="text-brand-500" />
                                <span className="underline decoration-dotted">{EVENT_DATA.location}</span>
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
                                    &quot;{EVENT_DATA.description.quote}&quot;
                                </p>
                                {EVENT_DATA.description.details.map((detail, idx) => (
                                    <p key={idx} className="mb-4">{detail}</p>
                                ))}
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
                                    <img src={EVENT_DATA.speaker.image} alt={EVENT_DATA.speaker.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-brand-900 mb-1">{EVENT_DATA.speaker.name}</h4>
                                    <span className="text-brand-500 text-sm block mb-3">{EVENT_DATA.speaker.title}</span>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {EVENT_DATA.speaker.bio}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Agenda */}
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-brand-900 mb-6 border-r-4 border-brand-500 pr-4">أجندة اللقاء</h3>
                            <div className="space-y-6 relative border-r-2 border-gray-100 mr-2 pr-8">
                                {EVENT_DATA.agenda.map((item, idx) => (
                                    <div key={idx} className="relative">
                                        <span className={`absolute -right-[39px] top-1 w-4 h-4 rounded-full ${idx === 0 ? 'bg-brand-500' : 'bg-brand-300'} ring-4 ring-white`}></span>
                                        <span className="font-bold text-brand-900 ml-4">{item.time}</span>
                                        <span className="text-gray-600">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-brand-900 mb-4 flex items-center gap-2 text-base">
                                <FileText size={18} />
                                شروط وأحكام التذكرة
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                                <li>التذكرة مخصصة لفرد واحد فقط.</li>
                                <li>المبلغ المدفوع غير قابل للاسترداد أو الإلغاء.</li>
                                <li>يرجى إبراز الباركود الخاص بالتذكرة عند بوابة الدخول.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-4">اختر نوع التذكرة</h3>
                            <div className="space-y-3 mb-6">
                                <label
                                    className={`block cursor-pointer border-2 rounded-xl p-4 transition-all ${ticketType === 'in-person' ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-brand-200'}`}
                                    onClick={() => setTicketType('in-person')}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2 font-bold text-brand-900">
                                            <Users size={18} /> حضور شخصي
                                        </div>
                                        <div className="w-5 h-5 rounded-full border-2 border-brand-600 flex items-center justify-center">
                                            {ticketType === 'in-person' && <div className="w-2.5 h-2.5 rounded-full bg-brand-600"></div>}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">في مقر المجلس بجدة • مقاعد محدودة</p>
                                    <div className="text-xl font-bold text-brand-700">{inPersonPrice} ر.س</div>
                                </label>

                                <label
                                    className={`block cursor-pointer border-2 rounded-xl p-4 transition-all ${ticketType === 'online' ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-brand-200'}`}
                                    onClick={() => setTicketType('online')}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2 font-bold text-brand-900">
                                            <Monitor size={18} /> بث مباشر
                                        </div>
                                        <div className="w-5 h-5 rounded-full border-2 border-brand-600 flex items-center justify-center">
                                            {ticketType === 'online' && <div className="w-2.5 h-2.5 rounded-full bg-brand-600"></div>}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">رابط Zoom تفاعلي • من أي مكان</p>
                                    <div className="text-xl font-bold text-brand-700">{onlinePrice} ر.س</div>
                                </label>
                            </div>

                            {/* Benefits */}
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
                                disabled={isAddingToCart}
                                className="w-full bg-brand-900 text-white py-3 rounded-xl font-bold hover:bg-brand-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                <ShoppingBag size={18} />
                                {isAddingToCart ? 'جاري الحجز...' : 'احجز مقعدك الآن'}
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4 italic">
                                &quot;المناجم مليئة بالذهب، ونحن بانتظار من يشاركنا الاكتشاف.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
