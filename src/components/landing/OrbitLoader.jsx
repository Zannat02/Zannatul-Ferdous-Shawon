"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrbitLoader() {
  const [pct, setPct] = useState(0);
  const router = useRouter();

  const RADIUS = 120;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  useEffect(() => {
     router.prefetch("/home");
    const DURATION = 4200;
    const start = performance.now();
    let rafId;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now) {
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION, 1);
      const eased = easeOutCubic(t);
      setPct(Math.floor(eased * 100));

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          router.push("/home");
        }, 600);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [router]);

  const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;
  const angle = (pct / 100) * Math.PI * 2 - Math.PI / 2;
  const dotX = 130 + RADIUS * Math.cos(angle);
  const dotY = 130 + RADIUS * Math.sin(angle);

  return (
    <div className="relative flex flex-col items-center gap-6">
      <div className="relative w-[clamp(180px,32vw,340px)] h-[clamp(180px,32vw,340px)]">
        <svg
          viewBox="0 0 260 260"
          className="w-full h-full -rotate-90"
          style={{
            filter:
              "drop-shadow(0 0 16px rgba(124,108,232,0.4)) drop-shadow(0 0 30px rgba(139,216,168,0.2))",
          }}
        >
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8fd8a8" />
              <stop offset="50%" stopColor="#a99bf0" />
              <stop offset="100%" stopColor="#7c6ce8" />
            </linearGradient>
          </defs>
          <circle
            cx="130"
            cy="130"
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="3"
          />
          <circle
            cx="130"
            cy="130"
            r={RADIUS}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>

        <div
          className="absolute w-[10px] h-[10px] rounded-full bg-white"
          style={{
            left: `${(dotX / 260) * 100}%`,
            top: `${(dotY / 260) * 100}%`,
            boxShadow:
              "0 0 10px 3px #b7e4c7, 0 0 20px 6px rgba(124,108,232,0.5)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-[clamp(2.2rem,6vw,3.4rem)] font-semibold tracking-tight bg-gradient-to-br from-white via-violet-300 to-green-200 bg-clip-text text-transparent tabular-nums">
            {pct}%
          </div>
          <div className="mt-1 text-[clamp(0.65rem,1.4vw,0.8rem)] tracking-[0.25em] uppercase text-zinc-500">
            Loading
          </div>
        </div>
      </div>

    
    </div>
  );
}