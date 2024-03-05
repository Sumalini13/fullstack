// PaymentHistoryPage.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import NavDropdown1 from '../components/Navbar';
const PaymentHistoryPage = () => {
  // Dummy payment data
  const paymentHistory = [
    { date: '2024-02-21', transactionId: '123456789', amount: 50.00, status: 'Completed' },
    { date: '2024-02-18', transactionId: '987654321', amount: 25.00, status: 'Completed' },
    { date: '2024-02-15', transactionId: '456789123', amount: 100.00, status: 'Failed' },
    { date: '2024-02-10', transactionId: '789123456', amount: 75.00, status: 'Completed' },
    { date: '2024-02-05', transactionId: '321654987', amount: 30.00, status: 'Completed' },
  ];

  const tableCellStyle = {
    border: '1px solid #dee2e6',
    padding: '8px',
  };

  const oddRowStyle = {
    backgroundColor: '#f3f4f6',
  };

 

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <header>
        <NavDropdown1/>
      </header>
      <br></br><br></br><br></br>
    <h2>
      <FontAwesomeIcon icon={faHistory} style={{ marginRight: '10px' }} />
      Payment History
    </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>Date</th>
            <th style={tableCellStyle}>Transaction ID</th>
            <th style={tableCellStyle}>Amount ($)</th>
            <th style={tableCellStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment, index) => (
            <tr key={index} style={index % 2 === 0 ? oddRowStyle : {}}>
              <td style={tableCellStyle}>{payment.date}</td>
              <td style={tableCellStyle}>{payment.transactionId}</td>
              <td style={tableCellStyle}>{payment.amount}</td>
              <td style={tableCellStyle}>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryPage;
