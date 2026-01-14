'use client';

import React, { useState } from 'react';
import { Users, Share2, TrendingUp, CheckCircle, ChevronDown, ChevronUp, Send, Instagram, Twitter, Youtube, Rocket, Sparkles } from 'lucide-react';

const Partners: React.FC = () => {

    // Function to handle scroll to form
    const scrollToForm = () => {
        document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-samawah-beige min-h-screen font-sans pt-20">

            {/* 1. Hero Section */}
            <section className="relative bg-samawah-navy text-white overflow-hidden py-20 md:py-32">
                {/* Abstract shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-samawah-teal rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-samawah-teal/40 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-brand-800/50 backdrop-blur border border-brand-700 px-4 py-1.5 rounded-full text-brand-200 text-sm font-medium mb-6">
                        <Users size={16} />
                        <span>برنامج سفراء هُدنة</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        كُن سفيراً للهدوء.. <br />
                        <span className="text-samawah-peach">وضاعف دخلك</span>
                    </h1>
                    <p className="text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed mb-10">
                        فرصة مميزة لتكون شريكاً في نشر الوعي. برنامج مصمم لصناع المحتوى ومحبي الكتب، لتمكينهم من تحقيق أرباح مجزية عبر مشاركة تجربة "هُدنة" مع جمهورهم.
                    </p>
                    <button
                        onClick={scrollToForm}
                        className="bg-white text-samawah-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-samawah-beige transition-all shadow-lg transform hover:-translate-y-1"
                    >
                        انضم للنخبة الآن
                    </button>
                </div>
            </section>

            {/* 2. How it works (Steps) */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-samawah-navy mb-4">كيف تبدأ رحلتك معنا؟</h2>
                    <p className="text-gray-500">ثلاث خطوات بسيطة تفصلك عن البدء في جني الأرباح</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:border-samawah-teal/30 transition-all">
                        <div className="w-14 h-14 bg-samawah-beige rounded-2xl flex items-center justify-center text-samawah-teal mb-6 group-hover:bg-samawah-navy group-hover:text-white transition-colors">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-samawah-navy mb-3">1. سجّل وانضم للعائلة</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            انضم إلى مجتمع مختار من المبدعين والمثقفين الذين يصنعون الأثر ويكسبون الأرباح من خلال برنامج سفراء "هُدنة".
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:border-samawah-teal/30 transition-all">
                        <div className="w-14 h-14 bg-samawah-beige rounded-2xl flex items-center justify-center text-samawah-teal mb-6 group-hover:bg-samawah-navy group-hover:text-white transition-colors">
                            <Share2 size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-samawah-navy mb-3">2. شارك لحظات الهدوء</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            لا تشارك مجرد رابط، بل شارك "تجربة". سنزودك بكود خصم خاص وروابط مخصصة لتشارك متابعيك لحظات قراءة المجلة.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:border-samawah-teal/30 transition-all">
                        <div className="w-14 h-14 bg-samawah-beige rounded-2xl flex items-center justify-center text-samawah-teal mb-6 group-hover:bg-samawah-navy group-hover:text-white transition-colors">
                            <TrendingUp size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-samawah-navy mb-3">3. اربح عوائد فورية</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            اكسب عمولة عالية (40 ريال سعودي) عن كل مشترك ينضم لعائلة هُدنة السنوية من طرفك. ابدأ رحلة الاستثمار!
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Earnings Highlight */}
            <section className="bg-samawah-navy text-white py-20 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h2 className="text-3xl font-serif font-bold mb-4">عمولة لا تُنافس في المحتوى الثقافي</h2>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-samawah-mint shrink-0" />
                                    <span className="text-white/80">نقدم لك <strong className="text-white">20%</strong> من قيمة كل اشتراك سنوي.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-samawah-mint shrink-0" />
                                    <span className="text-white/80">بمعنى: <strong className="text-white">40 ريال</strong> كاش لكل مشترك واحد.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-samawah-mint shrink-0" />
                                    <span className="text-white/80">لا يوجد سقف للأرباح، كلما زاد المشتركين تضاعف دخلك.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white text-samawah-navy p-6 rounded-2xl shadow-2xl rotate-3 min-w-[280px] text-center">
                            <span className="block text-gray-500 text-sm mb-1">صافي ربحك لكل اشتراك</span>
                            <div className="flex items-center justify-center gap-1 text-5xl font-bold text-samawah-navy mb-2">
                                40 <span className="text-lg font-normal text-gray-500">ر.س</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                                <div className="bg-green-500 h-2 rounded-full w-full"></div>
                            </div>
                            <p className="text-xs text-green-600 font-bold bg-green-50 py-2 rounded-lg">
                                يتم التحويل لحسابك البنكي مباشرة
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why Join Us / Boost Feature (NEW) */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-brand-50 to-white rounded-3xl p-8 md:p-12 border border-brand-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>

                    <div className="md:w-1/2 relative z-10">
                        <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                            <Rocket size={32} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">فرصة للانتشار الواسع</h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            نحن نؤمن بدعم شركائنا! المبدعون الذين يقدمون محتوى استثنائياً سيحصلون على فرصة لترويج منشوراتهم عبر حملاتنا الإعلانية المدفوعة. هذا يعني ظهور حسابك أمام آلاف الجماهير الجديدة مجاناً، مما يدعم نمو حسابك الشخصي وزيادة أرباحك معنا.
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm text-brand-600 bg-white px-4 py-2 rounded-full border border-brand-100 shadow-sm">
                            <Sparkles size={16} className="text-yellow-500" />
                            <span className="font-bold">ميزة حصرية للمحتوى المتميز</span>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative z-10">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-all duration-500 max-w-sm mx-auto">
                            <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                <div>
                                    <div className="w-24 h-3 bg-gray-200 rounded mb-1"></div>
                                    <div className="w-16 h-2 bg-gray-100 rounded"></div>
                                </div>
                                <div className="mr-auto text-xs font-bold text-gray-400">Sponsored</div>
                            </div>
                            <div className="h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-300">
                                <TrendingUp size={48} />
                            </div>
                            <div className="space-y-2">
                                <div className="w-full h-2 bg-gray-100 rounded"></div>
                                <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
                            </div>
                            <div className="mt-4 flex gap-4 text-xs text-samawah-teal font-bold bg-samawah-beige p-2 rounded-lg justify-center">
                                <span>+50k وصول</span>
                                <span>+2k تفاعل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ Section */}
            <section className="py-20 px-4 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-brand-900">الأسئلة الشائعة</h2>
                </div>

                <div className="space-y-4">
                    <FaqItem
                        question="كيف يعمل برنامج شركاء هُدنة؟"
                        answer="ببساطة، ستحصل على 'كود خصم' أو 'رابط تتبع' خاص بك بعد التسجيل. شارك هذا الكود مع جمهورك عند حديثك عن المجلة، وأي شخص يستخدم الكود للاشتراك في الباقة السنوية، سيتم احتساب عمولتك فوراً في لوحة التحكم الخاصة بك."
                    />
                    <FaqItem
                        question="هل أنا مؤهل لهذا البرنامج؟"
                        answer="نبحث عن 'النوعية' قبل 'الكمية'. إذا كنت صانع محتوى (على انستقرام، تيك توك، يوتيوب، أو تويتر)، أو مدوناً تهتم بمواضيع: الثقافة، الكتب، اللايف ستايل، القهوة، أو تطوير الذات، ولديك جمهور يثق بذائقتك، فأنت الشريك المثالي لنا."
                    />
                    <FaqItem
                        question="كم سأربح ومتى يتم التحويل؟"
                        answer="ستحصل على 40 ريال عن كل اشتراك سنوي. يتم مراجعة المبيعات وتحويل العمولات المستحقة لحسابك البنكي بشكل دوري (يتم الاتفاق على موعد التحويل سواء شهرياً أو عند الوصول لحد معين من المبيعات)."
                    />
                </div>
            </section>

            {/* 6. Registration Form */}
            <section id="register-form" className="bg-white py-20 border-t border-brand-100">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">انضم لقائمة الشركاء الناجحين</h2>
                        <p className="text-gray-500">املأ البيانات وسيتواصل معك فريقنا لتزويدك بالكود الخاص بك</p>
                    </div>

                    <form className="bg-sand-50 p-8 rounded-3xl border border-brand-100 space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-brand-900 mb-2">الاسم الثلاثي</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all bg-white" placeholder="الاسم الكريم" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-brand-900 mb-2">البريد الإلكتروني</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all bg-white" placeholder="name@example.com" dir="ltr" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-900 mb-2">رقم الجوال</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all bg-white" placeholder="05xxxxxxxx" dir="ltr" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-brand-900 mb-2">منصتك الأساسية</label>
                            <div className="flex gap-4 mb-3">
                                <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-brand-500 transition-colors">
                                    <input type="radio" name="platform" className="text-brand-600 focus:ring-brand-500" />
                                    <Twitter size={16} /> تويتر
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-brand-500 transition-colors">
                                    <input type="radio" name="platform" className="text-brand-600 focus:ring-brand-500" />
                                    <Instagram size={16} /> انستقرام
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-brand-500 transition-colors">
                                    <input type="radio" name="platform" className="text-brand-600 focus:ring-brand-500" />
                                    <Youtube size={16} /> يوتيوب/تيك توك
                                </label>
                            </div>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all bg-white text-left" placeholder="@username" dir="ltr" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-brand-900 mb-2">لماذا ترغب بالانضمام إلينا؟</label>
                            <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all bg-white h-24 resize-none" placeholder="حدثنا قليلاً عن نفسك وجمهورك..."></textarea>
                        </div>

                        {/* Content Consent Checkbox */}
                        <div className="flex items-start gap-3 pt-4 border-t border-gray-200">
                            <div className="flex items-center h-5">
                                <input
                                    id="ad-consent"
                                    type="checkbox"
                                    className="w-5 h-5 text-brand-600 border-gray-300 rounded focus:ring-brand-500 focus:ring-2 bg-white cursor-pointer"
                                />
                            </div>
                            <label htmlFor="ad-consent" className="text-sm text-gray-600 cursor-pointer select-none">
                                <span className="font-bold text-brand-900 block mb-1">أوافق على منح "هُدنة" حق استخدام المحتوى لأغراض الترويج والإعلانات في حال تم اختياره.</span>
                                <span className="text-xs text-gray-500">تسمح لنا هذه الموافقة بتمويل حملات إعلانية لمنشورك لزيادة مبيعاتك وانتشارك.</span>
                            </label>
                        </div>

                        <button type="button" className="w-full bg-samawah-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-samawah-teal transition-all flex items-center justify-center gap-2 shadow-lg">
                            إرسال طلب الانضمام <Send size={18} />
                        </button>
                        <p className="text-center text-xs text-gray-500">بضغطك على إرسال، أنت توافق على شروط وأحكام برنامج الشركاء.</p>
                    </form>
                </div>
            </section>

        </div>
    );
};

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-right hover:bg-gray-50 transition-colors"
            >
                <span className="font-bold text-brand-900 text-lg">{question}</span>
                {isOpen ? <ChevronUp className="text-brand-500" /> : <ChevronDown className="text-gray-400" />}
            </button>
            <div
                className={`px-6 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                {answer}
            </div>
        </div>
    );
};

export default Partners;
