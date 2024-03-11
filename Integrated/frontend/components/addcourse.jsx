import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const AddCoursePage = () => {
  const [courseDetails, setCourseDetails] = useState({
    collegeId: '',
    courseName: '',
    courseDescription: '',
    courseDuration: '',
    fees: 0,
    noOfSeats: 0,
  });
  const [feedback, setFeedback] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2020/api/courses/' + courseDetails.collegeId, courseDetails);
      
      // Assuming your backend returns a success message
      setFeedback(response.data.message);
      setShowAlert(true);
      
      // Optionally, you can clear the form fields after successful submission
      setCourseDetails({
        collegeId: '',
        courseName: '',
        courseDescription: '',
        courseDuration: '',
        fees: 0,
        noOfSeats: 0,
      });
    } catch (error) {
      // Handle errors, such as network issues or server errors
      console.error('Error adding course:', error);
      // Display an error message to the user
      setFeedback('Failed to add course. Please try again later.');
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
            <h3>Add Course</h3>
            <Form.Group controlId="collegeId">
              <Form.Label>College ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter College ID"
                name="collegeId"
                value={courseDetails.collegeId}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="courseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Name"
                name="courseName"
                value={courseDetails.courseName}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="courseDescription">
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Course Description"
                name="courseDescription"
                value={courseDetails.courseDescription}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="courseDuration">
              <Form.Label>Course Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Duration"
                name="courseDuration"
                value={courseDetails.courseDuration}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="fees">
              <Form.Label>Fees</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Fees"
                name="fees"
                value={courseDetails.fees}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="noOfSeats">
              <Form.Label>Number of Seats</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Number of Seats"
                name="noOfSeats"
                value={courseDetails.noOfSeats}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '5px' }}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2" style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>
              Add Course
            </Button>
          </Form>
          {showAlert && (
            <Alert variant="success" className="mt-3" onClose={handleCloseAlert} dismissible style={{ marginTop: '20px' }}>
              {feedback}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AddCoursePage;

