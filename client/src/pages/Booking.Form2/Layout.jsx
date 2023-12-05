import React from "react";
import FooterComponent from "../../components/fragments/FooterComponent";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingFormSvg from "../../assets/svg/bookingform.svg";
import BookingForm2Svg from "../../assets/svg/bookingform2.svg";
import UnggahSvg from "../../assets/svg/unggah.svg";
import { Link } from 'react-router-dom';
import '../Booking/booking.css'

const BookingForm2 = () => {
  return (
    <div style={{ backgroundColor: '#F3F3F3' }}>

      <Container className="booking-svg-container">
        <div className="svg-wrapper">
          <img src={BookingFormSvg} alt="Booking SVG" />
          <p>Ketua</p>
        </div>
        <div className="line-divider"></div>
        <div className="svg-wrapper">
          <img src={BookingFormSvg} alt="BookingForm SVG" />
          <p>Anggota</p>
        </div>
        <div className="line-divider"></div>
        <div className="svg-wrapper">
          <img src={BookingForm2Svg} alt="BookingForm2 SVG" />
          <p>Selesai</p>
        </div>
      </Container>

      <Container className="booking-container2">
        <div className="center-text">
          <p className="booking-header">Anggota 1</p>
        </div>
        <Form>
          <Form.Group as={Row} controlId="form">
            <Col>
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
            <Col>
            <Form.Label>No Hp</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form">
            <Col>
            <Form.Label>Alamat</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
            <Col>
            <Form.Label>No Hp Keluarga</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form">
          <Col style={{ marginLeft: '-8px' }}>
              <Form.Label style={{ marginLeft: '10px' }}>Jenis Identitas</Form.Label>
              <Form.Select
                className="booking-input custom-dropdown"
                aria-label="Pilih Jenis Identitas"
              >
                <option value="">Pilih Jenis Identitas</option>
                <option value="KTP">KTP</option>
                <option value="SIM">SIM</option>
                <option value="Kartu Pelajar">Kartu Pelajar</option>
              </Form.Select>
            </Col>
            <Col>
            <Form.Label>No Identitas</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formFileUpload2" className="custom-file-upload-input">
            <Col className="file-upload-col">
              <label htmlFor="fileInput">
                <input
                type="file"
                id="fileInput"
                className="booking-input custom-file-upload-input"
              />
              <div className="upload-svg-container">
              <img src={UnggahSvg} alt="Unggah SVG" width="41.625px" height="32.607px" />
                <p className="file-upload-text">klik untuk mengunggah file</p>
                <Button className="upload-button">unggah file</Button>
                </div>
                </label>
            </Col>
          </Form.Group>
        </Form>
      </Container>

      <div className="custom-button-container">
        <button className="custom-button">+</button>
      </div>
      <div className="notice-text">
        <p>* selesaikan dulu formulir keseluruhan anggota</p>
      </div>
      <div className="action-buttons">
        <Link to="/bookingform2" className="custom-action-button">Kembali</Link>
        <Link to="/bookingselesai" className="custom-action-button">Selanjutnya</Link>
      </div>

      <FooterComponent />
    </div>
  );
};

export default BookingForm2;