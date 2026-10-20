import { motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import Magnetic from './Magnetic.jsx';

const HeroCanvas = lazy(() => import('./HeroCanvas.jsx'));

const marqueeWords = ['CLASSIFICATION', 'ENSEMBLE LEARNING', 'NLP', 'BLOCKCHAIN ANALYTICS', 'CLINICAL AI', 'FASTAPI', 'SMOTE', 'XGBOOST'];

export default function Hero() {
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const id = requestIdleCallback ? requestIdleCallback(() => setMounted(true)) : setTimeout(() => setMounted(true), 200);
    return () => { if (requestIdleCallback && id) cancelIdleCallback(id); };
  }, []);

  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="hero" id="hero">
      {mounted && (
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      )}
      <div className="container hero-inner">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          Data Science &amp; Machine Learning Research
        </motion.p>
        <h1 className="hero-title">
          <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease }}>
            Amirhossein
          </motion.span>
          <motion.span className="italic-accent" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.22, ease }}>
            Khajepour
          </motion.span>
        </h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }}>
          I build predictive models and ML pipelines that turn clinical records, Persian text, and
          on-chain transactions into decisions worth trusting.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease }}>
          <Magnetic as="a" className="btn btn-primary" href="#projects">View Projects</Magnetic>
          <Magnetic as="a" className="btn btn-ghost" href="cv/CV-Amirhossein-Khajepour.pdf" target="_blank" rel="noopener">Download CV</Magnetic>
        </motion.div>
      </div>

      <div className="marquee" aria-hidden="true">
        <motion.div
          className="marquee-track"
          animate={reduced ? {} : { x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i}>{w} ·</span>
          ))}
        </motion.div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <motion.span
          className="scroll-cue-dot"
          animate={reduced ? {} : { y: [0, 16], opacity: [1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        />
      </a>
    </section>
  );
}
