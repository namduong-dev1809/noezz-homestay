// Run with: node --test lib/booking.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { bookingText, validateBooking, type BookingRequest } from "./booking.ts";
import en from "../app/[lang]/dictionaries/en.json" with { type: "json" };

const t = en.contact;
const ok: BookingRequest = {
  name: " Lena ",
  checkIn: "2026-11-02",
  checkOut: "2026-11-05",
  guests: "2",
  room: "Private double",
  message: "",
};

test("valid request passes", () => {
  assert.equal(validateBooking(ok, t), null);
});

test("missing name or dates is rejected", () => {
  assert.equal(validateBooking({ ...ok, name: "  " }, t), t.errorRequired);
  assert.equal(validateBooking({ ...ok, checkOut: "" }, t), t.errorRequired);
});

test("check-out must be after check-in", () => {
  assert.equal(validateBooking({ ...ok, checkOut: "2026-11-02" }, t), t.errorDates);
  assert.equal(validateBooking({ ...ok, checkOut: "2026-10-30" }, t), t.errorDates);
});

test("text contains trimmed fields and optional message", () => {
  const text = bookingText({ ...ok, message: " Late arrival " }, t);
  assert.match(text, /Your name: Lena\n/);
  assert.match(text, /Check-out: 2026-11-05/);
  assert.ok(text.endsWith("\n\nLate arrival"));
  assert.ok(!bookingText(ok, t).includes("\n\n"));
});
