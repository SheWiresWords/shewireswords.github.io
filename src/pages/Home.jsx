import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let slideIndex = 1;

    window.changeSlide = function(n) {
      showSlide(slideIndex += n);
    };

    window.currentSlide = function(n) {
      showSlide(slideIndex = n);
    };

    function showSlide(n) {
      const slides = document.getElementsByClassName("slide");
      const dots = document.getElementsByClassName("dot");

      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }

      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add("active");
      }
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
      }
    }

    // Auto-advance slides every 4 seconds
    const autoSlide = setInterval(() => {
      showSlide(slideIndex += 1);
    }, 4000);

    return () => clearInterval(autoSlide);
  }, []);
  return (
    <main>
      <h1>
        <div className="title-container">
          <div className="main-title">Welcome to She Wires Words</div>
          <p className="subtitle">Empowering middle and high school girls in tech with free virtual resources and by sharing our voice.<br></br> <br></br> Founded by Alexa Curtis</p>
        </div>
        <div className="button_div" >
          <Link to="/projects" className="projects-button">
            Check Out Our Fun Projects!
          </Link>
        </div>
        <div className="instagram-cta">
          <a 
            href="https://instagram.com/shewireswords" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <img 
              src="/instagram-svgrepo-com.svg" 
              alt="Instagram" 
              className="instagram-icon"
            />
            shewireswords
          </a>
        </div>
      </h1>

      <div className="h2_div">
        <h2>PLAY OUR AP COMPUTER SICENCE STUDY GAME 🎮</h2>
        <div className="square_div_dark_teal">
          <p>Trying to remember all the AP Computer Science A concepts? Try out our fun game that helps you study, no sign up required!</p>
          <Link to="https://shewireswords.github.io/CSgame/" className="projects-button" style={{margin:"1rem"}}>
            Play Now
          </Link>
        </div>
      </div>

      <section className="hero-features" aria-label="Key learning areas">
        <div className="hero-boxes">
          <Link to="/ap-archive" className="glass-box" aria-label="AP Problems Archive">
            <h3>AP Problems Archive</h3>
            <p>Practice with past AP exam problems and solutions</p>
          </Link>
          <Link to="/learn" className="glass-box" aria-label="AP Study Guides">
            <h3>AP Study Guides</h3>
            <p>Master the 2025 AP Computer Science curriculum</p>
          </Link>
          <Link to="/contact" className="glass-box" aria-label="Volunteer Opportunities">
            <h3>Volunteer Opportunities</h3>
            <p>Join our mission to empower young women in tech</p>
          </Link>
        </div>
      </section>

      <section className="mission-section">
        <article className="top_home_page">
          <h2>Breaking Barriers for Women in Tech</h2>
          <p>
            Only 25% of computing jobs are held by women, yet technology shapes our future. 
            At She Wires Words, we're changing this by providing free, comprehensive resources for high schoolers.
            We're here to help young women excel in computer science and engineering as they discover their passion for programming. We believe every girl deserves 
            the chance to code her way to success.
          </p>
        </article>

        <article className="mid_home_page">
          <h2>What We Offer</h2>
          <p>
            We started out by giving girls resources for AP Computer Science, and we reached over 1000 girls with our AP resources alone. 
            Soon after, we started a newsletter to encourage girls to keep pursuing tech or start if they were interested. Our newsletter is published bi-monthly and features student publications about modern technology and personal experiences. 
            On our TikTok page, we feature intermediate and advanced student projects that inspire girls to learn more about coding. On our Instagram, we advertise volunteer + leadership opportunities for girls to get involved in the tech community. We also post educational resources on both social accounts.
          </p>
        </article>

        <article className="bot_home_page" >
          <h2>Community. Confidence. Achievement.</h2>
          <p>
            Our aim is to create a supportive environment where young women can learn coding without 
            intimidation. Through hands-on projects, comprehensive AP guides, and a focus 
            on practical application, She Wires Words helps female students not only learn programming languages but develop the confidence to pursue careers in technology and 
            become the next generation of women leaders in tech.
          </p>
        </article>
      </section>

      <section className="gallery-section" aria-label="Project showcase gallery" style={{}}>
        <div className="h2_div_gallery">
          <h2>Project Photo Gallery</h2>
          <div className="slideshow-container">
            <div className="slide active">
              <img src="/images/IMG_7722.JPG" alt="Arduino LED project setup" style={{margin: '0 auto', borderCollapse: 'collapse', minWidth: '100%'}}/>
              <div className="slide-caption">Arduino LED Circuit Project</div>
            </div>
            <div className="slide">
              <img src="/images/Arduino_Pics/IMG_7721.JPG" alt="Arduino components"style={{margin: '0 auto', borderCollapse: 'collapse', minWidth: '100%'}} />
              <div className="slide-caption">Arduino Components & Setup</div>
            </div>
            <div className="slide">
              <img src="/images/Arduino_Pics/IMG_7727.JPG" alt="Circuit wiring"style={{margin: '0 auto', borderCollapse: 'collapse', minWidth: '100%'}} />
              <div className="slide-caption">Circuit Wiring in Progress</div>
            </div>
            <div className="slide">
              <img src="/images/Arduino_Pics/IMG_7731.JPG" alt="Completed project" style={{margin: '0 auto', borderCollapse: 'collapse', minWidth: '100%'}}/>
              <div className="slide-caption">Completed Project</div>
            </div>
            <div className="slide">
              <img src="/images/Arduino_Pics/IMG_7732.JPG" alt="Project testing" style={{margin: '0 auto', borderCollapse: 'collapse', minWidth: '100%'}}/>
              <div className="slide-caption">Testing Our Creation</div>
            </div>

            <button className="prev-btn" onClick={() => changeSlide(-1)} aria-label="Previous image">❮</button>
            <button className="next-btn" onClick={() => changeSlide(1)} aria-label="Next image">❯</button>

            <div className="dots-container">
              <span className="dot active" onClick={() => currentSlide(1)}></span>
              <span className="dot" onClick={() => currentSlide(2)}></span>
              <span className="dot" onClick={() => currentSlide(3)}></span>
              <span className="dot" onClick={() => currentSlide(4)}></span>
              <span className="dot" onClick={() => currentSlide(5)}></span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="button_div">
          <Link to="/contact" className="projects-button" aria-label="Contact us for questions or collaboration">
            Contact Us for More!
          </Link>
        </div>
      </section>
    </main>
  );
}