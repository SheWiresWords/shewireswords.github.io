
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main>
      <h1>
      <div className="title-container">
        <div className="main-title">Our Projects</div>
      </div>
        <p className= "subtitle">Start Small. Dream Big.
</p>
      </h1>
      <div className="button_div">
        Explore our collection of beginner-friendly projects that combine code and circuitry in fun, creative ways. Whether you're lighting up your first LED or writing your first script, you're taking a step toward discovering your potential in tech.
      </div>
      <div className="projects-grid">
        <Link to="/learn/HTML" className="project-square">
          <h3>Introduction to HTML</h3>
          <p>Beginner HTML & the Bang Shortcut - from blank page to complete HTML scaffold</p>
        </Link>
        <Link to="/learn/intro-java" className="project-square">
          <h3>Introduction to Java</h3>
          <p>Start your Java journey with our beginner-friendly guide covering basics and syntax</p>
        </Link>
        <Link to="/learn/coding-fundamentals" className="project-square">
          <h3>Coding Fundamentals</h3>
          <p>Essential programming concepts that apply across all languages and platforms</p>
        </Link>
        <Link to="/projects/example" className="project-square">
          <h3>Intro to Arduino and Circuits</h3>
          <p>Let's light it up with Ardunio and LEDs</p>
        </Link>
        <Link to="/projects/raspberry-pi-programming" className="project-square">
          <h3>Intro to Everything Raspberry Pi!</h3>
          {/*<p>Your first steps into coding with the tiny computer</p>*/}
          <p>COMING SOON</p>
          <p>🍓</p>
        </Link>
        <Link to="/projects/arduino-sonar" className="project-square">
          <h3>Object Detection with Arduino and Sonar Sensor</h3>
          <p>Teaching your Arduino to "see" the world around it</p>
        </Link>
        
        <Link to="/projects/simple-web-animations" className="project-square">
          <h3>Simple Web Animations</h3>
          <p>Create cute animated projects in under 100 lines of code</p>
        </Link>
        <Link to="/projects/responsive-web-layouts" className="project-square">
          <h3>Responsive Web Layouts</h3>
          <p>Master creating websites that look great on any device</p>
        </Link>
      </div>
    </main>
  );
}
