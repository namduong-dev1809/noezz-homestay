import Image from "next/image";
import Link from "next/link";
import { getDictionary, getLocale } from "./dictionaries";
import { photos } from "@/lib/photos";
import Doodles from "@/components/Doodles";
import RoomCard from "@/components/RoomCard";

export default async function Home() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.home;

  return (
    <>
      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden">
        <Image src={photos.hero} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />
        <Doodles />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pb-14 pt-32 text-white">
          <p className="mb-4 inline-block rounded-full bg-coral px-4 py-1.5 text-sm font-bold">{t.kicker}</p>
          <h1 className="font-display uppercase leading-[0.95] text-5xl sm:text-7xl lg:text-8xl max-w-4xl">
            {t.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">{t.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact`} className="rounded-full bg-coral px-6 py-3 font-bold hover:bg-coral-dark">
              {t.ctaBook}
            </Link>
            <Link href={`/${locale}/rooms`} className="rounded-full bg-white px-6 py-3 font-bold text-ink hover:bg-sand">
              {t.ctaRooms}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 text-center">
        <h2 className="font-display uppercase text-4xl sm:text-6xl">{t.introTitle}</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded bg-coral" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{t.introText}</p>
        <div className="mt-12 grid gap-5 text-left md:grid-cols-3">
          {t.highlights.map((h, i) => (
            <div key={h.title} className="rounded-3xl bg-white p-7 ring-1 ring-ink/5">
              <p className="font-display text-4xl text-coral">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{h.title}</h3>
              <p className="mt-2 text-muted">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <Image src={photos.common} alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="bg-ink/55 py-24 text-center text-white">
          <p className="font-display uppercase text-4xl sm:text-6xl px-4">{t.highlights[1].title}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display uppercase text-4xl sm:text-6xl">{t.roomsTitle}</h2>
            <p className="mt-2 text-muted">{t.roomsText}</p>
          </div>
          <Link href={`/${locale}/rooms`} className="font-bold text-coral hover:underline">
            {dict.nav.rooms} →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {dict.rooms.items.map((room) => (
            <RoomCard key={room.id} room={room} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <h2 className="font-display uppercase text-4xl sm:text-6xl">{t.reviewsTitle}</h2>
        <p className="mt-2 text-sm text-muted">{t.reviewsLabel}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.reviews.map((r) => (
            <figure key={r.name} className="rounded-3xl bg-white p-7 ring-1 ring-ink/5">
              <blockquote className="text-lg">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-bold">
                {r.name} <span className="font-normal text-muted">· {r.from}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[2rem] bg-coral px-6 py-14 text-center text-white">
          <h2 className="font-display uppercase text-4xl sm:text-6xl">{t.bandTitle}</h2>
          <p className="mt-3 text-white/90">{t.bandText}</p>
          <Link href={`/${locale}/contact`} className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-ink hover:bg-sand">
            {dict.nav.book}
          </Link>
        </div>
      </section>
    </>
  );
}
