import Reveal from './Reveal.jsx';
import { education } from '../data.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="p" className="section-kicker">01 — About</Reveal>
        <div className="about-grid">
          <Reveal as="h2" className="section-title">
            Machine learning that holds up <span className="italic-accent">outside the notebook.</span>
          </Reveal>
          <div className="about-body">
            <Reveal as="p" delay={0.05}>
              I'm a Machine Learning and Data Science researcher based in Shiraz, Iran, with an M.Sc. in Information
              Technology Engineering from Amirkabir University of Technology (Tehran Polytechnic). My work spans
              clinical predictive modeling — including pre-liver transplant mortality risk — Persian-language NLP for
              hate-speech detection, and blockchain analytics on Ethereum Classic, where my master's thesis focused on
              detecting selfish-mining attacks with machine learning.
            </Reveal>
            <Reveal as="p" delay={0.1}>
              I like building the whole pipeline: preprocessing and leakage-safe feature engineering, rigorous
              10-fold cross-validation, class-imbalance handling with SMOTE, and ensemble modeling — backed by
              production-grade systems work in FastAPI, PostgreSQL, and real-time WebSocket data streams. I'm
              currently growing into financial risk and underwriting analytics.
            </Reveal>
            <div className="about-education">
              {education.map((e, i) => (
                <Reveal as="div" className="edu-item" key={e.degree} delay={0.1 + i * 0.08}>
                  <span className="edu-degree">{e.degree}</span>
                  <span className="edu-school">{e.school}</span>
                  {e.note && <span className="edu-note">{e.note}</span>}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
