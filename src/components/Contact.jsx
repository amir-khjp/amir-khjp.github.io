import Reveal from './Reveal.jsx';
import { contactLinks } from '../data.js';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal as="p" className="section-kicker">05 — Get in Touch</Reveal>
        <Reveal as="h2" className="section-title">
          Let's build something <span className="italic-accent">worth trusting.</span>
        </Reveal>
        <Reveal as="p" className="contact-lede" delay={0.05}>
          Open to roles and collaborations in machine learning, data science, and financial risk analytics.
        </Reveal>
        <div className="contact-links">
          {contactLinks.map((link, i) => (
            <Reveal
              as="a"
              className="contact-link"
              key={link.label}
              delay={0.1 + i * 0.06}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener' : undefined}
              data-magnetic
            >
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
