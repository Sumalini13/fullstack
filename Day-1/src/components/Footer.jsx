import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '50px 0', marginTop: '10%' }}>
      <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ width: 'calc(33.33% - 10px)' }}>
            <h5 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Top Colleges</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>M.B.A</li>
              <li>B.Tech/B.E</li>
              <li>MCA</li>
              <li>BCA</li>
              <li>M.Tech</li>
              <li>MA</li>
              <li>BA</li>
            </ul>
          </div>
          <div style={{ width: 'calc(33.33% - 10px)' }}>
            <h5 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Top Universities</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Engineering</li>
              <li>Management</li>
              <li>Medical</li>
              <li>Law</li>
              <li>Commerce</li>
              <li>Science</li>
              <li>Arts</li>
            </ul>
          </div>
          <div style={{ width: 'calc(33.33% - 10px)' }}>
            <h5 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Other Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About Collegedunia</a></li>
              <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
              <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Advertising</a></li>
              <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Career</a></li>
              <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#212529', color: '#ccc', padding: '20px 0', textAlign: 'center' }}>
        <p>&copy; 2024 EduGateWay Web Pvt. Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

