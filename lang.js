// 多语言翻译库
const translations = {
    zh: {
        siteTitle: "相伴咖啡",
        navHome: "首页",
        navProducts: "产品",
        navContact: "联系",
        ctaCustom: "预约定制",
        heroTitle: "为每一杯咖啡，注入匠心",
        heroDesc: "自研手摇磨豆机 · 精密加工 · 个性化刻字 · 器具定制",
        btnExplore: "探索作品",
        btnCustom: "预约定制",
        featuresTitle: "核心优势",
        featuresSub: "每一台磨豆机，都是工艺与咖啡文化的结合",
        feature1Title: "自研锥刀结构",
        feature1Desc: "48mm 精密锥刀，均匀出粉，适配手冲、意式多种冲煮方式",
        feature2Title: "全铝合金机身",
        feature2Desc: "6061-T6 航空级铝合金，轻量化与质感并存，耐用性拉满",
        feature3Title: "个性化刻字",
        feature3Desc: "支持定制姓名、Logo 或特殊日期，打造专属咖啡器具",
        feature4Title: "终身售后维护",
        feature4Desc: "刀盘可替换、结构可保养，一台磨豆机陪你走过无数杯咖啡",
        contactTitle: "联系我们",
        contactSub: "有定制需求或产品咨询，随时和我们聊聊",
        contactAddress: "工作室地址：广东顺德杏坛",
        btnWechat: "微信联系",
        copyright: "&copy; 2024 相伴咖啡 | 手冲器具手作工作室"
    },
    en: {
        siteTitle: "Xiangban Coffee",
        navHome: "Home",
        navProducts: "Products",
        navContact: "Contact",
        ctaCustom: "Custom Order",
        heroTitle: "Craftsmanship in Every Cup",
        heroDesc: "Handcrafted Coffee Grinders · Precision Machining · Custom Engraving",
        btnExplore: "Explore Works",
        btnCustom: "Custom Order",
        featuresTitle: "Core Advantages",
        featuresSub: "Each grinder combines craftsmanship and coffee culture",
        feature1Title: "Custom Conical Burr",
        feature1Desc: "48mm precision burrs, ideal for pour-over & espresso",
        feature2Title: "Full Aluminum Body",
        feature2Desc: "6061-T6 aluminum, lightweight and durable",
        feature3Title: "Custom Engraving",
        feature3Desc: "Custom names, logos and exclusive designs",
        feature4Title: "Lifetime Maintenance",
        feature4Desc: "Replaceable parts for long-term use",
        contactTitle: "Contact Us",
        contactSub: "For custom orders & inquiries",
        contactAddress: "Xingtan, Shunde, Guangdong",
        btnWechat: "WeChat",
        copyright: "&copy; 2024 Xiangban Coffee | Handcrafted Coffee Tools"
    },
    ar: {
        siteTitle: "قهوة شيانبان",
        navHome: "الرئيسية",
        navProducts: "المنتجات",
        navContact: "اتصل بنا",
        ctaCustom: "طلب مخصص",
        heroTitle: "حرفية في كل كوب",
        heroDesc: "طاحونات قهوة يدوية · تصنيع دقيق · نقش مخصص",
        btnExplore: "استكشف",
        btnCustom: "طلب مخصص",
        featuresTitle: "المميزات",
        featuresSub: "طاحونات تجمع بين الحرفية وثقافة القهوة",
        feature1Title: "أسنان مخروطية دقيقة",
        feature1Desc: "طاحونة 48 مم مناسبة لجميع أنواع القهوة",
        feature2Title: "جسم ألومنيوم متين",
        feature2Desc: "ألومنيوم عالي الجودة خفيف وطويل الأمد",
        feature3Title: "نقش وتصميم مخصص",
        feature3Desc: "أسماء وشعارات وتصاميم فريدة",
        feature4Title: "صيانة مدى الحياة",
        feature4Desc: "قطع غيار قابلة للاستبدال",
        contactTitle: "اتصل بنا",
        contactSub: "للطلبات والاستفسارات",
        contactAddress: "شينتان، شنده، قوانغدونغ",
        btnWechat: "ويتشات",
        copyright: "&copy; 2024 قهوة شيانبان"
    }
};

// 切换语言函数
function setLanguage(lang) {
    // 更新所有带 data-i18n 属性的文本
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 更新HTML语言和方向（阿拉伯语自动右到左）
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // 更新下拉按钮上的当前语言显示
    const langNames = { zh: '中', en: 'EN', ar: 'ع' };
    document.querySelector('.current-lang').textContent = langNames[lang];

    // 更新选中状态
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // 保存用户选择到本地存储
    localStorage.setItem('preferredLang', lang);
}

// 页面加载完成后再绑定所有事件
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有下拉菜单元素
    const langToggle = document.querySelector('.lang-toggle');
    const langMenu = document.querySelector('.lang-menu');
    const langOptions = document.querySelectorAll('.lang-option');

    // 切换下拉菜单显示/隐藏
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        langMenu.classList.toggle('open');
    });

    // 点击页面其他地方关闭下拉菜单
    document.addEventListener('click', () => {
        langMenu.classList.remove('open');
    });

    // 绑定语言选项点击事件
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            setLanguage(lang);
            langMenu.classList.remove('open'); // 切换后自动关闭菜单
        });
    });

    // 初始化语言：读取本地存储或默认中文
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    setLanguage(savedLang);
});