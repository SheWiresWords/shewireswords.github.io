import { Link } from "react-router-dom";

export default function CodingFundamentals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Coding Fundamentals",
          "description": "Essential programming concepts that apply across all languages and platforms",
          "provider": {
            "@type": "Organization",
            "name": "She Wires Words"
          },
          "educationalLevel": "Beginner",
          "timeRequired": "PT6H",
          "teaches": ["Programming Logic", "Problem Solving", "Algorithms", "Data Structures", "Debugging"],
          "courseMode": "language-agnostic",
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
            <div className="main-title">Coding Fundamentals</div>
            <p className="subtitle">Essential programming concepts that apply across all languages and platforms</p>
          </div>
        </h1>

        <div className="h2_div">
          <h2>🤔 What is Programming?</h2>
          <div className="square_div_dark_teal">
            <p>
              Programming is the art of giving instructions to a computer to solve problems. 
              Just like following a recipe to bake a cake, programming involves breaking down complex tasks 
              into simple, step-by-step instructions that a computer can understand and execute.
            </p>
          </div>
        </div>

        <div className="h2_div">
          <h2>🧩 Core Concepts</h2>
          <div className="square_div_dark_teal">
            <h4>Variables - The Storage Boxes</h4>
            <p>
              Variables are like labeled boxes where you store information. Whether you're using Java, Python, or JavaScript, 
              you'll always need to store and manipulate data.
            </p>
            
            <h4>Control Flow - Making Decisions</h4>
            <p>
              Programs need to make decisions and repeat actions. This includes:
            </p>
            <ul style={{textAlign: "left", padding: "1rem"}}>
              <li><strong>Conditionals:</strong> "If this, then do that"</li>
              <li><strong>Loops:</strong> "Repeat this until..."</li>
              <li><strong>Functions:</strong> "Package this code for reuse"</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>🎯 Problem-Solving Process</h2>
          <div className="square_div_dark_teal">
            <h4>1. Understand the Problem</h4>
            <p>Before writing any code, make sure you completely understand what you're trying to solve.</p>
            
            <h4>2. Break It Down</h4>
            <p>Divide the problem into smaller, manageable pieces. This is called "decomposition."</p>
            
            <h4>3. Plan Your Solution</h4>
            <p>Write pseudocode or draw flowcharts to map out your approach.</p>
            
            <h4>4. Code and Test</h4>
            <p>Implement your solution and test it with different inputs.</p>
            
            <h4>5. Debug and Refine</h4>
            <p>Fix any issues and improve your code's efficiency and readability.</p>
          </div>
        </div>

        <div className="h2_div">
          <h2>📊 Data Structures</h2>
          <div className="square_div_dark_teal">
            <p>
              Data structures are ways to organize and store data efficiently:
            </p>
            <ul style={{textAlign: "left", padding: "1rem"}}>
              <li><strong>Arrays/Lists:</strong> Store multiple items in order</li>
              <li><strong>Objects/Maps:</strong> Store key-value pairs</li>
              <li><strong>Stacks:</strong> Last in, first out (like a stack of plates)</li>
              <li><strong>Queues:</strong> First in, first out (like a line at a store)</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>⚡ Algorithms</h2>
          <div className="square_div_dark_teal">
            <p>
              Algorithms are step-by-step procedures for solving problems. Common algorithms include:
            </p>
            <h4>Searching Algorithms:</h4>
            <ul style={{textAlign: "left", padding: "1rem"}}>
              <li><strong>Linear Search:</strong> Check each item one by one</li>
              <li><strong>Binary Search:</strong> Divide and conquer (for sorted data)</li>
            </ul>
            
            <h4>Sorting Algorithms:</h4>
            <ul style={{textAlign: "left", padding: "1rem"}}>
              <li><strong>Bubble Sort:</strong> Compare adjacent elements</li>
              <li><strong>Selection Sort:</strong> Find the minimum and swap</li>
              <li><strong>Merge Sort:</strong> Divide, sort, and merge</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>🐛 Debugging Skills</h2>
          <div className="square_div_dark_teal">
            <p>
              Debugging is like being a detective. Here are essential debugging strategies:
            </p>
            <ul style={{textAlign: "left", padding: "1rem"}}>
              <li><strong>Read Error Messages:</strong> They often tell you exactly what's wrong</li>
              <li><strong>Use Print Statements:</strong> See what values your variables have</li>
              <li><strong>Check Your Logic:</strong> Walk through your code step by step</li>
              <li><strong>Test with Simple Cases:</strong> Start with basic inputs</li>
              <li><strong>Take Breaks:</strong> Fresh eyes often spot bugs immediately</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>💡 Best Practices</h2>
          <div className="square_div_dark_teal">
            <h4>Code Readability:</h4>
            <ul style={{textAlign: "left", padding: "1rem"}}>
              <li>Use meaningful variable names</li>
              <li>Add comments to explain complex logic</li>
              <li>Keep functions small and focused</li>
              <li>Use consistent formatting</li>
            </ul>
            
            <h4>Planning:</h4>
            <ul style={{textAlign: "left", padding: "1rem"}}>
              <li>Plan before you code</li>
              <li>Start simple, then add complexity</li>
              <li>Test frequently</li>
              <li>Don't be afraid to start over if needed</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>🚀 Next Steps</h2>
          <div className="square_div_dark_teal">
            <p>
              Ready to apply these fundamentals? Try our hands-on projects or dive deeper into Java programming 
              with our Introduction to Java guide. These concepts will serve you well in any programming language!
            </p>
            <Link to="/learn/intro-java" className="projects-button">
              Java Basics
            </Link>
            <Link to="/projects" className="projects-button">
              Practice Projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
