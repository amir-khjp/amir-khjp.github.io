import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spx = useSpring(px, { stiffness: 220, damping: 20 });
  const spy = useSpring(py, { stiffness: 220, damping: 20 });
  const rotateX = useTransform(spy, [0, 1], [8, -8]);
  const rotateY = useTransform(spx, [0, 1], [-8, 8]);
  const sheenX = useTransform(spx, (v) => `${v * 100}%`);
  const sheenY = useTransform(spy, (v) => `${v * 100}%`);

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => { px.set(0.5); py.set(0.5); };

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`project-card${project.featured ? ' featured' : ''}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
    >
      <span className="project-tag">{project.tag}</span>
      <h3>{project.title}</h3>
      <p>{project.body}</p>
      <div className="project-stack">
        {project.stack.map((s) => <span key={s}>{s}</span>)}
      </div>
      <a className="project-link" href={project.repo} target="_blank" rel="noopener">View Repository ↗</a>
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: useTransform([sheenX, sheenY], ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.12), transparent 60%)`),
        }}
      />
    </motion.article>
  );
}
