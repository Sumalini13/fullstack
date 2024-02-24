
import '../assets/css/About.css';

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
            <p>Our Admission Website serves as your gateway to a transformative academic journey.</p>

         <p> Apply Seamlessly: Easily apply to EduGateway College with personalized support.</p>

Unlock your potential at EduGateway College!</p></div>
            <button className="btn btn-primary">Get Admission</button>
          </div>
         
        </div>
      </div>
    </div>
    </section>

  );
}

export default About;



