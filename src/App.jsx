import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import Learn from './pages/Learn';
import APArchive from './pages/APArchive';
import IntroJava from './pages/LearnFolder/IntroJava';
import LearnHTML from './pages/LearnHTML';
import LessonUnit2 from './pages/LessonUnit2';
import APCSAUnits from './pages/LearnFolder/APCSAUnits';
import CodingFundamentals from './pages/LearnFolder/CodingFundamentals';
import ExampleProject from './pages/ProjectFolder/ExampleProject';
import RaspberryPiProgramming from './pages/ProjectFolder/RaspberryPiProgramming';
import ArduinoSonar from './pages/ProjectFolder/ArduinoSonar';
import VoiceAssistant from './pages/ProjectFolder/VoiceAssistant';
import SimpleWebAnimations from './pages/ProjectFolder/SimpleWebAnimations';
import ResponsiveWebLayouts from './pages/ProjectFolder/ResponsiveWebLayouts';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/learn/HTML" element={<LearnHTML />} />
          <Route path="/lesson/Unit2" element={<LessonUnit2 />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/ap-archive" element={<APArchive />} />
          <Route path="/learn/intro-java" element={<IntroJava />} />
          <Route path="/learn/apcsa-units" element={<APCSAUnits />} />
          <Route path="/learn/coding-fundamentals" element={<CodingFundamentals />} />
          <Route path="/projects/example" element={<ExampleProject />} />
          <Route path="/projects/raspberry-pi-programming" element={<RaspberryPiProgramming />} />
          <Route path="/projects/arduino-sonar" element={<ArduinoSonar />} />
          <Route path="/projects/voice-assistant" element={<VoiceAssistant />} />
          <Route path="/projects/simple-web-animations" element={<SimpleWebAnimations />} />
          <Route path="/projects/responsive-web-layouts" element={<ResponsiveWebLayouts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}