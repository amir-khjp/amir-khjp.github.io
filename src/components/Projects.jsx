import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data.js';

const FILTERS = ['all', 'Healthcare AI', 'Persian NLP', 'Blockchain', 'Systems'];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.cat === filter)),
    [filter]
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal as="p" className="section-kicker">03 — Selected Work</Reveal>
        <Reveal as="h2" className="section-title">Projects</Reveal>

        <Reveal as="div" className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-chip${filter === f ? ' is-active' : ''}`}
              onClick={() => setFilter(f)}
              data-magnetic
            >
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </Reveal>

        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal as="p" className="projects-more">
          <a href="https://github.com/amir-khjp?tab=repositories" target="_blank" rel="noopener" className="project-more-link" data-magnetic>
            See all repositories on GitHub ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
