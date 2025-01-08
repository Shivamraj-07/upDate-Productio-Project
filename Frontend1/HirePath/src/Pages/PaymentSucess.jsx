import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory

const PaymentSuccess = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();  // Use useNavigate here

  useEffect(() => {
    // Extract the payment status and ID from the URL
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');
    const id = queryParams.get('id');

    if (status && id) {
      setPaymentStatus(status);
      setPaymentId(id);
    } else {
      // If no status or id in the URL, redirect to failure page
      navigate('/payment-failure');
    }
  }, [location, navigate]);

  // Handling the case when payment was successful or failed
  const renderSuccessMessage = () => {
    if (paymentStatus === 'success') {
      return (
        <div className="p-6 bg-green-100 text-green-800 rounded-lg">
          <h2 className="text-2xl font-bold">Payment Successful!</h2>
          <p>Your payment has been processed successfully.</p>
          <p>Payment ID: {paymentId}</p>
        </div>
      );
    } else if (paymentStatus === 'failure') {
      return (
        <div className="p-6 bg-red-100 text-red-800 rounded-lg">
          <h2 className="text-2xl font-bold">Payment Failed!</h2>
          <p>There was an issue processing your payment.</p>
        </div>
      );
    } else {
      return (
        <div className="p-6 bg-yellow-100 text-yellow-800 rounded-lg">
          <h2 className="text-2xl font-bold">Payment Status Unknown</h2>
          <p>We couldn't verify the payment status. Please try again later.</p>
        </div>
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12">
      {renderSuccessMessage()}
      <div className="mt-6">
        <button
          onClick={() => navigate('/')}  // Use navigate instead of history.push
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
