import {  Image } from 'react-bootstrap';
import '../assets/css/About.css'; 
import Carousel from 'react-bootstrap/Carousel';

import '../assets/css/Home.css';

import first from '../assets/images/first.jpeg';
import logo from '../assets/images/logo.png';


import About from './Aboutus';
import Footer from '../components/Footer';


import CourseList from './Search';
import NavDropdown1 from '../components/Navbar';
import CardComponent from '../pages/Table';



function NavDropdownExample() {

  return (

 <div>
  <div>
    <header>
      <NavDropdown1/>
    </header>

  </div>
    <div>
    <Carousel interval={3000} pause={false}>
      
      <Carousel.Item>
        <img
           className="slide1"
          src={first}
          alt="Second slide"
        />
        <Carousel.Caption div className='caption'>
        <div className='logo'>
          <Image src={logo} alt="logo"/>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      
      
    </Carousel>
    <br></br>    <br></br>    <br></br>
    </div>
    <About/>
    <div>
     <hr></hr>
    <br></br>    <br></br>    <br></br>
      <div>
        <CourseList/>
      </div>
      

<br></br><br></br>
<hr></hr>
      <div>
        <CardComponent/>
      </div>
    </div>
    <footer>
      <Footer/>
    </footer>
   
    </div>
   
  );
}
export default NavDropdownExample;












 


