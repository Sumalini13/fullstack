import { useState, useEffect } from "react";
import axios from "axios";
import logo from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const InstitutesPage = () => {
  const [institutes, setInstitutes] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = () => {
    axios.get("http://localhost:2020/api/institutes")
      .then(response => {
        const data = response.data.map(item => ({
          id: item.instituteId,
          name: item.instituteName,
          description: item.instituteDescription,
          address: item.instituteAddress,
          mobile: item.mobile,
          email: item.email,
          noOfCoursesAvailable: item.noOfCoursesAvailable,
          image: item.image,
          courses: item.courses.map(course => ({
            id: course.courseId,
            name: course.courseName,
            description: course.courseDescription,
            duration: course.courseDuration,
            fees: course.fees,
            noOfSeats: course.noOfSeats
          }))
        }));
        setInstitutes(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const handleDelclg = async (instituteId) => {
    try {
      console.log(instituteId);
      await fetch(`http://localhost:2020/api/institutes/${instituteId}`, {
        method: 'DELETE',
      });
      alert("College deleted successfully");
      // You can update the UI or perform any other action upon successful deletion
    } catch (error) {
      console.error("Error deleting college:", error);
      alert("Failed to delete college");
      // Handle error appropriately
    }
  };

  const handleSeeCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleEdit = () => {
    navigate("/admin/editcourses");
  };

  const handleDel = async (courseId) => {
    try {
      console.log(courseId);
      await axios.delete(`http://localhost:2020/api/courses/${courseId}`);
      alert("Course deleted successfully");
      // You can update the UI or perform any other action upon successful deletion
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete course");
      // Handle error appropriately
    }
  };

  const handleClose = () => {
    setSelectedCourse(null);
  };

  return (
    <Container>
      <Row>
        <Col xs={3} style={{ height: '100vh', background: 'rgba(2, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' }}>
          {/* Sidebar */}
          <div style={{ width: '100%', textAlign: 'center' }}>
            {/* Icon and Text */}
            <div style={{ marginBottom: 'auto' }}>
              <FontAwesomeIcon icon={faUser} size="4x" style={{ filter: 'grayscale(100%)', color: '#fff' }} />
              <p style={{ margin: '10px 0', fontSize: '16px', fontWeight: 'bold', color: '#fff' }}>Admin</p>
            </div>
            {/* Logo */}
            <img src={logo} alt="Logo" style={{ width: '100%', marginTop: '220px' }} />
          </div>
        </Col>
        <Col xs={9}>
          {/* Main Content */}
          <h2 style={{ textAlign: 'center' }}>Admin Dashboard</h2>
          <br />
          <h3 style={{ color: 'black', textAlign: 'center' }}>List of Institutes</h3>
          <br />
          <Link to="/course" style={{ textDecoration: 'none' }}>
            <Button variant="success">
              <FontAwesomeIcon icon={faPlus} /> Add College
            </Button>
          </Link>
          <br /><br />
          <Row>
            {institutes.map((institute) => (
              <Col key={institute.id} xs={12} sm={6} md={4} lg={4.5} style={{ marginBottom: "1rem" }}>
                <Card style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                  <Card.Img variant="top" src={institute.image} style={{ width: '100%' }} />
                  <Card.Body>
                    <Card.Title>{institute.name}</Card.Title>
                    <Card.Text>
                      <Card.Title>Institute {institute.instituteId} Details</Card.Title>
                      <strong>Description:</strong> {institute.description}
                      <br />
                      <strong>Address:</strong> {institute.address}
                      <br />
                      <strong>Mobile:</strong> {institute.mobile}
                      <br />
                      <strong>Email:</strong> {institute.email}
                      <br />
                      <strong>No. of Courses Available:</strong>{" "}
                      {institute.noOfCoursesAvailable}
                    </Card.Text>
                    <button
                      onClick={() => handleSeeCourse(institute.courses)}
                      style={{ marginRight: "0.5rem", border: "none" }} // Added border: "none"
                    >
                      <FontAwesomeIcon icon={faEye} style={{ color: '#000', filter: 'grayscale(100%)', backgroundColor: "transparent" }} />
                    </button>
                    <button
                      onClick={handleEdit}
                      style={{ marginRight: "0.5rem", border: "none" }} // Added border: "none"
                    >
                      <FontAwesomeIcon icon={faEdit} style={{ color: '#000', filter: 'grayscale(100%)' }} />
                    </button>
                    <button
                      onClick={() => handleDelclg(institute.id)}
                      style={{ marginRight: "0.5rem", border: "none" }} // Added border: "none"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} style={{ color: '#000', filter: 'grayscale(100%)' }} />
                    </button>
                    <Link to="/add-course" style={{ textDecoration: 'none' }}> {/* Moved style to Link element */}
                      <button style={{ border: "none" }}> {/* Added border: "none" */}
                        <FontAwesomeIcon icon={faPlus} style={{ color: '#000' }} />
                      </button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Modal show={selectedCourse !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Course Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCourse &&
            selectedCourse.map((course) => (
              <Card key={course.id} style={{ marginBottom: "1rem" }}>
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>
                    <strong>Course Id:</strong> {course.id}
                    <br />
                    <strong>Description:</strong> {course.description}
                    <br />
                    <strong>Duration:</strong> {course.duration}
                    <br />
                    <strong>Fees:</strong> {course.fees}
                    <br />
                    <strong>No. of Seats:</strong> {course.noOfSeats}
                  </Card.Text>
                  <Button
                    onClick={handleEdit}
                    style={{ marginRight: "0.5rem" }}
                  >
                    <FontAwesomeIcon icon={faEdit} style={{ fill: '#000', filter: 'grayscale(100%)' }} />
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDel(course.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default InstitutesPage;
