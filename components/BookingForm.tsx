"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { bookingText, validateBooking, type BookingRequest } from "@/lib/booking";

// shortcut: demo has no real inbox, so email goes to a reserved .example address and
// WhatsApp opens without a number; set the client's real ones when this goes live
const EMAIL = "hello@noezz-homestay.example";

const field = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 focus:border-coral";

export default function BookingForm({ dict }: { dict: Dictionary }) {
  const t = dict.contact;
  const rooms = dict.rooms.items;
  const preselected = useSearchParams().get("room");
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);

  function send(channel: "whatsapp" | "email") {
    const data = new FormData(formRef.current!);
    const roomId = String(data.get("room"));
    const req: BookingRequest = {
      name: String(data.get("name") ?? ""),
      checkIn: String(data.get("checkIn") ?? ""),
      checkOut: String(data.get("checkOut") ?? ""),
      guests: String(data.get("guests") ?? "1"),
      room: rooms.find((r) => r.id === roomId)?.name ?? roomId,
      message: String(data.get("message") ?? ""),
    };
    const problem = validateBooking(req, t);
    setError(problem);
    if (problem) return;

    const text = bookingText(req, t);
    if (channel === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t.requestText)}&body=${encodeURIComponent(text)}`;
    }
  }

  return (
    <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="grid gap-4 rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-ink/5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-bold">
          {t.checkIn}
          <input type="date" name="checkIn" required className={field} />
        </label>
        <label className="grid gap-1.5 text-sm font-bold">
          {t.checkOut}
          <input type="date" name="checkOut" required className={field} />
        </label>
        <label className="grid gap-1.5 text-sm font-bold">
          {t.room}
          <select name="room" defaultValue={preselected ?? rooms[0].id} className={field}>
            {rooms.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-bold">
          {t.guests}
          <input type="number" name="guests" min={1} max={12} defaultValue={1} className={field} />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-bold">
        {t.name}
        <input type="text" name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-bold">
        {t.message}
        <textarea name="message" rows={3} className={field} />
      </label>

      <p role="alert" className="min-h-6 text-sm font-bold text-coral-dark">
        {error}
      </p>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={() => send("whatsapp")} className="rounded-full bg-coral px-6 py-3 font-bold text-white hover:bg-coral-dark">
          {t.sendWhatsapp}
        </button>
        <button type="button" onClick={() => send("email")} className="rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-ink/80">
          {t.sendEmail}
        </button>
      </div>
      <p className="text-sm text-muted">{t.note}</p>
    </form>
  );
}
