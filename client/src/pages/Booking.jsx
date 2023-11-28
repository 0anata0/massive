import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import JadwalBooking from "../components/fragments/JadwalBooking";
import AnggotaBooking from "../components/fragments/AnggotaBooking";
import Button from "../components/elements/Button";
import KtpFile from "../components/fragments/KtpFile";
import { FiPlusCircle } from "react-icons/fi";
import "../index.css";
import Popup from "../components/fragments/Popup";
import Radiojk from "../components/elements/Radiojk";
import Radioidentitas from "../components/elements/Radioidentitas";
import DragDropFiles from "../components/elements/DragDropFiles";

const Booking = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <JadwalBooking></JadwalBooking>
      <div className="box">
        <h3 className="text-center" style={{fontWeight: "500"}}><br/>DATA KELOMPOK PENDAKIAN</h3>
        <div className="booking container justify-content-center align-items-center 100-w 100-vh">
          <div className="40-w p-5 rounded">
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="nama">
                <Form.Label column sm="2">
                  Nama Ketua
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="tanggallahir">
                <Form.Label column sm="2">
                  Tempat Lahir
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="tanggallahir">
                <Form.Label column sm="2">
                  Tanggal Lahir
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="date" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-2" controlId="jk">
                <Form.Label column sm="2">
                  Jenis Kelamin
                </Form.Label>
                <Col sm="10">
                <Radiojk/>
                </Col>
              </Form.Group>

              
              <Form.Group as={Row} className="mb-3" controlId="tanggalnaik">
                <Form.Label column sm="2">
                  Tanggal Naik
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="tanggalturun">
                <Form.Label column sm="2">
                  Tanggal Turun
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-2" controlId="identitas">
                <Form.Label column sm="2">
                  Identitas
                </Form.Label>
                <Col sm="10">
                  <Radioidentitas/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="noidentitas">
                <Form.Label column sm="2">
                  No Identitas
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="number" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="pekerjaan">
                <Form.Label column sm="2">
                  Pekerjaan
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="nohp">
                <Form.Label column sm="2">
                  No Hp
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="number" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="nohpkel">
                <Form.Label column sm="2">
                  No Hp Keluarga
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="number" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="tanggallahir">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="" />
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
        <AnggotaBooking anggotaNumber={1}/>
        <AnggotaBooking anggotaNumber={2}/>
        <AnggotaBooking anggotaNumber={3}/>
        <AnggotaBooking anggotaNumber={4}/>
        <AnggotaBooking anggotaNumber={5}/>
        <div style={{justifyContent: "center", alignItems: "center", color: "#1d312c", fontSize: "45px", display: "flex", marginTop: "2.5rem"}}>
        <button style={{border: "none", outline: "none", background: "transparent"}}><FiPlusCircle/></button>
        </div>
        <DragDropFiles/>
        <Button onClick={() => setModalShow(true)}>
        Daftar
      </Button>

      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </div>
  );
};

export default Booking;
