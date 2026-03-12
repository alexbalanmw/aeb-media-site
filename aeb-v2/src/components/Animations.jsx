import { useState, useEffect, useRef } from "react";

export const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isVisible];
};

export const CountUp = ({ end, suffix = "", prefix = "", duration = 2500 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useInView(0.3);
  const hasRun = useRef(false);
  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    hasRun.current = true;
    const steps = 80;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      if (step >= steps) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(end * ease));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export const FadeIn = ({ children, delay = 0, direction = "up", className = "", style = {} }) => {
  const [ref, isVisible] = useInView(0.08);
  const transforms = {
    up: "translateY(50px)", down: "translateY(-50px)",
    left: "translateX(50px)", right: "translateX(-50px)",
    none: "translateY(0px) scale(0.97)"
  };
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0) scale(1)" : transforms[direction],
      transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    }}>
      {children}
    </div>
  );
};
