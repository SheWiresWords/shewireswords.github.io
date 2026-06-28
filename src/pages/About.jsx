export default function About() {
  return (
    <main>
      <h1><div className="title-container">
          <div className="main-title">About Us</div>
          <p className= "subtitle">Scroll down to learn about She Wires Words! Visit our home page for more</p>
        </div></h1>
      <div className="hero-images">
       <div className="center-image">
          <img src="/favicon.png" alt="She Wires Words Logo" style={{width: '80px', height: '80px', borderRadius: '15px'}} />
         </div>
      </div>
      
      <div className="h2_div">
        <h2>📃Our Mission</h2>
        <div className="square_div_dark_teal">
          <p>
            We're dedicated to empowering women and underrepresented groups to thrive in technology-focused futures by providing 
            free resources for learning 6 different programming languages.
            With women representing only 25% of the tech workforce, we're committed to 
            changing this statistic. We believe that women should not only join the tech community but should become leaders in the future of computing.
          </p>
        </div>
      </div>
      <div className="h2_div">
        <h2>💡Why We Exist</h2>
        <div className="square_div_dark_teal">
          <p>
            The gender gap in technology starts early - and speaking from the experience of our team members, many young women lose interest 
            in computer science during high school. We exist to ensure women have the 
            resources, confidence, and community support they need to succeed as they pursue fulfilling careers in technology. However, beyond empowering women in tech, we
            aim help all students achieve their tech goals, free of charge. 
          </p>
        </div>
      </div>

      {/** Image go here nvm */}

      <div className="h2_div">
        <h2>🖇️Why Are We Called 'She Wires Words?'</h2>
        <div className="square_div_dark_teal">
          <p>
            In a community, all members are connected, a lot like a circuit. Through these connections, our wires, we use
            coding languages to communicate with one another and unite through common interests. Coupled with our goal of 
            female empowerment, we have our name: She Wires Words.
            Technology isn't just about hardware and syntax— it’s about expression, culture, and
            finding one's voice in a rapidly changing world.
          </p>
        </div>
      </div>
    </main>
  );
}
