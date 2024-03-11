import { useState } from 'react';
import { FaCheckCircle, FaClock, FaCheck, FaTimes } from 'react-icons/fa';

function Track() {
  const [status, setStatus] = useState('Applied');
  const [lastUpdated, setLastUpdated] = useState(null);
  const [statusHistory, setStatusHistory] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setLastUpdated(new Date());
    setStatusHistory([...statusHistory, { status: newStatus, timestamp: new Date() }]);
    setUpdateCount(updateCount + 1);
  };

  const handleReset = () => {
    setStatus('Applied');
    setLastUpdated(null);
    setStatusHistory([]);
    setUpdateCount(0);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Applied':
        return <FaClock />;
      case 'In Progress':
        return <FaCheckCircle />;
      case 'Verifying':
        return <FaCheck />;
      case 'Approved':
        return <FaCheck />;
      case 'Denied':
        return <FaTimes />;
      default:
        return null;
    }
  };

  return (
    <div className="app" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <div className="college-tracking" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', maxWidth: '800px', margin: '0 auto' }}>
        <h2>College Application Tracking</h2>
        <p>College Name: My College</p>
        <p>Status: {status} {getStatusIcon(status)}</p>
        {lastUpdated && <p>Last Updated: {lastUpdated.toLocaleString()}</p>}
        <p>Total Updates: {updateCount}</p>
        <div className="status-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <div className="status-applied" style={{ marginRight: '10px' }} onClick={() => handleStatusChange('Applied')}>
            <FaClock />
            <p>Applied</p>
          </div>
          <div className="status-in-progress" style={{ marginRight: '10px' }} onClick={() => handleStatusChange('In Progress')}>
            <FaCheckCircle />
            <p>In Progress</p>
          </div>
          <div className="status-verifying" style={{ marginRight: '10px' }} onClick={() => handleStatusChange('Verifying')}>
            <FaCheck />
            <p>Verifying</p>
          </div>
          <div className="status-approved" style={{ marginRight: '10px' }} onClick={() => handleStatusChange('Approved')}>
            <FaCheck />
            <p>Approved</p>
          </div>
          <div className="status-denied" onClick={() => handleStatusChange('Denied')}>
            <FaTimes />
            <p>Denied</p>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h3>Status History</h3>
          <ul>
            {statusHistory.map((entry, index) => (
              <li key={index}>
                <strong>{entry.status}</strong> - {entry.timestamp.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Track;
