import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../assets/css/AddCollege.css';

const AddCollege = ({ handleAddCollege }) => {
  const [formData, setFormData] = useState({
    instituteId: '', // Added instituteId field
    instituteName: '',
    instituteDescription: '',
    instituteAddress: '',
    mobile: '',
    email: '',
    noOfCoursesAvailable: 0,
    image: ''

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2020/api/institutes', formData);
      console.log('Form data submitted:', response.data);
      handleAddCollege(formData);
      // You can handle success response here
    } catch (error) {
      console.error('Error submitting form data:', error);
      // You can handle error response here
    }
  };

  return (
    <div className="add-college-form">
     
      <form onSubmit={handleSubmit}>
      <input
          type="number"
          placeholder="Institute ID"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          name="instituteId"
          value={formData.instituteId}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Institute Name"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          name="instituteName"
          value={formData.instituteName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          name="instituteDescription"
          value={formData.instituteDescription}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          name="instituteAddress"
          value={formData.instituteAddress}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Mobile"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Courses"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          name="noOfCoursesAvailable"
          value={formData.noOfCoursesAvailable}
          onChange={handleChange}
        />

         <input
          type="text"
          placeholder="imagelink"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          name="image"
          value={formData.imagelink}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

AddCollege.propTypes = {
  handleAddCollege: PropTypes.func.isRequired,
};

export default AddCollege;

