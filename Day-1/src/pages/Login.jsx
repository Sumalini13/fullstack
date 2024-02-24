import { useState } from 'react';
import { Form, Button, Alert, FormControl, Image } from 'react-bootstrap'; 
import loginpage from '../assets/images/loginpage.jpg';

import logo from '../assets/images/logo.png';
import '../assets/css/Login.css';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
 
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Email:', email);

      setUsername('');
      setPassword('');
      setEmail('');
      setValidated(false);
      setShowError(false);
    }
    setValidated(true);
  };

  const handleLogin = () => {
    if ( password === 'password' && email === 'example@example.com') {

      console.log('Login successful');
      window.location.href = '/home';
    } 
    else if(password==='admin' && email==='admin@admin.com')
    {
      console.log('Login successful');
      window.location.href='/admin';
    }
    else {
      setShowError(true);
     
    }
  };
  const handleSignup = () => {
    
      window.location.href = '/signup';
    
  };



  return (
    <div className="mt-5">
      

      <Image src={loginpage} alt="Login Image" className="login-image" /> 


      <div className="box">
        <div className='logo1'>
          <Image src={logo} alt="logo"/>
        </div>
  
<div className='form12'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <FormControl
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <FormControl
              required={!username}
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <FormControl
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
          </Form.Group>

        </Form>
        <br />
        <Alert variant="danger" show={showError} className='alert1'>
  Invalid username, password, or email. Please try again.
</Alert>

        <Button variant="secondary" onClick={handleLogin}>Login</Button>
        <br />
        <p className="mt-3">
          By signing in, you agree to our <a href="/terms">Terms and Conditions</a>.
        </p>
        <p className="mt-1">
        <center> Not a member yet? <span onClick={handleSignup}>Sign up</span></center>
        </p>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;




