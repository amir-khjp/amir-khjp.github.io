import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <Reveal as="p" className="section-kicker">02 — Experience</Reveal>
        <Reveal as="h2" className="section-title">Research &amp; Engineering Roles</Reveal>
        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal as="div" className="timeline-item" key={item.title} delay={i * 0.06} y={16}>
              <motion.div
                className="timeline-marker"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 16, delay: i * 0.06 + 0.15 }}
              />
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
