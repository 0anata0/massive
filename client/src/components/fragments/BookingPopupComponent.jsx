import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import bookingpopup from "../../assets/images/gambarBooking/bookingpopup.png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BookingPopup = ({ show, handleClose }) => {
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  const handlePesanClick = () => {
    setShowSecondPopup(true);
  };

  const handleCloseSecondPopup = () => {
    setShowSecondPopup(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered className="custom-modal">
        <Modal.Body>
          <div className="custom-popup-header">
            <img src={bookingpopup} alt="Booking Popup" />
          </div>
          <div className="custom-popup-text">
            <p>Pesan Tiket</p>
          </div>
          <div className="custom-popup-additional-text">
            <p>Apakah anda sudah yakin untuk memesan tiket? Silahkan periksa kembali data anda</p>
          </div>
          <div className="custom-popup-button-container">
            <Button variant="secondary" className="custom-popup-batal-button" onClick={handleClose}>
              Batal
            </Button>
            <Button className="custom-popup-pesan-button" onClick={handlePesanClick}>
              Pesan
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {showSecondPopup && (
        <Modal show={showSecondPopup} onHide={handleCloseSecondPopup} centered className="custom-modal">
          <Modal.Body>
          <div className="custom-popup-close-button" onClick={handleCloseSecondPopup}>
            <span>&times;</span>
          </div>
          <div className="custom-popup-header">
            <img src={bookingpopup} alt="Booking Popup" />
          </div>
          <div className="custom-popup-text">
            <p>Terimakasih</p>
          </div>
          <div className="custom-popup-additional-text">
            <p>Pendaftaran anda sedang kami proses</p>
            <p>Info lebih lanjut silahkan cek riwayat pendaftaran anda</p>
          </div>
          <div className="custom-popup-riwayat-button">
            <Link to="/riwayat2"><button className="custom-popup-button-text" style={{background: "none", border: "none"}}>Lihat Riwayat</button></Link>
          </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default BookingPopup;