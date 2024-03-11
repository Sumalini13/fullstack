import  { useState } from 'react';
import { Card, Col, Modal, Button, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const CourseCard = ({ course, showModal }) => {
  const { imageUrl, name, domain } = course;

  const cardStyle = {
    marginBottom: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow added here
  };

  const imgStyle = {
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    height: '150px',
    objectFit: 'cover',
  };

  const titleStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const domainStyle = {
    fontSize: '1.3rem',
    color: '#666',
  };

  return (
    <Col style={cardStyle}>
      <Card
        className="course-card"
        onClick={() => showModal(course)}
      >
        <Card.Img
          variant="top"
          src={imageUrl}
          style={imgStyle}
          className="card-img"
        />
        <Card.Body>
          <Card.Title style={titleStyle}>{name}</Card.Title>
          <Card.Text style={domainStyle}>{domain}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
  }),
  showModal: PropTypes.func.isRequired,
};

const CourseList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const openModal = (course) => {
    setSelectedCourse(course);
    handleShowModal();
  };

  const colleges = [
    { name: 'Computer Science Engineering', imageUrl: 'https://i.redd.it/nmy75gjp25461.jpg', domain:'Computer Science',description: 'Description for Computer Science Engineering' },
    { name: 'Introduction to Psychology', imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20160105180846-brain-psychological-psychology-thinking-network-smart-education-creative-pointing.jpeg?format=pjeg&auto=webp&crop=16:9', domain: 'Psychology', description: 'Description for Introduction to Psychology' },
    { name: 'Medical Science Technology', imageUrl: 'https://bethel-university.imgix.net/graduate/academics/medical-sciences/images/site-images/medical-sciences-2.jpg?w=390&auto=format', domain: 'Medical Science', description: 'Description for Medical Science Technology' },
    { name: 'Introduction Mathematics', imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg', domain: 'Mathematics', description: 'Description for Introduction Mathematics' },
    { name: 'Electrical Electronic Engineering', imageUrl: 'https://physics.biu.ac.il/sites/physics/files/styles/front_hero_slide_/public/imgs/slides21/shutterstock_2146705679.jpg?itok=Xbw7zDfp', domain: 'Electrical Electronic', description: 'Description for Electrical Electronic Engineering' },
    { name: 'Introduction to Chemistry', imageUrl: 'https://t4.ftcdn.net/jpg/05/63/41/63/360_F_563416386_ruJPhBmQZTDGN90VyCbDFMnVy5sbwkeb.jpg', domain: 'Chemistry', description: 'Description for Introduction to Chemistry' },

    { name: 'Information Technology', imageUrl: 'https://i0.wp.com/www.gniotgroup.edu.in/blog/wp-content/uploads/2022/01/IT-1.jpg?fit=1920%2C1280&ssl=1', domain: 'Information Technology', description: 'Description for Information Technology' },
    { name: 'Bachelor of Science Biology', imageUrl: 'https://erudera.com/media/images/biology.2e16d0ba.fill-10000x10000.jpg', domain: 'Biology', description: 'Description for Bachelor of Science Biology' },
    { name: 'Bachelor of Arts Tamil Language', imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-a2dede757230ca2ea3b846c3b78e5862-pjlq', domain: 'Tamil Language', description: 'Description for Bachelor of Arts Tamil Language' },
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2>
          <FontAwesomeIcon icon={faBook} /> Colleges Offered
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          padding:'40px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            maxWidth: '880px',
            padding: '1px',
            borderRadius: '10px',
          }}
        >
          <Row xs={1} md={2} lg={3}>
            {colleges.map((college, index) => (
              <CourseCard key={index} course={college} showModal={openModal} />
            ))}
          </Row>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCourse && selectedCourse.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCourse && selectedCourse.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseList;
