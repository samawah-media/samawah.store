export interface AgendaItem {
    time: string;
    title: string;
}

export interface EventData {
    id: string;
    name: string;
    date: string;
    timeRange: string;
    location: string;
    description: {
        quote: string;
        details: string[];
    };
    speaker: {
        name: string;
        title: string;
        bio: string;
        image: string;
    };
    agenda: AgendaItem[];
}

export const EVENT_DATA: EventData = {
    id: '1367448884',
    name: "لقاء جُلاس القادم",
    date: "يعلن عنه قريباً",
    timeRange: "08:00 م - 10:00 م",
    location: "جدة (يصل الموقع للمشتركين)",
    description: {
        quote: "مساحة ثقافية للحوار الفكري المتزن",
        details: [
            "يتم تحديث تفاصيل ومحاور كل لقاء في مجلس جُلاس باستمرار، لتعبر عن القضايا الثقافية والفكرية الراهنة التي تهم المجتمع المعرفي.",
            "ترقبوا الإعلان عن تفاصيل اللقاء القادم وضيفنا المميز."
        ]
    },
    speaker: {
        name: "يعلن عنه قريباً",
        title: "ضيف مجلس جُلاس",
        bio: "نستضيف في مجلس جُلاس نخبة من المفكرين والمبدعين والباحثين في شتى مجالات الفكر والثقافة والمعرفة.",
        image: "https://ui-avatars.com/api/?name=Guest&background=2d383f&color=fff&size=256"
    },
    agenda: [
        { time: "7:45 م", title: "الاستقبال" },
        { time: "8:00 م", title: "بداية الحوار: في حضرة المجلات القديمة" },
        { time: "9:15 م", title: "مداخلات الجمهور والنقاش المفتوح" },
        { time: "10:00 م", title: "ختام اللقاء" }
    ]
};
