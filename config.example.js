/**
 * Пример конфигурационного файла
 * 
 * Скопируйте этот файл в config.js и заполните своими данными
 * НЕ коммитьте config.js в репозиторий (он уже в .gitignore)
 */

// Gemini API ключ для AI-консультанта
// Получить можно здесь: https://makersuite.google.com/app/apikey
const CONFIG = {
    geminiApiKey: "YOUR_GEMINI_API_KEY_HERE",
    
    // Настройки AI-консультанта
    aiSettings: {
        model: "gemini-2.5-flash-preview-09-2025",
        maxRetries: 5,
        timeout: 30000
    },
    
    // Настройки анимаций
    animations: {
        enabled: true,
        duration: 300
    },
    
    // Контакты (можно использовать для динамической генерации)
    contacts: {
        whatsapp: "https://wa.me/message/VGBVTLQBLHQ7I1",
        telegram: "https://t.me/AIDOKHAN",
        email: "aidyn@example.com",
        youtube: "https://youtube.com/@aidynkhan?si=semRuuU5BdVjdS9V",
        instagram: "https://www.instagram.com/aidokhandev",
        tiktok: "https://www.tiktok.com/@aidyn_admin?_r=1&_t=ZG-927o0oIwMa0",
        github: "https://github.com/Aido89"
    }
};

// Экспорт для использования в script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

