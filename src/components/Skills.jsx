import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { skillGroups } from '../data.js';

const SkillsRadar = lazy(() => import('./SkillsRadar.jsx'));

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <Reveal as="p" className="section-kicker">04 — Toolkit</Reveal>
        <Reveal as="h2" className="section-title">Skills &amp; Technologies</Reveal>

        <div className="skills-layout">
          <motion.div
            className="skills-chart-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            onViewportEnter={() => { setShow(true); setAnimated(true); }}
          >
            <div style={{ width: 380, maxWidth: '100%', height: 380 }}>
              {show && (
                <Suspense fallback={null}>
                  <SkillsRadar animated={animated} />
                </Suspense>
              )}
            </div>
          </motion.div>

          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <Reveal as="div" className="skill-group" key={group.title} delay={i * 0.06}>
                <h4>{group.title}</h4>
                <div className="pill-row">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`pill${group.strong ? ' pill-strong' : ''}${group.outline ? ' pill-outline' : ''}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
