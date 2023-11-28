// MyVerticallyCenteredModal.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header style={{background: '#1d312c', border: 'none'}}>
      </Modal.Header>
      <Modal.Body className='text-center' style={{background: '#1d312c', color: '#fff', border: 'none'}}>
        <h4 style={{fontWeight: 'bold', color: '#ffa323'}}>Terima Kasih</h4>
        <p>
          Pendaftaran anda sedang kami proses.
          Untuk info lebih lanjut silahkan cek riwayat pendaftaran anda
        </p>
      </Modal.Body>
      <Modal.Footer className='justify-content-center' style={{paddingBottom: '2rem', background: '#1d312c', border:'none'}}>
        <Button onClick={props.onHide} style={{background: '#fff', color: '#1d312c', fontWeight: '600', borderRadius: '20px', width: '150px', border: 'none'}}>Lihat Riwayat</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
