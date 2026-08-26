"use client";

export function HeroSchematic() {
  return (
    <div className="relative overflow-hidden rounded-sm border border-line bg-bg-2" aria-hidden>
      <div className="grid-bg absolute inset-0 opacity-80" />
      <svg viewBox="0 0 640 420" className="relative h-auto w-full">
        <defs>
          <linearGradient id="pulse" x1="0" x2="1">
            <stop offset="0" stopColor="#c8f542" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#c8f542" stopOpacity="0.9" />
            <stop offset="1" stopColor="#c8f542" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <rect x="48" y="56" width="160" height="72" rx="4" fill="#16181d" stroke="#2a2e36" />
        <text x="64" y="86" fill="#9aa1ab" fontSize="11" fontFamily="ui-monospace, monospace">
          INPUT
        </text>
        <text x="64" y="106" fill="#eceef2" fontSize="13" fontFamily="ui-monospace, monospace">
          systems / games
        </text>

        <rect x="240" y="140" width="160" height="88" rx="4" fill="#16181d" stroke="#c8f542" />
        <text x="256" y="170" fill="#c8f542" fontSize="11" fontFamily="ui-monospace, monospace">
          RUNTIME
        </text>
        <text x="256" y="192" fill="#eceef2" fontSize="13">
          design → build
        </text>
        <text x="256" y="210" fill="#9aa1ab" fontSize="11" fontFamily="ui-monospace, monospace">
          iterate on feel
        </text>

        <rect x="432" y="56" width="160" height="72" rx="4" fill="#16181d" stroke="#2a2e36" />
        <text x="448" y="86" fill="#9aa1ab" fontSize="11" fontFamily="ui-monospace, monospace">
          BACKEND
        </text>
        <text x="448" y="106" fill="#eceef2" fontSize="13">
          APIs · data
        </text>

        <rect x="432" y="292" width="160" height="72" rx="4" fill="#16181d" stroke="#2a2e36" />
        <text x="448" y="322" fill="#9aa1ab" fontSize="11" fontFamily="ui-monospace, monospace">
          PLAYERS
        </text>
        <text x="448" y="342" fill="#eceef2" fontSize="13">
          things people use
        </text>

        <rect x="48" y="292" width="160" height="72" rx="4" fill="#16181d" stroke="#2a2e36" />
        <text x="64" y="322" fill="#9aa1ab" fontSize="11" fontFamily="ui-monospace, monospace">
          AI / ML
        </text>
        <text x="64" y="342" fill="#eceef2" fontSize="13">
          detect · score
        </text>

        <path
          d="M208 92 H240 V184 H240"
          fill="none"
          stroke="#2a2e36"
          strokeWidth="1.2"
        />
        <path d="M400 184 H432 V92" fill="none" stroke="#2a2e36" strokeWidth="1.2" />
        <path d="M320 228 V328 H432" fill="none" stroke="#2a2e36" strokeWidth="1.2" />
        <path d="M208 328 H240 V228" fill="none" stroke="#2a2e36" strokeWidth="1.2" />

        <circle r="3.5" fill="#c8f542">
          <animateMotion dur="7s" repeatCount="indefinite" path="M208 92 H240 V184" />
        </circle>
        <circle r="3.5" fill="#7aa2ff">
          <animateMotion dur="9s" repeatCount="indefinite" path="M400 184 H432 V92" />
        </circle>
        <circle r="3.5" fill="#c8f542">
          <animateMotion dur="8s" repeatCount="indefinite" path="M320 228 V328 H432" />
        </circle>
      </svg>
      <p className="mono absolute right-3 bottom-3 text-[10px] tracking-widest text-muted uppercase">
        live schematic
      </p>
    </div>
  );
}
