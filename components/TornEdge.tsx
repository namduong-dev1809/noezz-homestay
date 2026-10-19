// Torn-paper bottom edge for the hero photo: a white paper layer peeking out above the page colour.
export default function TornEdge() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -bottom-px h-10 w-full sm:h-16"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
    >
      <path
        fill="#fff"
        style={{ filter: "drop-shadow(0 -2px 3px rgb(0 0 0 / 0.25))" }}
        d="M0 80 L0 22 L17 28 L39 33 L64 41 L88 45 L107 48 L120 46 L148 47 L169 54 L193 47 L221 36 L248 31 L266 32 L295 34 L322 16 L345 24 L360 28 L379 19 L407 16 L426 12 L446 13 L469 14 L489 27 L513 19 L537 30 L562 19 L580 21 L607 35 L633 23 L648 30 L664 37 L684 38 L713 53 L741 54 L758 30 L771 33 L787 48 L812 39 L828 41 L842 35 L870 42 L883 40 L912 33 L929 20 L951 17 L976 27 L988 16 L1003 27 L1015 30 L1045 29 L1065 13 L1093 13 L1112 27 L1130 24 L1148 26 L1164 23 L1200 33 L1200 80 Z"
      />
      <path
        className="fill-sand"
        d="M0 80 L0 35 L14 42 L40 54 L56 42 L80 50 L101 54 L126 40 L148 48 L165 48 L185 46 L212 62 L236 52 L262 49 L290 29 L303 28 L316 45 L331 26 L355 28 L385 31 L411 26 L424 26 L454 25 L475 18 L498 18 L515 34 L535 37 L555 25 L567 29 L583 48 L609 42 L638 51 L660 42 L681 49 L706 55 L731 63 L761 51 L790 60 L804 52 L829 59 L855 38 L881 40 L908 46 L929 41 L951 41 L976 31 L991 31 L1019 34 L1044 32 L1061 31 L1075 21 L1100 33 L1116 40 L1131 24 L1143 39 L1169 25 L1200 46 L1200 80 Z"
      />
    </svg>
  );
}
