import { useState, useEffect } from "react";
import axios from "axios";
import NavDropdown1 from '../components/Navbar';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Alert // Import Alert component from react-bootstrap
} from "react-bootstrap";

const InstitutesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control the visibility of the success message

  const [institutes, setInstitutes] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:2020/api/institutes");
      setInstitutes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSeeCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleSubmit = async (e) => { // Asynchronous submission
    e.preventDefault();
    try {
      // Handle form submission logic here
      console.log(formData);
      // Assuming submission logic here - you would send formData to the server
      
      // Display success message
      setShowSuccessMessage(true);

      // Reset form data after submission
      setFormData({
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

      // Close the modal after submission
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClose = () => {
    setSelectedCourse(null);
  };

  return (
    <div>
      <header>
        <NavDropdown1 />
      </header>
      <Container>
        <br /><br /><br /><br /><br /><br />
        <h3>Get Admission in the dream College</h3>
        <br /><br />
        <Row>
          {institutes.map((institute) => (
            <Col key={institute.instituteId} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Body>
                  <img src={institute.image} alt="Institute Image" style={{ width: "100%", marginBottom: "1rem" }} />
                  <Card.Text>
                    <strong>Name:</strong> {institute.instituteName}
                    <br />
                    <strong>Description:</strong> {institute.instituteDescription}
                    <br />
                    <strong>Address:</strong> {institute.instituteAddress}
                    <br />
                    <strong>Mobile:</strong> {institute.mobile}
                    <br />
                    <strong>Email:</strong> {institute.email}
                    <br />
                    <strong>No. of Courses Available:</strong>{" "}
                    {institute.noOfCoursesAvailable}
                  </Card.Text>
                  <Button
                    onClick={() => handleSeeCourse(institute.courses)}
                    variant="primary"
                    style={{ marginRight: "1rem" }}
                  >
                    See Course
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Modal show={selectedCourse !== null} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Course Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedCourse &&
              selectedCourse.map((course) => (
                <Card key={course.courseId} style={{ marginBottom: "1rem" }}>
                  <Card.Body>
                    <Card.Title>{course.courseName}</Card.Title>
                    <Card.Text>
                      <strong>Course Id:</strong> {course.courseId}
                      <br />
                      <strong>Description:</strong> {course.courseDescription}
                      <br />
                      <strong>Duration:</strong> {course.courseDuration}
                      <br />
                      <strong>Fees:</strong> {course.fees}
                      <br />
                      <strong>No. of Seats:</strong> {course.noOfSeats}
                    </Card.Text>
                    <Button onClick={handleShowModal}
                      variant="primary"
                    >
                      Apply now
                    </Button>
                  </Card.Body>
                </Card>
              ))}
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Apply for Admission</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label >
                <Form.Control type="text" placeholder="Enter your address" name="address" value={formData.address} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
              </Form.Group>
              <Form.Group controlId="formCourse">
                <Form.Label>Course</Form.Label>
                <Form.Control type="text" placeholder="Enter the course you're interested in" name="course" value={formData.course} onChange={handleChange} required />
              </Form.Group>
              {/* Add more form fields for other details */}
              {/* Example: */}
              <Form.Group controlId="formEducation">
                <Form.Label>Education Level</Form.Label>
                <Form.Control as="select" name="education" value={formData.education} onChange={handleChange} required>
                  <option value="">Select education level</option>
                  <option value="highschool">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  {/* Add more options as needed */}
                </Form.Control>
              </Form.Group>
              {/* Add other form fields similarly */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Add success message */}
        <Alert variant="success" show={showSuccessMessage} onClose={() => setShowSuccessMessage(false)} dismissible>
          Form Submitted Successfully!
        </Alert>
      </Container>
    </div>
  );
};

export default InstitutesPage;
