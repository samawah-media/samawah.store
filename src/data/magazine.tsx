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

export const MAGAZINE_ISSUES: Record<number, Omit<IssueData, 'cover'>> = {
    1: {
        title: "العدد الأول: العزلة والانتماء",
        videoPoster: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
        date: "يناير 2025",
        editorQuote: {
            text: "الراقص الحقيقي لا ينتظر التصفيق، هو يرقص لأن الموسيقى في داخله لا تتوقف.",
            author: "أ. محمد أحمد بارحمة"
        },
        highlights: [
            "رحلة في عمق النفس البشرية: بين الرغبة في الانعزال والحاجة للانتماء.",
            "تحليل ظاهرة 'الهجرة للرياض' من منظور اجتماعي ونفسي.",
            "كيف تحولت 'المكانة' إلى سلعة نشتريها بدلاً من قيمة نكتسبها؟"
        ],
        articles: [
            { title: "الراقصون في العتمة", author: "د. محمد أحمد بارحمة", quote: "كيف تجد الرضا في العمل لا في تقدير الآخرين للعمل؟" },
            { title: "موسم الهجرة للرياض", author: "عبدالله المغلوث", quote: "المدن مثل البشر، لها جاذبية وقسوة." },
        ]
    },
    2: {
        title: "العدد الثاني: فخ السرعة",
        videoPoster: "https://images.unsplash.com/photo-1496167117681-944f702be1f4?q=80&w=1000&auto=format&fit=crop",
        date: "أبريل 2025",
        editorQuote: {
            text: "نركض لنسبق الزمن، لكننا ننسى أن الزمن لا يسابق أحدًا.",
            author: "أ. محمد أحمد بارحمة"
        },
        highlights: [
            "لماذا نشعر دائماً أننا متأخرون؟",
            "ثقافة 'الترند' وكيف تسرق منا لحظة الاستمتاع بالحاضر.",
            "كيف تجعل من القراءة طقساً يومياً لا واجباً ثقيلاً؟"
        ],
        articles: [
            { title: "سباق السلاحف", author: "أحمد الشقيري", quote: "الفوز أحياناً يكون في القدرة على التوقف." },
        ]
    },
    3: {
        title: "العدد الثالث: العودة للجذور",
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
    { title: "باب السرب", icon: <Home size={24} />, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800", desc: "عن السكينة النفسية، الانتماء، العائلة." },
    { title: "باب العافية", icon: <Heart size={24} />, image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800", desc: "صحة الجسد والروح، التشافي، والتوازن." },
    { title: "باب القوت", icon: <Sun size={24} />, image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800", desc: "اقتصاديات الحياة، العمل، المال." },
    { title: "باب الحيازة", icon: <Globe size={24} />, image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800", desc: "جماليات الدنيا، الفنون، المعرفة." },
];
