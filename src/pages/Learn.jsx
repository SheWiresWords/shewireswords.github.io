import { Link } from "react-router-dom";

export default function Learn() {
  return (
    <main>
      <h1>
        <div className="title-container">
          <div className="main-title">AP Learning Hub</div>
          <p className="subtitle">Master the  AP Computer Science A curriculum with our comprehensive study guides, games, and learning pages.</p>
        </div>
      </h1>

      <div className="h2_div">
        <h2>🎮 PLAY OUR GAME</h2>
        <div className="square_div_dark_teal">
          <p>Trying to remember all the AP Computer Science A concepts? Try out our fun game that helps you study, no sign up required!</p>
          <Link to="https://shewireswords.github.io/CSgame/" className="projects-button" style={{margin:"1rem"}}>
            Play Now
          </Link>
        </div>
      </div>

      <div className="h2_div">
        <h2>🚀 New to Programming?</h2>
        <div className="square_div_dark_teal">
          <p>Start with the basics! We've moved our beginner-friendly programming guides to the Resources section to help you get started before diving into AP-level content.</p>
          <Link to="/resources" className="projects-button" style={{margin:"1rem"}}>
            Start with Programming Basics
          </Link>
        </div>
      </div>

      <section className="hero-features" aria-label="Key learning areas">
        <div className="hero-images">
          <div className="glass-box" role="img" aria-label="AP Problems">
            <Link to="https://canva.link/tv8ekyisnilarw1" className="orange-link" style={{padding:"1em"}}>
              UNIT 1 STUDY GUIDE
            </Link>
          </div>
          <div className="glass-box" role="img" aria-label="Programming learning">
            <Link to="https://canva.link/vxetpjk97ajtz0t" className="orange-link" style={{padding:"1em"}}>
              UNIT 2 STUDY GUIDE
            </Link>
          </div>
          <div className="glass-box" role="img" aria-label="Resources">
            <Link to="https://canva.link/ebwxvdvp8llw3hv" className="orange-link" style={{padding:"1em"}}>
              UNIT 3 STUDY GUIDE
            </Link>
          </div>
          <div className="glass-box" role="img" aria-label="Resources">
            <Link to="https://canva.link/1eg0lm7fvkgojpn" className="orange-link" style={{padding:"1em"}}>
              UNIT 4 STUDY GUIDE
            </Link>
          </div>
        </div>
      </section>
      
      <div className="learn-grid">
        <Link to="https://www.canva.com/design/DAGrY7bz1Ug/tSc2yaf8dCUaqXIzgoSNFQ/view?utm_content=DAGrY7bz1Ug&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb4252e6cce" className="learn-tile">
          <h3>AP Computer Science STUDY GUIDE (Complete)</h3>
          <p>Complete study guide covering all AP Computer Science A units with examples and practice problems</p>
        </Link>

        <div className="learn-tile placeholder-tile">
          <Link to="/learn/apcsa-units" className='link-box'>
            <h3>💻 AP Computer Science Exam Overview</h3>
            <p>Complete study guide covering all AP Computer Science A units with examples and practice problems</p>
          </Link>
        </div>

        <div className="learn-tile placeholder-tile">
          <Link to="https://www.albert.io/blog/ap-computer-science-a-score-calculator/" className='link-box'>
            <h3>📊 AP Score Calculator</h3>
            <p>Estimate your AP score based on practice test performance</p>
          </Link>
        </div>

        {/* 
        <Link to="/learn/apcsp-units" className="learn-tile">
          <h3>💻 APCSP Units</h3>
          <p>Comprehensive study guide for AP Computer Science Principles covering all essential concepts</p>
        </Link>

        <div className="learn-tile placeholder-tile">
          <h3>📄 APCSP Exam Description</h3>
          <p>Exam structure, performance tasks, and preparation strategies for success</p>
          <span className="coming-soon">Link Coming Soon</span>
        </div>*/}
      </div>
    </main>
  );
}
