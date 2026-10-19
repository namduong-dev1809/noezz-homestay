import Image from "next/image";
import { getDictionary } from "../dictionaries";
import { photos } from "@/lib/photos";
import PageTitle from "@/components/PageTitle";

export default async function Experiences() {
  const dict = await getDictionary();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <PageTitle title={dict.experiences.title} intro={dict.experiences.intro} />
      <div className="grid gap-6 sm:grid-cols-2">
        {dict.experiences.items.map((x) => (
          <article key={x.id} className="reveal overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5">
            <div className="relative aspect-[16/10]">
              <Image src={photos.experiences[x.id]} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-coral px-3 py-1 text-sm font-bold text-white">
                {x.distance}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">{x.title}</h2>
              <p className="mt-2 text-muted">{x.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
