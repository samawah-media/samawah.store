import React, { memo } from 'react';
import { Users, BookOpen, Award } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

// ========================================
// TrustBar Component - Social Proof Section
// ========================================

interface TrustItemProps {
    icon: React.ReactNode;
    text: string;
}

const TrustItem: React.FC<TrustItemProps> = memo(({ icon, text }) => (
    <div className="flex items-center gap-2 shrink-0 px-5 py-3 bg-white rounded-full border border-samawah-beige shadow-sm hover:shadow-md transition-shadow">
        <span className="text-samawah-teal">{icon}</span>
        <span className="font-semibold text-samawah-navy whitespace-nowrap text-sm md:text-base">{text}</span>
    </div>
));

TrustItem.displayName = 'TrustItem';

const TRUST_ITEMS = [
    { icon: <Users className="w-5 h-5" />, text: '+5000 قارئ' },
    { icon: <BookOpen className="w-5 h-5" />, text: 'توزيع في كافة مدن المملكة' },
    { icon: <Award className="w-5 h-5" />, text: 'محتوى نخبوي أصيل' },
];

const TrustBar: React.FC = () => {
    return (
        <section
            className="bg-samawah-beige/30 py-6 md:py-8 border-b border-samawah-beige"
            aria-label="إحصائيات وثقة"
        >
            <div className="max-w-7xl mx-auto px-4">
                <FadeIn direction="none" duration={1.2}>
                    {/* Horizontal scroll on mobile, centered on desktop */}
                    <div className="flex md:justify-center gap-4 md:gap-12 overflow-x-auto scrollbar-hide pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                        {TRUST_ITEMS.map((item, index) => (
                            <TrustItem key={index} icon={item.icon} text={item.text} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default memo(TrustBar);

