import React, { memo } from 'react';
import { BookOpen, Truck, CreditCard } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

// ========================================
// ValueProposition Component - Features Section
// ========================================

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = memo(({ icon, title, description, delay = 0 }) => (
    <FadeIn delay={delay} className="flex flex-col items-center text-center group">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-samawah-beige rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 text-samawah-navy transition-all duration-500 group-hover:bg-samawah-teal group-hover:text-white group-hover:rotate-6">
            {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-samawah-navy mb-3 md:mb-4">{title}</h3>
        <p className="text-samawah-grey leading-relaxed text-sm md:text-base max-w-[280px]">{description}</p>
    </FadeIn>
));

FeatureCard.displayName = 'FeatureCard';

const FEATURES = [
    {
        icon: <BookOpen size={32} aria-hidden="true" />,
        title: '١-محتوى أصيل',
        description: 'نبتعد عن ضجيج العابر، لنقدّم محتوى يُكتب بعناية ويخاطب العقل والوجدان.',
    },
    {
        icon: <Truck size={32} aria-hidden="true" />,
        title: '٢-شحن مجانيّ وذكي',
        description: 'تصل إصدارات سماوة وتجاربها إلى بابك، لتكون أقرب إليك من أي وقت.',
    },
    {
        icon: <CreditCard size={32} aria-hidden="true" />,
        title: '٣-دفع آمن ومرن',
        description: 'خيارات متعددة تناسبك، مع إمكانية التقسيط لتجربة تسوق مريحة وموثوقة.',
    },
];

const ValueProposition: React.FC = () => {
    return (
        <section
            className="bg-white py-16 md:py-28"
            aria-labelledby="features-heading"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 id="features-heading" className="sr-only">مميزات متجر سماوة</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(ValueProposition);

