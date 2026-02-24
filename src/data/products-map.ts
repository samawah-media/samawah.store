// src/data/products-map.ts

/**
 * خريطة روابط المنتجات الفعلية على متجر سلة
 * تستخدم لربط الأزرار والبطاقات في الموقع بالروابط المباشرة للشراء
 */
export const PRODUCT_LINKS = {
    // --- قسم المجلة (هدنة) ---

    // 1. المجلة (العدد الفردي الحالي)
    magazine_issue: {
        id: '548271829',
        url: 'https://samawah.store/%D9%85%D8%AC%D9%84%D8%A9-%D9%87%D9%8F%D8%AF%D9%86%D8%A9-1-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D9%88%D9%82-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%86%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%8A%D8%B1/p548271829'
    },

    // 2. الاشتراك السنوي للمجلة
    magazine_subscription: {
        id: '530230730',
        url: 'https://samawah.store/annual/p530230730'
    },

    // --- قسم مجلس جُلاس (اللقاءات) ---

    // 3. تذكرة الحضور (حضوري)
    jalas_ticket_attend: {
        id: 'jalas_offline',
        url: 'https://salla.sa/YOUR_STORE/ticket-attend-link', // سيتم تحديثه لاحقاً
    },

    // 4. تذكرة البث المباشر (أونلاين)
    jalas_ticket_online: {
        id: 'jalas_online',
        url: 'https://salla.sa/YOUR_STORE/ticket-online-link', // سيتم تحديثه لاحقاً
    },

    // --- منتجات أخرى (التقرير مثلاً) ---
    media_report: {
        id: 'report_2025',
        url: 'https://salla.sa/YOUR_STORE/report-link', // سيتم تحديثه لاحقاً
    },
};

/**
 * بيانات اللقاء القادم لمجلس جُلاس
 * لتسهيل التحديث الدوري للفعاليات
 */
export const UPCOMING_EVENT = {
    id: 'jalas_26',
    title: 'لقاء جُلاس السادس والعشرون: اللغة.. الخصيصة التي تميّزنا',
    date: 'الخميس 12 فبراير',
    time: '7:00 - 9:00 مساءً',
    location: 'مركز نسما، جدة',
    image: '/images/jalas-event.jpeg',
    price_attend: 15,  // ريال سعودي
    price_online: 30,  // ريال سعودي
    ticket_attend: 'https://samawah.store/p/ticket-attend-link', // رابط سلة الفعلي
    ticket_online: 'https://samawah.store/p/ticket-online-link', // رابط سلة الفعلي
    seasonStatus: 'ended' as const, // انتهى الموسم الثالث
};

/**
 * قائمة ضيوف المجلس السابقين
 */
export const PAST_GUESTS = [
    {
        name: 'د. خالد حمد الجابر',
        title: 'طبيب وكاتب نفسي',
        image: 'https://picsum.photos/id/1011/200/200',
    },
    {
        name: 'رائد بن خليل العيد',
        title: 'كاتب ومبادر ثقافي',
        image: 'https://picsum.photos/id/1012/200/200',
    },
    {
        name: 'موفق السلمي',
        title: 'شاعر ومؤلف',
        image: 'https://picsum.photos/id/1013/200/200',
    },
    {
        name: 'إبراهيم سرحان',
        title: 'رحّالة ومصور فوتوغرافي',
        image: 'https://picsum.photos/id/1014/200/200',
    },
    {
        name: 'نواف البيضاني',
        title: 'باحث ومهتم باللغة',
        image: 'https://picsum.photos/id/1015/200/200',
    },
    {
        name: 'حسين محمد بافقيه',
        title: 'باحث وأديب',
        image: 'https://picsum.photos/id/1016/200/200',
    },
    {
        name: 'أحمد قنديل',
        title: 'شاعر جدة',
        image: 'https://picsum.photos/id/1017/200/200',
    },
];
