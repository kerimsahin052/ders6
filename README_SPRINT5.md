# Sprint 5 — Sprint 4 üzerine devam

Bu paket, Sprint 4 projesinin aynısı üzerine Sprint 5 bileşen ayrıştırmasını uygular.
Yeni `frontend` projesi oluşturulmaz; mevcut `frontend` devam eder.

Sprint 5'te eklenen/değiştirilenler:
- `src/components/layout/Header.tsx`
- `src/components/layout/Navigation.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/events/EventCard.tsx`
- `src/components/events/EventList.tsx`
- `src/components/events/EventFilter.tsx`
- `src/components/events/EventDetail.tsx`
- `src/components/forms/EventForm.tsx`
- `src/types/page.ts`
- `src/utils/format-date.ts`
- `src/App.tsx` (küçültüldü; state App'te kaldı)

Sprint 4'ten aynen kalan temel dosyalar:
- `src/App.css`
- `src/index.css`
- `src/data/events.ts`
- `src/types/campus-event.ts`
- `src/utils/filter-events.ts`
- `src/main.tsx`
- `public/afis.svg`
- Vite/TypeScript/package ayarları

Kontrol:
```bash
cd frontend
npm run dev
npm run build
```
