// Hand-drawn style strokes over the hero photo (decorative only).
export default function Doodles() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full text-white/85"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* sun */}
      <circle cx="1040" cy="120" r="38" />
      <path d="M1040 50v-22M1040 212v-22M970 120h-22M1132 120h-22M990 70l-15-15M1105 185l-15-15M1090 70l15-15M975 185l15-15" />
      {/* waves */}
      <path d="M70 610c40-30 80-30 120 0s80 30 120 0 80-30 120 0" />
      <path d="M110 650c40-30 80-30 120 0s80 30 120 0" />
      {/* star */}
      <path d="M150 140l14 30 32 4-24 22 6 32-28-16-28 16 6-32-24-22 32-4z" />
      {/* loop */}
      <path d="M940 560c40-60 120-40 100 20s-110 40-80-20 120-50 150 10" />
    </svg>
  );
}
