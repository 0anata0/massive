import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";
import { url_api } from "../../config";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import bglogin from "../../assets/img/bglog.jpg";
import { MdLock } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "../../index.css"

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  return (
    <div
      className="bg-login"
      style={{
        backgroundImage: `url(${bglogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <div
        className="form-login"
      >
        <h2
          className="wellcome"
        >
          Selamat Datang
        </h2>
        <h4
          className="signin"
        >
          Masuk dengan akun anda
        </h4>

        {message !== "" ? (
          <>
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                width: "50%",
                marginBottom: "4rem",
                marginTop: 0,
              }}
            >
              {message}
            </div>
            <hr />
          </>
        ) : null}

        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            setTimeout(async () => {
              try {
                const res = await axios.post(`${url_api}/auth/login`, {
                  username: values.username,
                  password: values.password,
                });

                setLoading(false);
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("role", res.data.role);

                history.push(`/${res.data.role}`);
              } catch (err) {
                setLoading(false);
                setMessage(err.response.data.message);
              }
            }, 1000);

            setLoading(true);
          }}
        >
          {({ values, errors, handleSubmit, handleChange }) => {
            return (
              <form
                method="post"
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "20%",
                  width: "80%"
                }}
              >
                <div className="inputs">
                  <div style={{ marginBottom: "1%" }} className="input">
                    <MdEmail className="icon" />
                    <input
                      type="text"
                      id="username"
                      name="username"
                      onChange={handleChange}
                      placeholder="Masukkan Username"
                      required
                    />
                  </div>
                  <div style={{ marginBottom: "1%" }} className="input">
                    <MdLock className="icon" />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      placeholder="Masukkan Password"
                      required
                    />
                  </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <h5
                  style={{
                    color: "#fff",
                    fontSize: "14px"
                  }}
                >
                  Lupa kata sandi?
                </h5>
                </div>
                <div style={{ marginBottom: "1%" }} className="styleButton">
                  {/* {loading ? (
                    <button disabled>Loading...</button>
                  ) : ( */}
                    <button className="styleButton" type="submit">
                      Masuk
                    </button>
                  {/* )} */}
                </div>
                <span style={{ border: '1.4px solid #d5d5d5', display: 'flex', width: '100%', height: '2rem', margin: ' 20px 0' }}></span>
                <h5
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                  }}
                >
                  Masuk ke akun dengan
                </h5>
                <div className="loginwith"
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      fontSize: "3rem",
                    }}
                  >
                    <FcGoogle className="icons" />
                    <FaFacebook
                      className="icons"
                      style={{
                        color: "#1877F2",
                      }}
                    />
                  </div>
                  <div className="noakun"
                  >
                    <h5
                    className="noakuntext"

                    >
                      Belum punya akun?
                    </h5>
                    <button className="miniButton">
                      <Link
                        to="../register/Layout.jsx"
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          fontSize: "14px",
                          
                        }}
                      >
                        Daftar
                      </Link>
                    </button>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Layout;
