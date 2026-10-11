
/* Xiangban Coffee - multilingual support */

"use strict";

const translations = {
    zh: {
        siteTitle: "香伴咖啡",
        navHome: "首页",
        navCraft: "手作工艺",
        navContact: "联系我们",
        heroTitle: "手工磨豆机. 为咖啡注入温度",
        heroDesc1: "每一台都由匠人手工装配调校，用时间打磨细节",
        heroDesc2: "让咖啡的香气更纯粹",
        btnExplore: "了解工艺",
        btnCustom: "定制咨询",
        featuresTitle: "手作匠心",
        featuresSub: "拒绝流水线量产，坚持每一台都手工完成",
        feature1Title: "手工研磨锥刀",
        feature1Desc: "48mm高碳钢锥刀，手工开刃打磨，每一片刀刃都经过反复测试，研磨均匀细腻",
        feature2Title: "微米级手工装配",
        feature2Desc: "核心部件手工校准，公差控制在0.005毫米以内，运转顺滑无杂音，使用寿命更长",
        feature3Title: "单台风味调校",
        feature3Desc: "每台机器出厂前都经过实际冲煮测试，附带专属风味参数，到手即可享受好咖啡",
        feature4Title: "全铝手工打磨机身",
        feature4Desc: "6061-T6航空级铝合金，手工抛光打磨，触感温润，越用越有质感",
        feature5Title: "专属定制刻字",
        feature5Desc: "支持姓名、短句、Logo激光雕刻，打造独属于你的咖啡器具，也是心意满满的礼物",
        feature6Title: "终身维护服务",
        feature6Desc: "提供刀盘更换、机身保养、精度校准等终身服务，让你的磨豆机陪伴你更久",
        contactTitle: "联系我们",
        contactSub: "有任何问题或定制需求，随时和我们聊聊",
        contactAddress: "工作室：中国广东顺德",
        copyright: "© 2024 香伴咖啡 | 手作咖啡器具工作室"
    },

    en: {
        siteTitle: "Xiangban Coffee",
        navHome: "Home",
        navCraft: "Craftsmanship",
        navContact: "Contact",
        heroTitle: "Handcrafted Grinders. Warmth for Coffee",
        heroDesc1: "Each grinder is assembled and calibrated by hand, polished with dedication",
        heroDesc2: "Bring out the pure aroma of coffee",
        btnExplore: "Our Craft",
        btnCustom: "Custom Order",
        featuresTitle: "Artisan Craft",
        featuresSub: "No mass production, every piece is made by hand",
        feature1Title: "Hand-ground Burrs",
        feature1Desc: "48mm high-carbon steel burrs, hand-sharpened and tested for uniform, consistent grinding",
        feature2Title: "Micron-precision Assembly",
        feature2Desc: "Core parts calibrated by hand, tolerance within 0.005mm, smooth operation and long life",
        feature3Title: "Individual Flavor Tuning",
        feature3Desc: "Each unit tested with actual brewing, comes with personalized flavor settings",
        feature4Title: "Hand-polished Aluminum Body",
        feature4Desc: "6061-T6 aerospace aluminum, hand-polished for a warm, tactile feel that ages beautifully",
        feature5Title: "Personalized Engraving",
        feature5Desc: "Custom names, quotes or logos available, perfect for personal use or thoughtful gifts",
        feature6Title: "Lifetime Care",
        feature6Desc: "Burr replacement, maintenance and calibration services available for life",
        contactTitle: "Get in Touch",
        contactSub: "Have questions or want a custom grinder? We'd love to hear from you",
        contactAddress: "Studio: Shunde, Guangdong, China",
        copyright: "© 2024 Xiangban Coffee | Handcrafted Coffee Tools Studio"
    },

    ar: {
        siteTitle: "قهوة شيانجبان",
        navHome: "الرئيسية",
        navCraft: "الحرف اليدوية",
        navContact: "اتصل بنا",
        heroTitle: "مطاحن يدوية. دفء للقهوة",
        heroDesc1: "كل مطحنة تُجمّع وتُعاير يدوياً بعناية فائقة",
        heroDesc2: "لتُبرز رائحة القهوة النقية",
        btnExplore: "حرفتنا",
        btnCustom: "طلب مخصص",
        featuresTitle: "حرفية فنية",
        featuresSub: "لا إنتاج جماعي، كل قطعة مصنوعة يدوياً",
        feature1Title: "سنون مطحونة يدوياً",
        feature1Desc: "سنون فولاذ عالي الكربون مقاس 48 مم، مصقولة ومختبرة يدوياً لطحن متجانس ومستمر",
        feature2Title: "تجميع دقيق ميكروني",
        feature2Desc: "الأجزاء الأساسية معايرة يدوياً، تفاوت أقل من 0.005 مم، تشغيل سلس وعمر طويل",
        feature3Title: "معايرة نكهة فردية",
        feature3Desc: "كل جهاز يتم اختباره بالتحضير الفعلي، يأتي مع إعدادات نكهة مخصصة",
        feature4Title: "جسم ألومنيوم مصقول يدوياً",
        feature4Desc: "ألومنيوم 6061-T6، مصقول يدوياً لمسة دافئة تتحسن مع الوقت",
        feature5Title: "نقش شخصي",
        feature5Desc: "نقش الأسماء أو الشعارات متاح، مثالي للاستخدام الشخصي أو الهدايا",
        feature6Title: "رعاية مدى الحياة",
        feature6Desc: "خدمات استبدال السنون والصيانة والمعايرة متاحة مدى الحياة",
        contactTitle: "تواصل معنا",
        contactSub: "لديك أسئلة أو تريد مطحنة مخصصة؟ يسعدنا سماعك",
        contactAddress: "الاستوديو: شوند، قوانغدونغ، الصين",
        copyright: "© 2024 قهوة شيانجبان | استوديو أدوات القهوة المصنوعة يدوياً"
    }
};

function setLanguage(lang) {
    if (!Object.prototype.hasOwnProperty.call(translations, lang)) {
        lang = "zh";
    }

    const dictionary = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");

        if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
            element.textContent = dictionary[key];
        }
    });

    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const currentLang = document.querySelector(".current-lang");

    if (currentLang) {
        currentLang.textContent = {
            zh: "中",
            en: "EN",
            ar: "ع"
        }[lang];
    }

    document.querySelectorAll(".lang-option").forEach(function (option) {
        option.classList.toggle("active", option.dataset.lang === lang);
    });

    try {
        localStorage.setItem("preferredLang", lang);
    } catch (error) {
        // Language switching still works without localStorage.
    }
}

function initializeLanguageMenu() {
    const toggle = document.querySelector(".lang-toggle");
    const menu = document.querySelector(".lang-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function (event) {
            event.stopPropagation();

            const isOpen = menu.classList.toggle("open");
            toggle.classList.toggle("active", isOpen);
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        menu.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        document.addEventListener("click", function () {
            menu.classList.remove("open");
            toggle.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                menu.classList.remove("open");
                toggle.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    document.querySelectorAll(".lang-option").forEach(function (option) {
        option.addEventListener("click", function () {
            setLanguage(option.dataset.lang);

            if (menu) {
                menu.classList.remove("open");
            }

            if (toggle) {
                toggle.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    let savedLang = "zh";

    try {
        savedLang = localStorage.getItem("preferredLang") || "zh";
    } catch (error) {
        // Use Chinese as the default language.
    }

    setLanguage(savedLang);

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
            const href = anchor.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLanguageMenu);
} else {
    initializeLanguageMenu();
}
