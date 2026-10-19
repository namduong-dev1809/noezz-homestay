import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";
import { photos } from "@/lib/photos";

type Room = Dictionary["rooms"]["items"][number];

export default function RoomCard({
  room,
  locale,
  dict,
  detailed = false,
}: {
  room: Room;
  locale: Locale;
  dict: Dictionary;
  detailed?: boolean;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5">
      <div className="relative aspect-[4/3]">
        <Image src={photos.rooms[room.id]} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-bold">{room.name}</h3>
        <p className="text-sm text-muted">{room.size}</p>
        <p>
          <span className="text-sm text-muted">{dict.home.from} </span>
          <span className="font-display text-3xl text-coral">{room.price}</span>
          <span className="text-sm text-muted"> {dict.rooms.perNight}</span>
        </p>
        {detailed && (
          <>
            <p className="text-muted">{room.text}</p>
            <ul className="flex flex-wrap gap-2">
              {room.features.map((f) => (
                <li key={f} className="rounded-full bg-sand px-3 py-1 text-sm">
                  {f}
                </li>
              ))}
            </ul>
          </>
        )}
        <Link
          href={`/${locale}/contact?room=${room.id}`}
          className="mt-auto inline-flex justify-center rounded-full bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-coral"
        >
          {dict.rooms.book}
        </Link>
      </div>
    </article>
  );
}
