import { contactLinks } from '../data.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Amirhossein Khajepour</span>
        <nav className="footer-links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <span className="footer-note">Built with care · Shiraz, Iran</span>
      </div>
    </footer>
  );
}
