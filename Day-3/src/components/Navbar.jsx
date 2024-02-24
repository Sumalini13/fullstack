import  { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HiMenu } from 'react-icons/hi';
import Sidebar from './Sidebar';
import '../assets/css/Navbar.css'; // Import CSS file

function NavDropdown1() {
  const [expanded, setExpanded] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const login = () => {
    window.location.href = '/';
  };

  const goToProfile = () => {
    window.location.href = '/profile';
  };

  const admission = () => {
    window.location.href = '/card1';
  };
  const handlecontact = () => {
    window.location.href = '/contact';
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='nav'>
      <Navbar expand="md" variant="dark" expanded={expanded}>
        <HiMenu onClick={toggleSidebar} className="hamburger-icon" />
        {showSidebar && <Sidebar />}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill variant="pills" defaultActiveKey="/home" activeKey="1">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={admission}>Admissions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={handlecontact}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={login}>Logout</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={goToProfile}>
                <AccountCircleIcon className="profile-icon" />
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Others" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Account</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Sign up</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Recent Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Help</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavDropdown1;
