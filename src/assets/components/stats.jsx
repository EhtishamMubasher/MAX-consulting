import { useEffect, useRef, useState } from "react";
import "../styles/stats.css";

const stats = [
  { value: 370, suffix: "+", label: "Satisfied Clients Globally" },
  { value: 11, suffix: "+", label: "Countries that define our reach" },
  { value: 1200, suffix: "+", label: "Team Members" },
  { value: 750, suffix: "+", label: "SAP Consultants" },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.35 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <h2 ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
}

export default function Stats() {
  return (
    <section className="stats-section" aria-label="MAX Consulting at a glance">
      {stats.map((stat, index) => (
        <article
          className="stat-card reveal-card"
          style={{ "--delay": `${index * 120}ms` }}
          key={stat.label}
        >
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <p>{stat.label}</p>
        </article>
      ))}
    </section>
  );
}
