import { Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CourseCard = ({ course }) => {
  const { imageUrl, name, domain } = course;

  return (
    <Col style={{ marginBottom: '20px' }}>
      <Card style={{ width: '200px', borderRadius: '10px' }}>
        <Card.Img variant="top" src={imageUrl} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '150px', objectFit: 'cover' }} />
        <Card.Body style={{ padding: '20px' }}>
          <Card.Title style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>{name}</Card.Title>
          <Card.Text style={{ fontSize: '1.3rem', color: '#666' }}>{domain}</Card.Text>
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
};

const CourseList = () => {
  const courses = [
    { name: 'Computer Science 101', domain: 'Computer Science', imageUrl: 'https://snu.edu.in/site/assets/files/11953/manhattan-3866140_1280.1600x0.webp' },
    { name: 'Introduction to Psychology', domain: 'Psychology', imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20160105180846-brain-psychological-psychology-thinking-network-smart-education-creative-pointing.jpeg?format=pjeg&auto=webp&crop=16:9' },
    { name: 'Medical Science', domain: 'Medical', imageUrl: 'https://bethel-university.imgix.net/graduate/academics/medical-sciences/images/site-images/medical-sciences-2.jpg?w=390&auto=format' },
    { name: 'Introduction Mathematics', domain: 'Maths', imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg' },
    { name: 'Physics', domain: 'Electrical Engineering', imageUrl: 'https://physics.biu.ac.il/sites/physics/files/styles/front_hero_slide_/public/imgs/slides21/shutterstock_2146705679.jpg?itok=Xbw7zDfp' },
    { name: 'Chemistry', domain: 'Bachelor Science', imageUrl: 'https://t4.ftcdn.net/jpg/05/63/41/63/360_F_563416386_ruJPhBmQZTDGN90VyCbDFMnVy5sbwkeb.jpg' },
    { name: 'Artificial Intelligence', domain: 'IT', imageUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20230911173805/What-is-Artiificial-Intelligence(AI).webp' },
    { name: 'Information Technology', domain: 'Bachelor Engineering', imageUrl: 'https://i0.wp.com/www.gniotgroup.edu.in/blog/wp-content/uploads/2022/01/IT-1.jpg?fit=1920%2C1280&ssl=1' },
    { name: 'Introduction Biology', domain: 'Anatomy', imageUrl: 'https://erudera.com/media/images/biology.2e16d0ba.fill-10000x10000.jpg' },
    { name: 'Tamil', domain: 'Tamil Language', imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-a2dede757230ca2ea3b846c3b78e5862-pjlq' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', maxWidth: '1200px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
        <Row>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CourseList;
