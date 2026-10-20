import { useEffect, useState } from 'react';
import Magnetic from './Magnetic.jsx';
import Logo from './Logo.jsx';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export default function Nav() {
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav container">
        <Magnetic as="a" className="brand" href="#hero">
          <Logo size={30} />
        </Magnetic>
        <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.id}>
              <Magnetic as="a" href={`#${l.id}`} className={active === l.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
                {l.label}
              </Magnetic>
            </li>
          ))}
          <li>
            <Magnetic as="a" href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Contact</Magnetic>
          </li>
        </ul>
      </nav>
    </header>
  );
}
