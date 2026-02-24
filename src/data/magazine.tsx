import { Home, Heart, Sun, Globe } from 'lucide-react';
import React from 'react';

export interface IssueArticle {
    title: string;
    author: string;
    quote: string;
}

export interface IssueData {
    title: string;
    cover: string;
    videoPoster: string;
    date: string;
    editorQuote: {
        text: string;
        author: string;
    };
    highlights: string[];
    articles: IssueArticle[];
}

export const MAGAZINE_ISSUES: Record<number, IssueData> = {
    1: {
        title: "في قلق المكانة والسعي للتقدير",
        cover: "https://picsum.photos/id/24/800/1000",
        videoPoster: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
        date: "يناير 2025",
        editorQuote: {
            text: "الراقص الحقيقي لا ينتظر التصفيق، هو يرقص لأن الموسيقى في داخله لا تتوقف.",
            author: "أ. محمد أحمد بارحمة"
        },
        highlights: [
            "تأملٌ في علاقة الإنسان بنظرة الآخرين؛ بين حاجته للانتماء وخوفه من العزلة.",
            "قراءة اجتماعية | نفسية لتحولات المكانة في عصر المقارنة والانتقال والظهور.",
            "كيف أصبح التقدير غاية تُطلب لا أثرًا يتبع المعنى والقيمة؟"
        ],
        articles: [
            { title: "الراقصون في العتمة", author: "د. محمد أحمد بارحمة", quote: "كيف تجد الرضا في العمل لا في تقدير الآخرين للعمل؟" },
            { title: "موسم الهجرة للرياض", author: "عبدالله المغلوث", quote: "المدن مثل البشر، لها جاذبية وقسوة." },
        ]
    },
    2: {
        title: "في الهوس بالكمال ومتلازمة المحتال",
        cover: "https://picsum.photos/id/1016/800/1000",
        videoPoster: "https://images.unsplash.com/photo-1496167117681-944f702be1f4?q=80&w=1000&auto=format&fit=crop",
        date: "أبريل 2025",
        editorQuote: {
            text: "الكمال الحقيقي هو رحلة مستمرة تبدأ من انسجامنا مع ذواتنا، وصولا إلى تحقيق الأهداف الأصيلة التي تعبر عن جوهرنا الداخلي، لا عن صورتنا الخارجية فقط. مقالة «أو أمضي حقبا».",
            author: "أ. محمد أحمد بارحمة"
        },
        highlights: [
            "نظرة في هوس الكمال: كيف يتحول السعي للتحسّن إلى عبءٍ يرهق الإنسان ويؤجّل طمأنينته.",
            "اقتراب من متلازمة المحتال: شعور الشك في الاستحقاق رغم الإنجاز، والخوف الدائم من الانكشاف.",
            "نحو فهمٍ أهدأ للقيمة الذاتية؛ حيث يكون القبول بداية النمو لا نهايته."
        ],
        articles: [
            { title: "السمين الذي يجب أن يختفي أولًا", author: "تحرير هُدنة", quote: "الوجود المشروط وفنّ الحياة لأقصاها" },
            { title: "أول مرة تحب يا قلبي", author: "تحرير هُدنة", quote: "المحاولات الأولى ومَرارات المِران" }
        ]
    },
    3: {
        title: "العدد الثالث: العودة للجذور",
        cover: "https://picsum.photos/id/1050/800/1000",
        videoPoster: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1000&auto=format&fit=crop",
        date: "يوليو 2025",
        editorQuote: {
            text: "لا شجر ينمو بلا جذور، ولا إنسان يكبر بلا ذاكرة.",
            author: "أ. محمد أحمد بارحمة"
        },
        highlights: [
            "نوستالجيا البيوت الطينية: حنين عابر أم هوية مفقودة؟",
        ],
        articles: [
            { title: "رائحة الطين", author: "د. غازي القصيبي (أرشيف)", quote: "استعادة لنصوص لم تنشر." },
        ]
    },
    4: {
        title: "العدد الرابع: الإنسان والآلة",
        cover: "https://picsum.photos/id/1070/800/1000",
        videoPoster: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
        date: "أكتوبر 2025",
        editorQuote: {
            text: "نحن لا نخاف أن تصبح الآلة ذكية، نخاف أن يصبح الإنسان آلة.",
            author: "أ. محمد أحمد بارحمة"
        },
        highlights: [
            "هل سيسرق الذكاء الاصطناعي أرواحنا قبل وظائفنا؟",
        ],
        articles: [
            { title: "هل يحلم الذكاء الاصطناعي؟", author: "د. لمياء العبدالكريم", quote: "نخاف أن يصبح الإنسان آلة." },
        ]
    }
};

export const MAGAZINE_SECTIONS = [
    { title: "باب العافية", icon: <Heart size={24} />, image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800", desc: "رحلة إلى الداخل عن عافيتك وتوافقك الذاتي." },
    { title: "باب السرب", icon: <Home size={24} />, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800", desc: "نمعن النظر إلى المحيط. عن أسرتك وأصدقائك وكل صِلاتك في هذا العالم." },
    { title: "باب القوت", icon: <Sun size={24} />, image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800", desc: "نوجّه الضوء إلى الحياة المهنية، عن الإنجاز والتعثر، عن الإنتاجية والاحتراق، وعن التوازن بين الرضا والنجاح." },
    { title: "باب الهواء الطلق", icon: <Globe size={24} />, image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800", desc: "نتنفس الحرية، عن ملامح الإبداع الإنساني والجمال الرحب." },
    { title: "باب الحيازة", icon: <Globe size={24} />, image: "https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?q=80&w=800", desc: "نتطلع إلى الأفق، بين أمل المستقبل وجذور الماضي تمكن السرديّة." },
];
