import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;
    setEnabled(true);

    let mx = 0, my = 0, dx = 0, dy = 0, rx = 0, ry = 0, raf;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', move);

    const over = (e) => {
      if (e.target.closest('a, button, [data-magnetic]')) ringRef.current?.classList.add('hover');
    };
    const out = (e) => {
      if (e.target.closest('a, button, [data-magnetic]')) ringRef.current?.classList.remove('hover');
    };
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);

    const tick = () => {
      dx += (mx - dx) * 0.9; dy += (my - dy) * 0.9;
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
