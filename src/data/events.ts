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
    name: "المجلات: المناجم المدفونة",
    date: "الأربعاء، 17 ديسمبر 2025",
    timeRange: "8:00 م - 10:00 م",
    location: "جدة (يصل الموقع للمشتركين)",
    description: {
        quote: "المجلات هي ابن الأدب البار، لكن هل هي الابن المُفضَّل؟",
        details: [
            "لماذا وصفناها بـ \"المناجم المدفونة\"؟ لأن المجلات الأدبية القديمة ليست مجرد أوراق صفراء؛ بل هي السجل الحي لنبض الثقافة في لحظتها الراهنة.",
            "في هذا اللقاء، سننفض الغبار عن رفوف الذاكرة. سنغوص في أعماق هذه \"المناجم\" لنستخرج منها نفائس النصوص."
        ]
    },
    speaker: {
        name: "د. عبدالرحمن قائد",
        title: "باحث ومحقق في التراث العربي",
        bio: "عُرف بشغفه العميق بالمخطوطات والنوادر الأدبية. يمتلك د. عبدالرحمن خبرة واسعة في \"التنقيب\" المعرفي.",
        image: "https://ui-avatars.com/api/?name=Abdulrahman+Qaed&background=2d383f&color=fff&size=256"
    },
    agenda: [
        { time: "7:45 م", title: "الاستقبال" },
        { time: "8:00 م", title: "بداية الحوار: في حضرة المجلات القديمة" },
        { time: "9:15 م", title: "مداخلات الجمهور والنقاش المفتوح" },
        { time: "10:00 م", title: "ختام اللقاء" }
    ]
};
