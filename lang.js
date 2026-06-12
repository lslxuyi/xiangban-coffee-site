// 下拉菜单相关元素
const langToggle = document.querySelector('.lang-toggle');
const langMenu = document.querySelector('.lang-menu');
const currentLangSpan = document.querySelector('.current-lang');
const langOptions = document.querySelectorAll('.lang-option');

// 切换下拉菜单显示/隐藏
langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('open');
});

// 点击其他地方关闭下拉菜单
document.addEventListener('click', () => {
    langMenu.classList.remove('open');
});

// 绑定语言选择事件
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        setLanguage(lang);
        langMenu.classList.remove('open');
    });
});

// 切换语言函数
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 更新HTML语言和方向
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // 更新当前语言显示
    const langNames = { zh: '中', en: 'EN', ar: 'ع' };
    currentLangSpan.textContent = langNames[lang];

    // 更新选中状态
    langOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // 保存用户选择
    localStorage.setItem('preferredLang', lang);
}

// 初始化语言
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    setLanguage(savedLang);
});