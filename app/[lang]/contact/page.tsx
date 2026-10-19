import { Suspense } from "react";
import { getDictionary } from "../dictionaries";
import PageTitle from "@/components/PageTitle";
import BookingForm from "@/components/BookingForm";

export default async function Contact() {
  const dict = await getDictionary();
  const t = dict.contact;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <PageTitle title={t.title} intro={t.intro} />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* the form reads ?room= from the URL, which is only known at request time */}
        <Suspense>
          <BookingForm dict={dict} />
        </Suspense>
        <aside className="reveal grid content-start gap-6">
          <dl className="grid gap-4 rounded-3xl bg-white p-6 ring-1 ring-ink/5">
            <div>
              <dt className="text-sm text-muted">{t.addressLabel}</dt>
              <dd className="font-bold">{t.address}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">{t.emailLabel}</dt>
              <dd className="font-bold">hello@noezz-homestay.example</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">{t.hoursLabel}</dt>
              <dd className="font-bold">{t.hours}</dd>
            </div>
          </dl>
          <iframe
            title="Map: An Thuong, Da Nang"
            src="https://www.google.com/maps?q=An+Thuong,+Ngu+Hanh+Son,+Da+Nang&output=embed"
            className="aspect-square w-full rounded-3xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </aside>
      </div>
    </div>
  );
}
