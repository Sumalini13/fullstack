import { useState } from 'react';
import axios from 'axios';

const EditCollegeForm = () => {
  const [instituteId, setInstituteId] = useState('');
  const [collegeData, setCollegeData] = useState({
    instituteName: '',
    instituteDescription: '',
    instituteAddress: '',
    mobile: '',
    email: '',
    noOfCoursesAvailable: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollegeData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:2020/api/institutes/${instituteId}`, collegeData)
      .then(response => {
        console.log('College details updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating college details:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ margin: '20px auto', padding: '20px', width: '80%', border: '1px solid #ccc', borderRadius: '5px' }}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="instituteId" style={{ fontWeight: 'bold' }}>Institute ID</label>
            <input
              type="text"
              className="form-control"
              id="instituteId"
              name="instituteId"
              value={instituteId}
              onChange={(e) => setInstituteId(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="instituteName" style={{ fontWeight: 'bold' }}>Institute Name</label>
            <input
              type="text"
              className="form-control"
              id="instituteName"
              name="instituteName"
              value={collegeData.instituteName}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="instituteDescription" style={{ fontWeight: 'bold' }}>Institute Description</label>
            <input
              type="text"
              className="form-control"
              id="instituteDescription"
              name="instituteDescription"
              value={collegeData.instituteDescription}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="instituteAddress" style={{ fontWeight: 'bold' }}>Institute Address</label>
            <input
              type="text"
              className="form-control"
              id="instituteAddress"
              name="instituteAddress"
              value={collegeData.instituteAddress}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="mobile" style={{ fontWeight: 'bold' }}>Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              name="mobile"
              value={collegeData.mobile}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="image" style={{ fontWeight: 'bold' }}>Image Link</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={collegeData.image}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={collegeData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="noOfCoursesAvailable" style={{ fontWeight: 'bold' }}>No. of Courses Available</label>
            <input
              type="text"
              className="form-control"
              id="noOfCoursesAvailable"
              name="noOfCoursesAvailable"
              value={collegeData.noOfCoursesAvailable}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Update</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditCollegeForm;
