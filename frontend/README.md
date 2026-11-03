https://BURAYA-VERCEL-ADRESINI-YAZ.vercel.app

# Sprint 6 + Vize — Router, Context ve Yönetim

Bu proje Sprint 5'in `frontend` klasörü üzerinden devam eder. Sprint 6'da React Router ile gerçek adresler, Context ile ortak etkinlik verisi, controlled form ve doğrulama, yönetim tablosu ile ekle/güncelle/sil işlemleri ve demo giriş/kayıt/şifremi unuttum sayfaları eklenmiştir.

## Kurulum

```bash
cd frontend
npm install
npm run dev
```

Teslimden önce:

```bash
npm run build
npm run preview
```

## Route listesi

- `/` — HomePage
- `/events` — EventsPage
- `/events/:id` — EventDetailPage
- `/login` — LoginPage
- `/register` — RegisterPage
- `/forgot-password` — ForgotPasswordPage
- `/admin` — AdminPage
- `/admin/new` — AddEventPage
- `/admin/:id/edit` — EditEventPage
- `*` — NotFoundPage

## Notlar

- Bu sprintte giriş sistemi gerçek kimlik doğrulama yapmaz.
- `/admin` doğrudan açılır; auth guard yoktur.
- Etkinlik ekleme, güncelleme ve silme Context state'inde çalışır. Sayfa yenilenirse veriler başlangıç haline döner.
- `types/page.ts` ve App içindeki eski `page` state'i / `go()` kaldırılmıştır.
