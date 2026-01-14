import React from 'react';
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

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => (
    <FadeIn delay={delay} className="flex flex-col items-center text-center group">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-samawah-beige rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 text-samawah-navy transition-all duration-500 group-hover:bg-samawah-teal group-hover:text-white group-hover:rotate-6">
            {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-samawah-navy mb-3 md:mb-4">{title}</h3>
        <p className="text-samawah-grey leading-relaxed text-sm md:text-base max-w-[280px]">{description}</p>
    </FadeIn>
);

const ValueProposition: React.FC = () => {
    const features = [
        {
            icon: <BookOpen size={32} aria-hidden="true" />,
            title: 'محتوى أصيل',
            description: 'نبتعد عن ضجيج الترند لنقدم محتوى مكتوب بعناية، يخاطب العقل والروح.',
        },
        {
            icon: <Truck size={32} aria-hidden="true" />,
            title: 'شحن مجاني ذكي',
            description: 'نصلك أينما كنت. خدمة شحن سريعة لباب منزلك مدمجة في اشتراكاتنا.',
        },
        {
            icon: <CreditCard size={32} aria-hidden="true" />,
            title: 'دفع آمن ومرن',
            description: 'سهلناها عليك. ادفع براحتك عبر تابي، تمارا، أبل باي، أو البطاقات الائتمانية.',
        },
    ];

    return (
        <section
            className="bg-white py-16 md:py-28"
            aria-labelledby="features-heading"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 id="features-heading" className="sr-only">مميزات متجر سماوة</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                    {features.map((feature, index) => (
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

export default ValueProposition;
