// ---------- Языки ----------
const i18n = {
  ru: {
    title: 'DrChuk — Разработчик | Сайты на заказ',
    htmlLang: 'ru',
    toggleLabel: 'EN',
    totop: 'Наверх',
    'nav.about': 'Обо мне',
    'nav.portfolio': 'Портфолио',
    'nav.contacts': 'Контакты',
    'hero.work': 'Мои работы',
    'hero.contact': 'Связаться со мной',
    'hero.greeting': 'Привет, я',
    'about.title': 'Обо мне',
    'about.who.title': '👨‍💻 Кто я',
    'about.who.text': 'Разрабатываю решения для автоматизации и веб-приложений, используя современные AI-инструменты. Владею Python, умею работать с системными API (Windows hooks, audio control), создаю качественные интерфейсы.',
    'about.doing.title': '⚡ Что я делаю',
    'about.doing.text': 'Автоматизирую рутинные задачи, разрабатываю веб-приложения и интегрирую AI-инструменты в рабочие процессы. Работаю с системными API Windows и собираю всё в аккуратные, удобные интерфейсы.',
    'about.why.title': '🎯 Почему я',
    'about.why.text': 'Честные сроки, внимание к деталям и живой интерес к новым технологиям. Разбираюсь в задаче до конца и довожу решения до работающего результата.',
    'tag.python': 'Python',
    'tag.ai': 'AI-инструменты',
    'tag.automation': 'Автоматизация',
    'tag.win': 'Windows API',
    'tag.js': 'JavaScript',
    'tag.html': 'HTML/CSS',
    'tag.jsanim': 'JS-анимации',
    'portfolio.title': 'Портфолио',
    'project.coffee.title': 'Лендинг для кофейни',
    'project.coffee.desc': 'Одностраничный сайт с меню, отзывами и формой бронирования столика.',
    'project.mic.desc': 'Системная утилита для быстрого отключения микрофона горячими клавишами.',
    'project.key.desc': 'Инструмент для автоматизации набора текста и работы с клавиатурой.',
    'hint.open': 'Открыть проект ↗',
    'hint.github': 'Открыть на GitHub ↗',
    'contacts.title': 'Контакты',
    'contacts.text': 'Есть идея или проект? Пишите — обсудим задачи, сроки и стоимость. Отвечаю быстро!',
    'contacts.github': 'GitHub',
    footer: '© 2026 DrChuk · Создаю сайты с душой 💙',
    phrases: [
      'Python-разработчик',
      'Автоматизация и веб-приложения',
      'Использую AI-инструменты'
    ]
  },
  en: {
    title: 'DrChuk — Developer | Custom websites',
    htmlLang: 'en',
    toggleLabel: 'RU',
    totop: 'Back to top',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.contacts': 'Contacts',
    'hero.work': 'My work',
    'hero.contact': 'Get in touch',
    'hero.greeting': "Hi, I'm",
    'about.title': 'About me',
    'about.who.title': '👨‍💻 Who I am',
    'about.who.text': 'I build automation solutions and web apps using modern AI tools. I work with Python, system APIs (Windows hooks, audio control) and create clean, polished interfaces.',
    'about.doing.title': '⚡ What I do',
    'about.doing.text': 'Automating routine tasks, building web applications and integrating AI tools into workflows. I work with Windows system APIs and wrap everything in neat, user-friendly interfaces.',
    'about.why.title': '🎯 Why me',
    'about.why.text': 'Honest deadlines, attention to detail and a genuine interest in new technology. I dig into the problem thoroughly and ship solutions that actually work.',
    'tag.python': 'Python',
    'tag.ai': 'AI tools',
    'tag.automation': 'Automation',
    'tag.win': 'Windows API',
    'tag.js': 'JavaScript',
    'tag.html': 'HTML/CSS',
    'tag.jsanim': 'JS animations',
    'portfolio.title': 'Portfolio',
    'project.coffee.title': 'Coffee shop landing',
    'project.coffee.desc': 'A one-page site with a menu, reviews and a table reservation form.',
    'project.mic.desc': 'A system utility for muting your microphone with hotkeys in one click.',
    'project.key.desc': 'A tool for automating text input and keyboard workflows.',
    'hint.open': 'Open project ↗',
    'hint.github': 'View on GitHub ↗',
    'contacts.title': 'Contacts',
    'contacts.text': 'Have an idea or a project? Drop me a line — let\'s talk tasks, deadlines and budget. I reply fast!',
    'contacts.github': 'GitHub',
    footer: '© 2026 DrChuk · Creating sites with a soul 💙',
    phrases: [
      'Python developer',
      'Automation & web apps',
      'Powering work with AI tools'
    ]
  }
};

// Эффект печати текста
let phrases = i18n.ru.phrases;
const typedEl = document.getElementById('typed');
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
let timeoutId = null;

function type() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      timeoutId = setTimeout(type, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  timeoutId = setTimeout(type, deleting ? 40 : 80);
}

// Переключение языка
function applyLang(lang) {
  const dict = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.title = dict.title;
  document.documentElement.lang = dict.htmlLang;
  document.getElementById('langToggle').textContent = dict.toggleLabel;
  document.getElementById('toTop').title = dict.totop;

  phrases = dict.phrases;
  phraseIndex = 0;
  charIndex = 0;
  deleting = false;
  if (timeoutId) clearTimeout(timeoutId);
  typedEl.textContent = '';
  type();

  localStorage.setItem('lang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  const current = document.documentElement.lang === 'en' ? 'ru' : 'en';
  applyLang(current);
});

applyLang(localStorage.getItem('lang') || 'ru');

// Появление элементов при прокрутке
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Подсветка активного пункта меню
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let currentId = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      currentId = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
  });

  // Кнопка "наверх"
  document.getElementById('toTop').classList.toggle('show', window.scrollY > 500);
});

// Плавная прокрутка к началу
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});