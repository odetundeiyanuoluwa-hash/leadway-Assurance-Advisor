import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export function StatCounter({ end, suffix = "", prefix = "", duration = 2000, label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // ease out quad
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, hasTriggered]);

  return (
    <div ref={countRef} className="text-center p-6 bg-white dark:bg-card rounded-2xl shadow-sm border border-border border-b-4 border-b-secondary hover:-translate-y-1 transition-transform">
      <div className="text-4xl md:text-5xl font-black text-primary mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
