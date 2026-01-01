export default function About() {
  return (
    <main>
      <h1><div className="title-container">
          <div className="main-title">About Us</div>
          <p className= "subtitle">Scroll down to learn more about who we are! Visit our home page for more+</p>
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
            We're dedicated to empowering young women to thrive in technology by providing 
            free, comprehensive resources for learning 6 different programming languages.
            With women representing only 25% of the tech workforce, we're committed to 
            changing this statistic. We believe that women should not only join the tech community, but that we should be leaders in the future of computing.
          </p>
        </div>
      </div>
      <div className="h2_div">
        <h2>💡Why We Exist</h2>
        <div className="square_div_dark_teal">
          <p>
            The gender gap in technology starts early - and speaking from experience of our team members, many young women lose interest 
            in computer science during high school. We exist to ensure young women have the 
            resources, confidence, and community support they need to succeed as they pursue fulfilling careers in technology.
          </p>
        </div>
      </div>

      {/** Image go here */}

      <div className="h2_div">
        <h2>🖇️Language. Connection.</h2>
        <div className="square_div_dark_teal">
          <p>
            Every coding language is a new dialect of possibility. Every circuit
            is a new way to connect. We believe that learning technology is not
            just about hardware and syntax — it’s about expression, culture, and
            finding your voice in a rapidly changing world.
          </p>
        </div>
      </div>
    </main>
  );
}
