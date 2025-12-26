# Папка для изображений

Поместите сюда следующие изображения:

## Необходимые изображения:

1. **Аватар** (рекомендуемый размер: 400x400px или больше)
   - Название: `avatar.jpg` или `avatar.png`
   - Используется в hero-секции

2. **QR-коды** (рекомендуемый размер: 200x200px или больше)
   - `qr-whatsapp.jpg` - QR-код для WhatsApp
   - `qr-telegram.jpg` - QR-код для Telegram  
   - `qr-instagram.jpg` - QR-код для Instagram
   - `qr-youtube.jpg` - QR-код для YouTube
   - `qr-tiktok.jpg` - QR-код для TikTok

## Как создать QR-коды:

1. Используйте онлайн-генераторы QR-кодов:
   - https://www.qr-code-generator.com/
   - https://qr-code-generator.com/
   - https://www.the-qrcode-generator.com/

2. Или используйте Python библиотеку `qrcode`:
   ```python
   import qrcode
   qr = qrcode.QRCode(version=1, box_size=10, border=5)
   qr.add_data('https://wa.me/message/VGBVTLQBLHQ7I1')
   qr.make(fit=True)
   img = qr.make_image(fill_color="black", back_color="white")
   img.save("qr-whatsapp.jpg")
   ```

## Примечание:

Если изображения отсутствуют, сайт будет работать, но покажет заглушки вместо QR-кодов.

