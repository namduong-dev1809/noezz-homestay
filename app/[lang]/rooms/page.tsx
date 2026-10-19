import { getDictionary, getLocale } from "../dictionaries";
import RoomCard from "@/components/RoomCard";
import PageTitle from "@/components/PageTitle";

export default async function Rooms() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <PageTitle title={dict.rooms.title} intro={dict.rooms.intro} />
      <div className="grid gap-6 md:grid-cols-3">
        {dict.rooms.items.map((room) => (
          <RoomCard key={room.id} room={room} locale={locale} dict={dict} detailed />
        ))}
      </div>
    </div>
  );
}
