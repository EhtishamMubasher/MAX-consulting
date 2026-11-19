import logo from "../images/logo-bg-less.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="MAX Consulting" />
          <p>Engineering intelligent ecosystems for an AI-first world.</p>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="#">About us</a>
          <a href="#clients">Clients</a>
          <a href="#">Careers</a>
          <a href="#">News & Blogs</a>
        </div>
        <div className="footer-column">
          <h3>Expertise</h3>
          <a href="#expertise">SAP Solutions</a>
          <a href="#expertise">Cloud & Infrastructure</a>
          <a href="#expertise">Data Analytics</a>
          <a href="#expertise">Artificial Intelligence</a>
        </div>
        <div className="footer-column footer-contact">
          <h3>Start a conversation</h3>
          <a className="footer-email" href="mailto:info@max-consulting.com">
            info@maxcellia.com
          </a>
          <a href="#">Dubai · Abu Dhabi · Riyadh · London</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 MAX Consulting. All rights reserved.</span>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
