import { useState } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import ConfirmationPopup from './ConfirmationPopup';

import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlineFieldNumber, AiOutlineNumber, AiOutlinePercentage, AiOutlineArrowRight } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import '../assets/css/Form.css';
function Form1() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    dob: '',
    course: '',
    education: '',
    marksPercentage: '',
    cutoff: '',
    jeeCutoff: '',
    interestedBranch: '',
    additionalInfo: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const home = () => {
    window.location.href = '/home';
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true); // Show confirmation popup
  };

  const handleConfirm = () => {
    console.log('Form submitted:', formData);
    setShowConfirmation(false);
    setShowMessage(true); // Show success message
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: files[0] // Assuming single file upload for simplicity
    }));
  };
  const handleClose = () => {
    setShowConfirmation(false);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="admission-form">
      <h1 className="mt-5 mb-4">College Admission Form</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label><AiOutlineUser /> Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label><AiOutlineMail /> Email address</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label><AiOutlinePhone /> Phone Number</Form.Label>
              <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label><AiOutlineHome /> Address</Form.Label>
              <Form.Control as="textarea" rows={3} name="address" value={formData.address} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label><AiOutlineFieldNumber /> Gender</Form.Label>
              <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDob">
              <Form.Label><FaCalendarAlt /> Date of Birth</Form.Label>
              <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formCourse">
              <Form.Label><AiOutlineFieldNumber /> Course</Form.Label>
              <Form.Control as="select" name="course" value={formData.course} onChange={handleChange} required>
                <option value="">Select Course</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Psychology">Psychology</option>
                <option value="Biology">Biology</option>
                {/* Add more options here */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formEducation">
              <Form.Label><AiOutlineFieldNumber /> Education Background</Form.Label>
              <Form.Control as="textarea" rows={3} name="education" value={formData.education} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formMarksPercentage">
              <Form.Label><AiOutlinePercentage /> Marks Percentage</Form.Label>
              <Form.Control type="text" name="marksPercentage" value={formData.marksPercentage} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formCutoff">
              <Form.Label><AiOutlineNumber /> Cutoff</Form.Label>
              <Form.Control type="text" name="cutoff" value={formData.cutoff} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formJeeCutoff">
              <Form.Label><AiOutlineNumber /> JEE Cutoff</Form.Label>
              <Form.Control type="text" name="jeeCutoff" value={formData.jeeCutoff} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formMarksheet10">
          <Form.Label>10th Marksheet</Form.Label>
          <Form.Control type="file" name="marksheet10" onChange={handleFileChange} required />
        </Form.Group>
        {/* 12th Marksheet */}
        <Form.Group controlId="formMarksheet12">
          <Form.Label>12th Marksheet</Form.Label>
          <Form.Control type="file" name="marksheet12" onChange={handleFileChange} required />
        </Form.Group>
        {/* 12th TC */}
        <Form.Group controlId="formTC12">
          <Form.Label>12th Transfer Certificate (TC)</Form.Label>
          <Form.Control type="file" name="tc12" onChange={handleFileChange} required />
        </Form.Group>
        <br />
            <Form.Group controlId="formInterestedBranch">
              <Form.Label><AiOutlineArrowRight /> Interested Branch</Form.Label>
              <Form.Control type="text" name="interestedBranch" value={formData.interestedBranch} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="cancel" type="cancel">
        Cancel
        </Button>
        <ConfirmationPopup show={showConfirmation} handleClose={handleClose} handleConfirm={handleConfirm} />
        <Modal show={showMessage} onHide={handleCloseMessage}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your application has been submitted! All the best.</Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={home}>
              Go to Home
            </Button>
            <Button variant="primary" onClick={handleCloseMessage}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
      </div>
     
  );
}

export default Form1;