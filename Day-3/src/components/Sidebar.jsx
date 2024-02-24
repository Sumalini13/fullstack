
import '../assets/css/sidebar.css';
import { FaUniversity, FaMoneyBillAlt, FaBook, FaQuestionCircle, FaCog } from 'react-icons/fa';

const Sidebar = () => {

    const selecting = () => {
        window.location.href = '/select1';
      };
    
      const payhistory = () => {
        window.location.href = '/payhistory';
      };
    return (
        <div className="sidebar">
          <center><h3>EduGateWay</h3></center>
          <br></br>
            <div className="sidebar-option">
                <FaUniversity className="sidebar-icon" />
                <span className="sidebar-text" onClick={selecting}>Selected Colleges</span>
            </div>
            <div className="sidebar-option">
                <FaMoneyBillAlt className="sidebar-icon" />
                <span className="sidebar-text" onClick={payhistory}>Payment Status</span>
            </div>
            <div className="sidebar-option">
                <FaBook className="sidebar-icon" />
                <span className="sidebar-text">Interested Courses</span>
            </div>
            <div className="sidebar-option">
                <FaQuestionCircle className="sidebar-icon" />
                <span className="sidebar-text">Help</span>
            </div>
            <div className="sidebar-option">
                <FaCog className="sidebar-icon" />
                <span className="sidebar-text">Action</span>
            </div>
        </div>
    );
}

export default Sidebar;
