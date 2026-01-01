
export default function ArduinoObjectDetection() {
  return (
    <main>
      <h1>
        <div className="main-title">Object Detection with Arduino and Sonar Sensor
          <p className="subtitle">Teaching Your Arduino to "See" the World Around It</p>
        </div>
      </h1>
      
      <div className="project-details">
        <h3>
          🕐Duration: 45 Minutes <br></br>
          Level: Beginner/Intermediate (Grades 7–12)<br></br>
          Prerequisites: Basic understanding of circuits (recommended: complete our LED project first!)
        </h3>

        <img src="/images/Arduino_Pics/temp_image_ED430614-3F3C-41B8-9DD8-DDBC111E9371.jpeg" />

        <h3>
          1. What is Object Detection and How Does Sonar Work?
        </h3>
        <p>
          Object detection is how devices can "sense" objects around them without touching them. A sonar sensor (also called an ultrasonic sensor) works just like how bats and dolphins navigate - by sending out sound waves and measuring how long they take to bounce back! The Arduino can use this information to calculate distances and detect when objects are nearby. You'll learn to create a simple proximity detector that can trigger actions when objects get too close.
        </p>

        <div className="materials-box">
          Materials:
          <br></br>1 Arduino Uno <br></br> 1 HC-SR04 Ultrasonic Sensor <br></br> 1 LED <br></br> 1 220Ω Resistor <br></br> 1 Buzzer (optional) <br></br> 6-8 Jumper Wires <br></br> 1 Breadboard <br></br> 1 USB Cable
        </div>

        <h3>
          2. Understanding the HC-SR04 Ultrasonic Sensor
        </h3>
        <p>
          The HC-SR04 sensor has four pins: VCC (power), GND (ground), Trig (trigger), and Echo (echo). The Trig pin sends out an ultrasonic pulse, and the Echo pin receives the reflected sound. By measuring the time between sending and receiving, we can calculate distance using the speed of sound. This sensor can detect objects from 2cm to 400cm away - perfect for building proximity alarms, automatic doors, or robot navigation systems!
        </p>

        <h3>
          3. Building Your Object Detection Circuit
        </h3>
        <p>
          We'll connect the sensor to detect objects and light up an LED (plus sound a buzzer) when something gets within a certain distance. The Arduino will continuously measure distance and react when an object is detected. This is the foundation for many real-world applications like parking sensors in cars, automatic soap dispensers, and security systems.
        </p>

        <h3>
          4. Programming the Detection Logic
        </h3>
        <p>
          Your Arduino will send a pulse from the Trig pin, measure how long the Echo pin stays HIGH (indicating the sound wave has returned), then calculate the distance. We'll set a threshold distance - if an object is closer than this threshold, the LED lights up and the buzzer sounds an alarm. You'll learn about timing functions, conditional statements, and how to convert time measurements into real-world distances.
        </p>

        <h3>
          5. Real-World Applications and Extensions
        </h3>
        <p>
          Once you've built your basic object detector, you can expand it in many directions! Add multiple LEDs that light up as objects get closer (like a parking sensor), use different tones on the buzzer for different distances, or even connect multiple sensors to detect objects from different directions. This project teaches the fundamentals used in robotics, automation, and IoT devices.
        </p>

        <h3>What You'll Learn:</h3>
        <p>
          • How sound waves can measure distance<br></br>
          • Working with sensor input and digital output<br></br>
          • Converting time measurements to distance calculations<br></br>
          • Building practical detection and alarm systems<br></br>
          • The basics of how robots "see" their environment
        </p>
      </div>
    </main>
  );
}
