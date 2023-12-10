import React, { useState } from "react";
import axios from "axios";
import { url_api } from "../../config";
function BookingForm() {
  const [nama, setNama] = useState("");
  const [tgl_lahir, setBirthday] = useState("");
  const [jk, setGender] = useState("");
  const [no_hp, setNohp] = useState("");
  const [tgl_naik, setTanggalnaik] = useState("");
  const [tgl_turun, setTanggalturun] = useState("");
  const [no_hp_kel, setNohp2] = useState("");
  const [email, setEmail] = useState("");
  const [identitas, setIdentitas] = useState("");
  const [no_identitas, setNoidentitas] = useState("");
  const [alamat, setAlamat] = useState("");
  const [ktp, setKtp] = useState();
  const [msg, setMsg] = useState("");
  const upload = async () => {
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("tgl_lahir", tgl_lahir);
    formData.append("jk", jk);
    formData.append("no_hp", no_hp);
    formData.append("tgl_naik", tgl_naik);
    formData.append("tgl_turun", tgl_turun);
    formData.append("no_hp_kel", no_hp_kel);
    formData.append("email", email);
    formData.append("identitas", identitas);
    formData.append("no_identitas", no_identitas);
    formData.append("alamat", alamat);
    formData.append("ktp", ktp);

    try {
      const response = await axios.post(`${url_api}/auth/booking`, formData);
      console.log(response);
      if (response.data.success) {
        setMsg("File Successfully Uploaded");
      } else {
        setMsg("Error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container" style={{ paddingTop: 60 }}>
      <div className="row">
        <h4>Booking ketua</h4>
        <div className="col-12">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Tanggal Lahir</label>
          <input
            type="date"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Jenis Kelamin</label>
          <input
            type="text"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">No HP</label>
          <input
            type="number"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setNohp(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Tanggal Naik</label>
          <input
            type="date"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setTanggalnaik(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Tanggal Turun</label>
          <input
            type="date"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setTanggalturun(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">No HP Keluarga</label>
          <input
            type="number"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setNohp2(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Identitas</label>
          <input
            type="text"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setIdentitas(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">No Identitas</label>
          <input
            type="number"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setNoidentitas(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Alamat</label>
          <input
            type="text"
            className="form-control"
            placeholder="....."
            autoComplete="off"
            onChange={(e) => setAlamat(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Upload File</label>
          <input
            className="form-control form-control-lg"
            type="file"
            onChange={(e) => setKtp(e.target.files[0])}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={upload}
          style={{ marginTop: "20px" }}
        >
          Kirim
        </button>

        <h5
          style={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }}
        >
          {msg}
        </h5>

      </div>

    </div>
  );
}
export default BookingForm;
