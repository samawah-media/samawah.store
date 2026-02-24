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
    seasonStatus: 'active' | 'ended'; // حالة الموسم
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
    name: "لقاء جُلاس السادس والعشرون: اللغة.. الخصيصة التي تميّزنا",
    date: "الخميس 12 فبراير",
    timeRange: "7:00 - 9:00 مساءً",
    location: "مركز نسما، جدة",
    seasonStatus: 'ended',
    description: {
        quote: "\"اللغة ليست ما نقوله.. بل ما نكونه.\"",
        details: [
            "لم تكن اللغة يومًا أداةَ تواصل وحسب؛ بل هي الوعاء الذي نفكّر به، ونرى العالم من خلاله، ونصوغ به اختلافنا.",
            "في هذا اللقاء، يصحبنا أ. نواف البيضاني إلى تأملٍ عميق في اللغة بوصفها هُويةً ومعنى، وحدًّا فاصلًا بين ما نكونه وما نقوله. دعوة لإعادة اكتشاف \"لسانك\" لا كأداة نطق، بل كمعجزة بشرية."
        ]
    },
    speaker: {
        name: "أ. نواف البيضاني",
        title: "باحث ومهتم باللغة",
        bio: "باحث ومهتم باللغة العربية وتأثيرها في الهوية والفكر. يقدم رؤى عميقة حول اللغة بوصفها أكثر من أداة تواصل.",
        image: "https://picsum.photos/id/1015/200/200"
    },
    agenda: [
        { time: "6:45 م", title: "الاستقبال والضيافة" },
        { time: "7:00 م", title: "بدء الجلسة الحوارية" },
        { time: "8:30 م", title: "نقاشات مفتوحة" }
    ]
};
