import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <h2>STRIKE</h2>

          <p>
            Empowering developers with cutting-edge tools and resources.
            Powered by Coder Army, Strike is your gateway to a world of
            endless coding with guided lessons, real projects, level up
            your skills.
          </p>
        </div>

        {/* PLATFORM */}
        <div className="footer-column">
          <h3>Platform</h3>

          <a href="#">Home</a>
          <a href="#practice">Practice</a>
          <a href="#courses">DSA Sheet</a>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="#contact">Contact</a>
        </div>

        {/* LEGAL */}
        <div className="footer-column">
          <h3>Legal</h3>

          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 STRIKE. All rights reserved.</p>

        <button
          type="button"
          className="footer-top"
          onClick={scrollToTop}
        >
          ↑ <span>Top</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;