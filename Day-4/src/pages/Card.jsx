import { Card, Button, Row, Col } from 'react-bootstrap';
import NavDropdown1 from '../components/Navbar';
const handleform=()=>
{
  window.location.href='/form21';
}
function CollegeInfo() {
  return (
    <div>
      <header>
        <NavDropdown1/>
      </header>
      <br></br>
      <center><h3 style={{ marginBottom: '20px' }}>Get your Admission in your dream college</h3></center>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Row>
          {/* College 1 */}
          <Col md={6}>
            <Card style={{ margin: '10px' }}>
              <Row noGutters>
                <Col style={{height:'90px'}}>
                  <Card.Img variant="top" src="https://static.javatpoint.com/top10-technologies/images/top-10-commerce-colleges-in-india1.png" alt="College image" style={{height:'168px'}} />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>ABC University</Card.Title>
                    <Card.Text>
                      Leading institution for academic excellence and research.
                    </Card.Text>
                    <Card.Text><strong>Fees Structure:</strong> $10,000 per year</Card.Text>
                    <Card.Text><strong>Courses Offered:</strong> Computer Science, Psychology, Economics, Mathematics</Card.Text>
                    <Button variant="primary" style={{ width: '40%' }} onClick={handleform}>Apply Now</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          
          {/* College 2 */}
          <Col md={6}>
            <Card style={{ margin: '10px' }}>
              <Row noGutters>
                <Col md={4}>
                  <Card.Img variant="top" src="https://indiaeducation.net/wp-content/uploads/2023/08/Untitled-design-15-1024x768.jpg" alt="College image" style={{height:'168px'}}/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>XYZ College</Card.Title>
                    <Card.Text>
                      Offers diverse academic programs and student engagement opportunities.
                    </Card.Text>
                    <Card.Text><strong>Fees Structure:</strong> $8,000 per year</Card.Text>
                    <Card.Text><strong>Courses Offered:</strong> Business Administration, Engineering, Nursing, Education</Card.Text>
                    <Button variant="primary" style={{ width: '40%' }} onClick={handleform}>Apply Now</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          
          {/* College 3 */}
          <Col md={6}>
            <Card style={{ margin: '10px' }}>
              <Row noGutters>
                <Col md={4}>
                  <Card.Img variant="top" src="https://im.whatshot.in/img/2020/Aug/most-beautiful-colleges-in-india-1596957626.jpg" alt="College image"style={{height:'168px'}} />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>DEF Institute</Card.Title>
                    <Card.Text>
                      Committed to providing comprehensive education and supportive environment.
                    </Card.Text>
                    <Card.Text><strong>Fees Structure:</strong> $12,000 per year</Card.Text>
                    <Card.Text><strong>Courses Offered:</strong> Medicine, Law, Art, Sociology</Card.Text>
                    <Button variant="primary" style={{width: '40%' }}onClick={handleform}>Apply Now</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* College 4 */}
          <Col md={6}>
            <Card style={{ margin: '10px' }}>
              <Row noGutters>
                <Col md={4}>
                  <Card.Img variant="top" src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/2991/2018/8/6/SKCET-Coimbatore1.jpg" alt="College image"style={{height:'168px'}} />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>GHI College</Card.Title>
                    <Card.Text>
                      Fosters culture of intellectual curiosity with diverse student body.
                    </Card.Text>
                    <Card.Text><strong>Fees Structure:</strong> $9,500 per year</Card.Text>
                    <Card.Text><strong>Courses Offered:</strong> Environmental Science, Political Science, Communications, History</Card.Text>
                    <Button variant="primary" style={{ width: '40%' }}onClick={handleform}>Apply Now</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          
          {/* College 5 */}
          <Col md={6}>
            <Card style={{ margin: '10px' }}>
              <Row noGutters>
                <Col md={4}>
                  <Card.Img variant="top" src="https://img.jagranjosh.com/images/2022/December/29122022/PSG-College-of-Technology-PSGCT-Coimbatore-Campus-View-1.jpg" alt="College image" style={{height:'168px'}}/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>JKL University</Card.Title>
                    <Card.Text>
                      Focuses on interdisciplinary studies and experiential learning.
                    </Card.Text>
                    <Card.Text><strong>Fees Structure:</strong> $11,000 per year</Card.Text>
                    <Card.Text><strong>Courses Offered:</strong> Biology, Chemistry, Physics, Linguistics</Card.Text>
                    <Button variant="primary" style={{ width: '40%' }}onClick={handleform}>Apply Now</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          
          {/* College 6 */}
          <Col md={6}>
            <Card style={{ margin: '10px' }}>
              <Row noGutters>
                <Col md={4}>
                  <Card.Img variant="top" src="https://www.univariety.com/blog/wp-content/uploads/2020/08/Blog-banner-image-1.jpg" alt="College image" style={{height:'168px'}}/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>MNO Institute</Card.Title>
                    <Card.Text>
                      Provides transformative educational experience with personalized attention.
                    </Card.Text>
                    <Card.Text><strong>Fees Structure:</strong> $10,500 per year</Card.Text>
                    <Card.Text><strong>Courses Offered:</strong> Sociology, Psychology, Economics, Literature</Card.Text>
                    <Button variant="primary" style={{width: '40%' }}onClick={handleform}>Apply Now</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  );
}

export default CollegeInfo;
