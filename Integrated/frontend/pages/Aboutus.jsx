
import '../assets/css/About.css'; // Import the CSS file for the about section

import { useRef } from 'react';

const About = () => {
  const aboutUsRef = useRef(null);

  return (
    <section id="about-us" ref={aboutUsRef}>
      <div className="outer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 admission-content">
              <h1>Edugateway</h1>
              <div className='text1'>
                <p>
                  At EduGateway College, we believe in unlocking the potential of every student through quality education and personalized guidance.
                </p>
                <p>Our Admission Website serves as your gateway to a transformative academic journey.</p>
                <p>Apply Seamlessly: Easily apply to EduGateway College with personalized support.</p>
                <p>Unlock your potential at EduGateway College!</p>
              </div>
              <button className="btn btn-primary">Get Admission</button>
            </div>
            {/* Gallery section */}
            <div className="col-md-6 gallery-container">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <img
                    src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1567168544646-208fa5d408fb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2UlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape"
                  />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                  <img
                    src="https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                  />

                  <img
                    src="https://images.pexels.com/photos/7683887/pexels-photo-7683887.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                  />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                  <img
                    src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                  />

                  <img
                    src="https://images.pexels.com/photos/5553065/pexels-photo-5553065.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Yosemite National Park"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
