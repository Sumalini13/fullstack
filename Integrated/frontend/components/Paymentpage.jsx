import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/pay.css';
import CreditCardImage from '../assets/images/credit_card.png';
import DebitCardImage from '../assets/images/debit_card.png';
import UpiLogo from '../assets/images/upi.png'; // Import UPI logo
import GooglePayLogo from '../assets/images/google_pay.png'; // Import Google Pay logo
import PaytmLogo from '../assets/images/paytm.jpg'; // Import Paytm logo
import PhonePeLogo from '../assets/images/phonepe.png'; // Import PhonePe logo

const PaymentPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const [paymentDetails, setPaymentDetails] = useState({
    paymentMode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    billingAddress: ''
  });

  const handlePaymentDetailsChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayNow = () => {
    // Show confirmation popup
    setShowConfirmation(true);
  };

  const handleConfirmPayment = () => {
    // Implement payment processing logic here
    console.log('Payment submitted:', paymentDetails);
    // Redirect to success page or display success message
    setShowConfirmation(false); // Hide confirmation popup
  };

  const handleCloseConfirmation = () => {
    // Hide confirmation popup
    setShowConfirmation(false);
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="paymentMode">Select Payment Mode:</label>
          <select
            id="paymentMode"
            name="paymentMode"
            value={paymentDetails.paymentMode}
            onChange={handlePaymentDetailsChange}
            className="form-control"
            required
          >
            <option value="">Select Payment Mode</option>
            <option value="scan">Scan</option>
            <option value="gpay">Google Pay</option>
            <option value="phonepe">PhonePe</option>
            <option value="paytm">Paytm</option>
            <option value="upi">UPI</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
          </select>
        </div>
        {paymentDetails.paymentMode === 'credit' || paymentDetails.paymentMode === 'debit' ? (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentDetailsChange}
                className="form-control"
                placeholder="Enter card number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={paymentDetails.expirationDate}
                onChange={handlePaymentDetailsChange}
                className="form-control"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentDetailsChange}
                className="form-control"
                placeholder="Enter CVV"
                required
              />
            </div>
            <div className="card-images">
              <img src={CreditCardImage} alt="Credit Card" className="card-image" />
              <img src={DebitCardImage} alt="Debit Card" className="card-image" />
            </div>
          </>
        ) : null}
        <div className="form-group">
          <label htmlFor="billingAddress">Billing Address:</label>
          <textarea
            id="billingAddress"
            name="billingAddress"
            value={paymentDetails.billingAddress}
            onChange={handlePaymentDetailsChange}
            className="form-control"
            placeholder="Enter billing address"
            required
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handlePayNow}>Pay Now</button>
      </form>
      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="confirmation-content">
            <p>Are you sure you want to proceed with the payment?</p>
            <div className="confirmation-buttons">
              <button className="btn btn-primary" onClick={handleConfirmPayment}>Confirm</button>
              <br/><br/>
              <button className="btn btn-secondary" onClick={handleCloseConfirmation}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div className="payment-logos">
        <img src={GooglePayLogo} alt="Google Pay" className="payment-logo" />
        <img src={PaytmLogo} alt="Paytm" className="payment-logo" />
        <img src={PhonePeLogo} alt="PhonePe" className="payment-logo" />
        <img src={UpiLogo} alt="UPI" className="payment-logo" />
      </div>
      <Link to="/">Go back to college list</Link>
    </div>
  );
};

export default PaymentPage;
