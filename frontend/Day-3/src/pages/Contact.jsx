import  { useState } from 'react';
import image1 from '../assets/images/first.jpg'; // Import your image
import image2 from '../assets/images/student1.jpg'; // Import another image
import '../assets/css/style.css';
import NavDropdown1 from '../components/Navbar';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='.background-image-container'>
      <header>
        <NavDropdown1/>
      </header>
    <div style={{ 
      maxWidth: '400px',
   
      margin: '50px auto', 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div style={{ width: '48%' }}>
          <img src={image1} alt="Image 1" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
        </div>
        <div style={{ width: '48%' }}>
          <img src={image2} alt="Image 2" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ced4da', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ced4da', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ fontWeight: 'bold' }}>Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ced4da', borderRadius: '5px', resize: 'vertical' }}></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  </div>
  );
};

export default ContactForm;
