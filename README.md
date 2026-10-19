# Noezz Homestay — demo website

A bilingual (English / Vietnamese) website for a **fictional** beach homestay in Da Nang. Built as a portfolio demo of the kind of site I make for small hospitality businesses.

> Noezz Homestay is not a real business. Reviews, prices, address and email are sample content. Photos are from [Unsplash](https://unsplash.com).

**Pages:** Home · Rooms · Experiences · Contact & booking

## Features

- **Bilingual routes**: `/en/...` and `/vi/...`, with a language switch that keeps the current page
- **Mobile-first** layout, tested at 375 px wide
- **Booking request form** without a backend: it validates the dates and opens WhatsApp or the email app with the request already written
- "Book this room" buttons pre-select the room in the form
- Statically pre-rendered pages, optimized images (`next/image`)

## Tech

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · deployed on Vercel

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # booking form logic
```

## Project structure

| Path | What it holds |
|---|---|
| `app/[lang]/dictionaries/*.json` | All text, one file per language. Edit prices and copy here. |
| `app/[lang]/` | The four pages and the shared layout |
| `components/` | Header, footer, room card, booking form |
| `lib/photos.ts` | Photo URLs |
| `lib/booking.ts` | Form validation and message text (tested in `booking.test.ts`) |

Made by [Duong Thanh Nam](https://duongthanhnam.vercel.app).
