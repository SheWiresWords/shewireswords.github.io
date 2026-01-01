import { Link } from "react-router-dom";

export default function IntroJava() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Introduction to Java",
          "description": "Start your Java journey with our beginner-friendly guide covering basics, syntax, and fundamentals",
          "provider": {
            "@type": "Organization",
            "name": "She Wires Words"
          },
          "educationalLevel": "Beginner",
          "timeRequired": "PT4H",
          "teaches": ["Java Syntax", "Variables", "Data Types", "Methods", "Object-Oriented Programming"],
          "courseMode": "self-paced",
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
            <div className="main-title">Introduction to Java</div>
            <p className="subtitle">Start your Java journey with our beginner-friendly guide covering basics, syntax, and fundamentals</p>
          </div>
        </h1>

        <div className="h2_div">
          <h2>☕ What is Java?</h2>
          <div className="square_div_dark_teal">
            <p>
              Java is a powerful, object-oriented programming language that's used everywhere - from mobile apps (like Android apps!) to web servers, and even spacecraft! 
              It was created by Sun Microsystems in 1995 and is now owned by Oracle.
            </p>
            <p>
              <strong>Why learn Java?</strong>
            </p>
            <ul style={{textAlign: "left", padding: "1rem", margin: "0"}}>
              <li>It's beginner-friendly with clear, readable syntax</li>
              <li>It's platform-independent - "write once, run anywhere"</li>
              <li>Huge job market - Java developers are in high demand</li>
              <li>Great for learning programming fundamentals</li>
              <li>Powers many popular applications like Minecraft, Netflix, and Uber</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>🏗️ Basic Java Structure</h2>
          <div className="square_div_dark_teal">
            <p>
              Every Java program starts with a <strong>class</strong>. Think of a class as a blueprint or template. 
              The <code>main</code> method is where your program begins executing - it's like the starting point of your program.
            </p>
            <p><strong>Here's the basic structure every Java program needs:</strong></p>

            <div style={{
              backgroundColor: '#2d3748', 
              padding: '1rem', 
              borderRadius: '8px', 
              margin: '1rem 0',
              overflow: 'auto'
            }}>
              <pre style={{
                color: '#e2e8f0', 
                fontSize: '14px', 
                fontFamily: 'Monaco, Consolas, monospace', 
                margin: 0,
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all'
              }}>
{`public class MyFirstProgram {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
              </pre>
            </div>

            <p><strong>Let's break this down:</strong></p>
            <ul style={{textAlign: "left", padding: "1rem", margin: "0"}}>
              <li><code>public class MyFirstProgram</code> - Creates a class named "MyFirstProgram"</li>
              <li><code>public static void main</code> - The main method where execution starts</li>
              <li><code>String[] args</code> - Allows command line arguments (don't worry about this yet!)</li>
              <li><code>System.out.println()</code> - Prints text to the console</li>
              <li>Curly braces <code>{}</code> group code together</li>
              <li>Semicolons <code>;</code> end each statement</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>📊 Variables and Data Types</h2>
          <div className="square_div_dark_teal">
            <p>
              Variables are like labeled boxes that store different types of information. In Java, you must declare what type of data each variable will hold.
            </p>
            <p><strong>Java's main data types:</strong></p>

            <div style={{
              backgroundColor: '#2d3748', 
              padding: '1rem', 
              borderRadius: '8px', 
              margin: '1rem 0',
              overflow: 'auto'
            }}>
              <pre style={{
                color: '#e2e8f0', 
                fontSize: '14px', 
                fontFamily: 'Monaco, Consolas, monospace', 
                margin: 0,
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all'
              }}>
{`// Integer numbers (whole numbers)
int age = 16;
int studentsInClass = 25;

// Decimal numbers
double gpa = 3.85;
double pi = 3.14159;

// True or false values
boolean isStudent = true;
boolean isWeekend = false;

// Single characters (use single quotes)
char grade = 'A';
char firstLetter = 'J';

// Text (use double quotes)
String name = "Alex";
String favoriteColor = "blue";`}
              </pre>
            </div>

            <p><strong>Key points to remember:</strong></p>
            <ul style={{textAlign: "left", padding: "1rem", margin: "0"}}>
              <li><strong>int</strong> - whole numbers from -2 billion to +2 billion</li>
              <li><strong>double</strong> - decimal numbers (more precise than float)</li>
              <li><strong>boolean</strong> - only true or false (notice lowercase!)</li>
              <li><strong>char</strong> - exactly one character in single quotes</li>
              <li><strong>String</strong> - multiple characters in double quotes (note capital S!)</li>
              <li>Variable names should be descriptive (like "studentAge" not "x")</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>🧮 Basic Operations</h2>
          <div className="square_div_dark_teal">
            <p>
              You can perform math operations and work with your variables:
            </p>

            <div style={{
              backgroundColor: '#2d3748', 
              padding: '1rem', 
              borderRadius: '8px', 
              margin: '1rem 0',
              overflow: 'auto'
            }}>
              <pre style={{
                color: '#e2e8f0', 
                fontSize: '14px', 
                fontFamily: 'Monaco, Consolas, monospace', 
                margin: 0,
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all'
              }}>
{`// Math operations
int a = 10;
int b = 3;
int sum = a + b;        // 13
int difference = a - b; // 7
int product = a * b;    // 30
int quotient = a / b;   // 3 (integer division!)
int remainder = a % b;  // 1 (modulus - leftover)

// String operations
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName; // "John Doe"

// Combining text and numbers
String message = "I am " + age + " years old";`}
              </pre>
            </div>

            <p><strong>Important note:</strong> When dividing integers, Java drops the decimal part! 
            So 10 / 3 = 3, not 3.33. Use double for decimal results.</p>
          </div>
        </div>

        <div className="h2_div">
          <h2>🔄 Control Structures</h2>
          <div className="square_div_dark_teal">
            <p>
              Control structures help you make decisions and repeat actions in your code. They're like giving your program a brain!
            </p>

            <h4>If Statements - Making Decisions:</h4>
            <div style={{
              backgroundColor: '#2d3748', 
              padding: '1rem', 
              borderRadius: '8px', 
              margin: '1rem 0',
              overflow: 'auto'
            }}>
              <pre style={{
                color: '#e2e8f0', 
                fontSize: '14px', 
                fontFamily: 'Monaco, Consolas, monospace', 
                margin: 0,
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all'
              }}>
{`int age = 16;

if (age >= 18) {
    System.out.println("You can vote!");
} else if (age >= 16) {
    System.out.println("You can drive!");
} else {
    System.out.println("Keep growing!");
}

// Comparison operators:
// ==  equals
// !=  not equals  
// >   greater than
// <   less than
// >=  greater than or equal
// <=  less than or equal`}
              </pre>
            </div>

            <h4>For Loops - Repeating Actions:</h4>
            <div style={{
              backgroundColor: '#2d3748', 
              padding: '1rem', 
              borderRadius: '8px', 
              margin: '1rem 0',
              overflow: 'auto'
            }}>
              <pre style={{
                color: '#e2e8f0', 
                fontSize: '14px', 
                fontFamily: 'Monaco, Consolas, monospace', 
                margin: 0,
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all'
              }}>
{`// Count from 1 to 5
for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}

// This prints:
// Count: 1
// Count: 2  
// Count: 3
// Count: 4
// Count: 5`}
              </pre>
            </div>

            <p><strong>Loop breakdown:</strong></p>
            <ul style={{textAlign: "left", padding: "1rem", margin: "0"}}>
              <li><code>int i = 1</code> - Start with i equal to 1</li>
              <li><code>i &lt;= 5</code> - Continue while i is 5 or less</li>
              <li><code>i++</code> - Add 1 to i after each loop (same as i = i + 1)</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>🏛️ Methods</h2>
          <div className="square_div_dark_teal">
            <p>
              Methods are like mini-programs inside your program. They're reusable blocks of code that perform specific tasks. 
              Think of them as recipes - you write the recipe once, then use it whenever you need it!
            </p>

            <div style={{
              backgroundColor: '#2d3748', 
              padding: '1rem', 
              borderRadius: '8px', 
              margin: '1rem 0',
              overflow: 'auto'
            }}>
              <pre style={{
                color: '#e2e8f0', 
                fontSize: '14px', 
                fontFamily: 'Monaco, Consolas, monospace', 
                margin: 0,
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all'
              }}>
{`// Method that adds two numbers
public static int addNumbers(int a, int b) {
    int result = a + b;
    return result;
}

// Method that greets someone
public static void greetPerson(String name) {
    System.out.println("Hello, " + name + "!");
}

// Using the methods in main:
public static void main(String[] args) {
    int sum = addNumbers(5, 3);    // sum = 8
    System.out.println("Sum: " + sum);

    greetPerson("Alice");          // Prints: Hello, Alice!
}`}
              </pre>
            </div>

            <p><strong>Method parts explained:</strong></p>
            <ul style={{textAlign: "left", padding: "1rem", margin: "0"}}>
              <li><code>public static</code> - Keywords that make the method accessible (don't worry about details yet)</li>
              <li><code>int</code> or <code>void</code> - Return type (int returns a number, void returns nothing)</li>
              <li><code>addNumbers</code> - The method name (should describe what it does)</li>
              <li><code>(int a, int b)</code> - Parameters (input values the method needs)</li>
              <li><code>return result;</code> - Sends a value back to whoever called the method</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>💡 Getting Input from Users</h2>
          <div className="square_div_dark_teal">
            <p>
              To make your programs interactive, you'll want to get input from users. Java uses the Scanner class for this:
            </p>

            <div style={{
              backgroundColor: '#2d3748', 
              padding: '1rem', 
              borderRadius: '8px', 
              margin: '1rem 0',
              overflow: 'auto'
            }}>
              <pre style={{
                color: '#e2e8f0', 
                fontSize: '14px', 
                fontFamily: 'Monaco, Consolas, monospace', 
                margin: 0,
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all'
              }}>
{`import java.util.Scanner;  // Add this at the top

public class InteractiveProgram {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("What's your name? ");
        String name = input.nextLine();

        System.out.print("How old are you? ");
        int age = input.nextInt();

        System.out.println("Hi " + name + 
                          ", you are " + age + " years old!");

        input.close(); // Good practice to close Scanner
    }
}`}
              </pre>
            </div>

            <p><strong>Scanner methods you'll use:</strong></p>
            <ul style={{textAlign: "left", padding: "1rem", margin: "0"}}>
              <li><code>nextLine()</code> - Reads a whole line of text</li>
              <li><code>nextInt()</code> - Reads an integer</li>
              <li><code>nextDouble()</code> - Reads a decimal number</li>
              <li><code>next()</code> - Reads a single word</li>
            </ul>
          </div>
        </div>

        <div className="h2_div">
          <h2>🚨 Common Beginner Mistakes</h2>
          <div className="square_div_dark_teal">
            <p><strong>Watch out for these common errors:</strong></p>
            <ul style={{textAlign: "left", padding: "1rem", margin: "0"}}>
              <li><strong>Missing semicolons</strong> - Every statement needs a ;</li>
              <li><strong>Case sensitivity</strong> - "String" is different from "string"</li>
              <li><strong>Mismatched parentheses/braces</strong> - All brackets need to be a pair</li>
              <li><strong>Using = instead of ==</strong> - Use = for assignment, == for comparison</li>
              <li><strong>Forgetting to import Scanner</strong> - Add import java.util.Scanner; at the top</li>
              <li><strong>Integer division surprise</strong> - 5/2 equals 2, not 2.5! </li>
            </ul>

            <p><strong>Pro tip:</strong> Read error messages carefully! They usually tell you exactly what's wrong and which line has the problem.</p>
          </div>
        </div>

        <div className="h2_div">
          <h2>🎯 Next Steps</h2>
          <div className="square_div_dark_teal">
            <p>
              Congratulations! You now know the basics of Java programming. Ready to dive deeper? 
              Check out our APCSA Units for a comprehensive study guide, or explore our coding fundamentals 
              to understand concepts that apply across all programming languages.
            </p>
            <p><strong>Practice suggestions:</strong></p>
            <ul style={{textAlign: "left", padding: "1rem", margin: "0"}}>
              <li>Write a program that calculates the area of a rectangle</li>
              <li>Create a simple calculator that adds, subtracts, multiplies, and divides</li>
              <li>Make a program that asks for your name and age, then tells you when you'll turn 100</li>
              <li>Build a number guessing game</li>
            </ul>

            <div style={{display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem", alignItems: "center"}}>
              <Link to="/learn/apcsa-units" className="projects-button">
                APCSA Units
              </Link>
              <Link to="/learn/coding-fundamentals" className="projects-button">
                Coding Fundamentals
              </Link>
              <Link to="/projects" className="projects-button">
                Practice Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}