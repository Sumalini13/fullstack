// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     username: '',
//     password: '',
//     rememberMe: false,
//   });
//   const [emailError, setEmailError] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!validateEmail(formData.email)) {
//       setEmailError('Valid Email Address is Required');
//       return;
//     }

//     setEmailError('');
//     try {
//       const response = await axios.post('http://localhost:2020/api/users/authenticate', {
//         email: formData.email,
//         username: formData.username,
//         password: formData.password,
//       });
//       const { token, role } = response.data;

//       localStorage.setItem('token', token);

//       if (role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/home');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Login failed. Please try again.');
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value, checked } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: name === 'rememberMe' ? checked : value,
//     }));
//   };

//   const navigateToSignUp = () => {
//     navigate('/Signup');
//   };

//   return (
//     <div style={{ 
//       backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/03/87/93/96/1000_F_387939697_YmxnmHD4Yu6aMNSJhBIgHXg5uQGmJ5Yi.jpg')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh'
//     }}>
//       <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', width: '400px' ,marginRight:'700px'}}>
//         <div style={{ textAlign: 'center' }}>
//           <h1 style={{ color: '#333' }}>LOGIN</h1>
//           <br />
//         </div>
//         <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
//           <div style={{ marginBottom: '20px' }}>
//             <label htmlFor="email">Email address</label>
//             <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
//             {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <label htmlFor="username">Username</label>
//             <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <label htmlFor="password">Password</label>
//             <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <input type="checkbox" id="rememberMe" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
//             <label htmlFor="rememberMe">Remember me</label>
//           </div>
//           <button type="submit" className="btn btn-primary">LOGIN</button>
//           <div style={{ textAlign: 'center', marginTop: '10px' }}>
//             <a href="#">Forgot Password?</a>
//           </div>
//           <div style={{ textAlign: 'center', marginTop: '20px' }}>
//             <p style={{ color: '#333' }}>Dont have an account? <a href="#" onClick={navigateToSignUp}>Sign Up</a></p>
//           </div>
//         </form>
//         <p style={{ textAlign: 'center', color: '#333' }}>
//           <a href="https://bootstrap.com/" style={{ color: '#007bff' }}>Your Website</a> {new Date().getFullYear()}.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    rememberMe: false,
  });
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Valid Email Address is Required');
      return;
    }

    setEmailError('');
    try {
      const response = await axios.post('http://localhost:2020/api/users/authenticate', {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      });
      const { token, role } = response.data;

      localStorage.setItem('token', token);

      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rememberMe' ? checked : value,
    }));
  };

  const navigateToSignUp = () => {
    navigate('/Signup');
  };

  return (
    <div style={{ 
      backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/03/87/93/96/1000_F_387939697_YmxnmHD4Yu6aMNSJhBIgHXg5uQGmJ5Yi.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '40px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', width: '400px' ,marginRight:'700px'}}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={logo} alt="Logo" style={{ width: '200px' }} />
        </div>
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '8px', fontSize: '14px' }} />
            {emailError && <div style={{ color: 'red', fontSize: '12px' }}>{emailError}</div>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required style={{ padding: '8px', fontSize: '14px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required style={{ padding: '8px', fontSize: '14px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input type="checkbox" id="rememberMe" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary" style={{ fontSize: '16px' }}>LOGIN</button>
        
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ color: '#333', fontSize: '14px' }}>Dont have an account? <a href="#" onClick={navigateToSignUp}>Sign Up</a></p>
          </div>
        </form>
        <p style={{ textAlign: 'center', color: '#333', fontSize: '14px' }}>
          <a href="https://bootstrap.com/" style={{ color: '#007bff' }}>Your Website</a> {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;



