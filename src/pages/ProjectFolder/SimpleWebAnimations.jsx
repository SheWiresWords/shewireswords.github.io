
import { Link } from "react-router-dom";

export default function SimpleWebAnimations() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Simple Web Animations",
          "description": "Create Cute Animated Web Projects in Under 100 Lines",
          "provider": {
            "@type": "Organization",
            "name": "She Wires Words"
          },
          "educationalLevel": "Beginner",
          "timeRequired": "PT1H30M",
          "teaches": ["CSS Animations", "HTML Structure", "Basic JavaScript", "Web Design"],
          "courseMode": "hands-on",
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "instructor": {
              "@type": "Organization",
              "name": "She Wires Words"
            }
          }
        })
      }} />
      <main>
      <h1>
        <div className="main-title">
          Simple Web Animations
          <p className= "subtitle">Create Cute Animated Web Projects in Under 100 Lines</p>
        </div>
      </h1>

      <div className="project-details">
        <h3>
          <br></br>🕐Duration: 90 Minutes <br></br>
          Level: Beginner (Grades 8–12)<br></br>
          Prerequisites: Basic HTML/CSS knowledge helpful but not required!
        </h3>


        <h3>
          1. What are Web Animations and Why Should We Learn Them?
        </h3>
        <p>
          Web animations bring life to static websites! They can guide user attention, provide feedback, and make interactions feel smooth and delightful. With just HTML, CSS, and a touch of JavaScript, we can create engaging experiences that communicate without words - perfect for bridging language barriers and making technology more accessible.
        </p>

        <div className="materials-box">
          Materials:
          <br></br>Text Editor (VS Code, Replit, etc.) <br></br> Web Browser <br></br> Basic HTML/CSS knowledge <br></br> Creativity and patience! <br></br> Optional: Color picker tool
        </div>

        <h3>Let's Get Familiar with Animation Terms:</h3>
        <div style={{overflowX: 'auto', margin: '1rem'}}>
          <table style={{margin: '0 auto', borderCollapse: 'collapse', border: '2px solid #68A691', minWidth: '100%', fontSize: '14px'}}>
            <thead>
              <tr>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '100px'}}>Keyframes</th>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '100px'}}>Transform</th>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '100px'}}>Transition</th>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '100px'}}>Easing</th>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '100px'}}>Duration</th>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '100px'}}>Delay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>Define what happens at specific points in an animation timeline</td>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>Change size, position, rotation, or skew of elements</td>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>Smooth change between two states when triggered</td>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>How the animation accelerates/decelerates (ease-in, ease-out, linear)</td>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>How long the animation takes to complete</td>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>Wait time before animation starts</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2. Project Framework: 5 Cute Animation Ideas (Under 100 Lines Each)</h3>
        
        <h4>🌸 Project 1: Bouncing Heart</h4>
        <p><b>Concept:</b> A heart that bounces and changes colors</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html>
<head>
    <style>
        .heart {
            width: 50px;
            height: 50px;
            background: #ff6b6b;
            transform: rotate(45deg);
            animation: bounce 1s infinite;
            margin: 100px auto;
            position: relative;
        }
        .heart:before,
        .heart:after {
            content: '';
            width: 50px;
            height: 50px;
            background: #ff6b6b;
            border-radius: 50%;
            position: absolute;
        }
        .heart:before {
            top: -25px;
            left: 0;
        }
        .heart:after {
            left: -25px;
            top: 0;
        }
        @keyframes bounce {
            0%, 100% { transform: rotate(45deg) scale(1); }
            50% { transform: rotate(45deg) scale(1.3); }
        }
    </style>
</head>
<body>
    <div class="heart"></div>
</body>
</html>`}
          </pre>
        </div>

        <h4>🌟 Project 2: Floating Stars</h4>
        <p><b>Concept:</b> Multiple stars that float up and fade away</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html>
<head>
    <style>
        body { background: #1a1a2e; overflow: hidden; }
        .star {
            position: absolute;
            color: #ffd700;
            font-size: 20px;
            animation: float 3s ease-out forwards;
        }
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-200px) rotate(360deg);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <script>
        function createStar() {
            const star = document.createElement('div');
            star.className = 'star';
            star.innerHTML = '⭐';
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.bottom = '0px';
            document.body.appendChild(star);
            
            setTimeout(() => star.remove(), 3000);
        }
        
        setInterval(createStar, 500);
    </script>
</body>
</html>`}
          </pre>
        </div>

        <h4>🌈 Project 3: Rainbow Loading Spinner</h4>
        <p><b>Concept:</b> A colorful spinning loader</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html>
<head>
    <style>
        .spinner {
            width: 60px;
            height: 60px;
            border: 6px solid transparent;
            border-top: 6px solid #ff6b6b;
            border-right: 6px solid #4ecdc4;
            border-bottom: 6px solid #45b7d1;
            border-left: 6px solid #f9ca24;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 100px auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        body {
            background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
            height: 100vh;
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="spinner"></div>
</body>
</html>`}
          </pre>
        </div>

        <h4>🐱 Project 4: Wiggling Cat</h4>
        <p><b>Concept:</b> A cute cat emoji that wiggles when hovered</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html>
<head>
    <style>
        .cat {
            font-size: 100px;
            text-align: center;
            margin: 100px;
            cursor: pointer;
            transition: transform 0.1s;
        }
        .cat:hover {
            animation: wiggle 0.5s ease-in-out infinite;
        }
        @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
        }
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            height: 100vh;
        }
    </style>
</head>
<body>
    <div class="cat">🐱</div>
    <p style="text-align: center; color: white; font-family: Arial;">Hover over the cat!</p>
</body>
</html>`}
          </pre>
        </div>

        <h4>🌸 Project 5: Blooming Flower</h4>
        <p><b>Concept:</b> A flower that grows and blooms when clicked</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html>
<head>
    <style>
        .flower {
            font-size: 50px;
            text-align: center;
            margin: 100px;
            cursor: pointer;
            transform: scale(0.5);
            transition: transform 0.8s ease-out;
        }
        .flower.bloomed {
            transform: scale(1.5);
            animation: sway 2s ease-in-out infinite;
        }
        @keyframes sway {
            0%, 100% { transform: scale(1.5) rotate(0deg); }
            50% { transform: scale(1.5) rotate(5deg); }
        }
        body {
            background: linear-gradient(to bottom, #87CEEB, #98FB98);
            margin: 0;
            height: 100vh;
        }
    </style>
</head>
<body>
    <div class="flower" onclick="bloom()">🌸</div>
    <p style="text-align: center; color: #333; font-family: Arial;">Click the flower to make it bloom!</p>
    
    <script>
        function bloom() {
            const flower = document.querySelector('.flower');
            flower.classList.toggle('bloomed');
        }
    </script>
</body>
</html>`}
          </pre>
        </div>

        <h3>3. Key Learning Concepts</h3>
        <p><b>What You've Learned:</b></p>
        <p>
          • <b>CSS Keyframes:</b> How to define multi-step animations<br/><br/>
          • <b>Transform Properties:</b> Scale, rotate, and translate elements<br/><br/>
          • <b>Animation Properties:</b> Duration, easing, and iteration<br/><br/>
          • <b>Interactive Animations:</b> Using hover and click events<br/><br/>
          • <b>Creative Problem-Solving:</b> Making complex effects with simple code<br/><br/>
          • <b>User Experience:</b> How animations improve web interactions
        </p>

        <h3>4. Challenge Extensions</h3>
        <p>
          <b>Level Up Your Projects:</b><br/><br/>
          • Combine multiple animations in one project<br/>
          • Add sound effects with HTML5 audio<br/>
          • Create animations that respond to scroll position<br/>
          • Build a simple animated story or comic<br/>
          • Experiment with CSS variables for dynamic colors<br/>
          • Create animations that work well on mobile devices
        </p>

        <h3>🎉 Congratulations!</h3>
        <p>
          • You've created 5 different animated web projects<br/><br/>
          • You learned fundamental web animation techniques<br/><br/>
          • You practiced combining HTML, CSS, and JavaScript<br/><br/>
          • You explored how animations can enhance user experience<br/><br/>
          • You built projects that are both functional and delightful!
        </p>
            
      </div>

      <div className="button_div">
        <Link to="/projects" className="projects-button">
          See More Projects
        </Link>
      </div>
      
    </main>
    </>
  );
}
