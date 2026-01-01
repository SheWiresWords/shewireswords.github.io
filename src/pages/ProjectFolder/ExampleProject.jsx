import { Link } from "react-router-dom";

export default function ExampleProject() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Introduction to Circuitry and Programming",
          "description": "Light Up the Code: Learning Arduino with Blinking LEDs",
          "provider": {
            "@type": "Organization",
            "name": "She Wires Words"
          },
          "educationalLevel": "Beginner",
          "timeRequired": "PT1H",
          "teaches": ["Arduino Programming", "LED Circuit Building", "Basic Electronics"],
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
          Introduction to Circuitry and Programming
          <p className= "subtitle">Light Up the Code: Learning Arduino with Blinking LEDs</p>
        </div>
      </h1>

      <div className="project-details">
        <h3>
          <br></br>🕐Duration: 60 Minutes <br></br>
          Level: Beginner/Intermediate (Grades 9–12)<br></br>
          Prerequisites: None!
        </h3>

        <img src="/images/IMG_7722.JPG" alt="Arduino project" />

        <h3>
          1. Before we get started, lets answer some questions. What is an
          Arduino? And how does it work in a circuit?
        </h3>
        <p>
          An Arduino is a microcontroller that lets us make understandable,
          feasible hardware projects. Arduino boards receive inputs and outputs
          a reaction accordingly. In a circuit, wires will connect the arduino
          board to the breadboard, which is the white plastic board above. Below, let's take a look at some terms I'll be using when we build our circuit.{" "}
        </p>

        <div className="materials-box">
          Materials:
          <br></br>9 LED Lights <br></br> 9 220Ω Resistors <br></br>12 Jumper Wires <br></br> 1 Breadboard  <br></br> 1 Arduino Uno (I used R3)  <br></br> 1 USB to USB B Cable
        </div>

        <h3>Let's Also Get Familiar with some Circuit Terms:</h3>
        <div style={{overflowX: 'auto', margin: '1rem'}}>
        <table style={{margin: '0 auto', borderCollapse: 'collapse', border: '2px solid #68A691', minWidth: '100%', fontSize: '14px'}}>
          <tr> 
            <td style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1'}}>Charge</td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1'}}>Voltage</td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1'}}>Current</td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1'}}>Resistance</td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1'}}>Anode</td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem', backgroundColor: '#BFD3C1'}}>Cathode</td>
          </tr>
          <tr>
            <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>	The basic property of matter that causes electrical interactions. Electrons carry negative charge.
            </td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>The pressure that pushes electric charge through a circuit.
</td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>The flow of electric charge, measured in amperes (A). More current = more electrons flowing per second.</td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>Slows down the current, measured in ohms (Ω).
</td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>The positive end. This is the long leg of the LED. We will connect this to the Arduino output pin.
</td>
            <td style={{border: '1px solid #68A691', padding: '0.5rem'}}>The negative end. The short leg. This connects to ground (GND).
</td>
          </tr>
        </table>
      </div>
        <h3>
          2. Let's Build the Circuit
        </h3>
        <p>
          <b>Step 1: Set Up Power</b> <br></br>
          • Connect the 5V pin on the Arduino to the + (red) rail on the breadboard.<br></br>

          • Connect a GND pin to the – (blue/black) rail. <br></br>
          • If you haven't done this before and this makes no sense, don't worry. All you need to do is take three jumper wires and configure them exactly like the green lines in the circuit diagram.
          <br></br><br></br>
          <img src="/images/Arduino_Pics/Amazing Borwo.png" alt="Arduino project" />
          <br></br><br></br>
          <b>Step 2: Place the LEDs</b><br></br>
          • Insert 9 LEDs across the breadboard, leaving a few columns between each.<br></br>

          • All long legs (anodes) should be on your left.<br></br>

          • All short legs (cathodes) should be on your right<br></br>
          <img src="/images/Arduino_Pics/IMG_7732.JPG" alt="Arduino project"style={{transform: 'rotate(270deg)', margin:'-30%', scale:'50%'}} />
          <br></br>
          <b>Step 3: Add Resistors</b>
          <br></br>• Connect a 220Ω resistor from each cathode to the GND rail. The GND rail is the topmost row on the breadboard, where the diagonal green line is on the circuit diagram.<br></br>
          <img src="/images/Arduino_Pics/IMG_7731.JPG" style={{transform: 'rotate(270deg)', margin:'-30%', scale:'50%'}} /><br></br>
          <b>Step 4: Wire LEDs to Arduino Pins</b><br></br>
          Connect jumper wires from each anode (long leg) to these Arduino pins as shown in the diagram below. Make sure green ones from Step 1 are there-- they are necessary to correctly make power and ground available on both sides (these two sides aren't connected!)<br></br>
          <img src="/images/Arduino_Pics/IMG_7721.JPG"style={{transform: 'rotate(270deg)', margin:'-30%', scale:'50%'}} /><br></br>
        </p>

        <h3>3. Programming the Arduino</h3>
        <p>Now that we have our circuit built, let's write the code to make our LEDs blink in sequence. <br></br><br></br>
          Before I show you my code, I'm going to talk about a few Arduino programming methods we're going to use. If you want a more in depth programming explanation, check out the resources page.<br></br><br></br>
          We're going to use the setup() and loop() methods to make the LEDS in our heart flash around the shape.
          <br></br><br></br>
          Use pinMode(#, OUTPUT) for each numbered location the wires are put in. For example, if one of the wires that leads to the LED is in spot 12, you will write pinMode(12, OUTPUT).
          <br></br><br></br>
          Do this for every single numbered pin and wire. I suggest putting the wires in the Arduino in order, so the heart lights go in a circle and not in random order.
          <br></br><br></br>
          Now, we have to make the LEDs light up sequentially. To do so, we will use digitalWrite() and delay(). Let's see if you can tell what these two methods do based on my code below. 
        </p>
        
        <div style={{backgroundColor: '#2d3748', padding: '1rem', borderRadius: '8px', margin: '1rem 2rem', textAlign: 'left'}}>
          <pre style={{color: '#e2e8f0', fontSize: '14px', fontFamily: 'Monaco, monospace', margin: 0, whiteSpace: 'pre-wrap'}}>
{`void setup()
{
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(11, OUTPUT);
  ...
  pinMode(5, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(200);
  digitalWrite(13, LOW);
  delay(200);
  
  digitalWrite(12, HIGH);
  delay(200);
  digitalWrite(12, LOW);
  delay(200);
  
  digitalWrite(11, HIGH);
  delay(200);
  digitalWrite(11, LOW);
  delay(200);
  
  ...
  
  digitalWrite(5, HIGH);
  delay(200);
  digitalWrite(5, LOW);
  delay(200);
}`}
          </pre>
        </div>
        
        <p><b>Did you guess it? Here's how digitalWrite() and delay() work:</b></p>
        <p>
          • We defined an array of pin numbers (5-13) where our LEDs are connected<br/><br/>
          • The loop() function runs forever, lighting LEDs 1-9<br/>
          • digitalWrite(pin, HIGH) turns an LED on, LOW turns it off<br/><br/>
          • delay(200) creates a 200ms pause between each LED
        </p><br/><br/>
        <h3> Congrats!</h3> <br/><p>• You learned how to build a circuit using an LED, resistor, and Arduino.<br/><br/>

          • You wrote code to control that circuit using logic and delays.<br/><br/>

          • You practiced building circuits, troubleshooting, and sequencing outputs</p>
            
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