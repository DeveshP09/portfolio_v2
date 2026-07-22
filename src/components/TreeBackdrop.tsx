export function TreeBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 hidden md:block opacity-20 select-none"
    >
      <svg
        viewBox="0 0 220 800"
        preserveAspectRatio="xMinYMid meet"
        className="h-full w-[220px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        {/* trunk */}
        <path d="M40 800 V120" />
        {/* primary branches */}
        <path d="M40 700 L120 660" />
        <path d="M40 580 L150 520" />
        <path d="M40 460 L130 420" />
        <path d="M40 340 L160 280" />
        <path d="M40 220 L120 180" />
        <path d="M40 140 L100 110" />
        {/* secondary twigs */}
        <path d="M120 660 L165 640" />
        <path d="M120 660 L140 690" />
        <path d="M150 520 L195 500" />
        <path d="M150 520 L170 555" />
        <path d="M130 420 L175 405" />
        <path d="M160 280 L205 260" />
        <path d="M160 280 L185 315" />
        <path d="M120 180 L160 160" />
        <path d="M100 110 L140 90" />
        {/* tiny leaves dots */}
        <circle cx="165" cy="640" r="1.5" />
        <circle cx="195" cy="500" r="1.5" />
        <circle cx="205" cy="260" r="1.5" />
        <circle cx="175" cy="405" r="1.5" />
        <circle cx="160" cy="160" r="1.5" />
        <circle cx="140" cy="90" r="1.5" />
      </svg>
    </div>
  );
}
