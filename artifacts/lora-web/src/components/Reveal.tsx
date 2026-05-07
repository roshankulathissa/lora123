import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const transforms: Record<string, string> = {
    up: "translateY(30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
    fade: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.6s ease, transform 0.6s ease`,
      }}
    >
      {children}
    </div>
  );
}
