
import { Link } from "react-router-dom";

export default function ResponsiveWebLayouts() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Responsive Web Layouts",
          "description": "Master the Art of Creating Websites That Look Great on Any Device",
          "provider": {
            "@type": "Organization",
            "name": "She Wires Words"
          },
          "educationalLevel": "Beginner",
          "timeRequired": "PT2H",
          "teaches": ["CSS Grid", "Flexbox", "Media Queries", "Responsive Design", "Mobile-First Design"],
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
          Responsive Web Layouts
          <p className= "subtitle">Master the Art of Creating Websites That Look Great on Any Device</p>
        </div>
      </h1>

      <div className="project-details">
        <h3>
          <br></br>🕐Duration: 2 Hours <br></br>
          Level: Beginner to Intermediate (Grades 8–12)<br></br>
          Prerequisites: Basic HTML/CSS knowledge required
        </h3>

        <h3>
          1. What is Responsive Web Design and Why Does It Matter?
        </h3>
        <p>
          Responsive web design ensures your website looks and functions perfectly on any device - from tiny phone screens to massive desktop monitors. With over 50% of web traffic coming from mobile devices, responsive design isn't optional anymore - it's essential! You'll learn to create layouts that automatically adapt, reflow, and reorganize content based on screen size.
        </p>

        <div className="materials-box">
          Materials:
          <br></br>Text Editor (VS Code, Replit, etc.) <br></br> Web Browser with Developer Tools <br></br> Basic understanding of HTML/CSS <br></br> A growth mindset for learning! <br></br> Optional: Multiple devices for testing
        </div>

        <h3>Let's Get Familiar with Responsive Design Terms:</h3>
        <div style={{overflowX: 'auto', margin: '1rem'}}>
          <table style={{margin: '0 auto', borderCollapse: 'collapse', border: '2px solid #68A691', minWidth: '100%', fontSize: '14px'}}>
            <thead>
              <tr>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '120px'}}>Media Queries</th>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '120px'}}>Flexbox</th>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '120px'}}>CSS Grid</th>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '120px'}}>Breakpoints</th>
                <th style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1', minWidth: '120px'}}>Viewport</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>CSS rules that apply styles based on device characteristics like screen width</td>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>One-dimensional layout method for arranging items in rows or columns</td>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>Two-dimensional layout system for creating complex grid-based designs</td>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>Specific screen widths where your design changes to accommodate different devices</td>
                <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>The visible area of a web page on different devices</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2. Project Framework: 5 Essential Responsive Layout Techniques</h3>
        
        <h4>📱 Project 1: Mobile-First Navigation</h4>
        <p><b>Concept:</b> A navigation that transforms from hamburger menu to full navigation bar</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navigation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        nav {
            background: #333;
            color: white;
            padding: 1rem;
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }
        
        .hamburger span {
            width: 25px;
            height: 3px;
            background: white;
            margin: 3px 0;
            transition: 0.3s;
        }
        
        /* Mobile Styles */
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }
            
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background: #333;
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0,0,0,0.05);
                padding: 2rem 0;
            }
            
            .nav-menu.active {
                left: 0;
            }
        }
    </style>
</head>
<body>
    <nav>
        <div class="nav-container">
            <div class="logo">MyWebsite</div>
            <ul class="nav-menu">
                <li><a href="#" style="color: white; text-decoration: none;">Home</a></li>
                <li><a href="#" style="color: white; text-decoration: none;">About</a></li>
                <li><a href="#" style="color: white; text-decoration: none;">Services</a></li>
                <li><a href="#" style="color: white; text-decoration: none;">Contact</a></li>
            </ul>
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    
    <script>
        function toggleMenu() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        }
    </script>
</body>
</html>`}
          </pre>
        </div>

        <h4>📊 Project 2: Flexible Card Grid Layout</h4>
        <p><b>Concept:</b> Cards that automatically adjust from 1 to 4 columns based on screen size</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Card Grid</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 2rem;
            background: #f5f5f5;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
        }
        
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }
        
        .card {
            background: white;
            border-radius: 10px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card h3 {
            color: #333;
            margin-bottom: 1rem;
        }
        
        .card p {
            color: #666;
            line-height: 1.5;
        }
        
        /* Responsive breakpoints */
        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }
            
            .card-grid {
                grid-template-columns: 1fr;
            }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
            .card-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 1025px) {
            .card-grid {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Our Services</h1>
        <div class="card-grid">
            <div class="card">
                <h3>Web Design</h3>
                <p>Creating beautiful, responsive websites that engage your audience and drive results.</p>
            </div>
            <div class="card">
                <h3>Development</h3>
                <p>Building robust web applications with modern technologies and best practices.</p>
            </div>
            <div class="card">
                <h3>SEO Optimization</h3>
                <p>Improving your website's visibility and ranking on search engines.</p>
            </div>
            <div class="card">
                <h3>Digital Marketing</h3>
                <p>Promoting your brand and reaching your target audience effectively online.</p>
            </div>
            <div class="card">
                <h3>Content Creation</h3>
                <p>Crafting compelling content that tells your story and connects with customers.</p>
            </div>
            <div class="card">
                <h3>Analytics</h3>
                <p>Tracking and analyzing website performance to optimize user experience.</p>
            </div>
        </div>
    </div>
</body>
</html>`}
          </pre>
        </div>

        <h4>🏗️ Project 3: Holy Grail Layout with CSS Grid</h4>
        <p><b>Concept:</b> Classic website layout with header, footer, sidebar, and main content</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Holy Grail Layout</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            min-height: 100vh;
            display: grid;
            grid-template-areas: 
                "header header header"
                "sidebar main aside"
                "footer footer footer";
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 200px 1fr 200px;
            gap: 1rem;
        }
        
        header {
            grid-area: header;
            background: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        
        .sidebar {
            grid-area: sidebar;
            background: #e8e8e8;
            padding: 1rem;
        }
        
        main {
            grid-area: main;
            background: white;
            padding: 2rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .aside {
            grid-area: aside;
            background: #f0f0f0;
            padding: 1rem;
        }
        
        footer {
            grid-area: footer;
            background: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        
        /* Mobile Layout */
        @media (max-width: 768px) {
            body {
                grid-template-areas: 
                    "header"
                    "main"
                    "sidebar"
                    "aside"
                    "footer";
                grid-template-columns: 1fr;
                grid-template-rows: auto 1fr auto auto auto;
            }
        }
        
        /* Tablet Layout */
        @media (min-width: 769px) and (max-width: 1024px) {
            body {
                grid-template-areas: 
                    "header header"
                    "sidebar main"
                    "aside main"
                    "footer footer";
                grid-template-columns: 250px 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>My Responsive Website</h1>
    </header>
    
    <div class="sidebar">
        <h3>Navigation</h3>
        <ul style="list-style: none; padding-top: 1rem;">
            <li style="margin-bottom: 0.5rem;"><a href="#" style="text-decoration: none; color: #333;">Home</a></li>
            <li style="margin-bottom: 0.5rem;"><a href="#" style="text-decoration: none; color: #333;">About</a></li>
            <li style="margin-bottom: 0.5rem;"><a href="#" style="text-decoration: none; color: #333;">Services</a></li>
            <li style="margin-bottom: 0.5rem;"><a href="#" style="text-decoration: none; color: #333;">Contact</a></li>
        </ul>
    </div>
    
    <main>
        <h2>Main Content Area</h2>
        <p>This is the main content area that adapts beautifully to different screen sizes. On desktop, it sits between two sidebars. On tablet, the sidebars stack. On mobile, everything flows vertically for optimal reading experience.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </main>
    
    <div class="aside">
        <h3>Recent Posts</h3>
        <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">Understanding CSS Grid</p>
        <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">Responsive Design Tips</p>
        <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">Mobile-First Approach</p>
    </div>
    
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`}
          </pre>
        </div>

        <h4>💪 Project 4: Flexbox Hero Section</h4>
        <p><b>Concept:</b> Hero section that stacks content vertically on mobile, horizontally on desktop</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Hero Section</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
        }
        
        .hero {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            padding: 2rem;
        }
        
        .hero-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 3rem;
        }
        
        .hero-content {
            flex: 1;
            color: white;
        }
        
        .hero-content h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            line-height: 1.2;
        }
        
        .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            line-height: 1.5;
        }
        
        .cta-button {
            background: #ff6b6b;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: transform 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
        }
        
        .hero-image {
            flex: 1;
            text-align: center;
        }
        
        .placeholder-image {
            width: 400px;
            height: 300px;
            background: rgba(255,255,255,0.1);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
            backdrop-filter: blur(10px);
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .hero-container {
                flex-direction: column;
                text-align: center;
            }
            
            .hero-content h1 {
                font-size: 2rem;
            }
            
            .hero-content p {
                font-size: 1rem;
            }
            
            .placeholder-image {
                width: 100%;
                max-width: 300px;
                height: 200px;
            }
        }
        
        /* Tablet */
        @media (min-width: 769px) and (max-width: 1024px) {
            .hero-content h1 {
                font-size: 2.5rem;
            }
            
            .placeholder-image {
                width: 350px;
                height: 250px;
            }
        }
    </style>
</head>
<body>
    <section class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1>Build Amazing Responsive Websites</h1>
                <p>Learn modern web design techniques that work perfectly on every device. Master CSS Grid, Flexbox, and responsive design principles.</p>
                <a href="#" class="cta-button">Start Learning Today</a>
            </div>
            <div class="hero-image">
                <div class="placeholder-image">
                    🌟 Your Amazing Image Here
                </div>
            </div>
        </div>
    </section>
</body>
</html>`}
          </pre>
        </div>

        <h4>🎯 Project 5: Complete Responsive Landing Page</h4>
        <p><b>Concept:</b> Full landing page combining all responsive techniques learned</p>
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Responsive Landing Page</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        /* Header */
        header {
            background: #fff;
            padding: 1rem 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #667eea;
        }
        
        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        nav a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 4rem 2rem;
            text-align: center;
            color: white;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .btn {
            background: #ff6b6b;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: transform 0.3s ease;
        }
        
        .btn:hover {
            transform: translateY(-2px);
        }
        
        /* Features Section */
        .features {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .features h2 {
            text-align: center;
            margin-bottom: 3rem;
            font-size: 2.5rem;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .feature-card {
            text-align: center;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            background: white;
        }
        
        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        /* Footer */
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 2rem;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .header-container {
                padding: 0 1rem;
            }
            
            nav ul {
                display: none;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .hero p {
                font-size: 1rem;
            }
            
            .features {
                padding: 2rem 1rem;
            }
            
            .features h2 {
                font-size: 2rem;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <div class="logo">ResponsiveWeb</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <section class="hero" id="home">
        <h1>Master Responsive Design</h1>
        <p>Create websites that look amazing on every device. Learn the techniques that professional developers use every day.</p>
        <a href="#features" class="btn">Explore Features</a>
    </section>
    
    <section class="features" id="features">
        <h2>Why Responsive Design Matters</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3>Mobile-First</h3>
                <p>Start with mobile design and scale up for larger screens. This ensures the best user experience across all devices.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Fast Loading</h3>
                <p>Responsive designs load faster and provide better performance, especially on mobile networks.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <h3>Better SEO</h3>
                <p>Google prioritizes mobile-friendly websites in search results. Responsive design boosts your SEO.</p>
            </div>
        </div>
    </section>
    
    <footer>
        <p>&copy; 2024 ResponsiveWeb. Built with modern CSS techniques.</p>
    </footer>
</body>
</html>`}
          </pre>
        </div>

        <h3>3. Key Learning Concepts</h3>
        <p><b>What You've Mastered:</b></p>
        <p>
          • <b>Mobile-First Design:</b> Starting small and scaling up for better performance<br/><br/>
          • <b>CSS Grid:</b> Creating complex two-dimensional layouts effortlessly<br/><br/>
          • <b>Flexbox:</b> Aligning and distributing space in one-dimensional layouts<br/><br/>
          • <b>Media Queries:</b> Applying different styles based on device characteristics<br/><br/>
          • <b>Responsive Units:</b> Using relative units like %, rem, and vh/vw<br/><br/>
          • <b>Viewport Meta Tag:</b> Ensuring proper mobile rendering<br/><br/>
          • <b>Design Principles:</b> Creating layouts that work across all screen sizes
        </p>

        <h3>4. Testing Your Responsive Designs</h3>
        <p>
          <b>Essential Testing Techniques:</b><br/><br/>
          • Use browser developer tools to simulate different devices<br/>
          • Test on actual mobile devices when possible<br/>
          • Check common breakpoints: 320px, 768px, 1024px, 1200px<br/>
          • Verify touch targets are at least 44px for mobile usability<br/>
          • Test landscape and portrait orientations<br/>
          • Ensure content remains readable and accessible
        </p>

        <h3>5. Challenge Extensions</h3>
        <p>
          <b>Level Up Your Skills:</b><br/><br/>
          • Create a responsive image gallery with different grid layouts<br/>
          • Build a responsive dashboard with sidebar navigation<br/>
          • Design a mobile-first e-commerce product grid<br/>
          • Create responsive typography that scales with screen size<br/>
          • Build a responsive form with proper mobile optimization<br/>
          • Experiment with CSS Container Queries for component-based responsive design
        </p>

        <h3>🎉 Congratulations!</h3>
        <p>
          • You've mastered the fundamentals of responsive web design<br/><br/>
          • You can create layouts that work beautifully on any device<br/><br/>
          • You understand mobile-first design principles<br/><br/>
          • You've learned both CSS Grid and Flexbox techniques<br/><br/>
          • You can write media queries to handle different screen sizes<br/><br/>
          • You're ready to build professional, accessible websites!
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
