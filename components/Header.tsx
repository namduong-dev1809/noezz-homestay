import Link from "next/link";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";
import LangSwitch from "./LangSwitch";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/rooms`, label: dict.nav.rooms },
    { href: `/${locale}/experiences`, label: dict.nav.experiences },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-sand/90 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center gap-4">
        <Link
          href={`/${locale}`}
          className="grid place-items-center size-11 shrink-0 rounded-full bg-coral text-white font-display text-sm tracking-wide"
          aria-label="Noezz Homestay"
        >
          noezz
        </Link>
        <nav aria-label="Main" className="hidden md:flex gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="px-3 py-2 rounded-full text-sm font-medium hover:bg-ink/5">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <LangSwitch label={dict.nav.switchTo} />
          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-coral px-4 py-2 text-sm font-bold text-white hover:bg-coral-dark"
          >
            {dict.nav.book}
          </Link>
        </div>
      </div>
      <nav aria-label="Main mobile" className="md:hidden flex gap-1 overflow-x-auto px-3 pb-2">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="shrink-0 px-3 py-1.5 rounded-full text-sm font-medium bg-ink/5">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
