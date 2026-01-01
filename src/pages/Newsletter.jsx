import { Link } from "react-router-dom";

export default function Newsletter() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "She Wires Words Newsletter",
          "description": "Join our community newsletter for AP Computer Science updates and coding insights",
          "provider": {
            "@type": "Organization",
            "name": "She Wires Words"
          }
        })
      }} />
      
      <main>
        <h1>
          <div className="title-container">
            <div className="main-title">Wired In: Girls in Computer Science and Engineering</div>
            <p className="subtitle">Join thousands of female students breaking barriers in tech with exclusive stories, AP Computer Science insights, and coding tips</p>
          </div>
          <div className="button_div">
            <a 
              href="https://she-wires-words.kit.com/profile?_gl=1*r9gslr*_gcl_au*MTU3MTYzODA5OC4xNzQ4NjU0MzI1LjE0ODE3ODM0NTguMTc0OTc0ODQ5MS4xNzQ5NzQ4NDkx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="projects-button"
            >
              Read Our Newsletter
            </a>
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

        <section className="mission-section" style={{marginBottom:'0'}}>
          <article className="top_home_page" style={{marginTop:'0'}}>
            <h2>🚀 Why Subscribe?</h2>
            <p>
              We're focusing on the joruney of womenin tech. Get exclusive access to the latest updates on the NEW 2025 AP Computer Science curriculum, 
              proven study strategies from someone who scored a 5, and inspiring stories from women 
              breaking barriers in technology. Our newsletter is written by students, for students, 
              with a focus on building confidence and technical skills.
            </p>
          </article>

          <article className="mid_home_page">
            <h2>📬 What You'll Receive</h2>
            <p>
              • AP exam tips and curriculum updates<br/>
              • Success stories from women in tech<br/>
              • Project tutorials and coding resources<br/>
              • Community project highlights and achievements<br/>
              • Early access to new study guides and materials
            </p>
          </article>

          <article className="bot_home_page" style={{marginBottom:'0'}}>
            <h2>👩‍💻 Join the Movement</h2>
            <p >
              Be part of a growing community of young women who are changing the face of technology. 
              Together, we're building confidence, sharing knowledge, and creating pathways for 
              the next generation of female tech leaders. Your journey in computer science starts here.
            </p>
          </article>
        </section>

        <section className="newsletter-featured" style={{ marginTop:'0%', padding:'1rem'}}>
          <div className="h2_div"style={{marginRight:'25%', marginLeft:'25%',padding:'1rem'}}>
            <h2>📰 POPULAR Edition</h2>
            <p>Check out our most read newsletter!</p>
          </div>

          <div className="featured-newsletters">
            <article className="newsletter-card">
              <div className="newsletter-header">
                <h3>🎯 From "Hello World" to Impact</h3>
                <span className="newsletter-date">July 2025</span>
              </div>
              <div className="newsletter-content">
                <p>
                  <strong>This Week's Highlights:</strong><br/>
                  • What we do as an organization<br/>
                  • How She Wires Words was founded<br/>
                  • Resources we created just for you<br/>
                  • An introduction to our founder
                </p>
                <div className="newsletter-preview">
                  <em>"I thought to myself, <b>I'm the only girl in my computer science class. Why?</b> And then I decided to change that."</em>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="cta-section" style={{paddingTop:'1rem', paddingBottom:'1rem'}}>
          <div className="h2_div" style={{margin:'1.5rem'}}>
            <h2>Ready to Level Up Your Coding Journey?</h2>
            <p>
              Join students who are already getting ahead with our weekly insights, 
              study strategies, and community support. It's completely free, and you can unsubscribe anytime.
            </p>
            <div className="button_div">
              <a 
                href="https://she-wires-words.kit.com/profile?_gl=1*r9gslr*_gcl_au*MTU3MTYzODA5OC4xNzQ4NjU0MzI1LjE0ODE3ODM0NTguMTc0OTc0ODQ5MS4xNzQ5NzQ4NDkx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="projects-button"
              >
                Subscribe Now - It's Free!
              </a>
            </div>
            <p style={{fontSize: '14px'}}>
              No spam, ever. Just join the community that's changing tech, one young woman at a time.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
