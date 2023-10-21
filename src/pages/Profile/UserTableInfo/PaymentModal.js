import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function PaymentModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  const handlePayment = () => {
    // Make an API call to update the payment status to 'paid'
    // You can use axios for this
    // After successful payment, close the modal and update the data
    // You may want to pass booking ID to this function to identify the booking to update
    props.onPaymentConfirmed(); 
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to proceed with the payment?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handlePayment}>
          Pay
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
