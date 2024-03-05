import { useState } from 'react';
import { Button, Table, Form, Badge, Modal } from 'react-bootstrap';

const Dashboard = () => {
  const [colleges, setColleges] = useState([
    { id: 1, name: 'Anna University', location: 'Chennai', paymentConfirmed: true, seatConfirmed: false },
    { id: 2, name: 'IIT Madras', location: 'Chennai', paymentConfirmed: false, seatConfirmed: false },
    // Add more colleges as needed
  ]);

  const [formData, setFormData] = useState({ name: '', location: '' });
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAddCollege = () => {
    setColleges([...colleges, { id: Date.now(), ...formData, paymentConfirmed: false, seatConfirmed: false }]);
    setFormData({ name: '', location: '' });
  };

  const handleDeleteCollege = (id) => {
    setColleges(colleges.filter(college => college.id !== id));
  };

  const handleTogglePayment = (id) => {
    setColleges(colleges.map(college => college.id === id ? { ...college, paymentConfirmed: !college.paymentConfirmed } : college));
  };

  const handleToggleSeatConfirmation = (id) => {
    setColleges(colleges.map(college => college.id === id ? { ...college, seatConfirmed: !college.seatConfirmed } : college));
  };

  const handleEditCollege = () => {
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    // Logic to save edited college details
    setShowEditModal(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}> Admin Dashboard</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" style={{ marginBottom: '10px' }} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" style={{ marginBottom: '10px' }} value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
        </Form.Group>
        <Button variant="primary" style={{ marginTop: '10px' }} onClick={handleAddCollege}>
          Add College
        </Button>
      </Form>
      <Table striped bordered hover style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }}>Name</th>
            <th style={{ textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }}>Location</th>
            <th style={{ textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }}>Payment Status</th>
            <th style={{ textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }}>Seat Confirmation</th>
            <th style={{ textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map(college => (
            <tr key={college.id}>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{college.name}</td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{college.location}</td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <Badge style={{ fontSize: '12px', padding: '5px' }} bg={college.paymentConfirmed ? 'success' : 'danger'}>
                  {college.paymentConfirmed ? 'Confirmed' : 'Pending'}
                </Badge>
              </td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <Badge style={{ fontSize: '12px', padding: '5px' }} bg={college.seatConfirmed ? 'success' : 'danger'}>
                  {college.seatConfirmed ? 'Confirmed' : 'Pending'}
                </Badge>
              </td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <Button variant="danger" style={{ marginRight: '5px' }} onClick={() => handleDeleteCollege(college.id)}>Delete</Button>
                <Button variant="primary" style={{ marginRight: '5px' }} onClick={() => handleTogglePayment(college.id)}>Toggle Payment</Button>
                <Button variant="warning" style={{ marginRight: '5px' }} onClick={() => handleEditCollege(college)}>Edit</Button>
                <Button variant="info" onClick={() => handleToggleSeatConfirmation(college.id)}>Toggle Seat Confirmation</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit College</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Edit College Form */}
          {/* College Details */}
          {/* Payment Confirmation */}
          {/* Seat Confirmation */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSaveEdit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
