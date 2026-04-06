# -*- coding: utf-8 -*-
"""One-off builder: extract sections from index.html into subpages and slim index."""
from pathlib import Path

ROOT = Path(__file__).parent
idx = (ROOT / "index.html").read_text(encoding="utf-8")

NAV = """
    <nav id="main-nav" class="nav-fixed sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div class="flex justify-between items-center">
                <a href="index.html#top" class="brand-mark flex items-center space-x-3">
                    <span class="brand-icon">
                        <img src="images/logo.svg" alt="AAAThre Logo" class="brand-icon-img">
                    </span>
                    <span class="brand-text">AAAThre</span>
                </a>
                <div class="hidden md:flex flex-wrap gap-x-4 gap-y-1 text-gray-600 font-medium text-sm">
                    <a href="index.html" class="nav-link hover:accent-text transition duration-200">Главная</a>
                    <a href="services.html" class="nav-link hover:accent-text transition duration-200">Направления</a>
                    <a href="skills.html" class="nav-link hover:accent-text transition duration-200">Навыки</a>
                    <a href="cases.html" class="nav-link hover:accent-text transition duration-200">Кейсы</a>
                    <a href="formats.html" class="nav-link hover:accent-text transition duration-200">Услуги</a>
                    <a href="index.html#order-constructor" class="nav-link hover:accent-text transition duration-200">Смета</a>
                    <a href="index.html#contacts" class="nav-link hover:accent-text transition duration-200">Контакты</a>
                    <a href="myinfo.html" class="nav-link hover:accent-text transition duration-200">Обо мне</a>
                    <a href="training.html" class="nav-link hover:accent-text transition duration-200">Обучение</a>
                </div>
                <button id="mobile-menu-btn" class="md:hidden text-gray-600 hover:text-teal-600 transition" aria-label="Меню">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
            <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4 border-t border-gray-200">
                <div class="flex flex-col space-y-3 pt-4">
                    <a href="index.html" class="nav-link hover:accent-text transition duration-200">Главная</a>
                    <a href="services.html" class="nav-link hover:accent-text transition duration-200">Направления</a>
                    <a href="skills.html" class="nav-link hover:accent-text transition duration-200">Навыки</a>
                    <a href="cases.html" class="nav-link hover:accent-text transition duration-200">Кейсы</a>
                    <a href="formats.html" class="nav-link hover:accent-text transition duration-200">Услуги</a>
                    <a href="index.html#order-constructor" class="nav-link hover:accent-text transition duration-200">Смета</a>
                    <a href="index.html#contacts" class="nav-link hover:accent-text transition duration-200">Контакты</a>
                </div>
            </div>
        </div>
    </nav>
"""

HEAD = """<!DOCTYPE html>
<html lang="ru" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <meta name="description" content="{desc}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="leading-relaxed">
"""

# Footer without closing tags — extra_scripts (e.g. skills filter) must go before script.js
FOOTER_BODY = """
    <footer class="py-12 mt-12 border-t border-gray-200 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
            <a href="index.html#contacts" class="font-semibold text-teal-600 hover:underline">Контакты и мессенджеры</a>
            <span class="mx-2">·</span>
            <a href="index.html" class="hover:underline">На главную</a>
            <p class="mt-4 text-gray-400">&copy; 2026 AAAThre</p>
        </div>
    </footer>
    <button id="scroll-top-btn" class="fixed bottom-8 right-8 z-40 bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-700 transition duration-300 opacity-0 pointer-events-none">
        <i class="fas fa-arrow-up"></i>
    </button>
"""

FOOTER_SCRIPT_END = """
    <script src="script.js" defer></script>
</body>
</html>
"""


def extract_between(text: str, start_marker: str, end_marker: str) -> str:
    a = text.index(start_marker)
    b = text.index(end_marker)
    return text[a:b]


# --- Extract raw sections (markers must match index.html exactly)
services_block = extract_between(
    idx,
    '<section id="services"',
    '\n        <!-- 4. Навыки и технологии',
)
skills_block = extract_between(
    idx,
    '<section id="skills"',
    '\n        <!-- 4.5. Мои проекты в цифрах',
)
metrics_block = extract_between(
    idx,
    '<section id="metrics"',
    '\n        <!-- 5. Проекты и кейсы',
)
cases_block = extract_between(
    idx,
    '<section id="cases"',
    '\n        <!-- 5.5. Конструктор заказа',
)
formats_block = extract_between(
    idx,
    '<section id="formats"',
    '\n        <!-- 7. Отзывы и доверие',
)

# --- Extra UI blocks per page
services_extra = """
        <section class="py-12 border-t border-gray-100">
            <h2 class="section-header text-2xl mb-4">Связанные страницы услуг</h2>
            <p class="text-gray-600 mb-6 text-sm">Перейдите в детальные разделы по направлениям.</p>
            <div class="grid sm:grid-cols-2 gap-4">
                <a href="it-infrastructure.html" class="card-style p-5 hover-lift block"><span class="font-bold accent-text">IT-инфраструктура</span><p class="text-sm text-gray-600 mt-2">Сети, серверы, безопасность</p></a>
                <a href="live-streaming.html" class="card-style p-5 hover-lift block"><span class="font-bold accent-text">Видеостриминг</span><p class="text-sm text-gray-600 mt-2">Эфиры и съёмка</p></a>
                <a href="web-development.html" class="card-style p-5 hover-lift block"><span class="font-bold accent-text">Веб-разработка</span><p class="text-sm text-gray-600 mt-2">Сайты и сервисы</p></a>
                <a href="it-training.html" class="card-style p-5 hover-lift block"><span class="font-bold accent-text">Обучение</span><p class="text-sm text-gray-600 mt-2">Тренинги и STEM</p></a>
                <a href="it-repair.html" class="card-style p-5 hover-lift block"><span class="font-bold accent-text">Ремонт ПК</span><p class="text-sm text-gray-600 mt-2">Ноутбуки и станции</p></a>
            </div>
            <p class="mt-8 text-center">
                <a href="index.html#order-constructor" class="btn-primary inline-block px-6 py-3 rounded-xl">Рассчитать смету на главной</a>
            </p>
        </section>
"""

skills_extra = """
        <section class="py-8 mb-8 rounded-2xl bg-teal-50 border border-teal-100 px-4">
            <p class="text-sm font-semibold text-teal-800 mb-3"><i class="fas fa-filter mr-2"></i>Фильтр блоков навыков</p>
            <div class="flex flex-wrap gap-2" id="skills-filter-bar">
                <button type="button" class="skills-filter-btn px-3 py-1.5 rounded-full text-sm font-semibold bg-teal-600 text-white" data-filter="all">Все</button>
                <button type="button" class="skills-filter-btn px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-white" data-filter="infra">Инфраструктура и сети</button>
                <button type="button" class="skills-filter-btn px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-white" data-filter="media">Медиа и EdTech</button>
            </div>
        </section>
"""

skills_script = """
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var cards = document.querySelectorAll('#skills .space-y-8 > .card-style');
        var cats = ['infra', 'infra', 'media'];
        cards.forEach(function(card, i) { card.setAttribute('data-skill-cat', cats[i] || 'infra'); });
        document.querySelectorAll('.skills-filter-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var f = btn.getAttribute('data-filter');
                document.querySelectorAll('.skills-filter-btn').forEach(function(b) {
                    b.classList.remove('bg-teal-600', 'text-white');
                    b.classList.add('bg-white', 'border', 'border-gray-300');
                });
                btn.classList.add('bg-teal-600', 'text-white');
                btn.classList.remove('bg-white', 'border', 'border-gray-300');
                document.querySelectorAll('#skills .space-y-8 > .card-style').forEach(function(c) {
                    var show = f === 'all' || c.getAttribute('data-skill-cat') === f;
                    c.style.display = show ? '' : 'none';
                });
            });
        });
    });
    </script>
"""

cases_extra = """
        <section class="py-10 text-center">
            <a href="index.html#order-constructor" class="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">
                <i class="fab fa-whatsapp"></i> Обсудить похожий проект
            </a>
            <p class="text-sm text-gray-500 mt-4">Конструктор сметы — на главной странице.</p>
        </section>
"""

formats_extra = """
        <section class="py-12 border-t border-gray-100">
            <h2 class="section-header text-2xl mb-6">Куда перейти дальше</h2>
            <div class="grid sm:grid-cols-2 gap-4 text-sm">
                <a href="it-infrastructure.html" class="card-style p-4 hover-lift"><strong class="accent-text">IT-аудит и инфраструктура</strong></a>
                <a href="live-streaming.html" class="card-style p-4 hover-lift"><strong class="accent-text">Трансляции и студия</strong></a>
                <a href="it-training.html" class="card-style p-4 hover-lift"><strong class="accent-text">Обучение и тренинги</strong></a>
                <a href="web-development.html" class="card-style p-4 hover-lift"><strong class="accent-text">Сайты и веб-сервисы</strong></a>
                <a href="it-repair.html" class="card-style p-4 hover-lift"><strong class="accent-text">Ремонт техники</strong></a>
                <a href="index.html#order-constructor" class="card-style p-4 hover-lift border-2 border-teal-200"><strong class="accent-text">Онлайн-смета →</strong></a>
            </div>
        </section>
"""


def wrap_page(title: str, desc: str, inner: str, extra_before: str = "", extra_after: str = "", extra_scripts: str = "") -> str:
    return (
        HEAD.format(title=title, desc=desc)
        + NAV
        + '<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">\n'
        + '            <nav class="text-sm text-gray-500 mb-8" aria-label="Навигация"><a href="index.html" class="hover:text-teal-600">Главная</a>'
        + ' <span class="mx-1">/</span> <span class="text-gray-800 font-medium">' + title.split("—")[0].strip() + "</span></nav>\n"
        + extra_before
        + inner
        + extra_after
        + "        </div>\n"
        + FOOTER_BODY
        + (extra_scripts or "")
        + FOOTER_SCRIPT_END
    )


pages = [
    (
        "services.html",
        "Ключевые направления — AAAThre",
        "IT, стриминг, разработка, обучение и интеграция — направления работ AAAThre.",
        services_block,
        "",
        services_extra,
        "",
    ),
    (
        "skills.html",
        "Навыки и технологии — AAAThre",
        "Стек технологий: инфраструктура, DevOps, медиа, обучение.",
        skills_block + "\n" + metrics_block,
        skills_extra,
        "",
        skills_script,
    ),
    (
        "cases.html",
        "Проекты и кейсы — AAAThre",
        "Реализованные проекты: IT, трансляции, внедрения.",
        cases_block,
        "",
        cases_extra,
        "",
    ),
    (
        "formats.html",
        "Форматы работы и услуги — AAAThre",
        "Форматы сотрудничества: от аудита до стримов и веб-разработки.",
        formats_block,
        "",
        formats_extra,
        "",
    ),
]

for fname, title, desc, block, eb, ea, es in pages:
    html = wrap_page(title, desc, block, eb, ea, es)
    (ROOT / fname).write_text(html, encoding="utf-8")
    print("Wrote", fname)

# --- Slim index.html
start1 = idx.index("<!-- 3. Чем я занимаюсь")
end1 = idx.index("<!-- 5.5. Конструктор заказа")
start2 = idx.index("<!-- 6. Форматы работы и услуги -->")
end2 = idx.index("<!-- 7. Отзывы и доверие -->")

teaser = """
        <!-- Разделы (полный контент на отдельных страницах) -->
        <section id="site-sections" class="py-14 scroll-mt-20">
            <h2 class="section-header text-3xl">Разделы</h2>
            <p class="text-gray-600 mb-8 max-w-2xl">Подробные описания направлений, навыков, кейсов и форматов вынесены на отдельные страницы — главная остаётся короче.</p>
            <div class="grid sm:grid-cols-2 gap-5">
                <a href="services.html" class="card-style p-6 hover-lift block group border border-transparent hover:border-teal-200">
                    <h3 class="text-lg font-bold accent-text mb-2 flex items-center gap-2"><i class="fas fa-compass"></i> Ключевые направления</h3>
                    <p class="text-sm text-gray-600">IT, стриминг, разработка, обучение, интеграция.</p>
                    <span class="inline-block mt-3 text-sm font-semibold text-teal-600 group-hover:underline">Открыть →</span>
                </a>
                <a href="skills.html" class="card-style p-6 hover-lift block group border border-transparent hover:border-teal-200">
                    <h3 class="text-lg font-bold accent-text mb-2 flex items-center gap-2"><i class="fas fa-layer-group"></i> Навыки и технологии</h3>
                    <p class="text-sm text-gray-600">Стек, инструменты и цифры по проектам.</p>
                    <span class="inline-block mt-3 text-sm font-semibold text-teal-600 group-hover:underline">Открыть →</span>
                </a>
                <a href="cases.html" class="card-style p-6 hover-lift block group border border-transparent hover:border-teal-200">
                    <h3 class="text-lg font-bold accent-text mb-2 flex items-center gap-2"><i class="fas fa-briefcase"></i> Проекты и кейсы</h3>
                    <p class="text-sm text-gray-600">Задачи, решения и результаты.</p>
                    <span class="inline-block mt-3 text-sm font-semibold text-teal-600 group-hover:underline">Открыть →</span>
                </a>
                <a href="formats.html" class="card-style p-6 hover-lift block group border border-transparent hover:border-teal-200">
                    <h3 class="text-lg font-bold accent-text mb-2 flex items-center gap-2"><i class="fas fa-handshake"></i> Форматы работы и услуги</h3>
                    <p class="text-sm text-gray-600">Как можно работать: от аудита до продакшна.</p>
                    <span class="inline-block mt-3 text-sm font-semibold text-teal-600 group-hover:underline">Открыть →</span>
                </a>
            </div>
        </section>

"""

new_idx = idx[:start1] + teaser + idx[end1:start2] + idx[end2:]
(ROOT / "index.html").write_text(new_idx, encoding="utf-8")
print("Updated index.html")

# cleanup temp extracts if any
for t in ROOT.glob("_extract_*.txt"):
    t.unlink(missing_ok=True)

print("Done.")
