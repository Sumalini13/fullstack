import profile1 from '../assets/images/profile-photo1.png'; // Import UPI logo
import profile2 from '../assets/images/profile-photo2.jpg'; // Import Google Pay logo
import profile3 from '../assets/images/profile-photo3.png'; // Import Paytm logo
import profile4 from '../assets/images/profile-photo4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
const CardComponent = () => {
  const cardStyle = {
    width: '70%',
    marginBottom: '1rem',
    marginRight: '50px',
    marginLeft: '0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const hoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div>
    <center> <h2><FontAwesomeIcon icon={faQuoteLeft} style={{ marginLeft: '-70px' }} /> Testimonials</h2></center>
     <br></br> <br></br><br></br>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '100px' }}>
        {/* Card 1 */}
        <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
          <div className="card" style={{ ...cardStyle, ...hoverStyle }}>
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src={profile1} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                <h5 className="card-title" style={{ color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>John Doe</h5>
              </div>
              <p className="card-text" style={{ color: '#666', marginBottom: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius orci.</p>
              <a href="#" className="btn btn-primary" style={{ backgroundColor: '#007bff', color: '#fff', textDecoration: 'none' }}>View Profile</a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
          <div className="card" style={{ ...cardStyle, ...hoverStyle }}>
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src={profile2} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                <h5 className="card-title" style={{ color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>Jane Doe</h5>
              </div>
              <p className="card-text" style={{ color: '#666', marginBottom: '20px' }}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              <a href="#" className="btn btn-primary" style={{ backgroundColor: '#007bff', color: '#fff', textDecoration: 'none' }}>View Profile</a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
          <div className="card" style={{ ...cardStyle, ...hoverStyle }}>
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src={profile3} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                <h5 className="card-title" style={{ color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>Alice Smith</h5>
              </div>
              <p className="card-text" style={{ color: '#666', marginBottom: '20px' }}>Integer tempus euismod justo, sit amet convallis libero molestie ac.</p>
              <a href="#" className="btn btn-primary" style={{ backgroundColor: '#007bff', color: '#fff', textDecoration: 'none' }}>View Profile</a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
          <div className="card" style={{ ...cardStyle, ...hoverStyle }}>
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src= {profile4} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                <h5 className="card-title" style={{ color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>Michael Johnson</h5>
              </div>
              <p className="card-text" style={{ color: '#666', marginBottom: '20px' }}>Duis ut consectetur est. Mauris ut libero at lacus vestibulum semper.</p>
              <a href="#" className="btn btn-primary" style={{ backgroundColor: '#007bff', color: '#fff', textDecoration: 'none' }}>View Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
