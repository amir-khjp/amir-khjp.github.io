export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Amirhossein Khajepour</span>
        <span className="footer-note">Built with care · Shiraz, Iran</span>
      </div>
    </footer>
  );
}
