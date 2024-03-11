// import { useState, useEffect } from 'react';
// import { Form, Button, Alert, Image } from 'react-bootstrap';
// import '../assets/css/Register.css';
// import register from '../assets/images/register.jpg';

// const SignupForm = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordStrength, setPasswordStrength] = useState('');
//   const [passwordsMatch, setPasswordsMatch] = useState(true);
//   const [captcha, setCaptcha] = useState('');
//   const [userCaptchaInput, setUserCaptchaInput] = useState('');
//   const [username, setusername] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobileNumber, setmobileNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [isFormValid, setIsFormValid] = useState(false);

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     checkPasswordStrength(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     if (password !== e.target.value) {
//       setPasswordsMatch(false);
//     } else {
//       setPasswordsMatch(true);
//     }
//   };

//   const checkPasswordStrength = (value) => {
//     if (value.length < 6) {
//       setPasswordStrength('Weak');
//     } else if (value.length < 10) {
//       setPasswordStrength('Good');
//     } else {
//       setPasswordStrength('Strong');
//     }
//   };

//   useEffect(() => {
//     generateCaptcha();
//   }, []);

//   const generateCaptcha = () => {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let captchaText = '';
//     for (let i = 0; i < 6; i++) {
//       captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     setCaptcha(captchaText);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate form fields
//     if (!username || !lastName || !mobileNumber || !email || !password || !confirmPassword || !userCaptchaInput) {
//       alert('Please fill out all required fields.');
//       return;
//     }

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setPasswordsMatch(false);
//       return;
//     }

//     // Check if captcha is correct
//     if (userCaptchaInput !== captcha) {
//       alert('Captcha does not match, please try again.');
//       generateCaptcha();
//       return;
//     }

//     // If all validations pass, sign up
//     console.log('Form submitted');
//     setIsFormValid(true);
//   };

//   useEffect(() => {
//     if (isFormValid) {
//       // Perform sign-up action here (e.g., API call)
//       window.location.href = '/home'; // Redirect after successful signup
//     }
//   }, [isFormValid]);

//   return (
//     <div>
//       <Image src={register} alt="Login Image" className="register" />

//       <Form className="custom-signup-form" onSubmit={handleSubmit}>
//         <h2>Sign up</h2>
//         <div className="col-md-6" style={{ display: 'inline-block', paddingRight: '10px' }}>
//             <Form.Group controlId="username">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter first name" required onChange={(e) => setusername(e.target.value)} />
//             </Form.Group>
//           </div>
//           <div className="col-md-6" style={{ display: 'inline-block', paddingLeft: '10px' }}>
//             <Form.Group controlId="lastName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter last name" required onChange={(e) => setLastName(e.target.value)} />
//             </Form.Group>
//           </div>
       

//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} required />
//           {password && <Form.Text className={`text-${passwordStrength.toLowerCase()}`}>{`Strength: ${passwordStrength}`}</Form.Text>}
//         </Form.Group>

//         <Form.Group controlId="confirmPassword">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
//         </Form.Group>

//         {!passwordsMatch && <Alert variant="danger">Passwords do not match!</Alert>}

//         <Form.Group controlId="mobileNumber">
//           <Form.Label>Phone Number</Form.Label>
//           <Form.Control type="tel" placeholder="Enter phone number" required onChange={(e) => setmobileNumber(e.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="captcha">
//           <Form.Label>Captcha: {captcha}</Form.Label>
//           <Form.Control type="text" placeholder="Enter captcha" value={userCaptchaInput} onChange={(e) => setUserCaptchaInput(e.target.value)} required />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Sign Up
//         </Button>
//       </Form>
//     </div>
//   );
// };


// export default SignupForm;


import { useState} from 'react';
import { Form, Button, Alert, Image } from 'react-bootstrap';
import axios from 'axios';
import '../assets/css/Register.css';
import register from '../assets/images/register.jpg';

const SignupForm = () => {
  const [username, setusername] = useState('');
 
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [userRole, setUserRole] = useState(true);



  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordStrength(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };



  const checkPasswordStrength = (value) => {
    if (value.length < 6) {
      setPasswordStrength('Weak');
    } else if (value.length < 10) {
      setPasswordStrength('Good');
    } else {
      setPasswordStrength('Strong');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:2020/api/users/new', {
        username,
        password,
        mobileNumber,
        email,
        userRole
      });
  
      if (response && response.data) { // Check if response and data are defined
        console.log('User registered:', response.data);
        window.location.href = '/home';
        // Redirect or show success message
      }
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
      setError(error.response.data.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <Image src={register} alt="Login Image" className="register" />
      <Form className="custom-signup-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <Form.Group controlId="username">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" required onChange={(e) => setusername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" required  />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} required />
          {password && <Form.Text className={`text-${passwordStrength.toLowerCase()}`}>{`Strength: ${passwordStrength}`}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        </Form.Group>

        {!passwordsMatch && <Alert variant="danger">Passwords do not match!</Alert>}

        <Form.Group controlId="mobileNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" required onChange={(e) => setMobileNumber(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="role">
          <Form.Label>role</Form.Label>
          <Form.Control type="userRole" placeholder="role" required onChange={(e) => setUserRole(e.target.value)} />
        </Form.Group>

    

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        {error && <Alert variant="danger">{error}</Alert>}
      </Form>
    </div>
  );
};

export default SignupForm;

