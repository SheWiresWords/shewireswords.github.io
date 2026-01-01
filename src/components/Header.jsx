import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {    
    const handleClickOutside = (event) => {
      if (!event.target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header role="banner">
      {/* Desktop-only branding row */}
      <div className="desktop-branding">
        <div className="desktop-brand">
          <img
            src="/favicon.png"
            alt="She Wires Words Logo"
            className="header-logo"
          />
          <span className="brand-text">She Wires Words</span>
        </div>
      </div>

      {/* Navigation row */}
      <div className="nav-row">
        <nav role="navigation" aria-label="Main navigation">
          <div className="nav-brand">
            <img
              src="/favicon.png"
              alt="She Wires Words Logo"
              className="header-logo"
            />
            <span className="brand-text">She Wires Words</span>
          </div>
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="hamburger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <ul className={isMobileMenuOpen ? "mobile-open" : ""}>
            <li>
              <a href="/" aria-label="Home - She Wires Words main page">
                Home
              </a>
            </li>
            <li>
              <a href="/about" aria-label="About - Learn about our mission">
                About Us
              </a>
            </li>

            {/* Desktop dropdown for Projects */}
            <li className="dropdown desktop-only">
              <a
                aria-label="Learn - View coding and circuitry tutorials"
              >
                Learn <span className="dropdown-arrow">▼</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/learn/HTML">
                    Introduction to HTML
                  </a>
                </li>


                <li>
                  <a href="/projects/example">Introduction to Arduino</a>
                </li>
                <li>
                  <a href="/projects/raspberry-pi-nlp">Arduino Sonar Sensor Project</a>
                </li>
                <li>
                  <a href="/projects">SEE ALL PROJECTS</a>
                </li>
              </ul>
            </li>

            {/* Desktop dropdown for AP Resources */}
            <li className="dropdown desktop-only">
              <a href="#" aria-label="AP Resources">
                AP Resources <span className="dropdown-arrow">▼</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/lesson/Unit2">
                    CSA Unit 2 Lesson
                  </a>
                </li>
                
                <li>
                  <a
                    href="/ap-archive"
                    aria-label="AP Archive - Past AP exam problems and solutions"
                  >
                    AP Archive
                  </a>
                </li>
                <li>
                  <a
                    href="/learn"
                    aria-label="Learn - Study guides and programming tutorials"
                  >
                    AP Learning Hub
                  </a>
                </li>
                
                <li>
                  <a
                    href="/resources"
                    aria-label="Resources - Tools and learning materials"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </li>

            {/* Desktop dropdown for Volunteer & Contact */}
            <li className="dropdown desktop-only">
              <a href="#" aria-label="Volunteer & Contact">
                Volunteer & Contact <span className="dropdown-arrow">▼</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/newsletter"
                    aria-label="Newsletter - Subscribe to updates and insights"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    aria-label="Contact - Get in touch with us"
                  >
                    Volunteer & Contact
                  </a>
                </li>
              </ul>
            </li>

            {/* Mobile-only links (original structure) */}
            <li className="mobile-only">
              <a
                href="/projects"
                aria-label="Projects - View coding and circuitry tutorials"
              >
                Projects
              </a>
            </li>
            <li className="mobile-only">
              <a
                href="/learn"
                aria-label="Learn - Study guides and programming tutorials"
              >
                AP Learning Hub
              </a>
            </li>
            <li className="mobile-only">
              <a
                href="/ap-archive"
                aria-label="AP Archive - Past AP exam problems and solutions"
              >
                AP Archive
              </a>
            </li>
            <li className="mobile-only">
              <a
                href="/resources"
                aria-label="Resources - Tools and learning materials"
              >
                Resources
              </a>
            </li>
            <li className="mobile-only">
              <a
                href="/newsletter"
                aria-label="Newsletter - Subscribe to updates and insights"
              >
                Newsletter
              </a>
            </li>
            <li className="mobile-only">
              <a href="/contact" aria-label="Contact - Get in touch with us">
                Volunteer & Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
