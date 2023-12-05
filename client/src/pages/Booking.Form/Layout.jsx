import React from "react";
import FooterComponent from "../../components/fragments/FooterComponent";
import { Container, Navbar, Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingFormSvg from "../../assets/svg/bookingform.svg";
import BookingForm2Svg from "../../assets/svg/bookingform2.svg";
import UnggahSvg from "../../assets/svg/unggah.svg";
import { Link } from 'react-router-dom';
import '../Booking/booking.css'

const BookingForm = () => {
  return (
    <div style={{ backgroundColor: '#F3F3F3' }}>
      <Navbar variant="dark" className="navbar-booking">
        <Container>
          <Navbar.Brand href="#" className="navbar-text">Booking &gt;</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="booking-svg-container">
        <div className="svg-wrapper">
          <img src={BookingFormSvg} alt="Booking SVG" />
          <p>Ketua</p>
        </div>
        <div className="line-divider"></div>
        <div className="svg-wrapper">
          <img src={BookingForm2Svg} alt="BookingForm2 SVG" />
          <p>Anggota</p>
        </div>
        <div className="line-divider"></div>
        <div className="svg-wrapper">
          <img src={BookingForm2Svg} alt="BookingForm2 SVG" />
          <p>Selesai</p>
        </div>
      </Container>

      <Container className="booking-container">
        <div className="center-text">
          <p className="booking-header">Ketua Kelompok</p>
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
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control
                type="date"
                className="booking-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form">
          <Col style={{ marginLeft: '-8px' }}>
              <Form.Label style={{ marginLeft: '10px' }}>Jenis Kelamin</Form.Label>
              <Form.Select
                className="booking-input custom-dropdown"
                aria-label="Pilih Jenis Kelamin"
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Perempuan">Perempuan</option>
                <option value="Laki-Laki">Laki-Laki</option>
              </Form.Select>
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
            <Form.Label>Tanggal Naik</Form.Label>
              <Form.Control
                type="date"
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
            <Col>
            <Form.Label>Tanggal Turun</Form.Label>
              <Form.Control
                type="date"
                className="booking-input"
              />
            </Col>
            <Col>
            <Form.Label>E-mail</Form.Label>
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
            <Form.Label>Nomor Identitas</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formAddress">
            <Col>
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input custom-address-input"  // Add a new class for specific styles
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

      <div className="text-center" style={{ marginTop: '20px' }}>
      <Link to="/bookingform2" className="next-button">Selanjutnya</Link>
      </div>

      <FooterComponent />
    </div>
  );
};

export default BookingForm;