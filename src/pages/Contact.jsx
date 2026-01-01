
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <main>
      <h1><div className="title-container">
          <div className="main-title">Volunteer and Contact</div>
        <p className= "subtitle">Join our mission to empower young women in tech and connect with our community</p>
        </div></h1>


      
      <div className="h2_div">
        <h2>🌟 Become a Volunteer Tutor</h2>
        <div className="square_div_dark_teal">
          <p>
           Do you want service hours for directly impacting high school students in technology? We have both ASYNCHRONOUS and LIVE tutoring positions. Asynchronous tutors make study guides, learning materials, and project instructions in exchange for volunteer hours! Live tutors directly help students in 1-1 meetings. Hours are very flexible for both positions.
          </p>
          <div className="button_div">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScvGaiuwm6odqNfg0WiFFwSNRtfvG3sOGw1cnMkKpltVnu5MQ/viewform?usp=dialog" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="projects-button"
            >
              Volunteer with Us!
            </a>
          </div>
          <p> Not already getting easy volunteer hours from the comfort of your home? Sign up now.</p>

        </div>
      </div>
      
      <div className="h2_div">
        <h2>🌟 Volunteer with Our Newsletter</h2>
        <div className="square_div_dark_teal">
          <p>
            Are you a high school girl passionate about technology? Ready to break barriers and inspire others? 
            Join our newsletter volunteer team and write about your experience in tech to empower the next generation of 
            female tech leaders. Share your coding journey, get volunteer hours, and be part of the 
            movement changing the face of technology.
          </p>
          <div className="button_div">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScvGaiuwm6odqNfg0WiFFwSNRtfvG3sOGw1cnMkKpltVnu5MQ/viewform?usp=dialog" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="projects-button"
            >
             Write us an Article!
            </a>
          </div>
          <p> Not already subscribed? Commit now to hear about the inspiring tech journeys of students just like you!</p>
          <div className="button_div">
            <a 
              href="https://she-wires-words.kit.com/profile?_gl=1*r9gslr*_gcl_au*MTU3MTYzODA5OC4xNzQ4NjU0MzI1LjE0ODE3ODM0NTguMTc0OTc0ODQ5MS4xNzQ5NzQ4NDkx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="projects-button"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>
    

      <div className="h2_div">
        <h2>🔗Follow us on social media</h2>
        <div className="square_div_dark_teal">
          <Link to="https://linktr.ee/shewireswords" className="projects-button">
            Find our Socials Here!
          </Link>
        </div>
      </div>

      <div className="h2_div">
        <h2>🤝Partnership Inquiries and Feedback</h2>
        <div className="square_div_dark_teal">
          <p>We're always looking for new collaborations and welcome your feedback on our projects and mission. Reach us at our business email: shewireswords@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
