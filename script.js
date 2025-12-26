// ============================================
// NAVIGATION & SCROLL EFFECTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('slider-dots');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentSlide = 0;

    // Add shadow to nav on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }

        // Show/hide scroll to top button
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.card-style, .about-fact').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Order calculator
    const serviceSelect = document.getElementById('service-type');
    const serviceOptionsDiv = document.getElementById('service-options');
    const urgentCheckbox = document.getElementById('urgent');
    const onSiteCheckbox = document.getElementById('on-site');
    const totalEl = document.getElementById('total-price');
    const breakdownEl = document.getElementById('price-breakdown');
    const whatsappLink = document.getElementById('whatsapp-link');

    function formatPrice(value) {
        return value.toLocaleString('ru-RU') + '₸';
    }

    // Шаблоны опций для каждой услуги
    const serviceTemplates = {
        'it-infra': `
            <label class="block text-sm font-semibold text-gray-700 mb-3">Тип настройки:</label>
            <div class="mb-6 space-y-2">
                <label class="flex items-center">
                    <input type="checkbox" name="it-option" value="servers" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Настройка серверов (+80,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="it-option" value="network" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Настройка сетевого оборудования (+60,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="it-option" value="security" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Настройка оборудования сетевой безопасности (+100,000₸)</span>
                </label>
            </div>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Закуп оборудования:</label>
            <div class="mb-6">
                <label class="flex items-center mb-2">
                    <input type="radio" name="equipment" value="with" class="mr-2 w-4 h-4 text-teal-600" checked>
                    <span>С закупом оборудования (+30%)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="equipment" value="without" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Без закупа оборудования</span>
                </label>
            </div>
        `,
        'streaming': `
            <label class="block text-sm font-semibold text-gray-700 mb-3">Операторы:</label>
            <div class="mb-6">
                <label class="flex items-center mb-2">
                    <input type="radio" name="operators" value="with" class="mr-2 w-4 h-4 text-teal-600" checked>
                    <span>С операторами (50,000₸ за камеру)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="operators" value="without" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Без операторов (30,000₸ за камеру)</span>
                </label>
            </div>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Количество камер:</label>
            <select id="cameras-count" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 mb-6">
                ${Array.from({length: 15}, (_, i) => i + 2).map(num => 
                    `<option value="${num}">${num} камер${num === 2 || num === 3 || num === 4 ? 'ы' : ''}</option>`
                ).join('')}
            </select>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Дополнительные специалисты:</label>
            <div class="mb-6 space-y-2">
                <label class="flex items-center">
                    <input type="checkbox" name="streaming-staff" value="sound" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Режиссер звука (+50,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="streaming-staff" value="director" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Режиссер эфира (+80,000₸)</span>
                </label>
            </div>
        `,
        'training': `
            <label class="block text-sm font-semibold text-gray-700 mb-3">Формат обучения:</label>
            <div class="mb-6">
                <label class="flex items-center mb-2">
                    <input type="radio" name="training-format" value="online" class="mr-2 w-4 h-4 text-teal-600" checked>
                    <span>Онлайн (базовая цена)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="training-format" value="offline" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Офлайн (+50% к базовой цене)</span>
                </label>
            </div>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Закуп оборудования:</label>
            <div class="mb-6">
                <label class="flex items-center mb-2">
                    <input type="radio" name="equipment" value="with" class="mr-2 w-4 h-4 text-teal-600" checked>
                    <span>С закупом оборудования (+30%)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="equipment" value="without" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Без закупа оборудования</span>
                </label>
            </div>
        `,
        'consulting': `
            <label class="block text-sm font-semibold text-gray-700 mb-3">Закуп оборудования:</label>
            <div class="mb-6">
                <label class="flex items-center mb-2">
                    <input type="radio" name="equipment" value="with" class="mr-2 w-4 h-4 text-teal-600" checked>
                    <span>С закупом оборудования (+30%)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="equipment" value="without" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Без закупа оборудования</span>
                </label>
            </div>
        `,
        'videography': `
            <label class="block text-sm font-semibold text-gray-700 mb-3">Тип съемки:</label>
            <div class="mb-6">
                <label class="flex items-center mb-2">
                    <input type="radio" name="videography-type" value="1cam" class="mr-2 w-4 h-4 text-teal-600" checked>
                    <span>1 камерная съемка (100,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="videography-type" value="4cam" class="mr-2 w-4 h-4 text-teal-600">
                    <span>4 камерная съемка (400,000₸)</span>
                </label>
            </div>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Фотограф:</label>
            <select id="photographer" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 mb-6">
                <option value="none">Без фотографа</option>
                <option value="simple">Простая съемка (+50,000₸)</option>
                <option value="medium">Средняя сложность (+75,000₸)</option>
                <option value="complex">Высокая сложность (+100,000₸)</option>
            </select>
        `,
        'repair': `
            <label class="block text-sm font-semibold text-gray-700 mb-3">Тип устройства:</label>
            <div class="mb-6">
                <label class="flex items-center mb-2">
                    <input type="radio" name="device-type" value="pc" class="mr-2 w-4 h-4 text-teal-600" checked>
                    <span>Персональный компьютер (базовая цена)</span>
                </label>
                <label class="flex items-center mb-2">
                    <input type="radio" name="device-type" value="laptop" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Ноутбук (+20,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="device-type" value="monoblock" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Моноблок (+30,000₸)</span>
                </label>
            </div>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Тип работ:</label>
            <div class="mb-6 space-y-2">
                <label class="flex items-center">
                    <input type="checkbox" name="repair-work" value="diagnostic" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Диагностика (+5,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="repair-work" value="os-install" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Установка ОС (+15,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="repair-work" value="drivers" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Установка драйверов (+5,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="repair-work" value="software" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Установка ПО (+10,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="repair-work" value="optimization" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Оптимизация системы (+10,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="repair-work" value="antivirus" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Удаление вирусов (+15,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="repair-work" value="cleaning" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Чистка от пыли (+8,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="repair-work" value="thermal" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Замена термопасты (+10,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="repair-work" value="hardware" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Замена комплектующих (цена договорная)</span>
                </label>
            </div>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Восстановление данных:</label>
            <div class="mb-6">
                <label class="flex items-center mb-2">
                    <input type="radio" name="data-recovery" value="none" class="mr-2 w-4 h-4 text-teal-600" checked>
                    <span>Не требуется</span>
                </label>
                <label class="flex items-center mb-2">
                    <input type="radio" name="data-recovery" value="simple" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Простое восстановление (+25,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="data-recovery" value="complex" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Сложное восстановление (+50,000₸)</span>
                </label>
            </div>
        `,
        'webdev': `
            <label class="block text-sm font-semibold text-gray-700 mb-3">Тип проекта:</label>
            <div class="mb-6">
                <label class="flex items-center mb-2">
                    <input type="radio" name="webdev-type" value="landing" class="mr-2 w-4 h-4 text-teal-600" checked>
                    <span>Лендинг (150,000₸)</span>
                </label>
                <label class="flex items-center mb-2">
                    <input type="radio" name="webdev-type" value="corporate" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Корпоративный сайт (300,000₸)</span>
                </label>
                <label class="flex items-center mb-2">
                    <input type="radio" name="webdev-type" value="shop" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Интернет-магазин (500,000₸)</span>
                </label>
                <label class="flex items-center mb-2">
                    <input type="radio" name="webdev-type" value="portal" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Портал/Веб-приложение (800,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="webdev-type" value="custom" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Индивидуальный проект (цена договорная)</span>
                </label>
            </div>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Дополнительные услуги:</label>
            <div class="mb-6 space-y-2">
                <label class="flex items-center">
                    <input type="checkbox" name="webdev-option" value="design" class="mr-2 w-4 h-4 text-teal-600">
                    <span>UI/UX дизайн (+50,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="webdev-option" value="seo" class="mr-2 w-4 h-4 text-teal-600">
                    <span>SEO оптимизация (+40,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="webdev-option" value="integration" class="mr-2 w-4 h-4 text-teal-600">
                    <span>API интеграции (+60,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="webdev-option" value="hosting" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Хостинг и развертывание (+30,000₸)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="webdev-option" value="support" class="mr-2 w-4 h-4 text-teal-600">
                    <span>Техподдержка (от 20,000₸/мес)</span>
                </label>
            </div>
        `
    };

    // Базовые цены услуг
    const basePrices = {
        'it-infra': 120000,
        'streaming': 0, // Рассчитывается динамически
        'training': 90000,
        'consulting': 150000,
        'videography': 0, // Рассчитывается динамически
        'repair': 15000, // Базовая стоимость ремонта ПК
        'webdev': 0 // Рассчитывается динамически
    };

    function updateServiceOptions() {
        const serviceType = serviceSelect.value;
        if (serviceOptionsDiv && serviceTemplates[serviceType]) {
            serviceOptionsDiv.innerHTML = serviceTemplates[serviceType];
            // Добавляем обработчики событий для новых элементов
            attachEventListeners();
            calcTotal();
        }
    }

    function attachEventListeners() {
        // Обработчики для всех динамически созданных элементов
        document.querySelectorAll('input[type="checkbox"], input[type="radio"], select').forEach(el => {
            if (!el.hasAttribute('data-listener-attached')) {
                el.setAttribute('data-listener-attached', 'true');
                el.addEventListener('change', calcTotal);
            }
        });
    }

    function calcTotal() {
        if (!serviceSelect || !totalEl) return;
        
        const serviceType = serviceSelect.value;
        let total = 0;
        const breakdown = [];
        
        // Расчет в зависимости от типа услуги
        switch(serviceType) {
            case 'it-infra':
                total = basePrices['it-infra'];
                breakdown.push(`Базовая стоимость: ${formatPrice(total)}`);
                
                // Опции настройки
                const itOptions = document.querySelectorAll('input[name="it-option"]:checked');
                itOptions.forEach(opt => {
                    let addPrice = 0;
                    if (opt.value === 'servers') addPrice = 80000;
                    else if (opt.value === 'network') addPrice = 60000;
                    else if (opt.value === 'security') addPrice = 100000;
                    if (addPrice > 0) {
                        total += addPrice;
                        breakdown.push(`+${formatPrice(addPrice)} (${opt.parentElement.textContent.trim()})`);
                    }
                });
                
                // Закуп оборудования
                const equipment = document.querySelector('input[name="equipment"]:checked')?.value;
                if (equipment === 'with') {
                    const equipmentAdd = Math.round(total * 0.3);
                    total += equipmentAdd;
                    breakdown.push(`+${formatPrice(equipmentAdd)} (закуп оборудования)`);
                }
                break;
                
            case 'streaming':
                const operators = document.querySelector('input[name="operators"]:checked')?.value;
                const camerasCount = parseInt(document.getElementById('cameras-count')?.value) || 2;
                const pricePerCamera = operators === 'with' ? 50000 : 30000;
                const camerasTotal = camerasCount * pricePerCamera;
                total = camerasTotal;
                breakdown.push(`${camerasCount} камер × ${formatPrice(pricePerCamera)} = ${formatPrice(camerasTotal)}`);
                
                // Дополнительные специалисты
                const streamingStaff = document.querySelectorAll('input[name="streaming-staff"]:checked');
                streamingStaff.forEach(staff => {
                    let addPrice = 0;
                    if (staff.value === 'sound') addPrice = 50000;
                    else if (staff.value === 'director') addPrice = 80000;
                    if (addPrice > 0) {
                        total += addPrice;
                        breakdown.push(`+${formatPrice(addPrice)} (${staff.parentElement.textContent.trim()})`);
                    }
                });
                break;
                
            case 'training':
                let trainingBase = basePrices['training'];
                const trainingFormat = document.querySelector('input[name="training-format"]:checked')?.value;
                if (trainingFormat === 'offline') {
                    trainingBase = Math.round(trainingBase * 1.5);
                    breakdown.push(`Базовая стоимость (офлайн): ${formatPrice(trainingBase)}`);
                } else {
                    breakdown.push(`Базовая стоимость (онлайн): ${formatPrice(trainingBase)}`);
                }
                total = trainingBase;
                
                // Закуп оборудования
                const trainingEquipment = document.querySelector('input[name="equipment"]:checked')?.value;
                if (trainingEquipment === 'with') {
                    const equipmentAdd = Math.round(total * 0.3);
                    total += equipmentAdd;
                    breakdown.push(`+${formatPrice(equipmentAdd)} (закуп оборудования)`);
                }
                break;
                
            case 'consulting':
                total = basePrices['consulting'];
                breakdown.push(`Базовая стоимость: ${formatPrice(total)}`);
                
                // Закуп оборудования
                const consultingEquipment = document.querySelector('input[name="equipment"]:checked')?.value;
                if (consultingEquipment === 'with') {
                    const equipmentAdd = Math.round(total * 0.3);
                    total += equipmentAdd;
                    breakdown.push(`+${formatPrice(equipmentAdd)} (закуп оборудования)`);
                }
                break;
                
            case 'videography':
                const videographyType = document.querySelector('input[name="videography-type"]:checked')?.value;
                if (videographyType === '1cam') {
                    total = 100000;
                    breakdown.push(`1 камерная съемка: ${formatPrice(total)}`);
                } else if (videographyType === '4cam') {
                    total = 400000;
                    breakdown.push(`4 камерная съемка: ${formatPrice(total)}`);
                }
                
                // Фотограф
                const photographer = document.getElementById('photographer')?.value;
                if (photographer && photographer !== 'none') {
                    let photoPrice = 0;
                    if (photographer === 'simple') photoPrice = 50000;
                    else if (photographer === 'medium') photoPrice = 75000;
                    else if (photographer === 'complex') photoPrice = 100000;
                    if (photoPrice > 0) {
                        total += photoPrice;
                        breakdown.push(`+${formatPrice(photoPrice)} (фотограф)`);
                    }
                }
                break;
                
            case 'repair':
                total = basePrices['repair'];
                breakdown.push(`Базовая стоимость: ${formatPrice(total)}`);
                
                // Тип устройства
                const deviceType = document.querySelector('input[name="device-type"]:checked')?.value;
                if (deviceType === 'laptop') {
                    total += 20000;
                    breakdown.push(`+${formatPrice(20000)} (ноутбук)`);
                } else if (deviceType === 'monoblock') {
                    total += 30000;
                    breakdown.push(`+${formatPrice(30000)} (моноблок)`);
                }
                
                // Тип работ
                const repairWorks = document.querySelectorAll('input[name="repair-work"]:checked');
                repairWorks.forEach(work => {
                    let addPrice = 0;
                    const value = work.value;
                    if (value === 'diagnostic') addPrice = 5000;
                    else if (value === 'os-install') addPrice = 15000;
                    else if (value === 'drivers') addPrice = 5000;
                    else if (value === 'software') addPrice = 10000;
                    else if (value === 'optimization') addPrice = 10000;
                    else if (value === 'antivirus') addPrice = 15000;
                    else if (value === 'cleaning') addPrice = 8000;
                    else if (value === 'thermal') addPrice = 10000;
                    // hardware - цена договорная, не добавляем автоматически
                    
                    if (addPrice > 0) {
                        total += addPrice;
                        breakdown.push(`+${formatPrice(addPrice)} (${work.parentElement.textContent.trim()})`);
                    }
                });
                
                // Восстановление данных
                const dataRecovery = document.querySelector('input[name="data-recovery"]:checked')?.value;
                if (dataRecovery === 'simple') {
                    total += 25000;
                    breakdown.push(`+${formatPrice(25000)} (простое восстановление данных)`);
                } else if (dataRecovery === 'complex') {
                    total += 50000;
                    breakdown.push(`+${formatPrice(50000)} (сложное восстановление данных)`);
                }
                break;
                
            case 'webdev':
                // Тип проекта
                const webdevType = document.querySelector('input[name="webdev-type"]:checked')?.value;
                if (webdevType === 'landing') {
                    total = 150000;
                    breakdown.push(`Лендинг: ${formatPrice(total)}`);
                } else if (webdevType === 'corporate') {
                    total = 300000;
                    breakdown.push(`Корпоративный сайт: ${formatPrice(total)}`);
                } else if (webdevType === 'shop') {
                    total = 500000;
                    breakdown.push(`Интернет-магазин: ${formatPrice(total)}`);
                } else if (webdevType === 'portal') {
                    total = 800000;
                    breakdown.push(`Портал/Веб-приложение: ${formatPrice(total)}`);
                } else if (webdevType === 'custom') {
                    total = 0;
                    breakdown.push(`Индивидуальный проект: цена договорная`);
                }
                
                // Дополнительные услуги
                const webdevOptions = document.querySelectorAll('input[name="webdev-option"]:checked');
                webdevOptions.forEach(opt => {
                    let addPrice = 0;
                    const value = opt.value;
                    if (value === 'design') addPrice = 50000;
                    else if (value === 'seo') addPrice = 40000;
                    else if (value === 'integration') addPrice = 60000;
                    else if (value === 'hosting') addPrice = 30000;
                    // support - цена договорная, не добавляем автоматически
                    
                    if (addPrice > 0) {
                        total += addPrice;
                        breakdown.push(`+${formatPrice(addPrice)} (${opt.parentElement.textContent.trim()})`);
                    }
                });
                break;
        }
        
        // Общие дополнительные опции
        if (urgentCheckbox?.checked) {
            const rushAdd = Math.round(total * 0.2);
            total += rushAdd;
            breakdown.push(`+${formatPrice(rushAdd)} (срочный заказ)`);
        }
        
        if (onSiteCheckbox?.checked) {
            total += 50000;
            breakdown.push(`+${formatPrice(50000)} (выезд/площадка)`);
        }
        
        // Обновление отображения
        totalEl.textContent = formatPrice(total);
        
        // Детализация стоимости
        if (breakdownEl) {
            if (breakdown.length > 0) {
                breakdownEl.innerHTML = breakdown.join('<br>');
            } else {
                breakdownEl.textContent = '';
            }
        }
        
        // Обновление ссылки WhatsApp
        updateWhatsAppLink(serviceType, total);
    }

    function updateWhatsAppLink(serviceType, total) {
        if (!whatsappLink) return;
        
        const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
        let message = `Здравствуйте! Хочу заказать услугу:\n\nУслуга: ${serviceName}\n\n`;
        
        // Детали в зависимости от услуги
        switch(serviceType) {
            case 'streaming':
                const operators = document.querySelector('input[name="operators"]:checked')?.value;
                const camerasCount = document.getElementById('cameras-count')?.value;
                message += `Операторы: ${operators === 'with' ? 'С операторами' : 'Без операторов'}\n`;
                message += `Количество камер: ${camerasCount}\n`;
                const streamingStaff = document.querySelectorAll('input[name="streaming-staff"]:checked');
                if (streamingStaff.length > 0) {
                    message += `Доп. специалисты: ${Array.from(streamingStaff).map(s => s.parentElement.textContent.trim()).join(', ')}\n`;
                }
                break;
            case 'it-infra':
                const itOptions = document.querySelectorAll('input[name="it-option"]:checked');
                if (itOptions.length > 0) {
                    message += `Тип настройки: ${Array.from(itOptions).map(o => o.parentElement.textContent.trim()).join(', ')}\n`;
                }
                const equipment = document.querySelector('input[name="equipment"]:checked')?.value;
                message += `Закуп оборудования: ${equipment === 'with' ? 'Да' : 'Нет'}\n`;
                break;
            case 'training':
                const trainingFormat = document.querySelector('input[name="training-format"]:checked')?.value;
                message += `Формат: ${trainingFormat === 'online' ? 'Онлайн' : 'Офлайн'}\n`;
                const trainingEquipment = document.querySelector('input[name="equipment"]:checked')?.value;
                message += `Закуп оборудования: ${trainingEquipment === 'with' ? 'Да' : 'Нет'}\n`;
                break;
            case 'videography':
                const videographyType = document.querySelector('input[name="videography-type"]:checked')?.value;
                message += `Тип съемки: ${videographyType === '1cam' ? '1 камерная' : '4 камерная'}\n`;
                const photographer = document.getElementById('photographer')?.value;
                if (photographer && photographer !== 'none') {
                    message += `Фотограф: ${document.getElementById('photographer').options[document.getElementById('photographer').selectedIndex].text}\n`;
                }
                break;
            case 'repair':
                const deviceType = document.querySelector('input[name="device-type"]:checked')?.value;
                let deviceTypeText = 'Персональный компьютер';
                if (deviceType === 'laptop') deviceTypeText = 'Ноутбук';
                else if (deviceType === 'monoblock') deviceTypeText = 'Моноблок';
                message += `Тип устройства: ${deviceTypeText}\n`;
                
                const repairWorks = document.querySelectorAll('input[name="repair-work"]:checked');
                if (repairWorks.length > 0) {
                    message += `Тип работ: ${Array.from(repairWorks).map(w => w.parentElement.textContent.trim()).join(', ')}\n`;
                }
                
                const dataRecovery = document.querySelector('input[name="data-recovery"]:checked')?.value;
                if (dataRecovery && dataRecovery !== 'none') {
                    message += `Восстановление данных: ${dataRecovery === 'simple' ? 'Простое' : 'Сложное'}\n`;
                }
                break;
            case 'webdev':
                const webdevType = document.querySelector('input[name="webdev-type"]:checked')?.value;
                let webdevTypeText = 'Лендинг';
                if (webdevType === 'corporate') webdevTypeText = 'Корпоративный сайт';
                else if (webdevType === 'shop') webdevTypeText = 'Интернет-магазин';
                else if (webdevType === 'portal') webdevTypeText = 'Портал/Веб-приложение';
                else if (webdevType === 'custom') webdevTypeText = 'Индивидуальный проект';
                message += `Тип проекта: ${webdevTypeText}\n`;
                
                const webdevOptions = document.querySelectorAll('input[name="webdev-option"]:checked');
                if (webdevOptions.length > 0) {
                    message += `Дополнительные услуги: ${Array.from(webdevOptions).map(o => o.parentElement.textContent.trim()).join(', ')}\n`;
                }
                break;
        }
        
        const options = [];
        if (urgentCheckbox?.checked) options.push('Срочный заказ');
        if (onSiteCheckbox?.checked) options.push('Выезд/Доп. площадка');
        if (options.length > 0) {
            message += `Доп. опции: ${options.join(', ')}\n`;
        }
        
        message += `\nИтоговая стоимость: ${formatPrice(total)}\n\nПожалуйста, уточните детали.`;
        
        whatsappLink.href = `https://wa.me/message/VGBVTLQBLHQ7I1?text=${encodeURIComponent(message)}`;
    }

    // Инициализация
    if (serviceSelect) {
        serviceSelect.addEventListener('change', updateServiceOptions);
    }
    
    if (urgentCheckbox) {
        urgentCheckbox.addEventListener('change', calcTotal);
    }
    
    if (onSiteCheckbox) {
        onSiteCheckbox.addEventListener('change', calcTotal);
    }
    
    // Инициализация при загрузке
    updateServiceOptions();

    // Testimonials slider setup
    if (sliderTrack && slides.length) {
        slides.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (idx === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Слайд ${idx + 1}`);
            dot.addEventListener('click', () => goToSlide(idx));
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.slider-dot');

        function goToSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        }

        prevBtn?.addEventListener('click', () => goToSlide(currentSlide - 1));
        nextBtn?.addEventListener('click', () => goToSlide(currentSlide + 1));

        // Auto-play
        let autoplay = setInterval(() => goToSlide(currentSlide + 1), 6000);

        // Pause on hover
        sliderTrack.addEventListener('mouseenter', () => clearInterval(autoplay));
        sliderTrack.addEventListener('mouseleave', () => {
            autoplay = setInterval(() => goToSlide(currentSlide + 1), 6000);
        });

        // Initialize
        goToSlide(0);
    }
});

// ============================================
// QR CODE ERROR HANDLING
// ============================================

function onQrLoadError(event) {
    const img = event.target;
    if (img.dataset.retry && img.dataset.retry === 'true') {
        // Уже пытались загрузить, показываем заглушку
        img.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.className = 'qr-placeholder w-28 h-28 rounded-lg mb-1 flex flex-col items-center justify-center';
        placeholder.innerHTML = '<i class="fas fa-qrcode text-2xl text-gray-300 mb-1"></i><span class="text-xs text-gray-400">QR-код</span>';
        img.parentNode.insertBefore(placeholder, img);
    } else {
        // Первая попытка - пробуем альтернативный формат
        img.dataset.retry = 'true';
        const src = img.src;
        const newSrc = src.replace(/\.jpg$/, '.png').replace(/\.png$/, '.jpg');
        if (newSrc !== src) {
            img.src = newSrc;
        } else {
            // Если альтернатива не помогла, показываем заглушку
            img.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'qr-placeholder w-28 h-28 rounded-lg mb-1 flex flex-col items-center justify-center';
            placeholder.innerHTML = '<i class="fas fa-qrcode text-2xl text-gray-300 mb-1"></i><span class="text-xs text-gray-400">QR-код</span>';
            img.parentNode.insertBefore(placeholder, img);
        }
    }
}

// ============================================
// GEMINI API INTEGRATION
// ============================================

// Global variables - API key should be set via environment or config
const apiKey = "";
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

// Function to handle exponential backoff for API calls
async function fetchWithRetry(url, options, maxRetries = 5) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                // If it's a 429 (Too Many Requests), throw error to trigger retry
                if (response.status === 429 && i < maxRetries - 1) {
                    throw new Error('Rate limit exceeded, retrying...');
                }
                return response;
            }
            return response;
        } catch (error) {
            if (i < maxRetries - 1) {
                const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                throw new Error('Maximum retries reached.');
            }
        }
    }
}

// Function to call Gemini for IT advice
async function getITAdvice(query) {
    const outputDiv = document.getElementById('ai-output');
    const loadingDiv = document.getElementById('ai-loading');
    const resultDiv = document.getElementById('ai-result');
    
    outputDiv.classList.remove('hidden');
    loadingDiv.classList.remove('hidden');
    resultDiv.innerHTML = '';
    
    const systemPrompt = "Ты — высококлассный DevOps и IT-инженер, специализирующийся на гибридной инфраструктуре, кибербезопасности и автоматизации. Твоя задача — дать краткий (не более 3 абзацев), профессиональный и практичный ответ на технический вопрос пользователя. Используй только русский язык. Отвечай уверенным, экспертным тоном. Обязательно используй Google Search для получения актуальной информации.";
    
    const payload = {
        contents: [{ parts: [{ text: query }] }],
        tools: [{ "google_search": {} }],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
    };

    try {
        const response = await fetchWithRetry(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error?.message || 'API request failed');
        }

        const candidate = result.candidates?.[0];
        if (candidate && candidate.content?.parts?.[0]?.text) {
            const text = candidate.content.parts[0].text;
            let sources = [];
            
            const groundingMetadata = candidate.groundingMetadata;
            if (groundingMetadata && groundingMetadata.groundingAttributions) {
                sources = groundingMetadata.groundingAttributions
                    .map(attribution => ({
                        uri: attribution.web?.uri,
                        title: attribution.web?.title,
                    }))
                    .filter(source => source.uri && source.title);
            }
            
            let htmlContent = `<div class="p-4 bg-gray-50 rounded-xl border border-teal-200">${text}</div>`;
            
            if (sources.length > 0) {
                htmlContent += `<p class="mt-4 text-xs text-gray-500 font-semibold">Источники:</p>`;
                sources.slice(0, 3).forEach(source => {
                    htmlContent += `<a href="${source.uri}" target="_blank" rel="noopener noreferrer" class="block text-xs text-teal-600 hover:text-teal-500 truncate">${source.title}</a>`;
                });
            }
            
            resultDiv.innerHTML = htmlContent;
        } else {
            resultDiv.innerHTML = '<p class="p-4 bg-red-100 text-red-700 rounded-xl">Извините, не удалось получить консультацию. Пожалуйста, попробуйте перефразировать вопрос.</p>';
        }
    } catch (error) {
        console.error("Gemini API Error:", error);
        resultDiv.innerHTML = '<p class="p-4 bg-red-100 text-red-700 rounded-xl">Ошибка подключения к сервису. Проверьте сеть или попробуйте позже.</p>';
    } finally {
        loadingDiv.classList.add('hidden');
    }
}

// Function to trigger the advice request
function requestAdvice() {
    const input = document.getElementById('ai-input-query');
    const resultDiv = document.getElementById('ai-result');
    const outputDiv = document.getElementById('ai-output');
    
    if (input.value.trim() === "") {
        outputDiv.classList.remove('hidden');
        resultDiv.innerHTML = '<p class="p-4 bg-red-100 text-red-700 rounded-xl">Пожалуйста, введите ваш технический вопрос.</p>';
        return;
    }
    
    // Clear previous error/result
    resultDiv.innerHTML = ''; 
    getITAdvice(input.value.trim());
}

// Function to open AI modal
function openAIModal() {
    const modal = document.getElementById('ai-consultation-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus on input
    setTimeout(() => {
        const input = document.getElementById('ai-input-query');
        if (input) input.focus();
    }, 100);
}

// Function to close the AI consultation modal
function closeAIModal() {
    const modal = document.getElementById('ai-consultation-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    
    const input = document.getElementById('ai-input-query');
    const resultDiv = document.getElementById('ai-result');
    const outputDiv = document.getElementById('ai-output');
    
    if (input) input.value = '';
    if (resultDiv) resultDiv.innerHTML = '';
    if (outputDiv) outputDiv.classList.add('hidden');
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('ai-consultation-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAIModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('ai-consultation-modal');
            if (modal && !modal.classList.contains('hidden')) {
                closeAIModal();
            }
        }
    });
});

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// ANALYTICS & TRACKING (Optional)
// ============================================

// Track external link clicks
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('External link clicked:', link.href);
    });
});

// ============================================
// FALLBACK FOR BROKEN ICONS
// ============================================

// Universal fallback for all vendor icons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.vendor-icon').forEach(img => {
        img.addEventListener('error', function() {
            // Hide broken image
            this.style.display = 'none';
            // Show Font Awesome fallback if exists
            const fallback = this.nextElementSibling;
            if (fallback && fallback.classList.contains('fa')) {
                fallback.style.display = 'inline';
            }
        });
    });
});

