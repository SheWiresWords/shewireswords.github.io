import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <main>
      <h1>
        <div className="title-container">
          <div className="main-title">Resources</div>
            <p className= "subtitle">Our collection of useful resources designed to help young women get into tech</p>
        </div>
      </h1>


      <div className="h2_div">
        <h2>Preparing for the 2025-2026 AP Exam:   
          Where to Start?</h2>
        <div className="square_div_dark_teal">
          <p><b>1.</b> New to coding or Java? Perfect! The AP Computer Science A curriculum is restructured into 4 comprehensive units that gradually ramp up difficulty. We recommend starting our with our Intro to Java.<br></br><br></br><b>2.</b> Have some coding experience? Jump into our AP learning resources, including our comprehensive study guide or AP game.<br></br><br></br><b>3.</b> Already know some Java? Practice with our AP Archive problems and challenge yourself with advanced projects that go beyond the AP level - building the skills that will make you a standout candidate in tech!</p>
        </div>
      </div>

      <div className="h2_div">
        <h2>Software Requirements and Recommendations</h2>
        <div className="square_div_dark_teal">
          <p>To start coding, you should use an IDE (integrated development environment). Does this work for practicing AP problems? YES! 
            <br></br> <br></br>The best IDE we would use for programming as a beginner is GitHub. GitHub is an easy to navigate, web version of an programming environment. All you have to do is create an account and start coding! <br></br> <br></br>
          Access GitHub:</p>
          <Link to="https://github.com/" className="orange-link">
            Click here!</Link>
        </div>
      </div>

      <div className="h2_div">
        <h2>Start Your Programming Journey</h2>
        <div className="square_div_dark_teal">
          <p>If you want just a taste of programming, start here! These resources are designed specifically for young students entering tech and are perfect for building confidence programming.</p>
          
          <div>
            <Link to="/learn/intro-java" className="projects-button">
              📚 Introduction to Java
            </Link>
            <Link to="/learn/coding-fundamentals" className="projects-button">
              🔧 Coding Fundamentals
            </Link>
          </div>
          
          <p style={{marginTop: "1rem", fontSize: "14px"}}>
            <strong>Introduction to Java:</strong> Perfect for complete beginners - learn Java basics, syntax, variables, methods, and control structures.<br/><br/>
            <strong>Coding Fundamentals:</strong> Universal programming concepts that apply to any language - problem-solving, algorithms, and best practices.
          </p>
        </div>
      </div>

      <div className="h2_div">
        <h2>Advanced Learning Materials</h2>
        <div className="square_div_dark_teal">
          <p>Ready for more advanced content? Try out our projects page to get hands-on experience with applications of computer science past the AP exam. <br></br> <br></br>
            
          Visit the AP Learning Hub for the complete AP curriculum breakdown. </p>
          <Link to="/learn" className="projects-button"style={{margin:"5%"}}>
            AP Learning Hub
          </Link>
        </div>
      </div>

      <div className="h2_div">
        <h2>Additional Resources</h2>
        <div className="square_div_dark_teal">
          <p>Looking for all the past AP problems? Visit the AP Archive Page: <br></br>
            <Link to="/ap-archive" className="projects-button" style={{margin:"5%"}}>
              AP Problems</Link>
            <br></br> <br></br>Is it AP exam season? Use the cram study guide to prepare:<br></br>
            
            <Link to="https://drive.google.com/file/d/1b7DzrunofibDN0brNk1lHzkMLAxWY51s/view" className="projects-button"style={{margin:"5%"}}>
              Cram Sheet
            </Link>
            <br></br> <br></br>Don't want to use GitHub? We would recommend <br></br> <br></br>
            <Link to="https://netbeans.apache.org/front/main/download/" className="orange-link">
              Apache NetBeans</Link>
            
            <br></br> <br></br> <Link to="https://www.eclipse.org/downloads/" className="orange-link">
              Eclipse</Link><br></br> <br></br> or <Link to="https://code.visualstudio.com/download/" className="orange-link">
              Visual Studio Code</Link>
            </p>
        </div>
      </div>

      <div className="h2_div">
        <h2>Newsletter - Join our Mission</h2>
        <div className="square_div_dark_teal">
          <p>Want exclusive insights into our community of female coders?
          Join the newsletter community of young women breaking barriers in tech! We feature student written articles about technology and personal experiences in computer science.
          </p>
          <div className="button_div">
            <a 
              href="https://she-wires-words.kit.com/profile?_gl=1*r9gslr*_gcl_au*MTU3MTYzODA5OC4xNzQ4NjU0MzI1LjE0ODE3ODM0NTguMTc0OTc0ODQ5MS4xNzQ5NzQ4NDkx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="projects-button"
            >
              Discover our Newsletter
            </a>
          </div>
          <p>Get updates on the latest curriculum changes, success stories from women in tech, 
          confidence-building coding projects, and practical advice for excelling in computer science. 
          Together, we're changing the face of technology - one young woman at a time.
            </p>
        </div>
      </div>
    </main>
  );
}
