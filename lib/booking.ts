export type BookingRequest = {
  name: string;
  checkIn: string; // yyyy-mm-dd from <input type="date">
  checkOut: string;
  guests: string;
  room: string;
  message: string;
};

export type BookingLabels = {
  requestText: string;
  name: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
  errorDates: string;
  errorRequired: string;
};

/** Returns an error message, or null when the request can be sent. */
export function validateBooking(r: BookingRequest, t: BookingLabels): string | null {
  if (!r.name.trim() || !r.checkIn || !r.checkOut) return t.errorRequired;
  if (r.checkOut <= r.checkIn) return t.errorDates; // ISO dates compare correctly as strings
  return null;
}

export function bookingText(r: BookingRequest, t: BookingLabels): string {
  const lines = [
    `${t.requestText}:`,
    `${t.name}: ${r.name.trim()}`,
    `${t.room}: ${r.room}`,
    `${t.checkIn}: ${r.checkIn}`,
    `${t.checkOut}: ${r.checkOut}`,
    `${t.guests}: ${r.guests}`,
  ];
  if (r.message.trim()) lines.push("", r.message.trim());
  return lines.join("\n");
}
