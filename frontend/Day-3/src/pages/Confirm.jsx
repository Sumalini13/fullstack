import  { useState } from 'react';
import Form1 from './Form1';
import ConfirmationPopup from './ConfirmationPopup';
import WillingnessForm from './WillingnessForm'; // Create this component for willingness form

function Confirm() {
  const [formData, setFormData] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (data) => {
    setFormData(data);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleConfirm = () => {
    // Here you can submit the form data or perform any other action
    setShowConfirmation(false);
  };

  return (
    <div>
      <Form1 onSubmit={handleSubmit} />
      <ConfirmationPopup show={showConfirmation} handleClose={handleCloseConfirmation} handleConfirm={handleConfirm} />
      {Object.keys(formData).length > 0 && (
        <div>
          <h2>Form Data</h2>
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      {Object.keys(formData).length > 0 && <WillingnessForm formData={formData} />}
    </div>
  );
}

export default Confirm;
