# Cloudflare Pages Kurulum ve Ayarlar

Bu proje, Cloudflare Pages üzerinde statik bir site olarak çalışacak şekilde yapılandırılmıştır. "Robot yoklaması" veya "Loading" ekranlarını kaldırmak için aşağıdaki adımları izleyin.

## 1. Cloudflare Dashboard Ayarları

Cloudflare'ın güvenlik ve optimizasyon özellikleri bazen kullanıcıların karşısına "Checking your browser" (Robot kontrolü) veya yükleme ekranları çıkarabilir. Bunları kapatmak için:

### Robot Kontrolü ve Güvenlik Duvarı (WAF)
Bu ekranlar genellikle Cloudflare'ın "Bot Fight Mode" veya yüksek güvenlik seviyesi nedeniyle görünür.

1. Cloudflare Dashboard'a gidin ve sitenizi seçin.
2. Sol menüden **Security** > **Settings** kısmına gidin.
   - **Security Level**: `Essentially Off` veya `Low` olarak ayarlayın.
3. Sol menüden **Security** > **Bots** kısmına gidin.
   - **Bot Fight Mode**: `Off` (Kapalı) duruma getirin.

### Loading (Yükleme) Ekranları / Gecikmeler
Cloudflare'ın JavaScript optimizasyonları bazen sayfa yüklenirken beklemeye neden olabilir.

1. Sol menüden **Speed** > **Optimization** kısmına gidin.
2. **Rocket Loader™** özelliğini bulun ve `Off` (Kapalı) yapın.
3. **Auto Minify** ayarlarında (JavaScript, CSS, HTML) işaretli olanları kaldırın (Astro zaten build sırasında bunları optimize eder).

## 2. Proje Ayarları

Projeniz zaten statik (`static`) olarak ayarlanmıştır. Ekstra bir sunucu ayarına gerek yoktur.

- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
