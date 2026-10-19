import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-ink text-sand mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm">
        <div>
          <p className="font-display text-2xl tracking-wide">NOEZZ HOMESTAY</p>
          <p className="text-sand/80">{dict.footer.tagline}</p>
        </div>
        <p className="text-sand/80">
          {dict.footer.madeBy}{" "}
          <a href="https://duongthanhnam.vercel.app" className="underline hover:text-white">
            Duong Thanh Nam
          </a>{" "}
          · Photos: Unsplash
        </p>
      </div>
    </footer>
  );
}
