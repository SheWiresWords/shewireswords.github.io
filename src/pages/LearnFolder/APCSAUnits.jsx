import { Link } from "react-router-dom";
import { useState } from "react";

export default function APCSAUnits() {
  const [openUnit, setOpenUnit] = useState(null);

  const toggleUnit = (unitNumber) => {
    setOpenUnit(openUnit === unitNumber ? null : unitNumber);
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "AP Computer Science A Units",
          "description": "Complete study guide covering all AP Computer Science A units with examples and practice problems - Updated for 2025",
          "provider": {
            "@type": "Organization",
            "name": "She Wires Words"
          },
          "educationalLevel": "High School",
          "timeRequired": "PT40H",
          "teaches": ["Java Programming", "Object-Oriented Programming", "Data Structures", "Algorithms"],
          "courseMode": "comprehensive",
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
          <div className="title-container">
            <div className="main-title">AP Computer Science A Units</div>
            <p className="subtitle">Complete study guide covering all AP Computer Science A units - Updated for 2025 Curriculum</p>
          </div>
        </h1>

        <Link to='https://www.canva.com/design/DAGrY7bz1Ug/tSc2yaf8dCUaqXIzgoSNFQ/view?utm_content=DAGrY7bz1Ug&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb4252e6cce' className='link-box' style={{padding:'.5rem'}}>
          <div className="announcement">
              <h2> 4 UNITS STUDY GUIDE </h2>
            <p> Want a comprehensive overview of all the units? Check out this study guide, with notes from College Board's official resources.</p>
          </div>
        </Link>
        
        
          <div className="h2_div">
          <h2>📋 Course Overview - NEW 2025 Curriculum</h2>
          <div className="square_div_dark_teal">
            <p>
              Starting in 2025, AP Computer Science A has been restructured into 4 comprehensive units that 
              provide a more integrated approach to learning Java programming and computer science concepts. 
              This new curriculum emphasizes practical application and deeper understanding of core programming principles.
            </p>
            <div className="materials-box" style={{marginTop: "1rem", fontSize: "14px"}}>
              <strong>⚠️ Important:</strong> The curriculum has changed significantly! Previous 10-unit structure has been condensed into 4 comprehensive units.
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="learn-grid desktop-units" style={{gridTemplateColumns: "repeat(2, 1fr)"}}>
          <div className="learn-tile">
            <h3>Unit 1: Programming Fundamentals</h3>
            <p>Master the basics of Java programming including variables, operators, input/output, and basic control structures.</p>
            
            <div className="materials-box" style={{marginTop: "1rem", fontSize: "12px"}}>
              <strong>Key Topics:</strong><br/>
              • Primitive data types (int, double, boolean)<br/>
              • String variables and operations<br/>
              • Assignment and arithmetic operators<br/>
              • Input/output with Scanner<br/>
              • Basic conditional statements<br/>
              • Introduction to methods
            </div>
          </div>

          <div className="learn-tile">
            <h3>Unit 2: Object-Oriented Programming</h3>
            <p>Dive deep into OOP concepts, class design, and object interactions that form the foundation of Java programming.</p>
            <div className="materials-box" style={{marginTop: "1rem", fontSize: "12px"}}>
              <strong>Key Topics:</strong><br/>
              • Class definition and instantiation<br/>
              • Instance variables and methods<br/>
              • Constructors and method overloading<br/>
              • Encapsulation and access modifiers<br/>
              • Static vs instance members<br/>
              • Object relationships and composition
            </div>
          </div>

          <div className="learn-tile">
            <h3>Unit 3: Control Structures and Data Processing</h3>
            <p>Learn advanced control flow, iteration patterns, and fundamental algorithms for data processing.</p>
            <div className="materials-box" style={{marginTop: "1rem", fontSize: "12px"}}>
              <strong>Key Topics:</strong><br/>
              • Complex boolean expressions and logical operators<br/>
              • Nested conditionals and switch statements<br/>
              • While loops, for loops, and enhanced for loops<br/>
              • Nested iteration and loop analysis<br/>
              • Algorithm development and optimization<br/>
              • String processing algorithms
            </div>
          </div>

          <div className="learn-tile">
            <h3>Unit 4: Data Structures and Advanced Concepts</h3>
            <p>Explore arrays, collections, inheritance, and recursive problem-solving techniques.</p>
            <div className="materials-box" style={{marginTop: "1rem", fontSize: "12px"}}>
              <strong>Key Topics:</strong><br/>
              • 1D and 2D arrays with traversal algorithms<br/>
              • ArrayList methods and dynamic collections<br/>
              • Searching and sorting algorithms<br/>
              • Inheritance and polymorphism<br/>
              • Method overriding and the super keyword<br/>
              • Recursive methods and problem solving
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Layout */}
        <div className="mobile-units">
          <div className="unit-dropdown">
            <button 
              className="unit-header" 
              onClick={() => toggleUnit(1)}
              aria-expanded={openUnit === 1}
            >
              <h3>Unit 1: Programming Fundamentals</h3>
              <span className={`dropdown-arrow ${openUnit === 1 ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`unit-content ${openUnit === 1 ? 'open' : ''}`}>
              <p>Master the basics of Java programming including variables, operators, input/output, and basic control structures.</p>
              <div className="materials-box" style={{marginTop: "1rem", fontSize: "12px"}}>
                <strong>Key Topics:</strong><br/>
                • Primitive data types (int, double, boolean)<br/>
                • String variables and operations<br/>
                • Assignment and arithmetic operators<br/>
                • Input/output with Scanner<br/>
                • Basic conditional statements<br/>
                • Introduction to methods
              </div>
            </div>
          </div>

          <div className="unit-dropdown">
            <button 
              className="unit-header" 
              onClick={() => toggleUnit(2)}
              aria-expanded={openUnit === 2}
            >
              <h3>Unit 2: Object-Oriented Programming</h3>
              <span className={`dropdown-arrow ${openUnit === 2 ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`unit-content ${openUnit === 2 ? 'open' : ''}`}>
              <p>Dive deep into OOP concepts, class design, and object interactions that form the foundation of Java programming.</p>
              <div className="materials-box" style={{marginTop: "1rem", fontSize: "12px"}}>
                <strong>Key Topics:</strong><br/>
                • Class definition and instantiation<br/>
                • Instance variables and methods<br/>
                • Constructors and method overloading<br/>
                • Encapsulation and access modifiers<br/>
                • Static vs instance members<br/>
                • Object relationships and composition
              </div>
            </div>
          </div>

          <div className="unit-dropdown">
            <button 
              className="unit-header" 
              onClick={() => toggleUnit(3)}
              aria-expanded={openUnit === 3}
            >
              <h3>Unit 3: Control Structures and Data Processing</h3>
              <span className={`dropdown-arrow ${openUnit === 3 ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`unit-content ${openUnit === 3 ? 'open' : ''}`}>
              <p>Learn advanced control flow, iteration patterns, and fundamental algorithms for data processing.</p>
              <div className="materials-box" style={{marginTop: "1rem", fontSize: "12px"}}>
                <strong>Key Topics:</strong><br/>
                • Complex boolean expressions and logical operators<br/>
                • Nested conditionals and switch statements<br/>
                • While loops, for loops, and enhanced for loops<br/>
                • Nested iteration and loop analysis<br/>
                • Algorithm development and optimization<br/>
                • String processing algorithms
              </div>
            </div>
          </div>

          <div className="unit-dropdown">
            <button 
              className="unit-header" 
              onClick={() => toggleUnit(4)}
              aria-expanded={openUnit === 4}
            >
              <h3>Unit 4: Data Structures and Advanced Concepts</h3>
              <span className={`dropdown-arrow ${openUnit === 4 ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`unit-content ${openUnit === 4 ? 'open' : ''}`}>
              <p>Explore arrays, collections, inheritance, and recursive problem-solving techniques.</p>
              <div className="materials-box" style={{marginTop: "1rem", fontSize: "12px"}}>
                <strong>Key Topics:</strong><br/>
                • 1D and 2D arrays with traversal algorithms<br/>
                • ArrayList methods and dynamic collections<br/>
                • Searching and sorting algorithms<br/>
                • Inheritance and polymorphism<br/>
                • Method overriding and the super keyword<br/>
                • Recursive methods and problem solving
              </div>
            </div>
          </div>
        </div>

        <div className="h2_div">
          <h2>🔄 What Changed in 2025?</h2>
          <div className="square_div_dark_teal">
            <p>
              The new curriculum consolidates the previous 10 units into 4 more comprehensive units that:
            </p>
            <ul style={{textAlign: "left", padding: "1rem"}}>
              <li><strong>Integrate concepts:</strong> Related topics are now taught together for better understanding</li>
              <li><strong>Emphasize application:</strong> More focus on practical programming and problem-solving</li>
              <li><strong>Streamline progression:</strong> Clearer learning pathway from basics to advanced concepts</li>
              <li><strong>Maintain rigor:</strong> Same depth of content with improved organization</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>📚 Study Resources</h2>
          <div className="square_div_dark_teal">
            <p>
              Ready to practice? Check out our AP Archive for past exam questions and scoring guidelines, 
              or dive into our projects to test your skills beyond the AP level.
            </p>
            <Link to="/ap-archive" className="projects-button">
              AP Archive
            </Link>
            <Link to="/projects" className="projects-button">
              Projects
            </Link>
          </div>
        </div>

        <div className="h2_div">
          <h2>🎯 Exam Information</h2>
          <div className="square_div_dark_teal">
            <p>
              <strong>Exam Format:</strong> 3 hours • 40 multiple choice questions (50% of score) • 4 free response questions (50% of score)
            </p>
            <p>
              <strong>Key Skills:</strong> Program Design and Algorithm Development • Code Logic • Code Implementation • Code Testing • Documentation
            </p>
            <p>
              <strong>Programming Language:</strong> Java (no specific IDE required for the exam)
            </p>
            <p>
              <strong>New for 2025:</strong> Revised curriculum with integrated unit structure and updated content emphasis
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
