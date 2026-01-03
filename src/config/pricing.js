export const PRICING_CONFIG = {
  services: [
    {
      id: "website",
      title: { ar: "موقع إلكتروني", en: "Website" },
      description: { ar: "موقع تعريفي للشركات أو الأفراد", en: "Corporate or personal portfolio" },
      basePrice: 1000, // Discounted: 100
      icon: "Globe"
    },
    {
      id: "ecommerce",
      title: { ar: "متجر إلكتروني", en: "E-Commerce" },
      description: { ar: "بيع منتجاتك عبر الإنترنت", en: "Sell your products online" },
      basePrice: 2000, // Discounted: 200
      icon: "ShoppingBag"
    },
    {
      id: "app",
      title: { ar: "تطبيق جوال", en: "Mobile App" },
      description: { ar: "تطبيق لنظامي Android و iOS", en: "App for Android & iOS" },
      basePrice: 3500, // Discounted: 350
      icon: "Smartphone"
    },
    {
      id: "marketing",
      title: { ar: "تسويق رقمي", en: "Digital Marketing" },
      description: { ar: "إدارة حملات ومنصات تواصل", en: "Campaigns & Social Media" },
      basePrice: 500, // Discounted: 50
      icon: "Megaphone"
    }
  ],
  features: {
    website: [
      { id: "cms", label: { ar: "نظام إدارة محتوى", en: "CMS (Content Management)" }, price: 100 }, // Discounted: 10
      { id: "seo", label: { ar: "تحسين محركات البحث", en: "SEO Optimization" }, price: 50 }, // Discounted: 5
      { id: "multi_lang", label: { ar: "متعدد اللغات", en: "Multi-language" }, price: 100 },
      { id: "dark_mode", label: { ar: "الوضع الليلي", en: "Dark Mode" }, price: 50 }
    ],
    ecommerce: [
      { id: "payment", label: { ar: "ربط بوابات الدفع", en: "Payment Gateway Integration" }, price: 150 },
      { id: "inventory", label: { ar: "نظام مخزون متقدم", en: "Advanced Inventory" }, price: 200 },
      { id: "multi_vendor", label: { ar: "تعدد البائعين", en: "Multi-vendor Support" }, price: 500 }
    ],
    app: [
      { id: "notifications", label: { ar: "إشعارات", en: "Push Notifications" }, price: 100 },
      { id: "chat", label: { ar: "شات مباشر", en: "In-app Chat" }, price: 300 },
      { id: "location", label: { ar: "خرائط وموقع", en: "Maps & Location" }, price: 200 }
    ],
    marketing: [
      { id: "content", label: { ar: "كتابة محتوى", en: "Content Creation" }, price: 100 },
      { id: "designs", label: { ar: "تصاميم جرافيك (10/شهر)", en: "Graphic Designs (10/mo)" }, price: 150 },
      { id: "ads", label: { ar: "إدارة إعلانات ممولة", en: "Ads Management" }, price: 100 }
    ]
  },
  timelines: [
    { id: "standard", label: { ar: "وقت قياسي", en: "Standard" }, multiplier: 1.0 },
    { id: "fast", label: { ar: "مستعجل (+20%)", en: "Urgent (+20%)" }, multiplier: 1.2 },
    { id: "relaxed", label: { ar: "غير مستعجل (-10%)", en: "Relaxed (-10%)" }, multiplier: 0.9 }
  ]
};
