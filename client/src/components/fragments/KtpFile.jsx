import React from 'react'
import Form from "react-bootstrap/Form";
import ktp from "../../assets/img/ktp.png";
import DragDropFiles from '../elements/DragDropFiles';

const KtpFile = () => {
  return (
      <div className="booking container text-center" style={{width: "50%"}}>
        <div className="40-w p-5 rounded">
          <h5 style={{fontWeight: "600", fontSize: "20px"}}>
          Scan KTP Anda <br/> <span style={{fontSize: "18px", color: "#676C6B", fontWeight: "400"}}>Unggah dan pilih file</span>
          </h5>
          <DragDropFiles/>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "2rem",
              position: "relative"
            }}
          >
            <img src={ktp} alt="" />
            <img src={ktp} alt="" />
          </div>
          <div className='text-center justify-content-center'>
          <h6 style={{color: "#BF0707"}}>* file yang anda unggah tidak memenuhi jumlah anggota</h6>
          <Form.Check 
          className="d-flex justify-content-center"
            aria-label="option 1"
            label="file yang diunggah asli dan bisa dipertanggung jawabkan "
          />
          </div>
        </div>
      </div>
    );
}

export default KtpFile
