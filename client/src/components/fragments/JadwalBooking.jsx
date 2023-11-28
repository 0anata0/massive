import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from 'react';
import bgBooking from '../../assets/img/bgBooking.jpg'

const JadwalBooking = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((quantity) => quantity + 1);
    }
  };
  return (
      <div
        style={{
          width: "100vw",
          height: "70vh",
          backgroundImage: `url(${bgBooking})`,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center"

        }}
      >
        <div
          style={{
            marginTop: "12rem",
            marginBottom: "1.5rem",
          }}
        >
          <h3
            className="text-center"
            style={{
              padding: "0 20rem 0 20rem",
              fontSize: "40px",
              position: "relative",
              color: "#fff"
            }}
          >
            Selamat Datang, Ayo Pesan Tiket Pendakian Mu Sekarang Registrasi Jadi
            Lebih Mudah dan <span style={{color: "#ffa323"}}>#HematWaktu</span>
          </h3>
        </div>
  
        <div
          className="justify-content-center align-items-center"
          style={{
            display: "flex", 
          }}
        >
          <Form
            style={{
              display: "flex",
              background: "#1D312C",
              marginTop: "2rem",
              borderRadius: "10px",
              padding: "1rem 6rem 1rem 2.3rem",
            }}
          >
            <Form.Group
              as={Row}
              className="mb-3 col-md-5"
              controlId="tanggalnaik"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Form.Label column sm="2" className="text-white">
                Dari
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" placeholder="" />
              </Col>
            </Form.Group>
  
            <Form.Group
              as={Row}
              className="mb-3 col-md-5"
              controlId="tanggalturun"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Form.Label column sm="2" className="text-white">
                Sampai
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" placeholder="" />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="tanggalturun">
              <Form.Label column sm="2" className="text-white">
                Jumlah
              </Form.Label>
  
              <div className="input-group">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="input-group-text"
                >
                  -
                </button>
                <Form.Control
                  type="text"
                  className="text-center"
                  value={quantity}
                ></Form.Control>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="input-group-text"
                > 
                  +
                </button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
}

export default JadwalBooking
