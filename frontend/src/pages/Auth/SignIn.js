import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const BASE_URL = "http://localhost:8000/login/";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // const value = event.target.value.replace(/\D/g, "");
    // const value = event.target.value.replace(/(0|)\D/g, "");
    setFormData((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };

  const submitHandle = async (event) => {
    event.preventDefault();
    const dataObj = {
      email: formData.email,
      password: formData.password,
      fcm_token: null,
    };
    try {
      const res = await axios.post(`${BASE_URL}`, dataObj);
      console.log("check", res.data.status);
      if (res) {
        toast.success("User login successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      console.log("res.data.access:", res.data.access)
      localStorage.setItem("accessToken", JSON.stringify(res.data.access));
      localStorage.setItem("refreshToken",  JSON.stringify(res.data.refresh));
      navigate("/orcamentos");

    } catch (error) {
      if (error) {
        toast.error("Email or Password is incorrect!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      console.error(error);
    }
  };


  

  return (
    <div className="signin">
      <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <div
            className="row justify-content-center form-bg-image"
            data-background-lg="assets/img/signin.svg"
          >
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h1 className="mb-0 h3">Login</h1>
                </div>
                <form action="#" className="mt-4" onSubmit={submitHandle}>
                  <div className="form-group mb-4">
                    <label for="email">Your Email</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <svg
                          className="icon icon-xs text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="example@company.com"
                        id="email"
                        autofocus
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-group mb-4">
                      <label for="password">Your Password</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon2">
                          <svg
                            className="icon icon-xs text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          id="password"
                          required
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-top mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="remember"
                        />{" "}
                        <label className="form-check-label mb-0" for="remember">
                          Remember me
                        </label>
                      </div>
                      {/* <div>
                        <a href="#" className="small text-right">
                          Lost password?
                        </a>
                      </div> */}
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-gray-800">
                      Sign in
                    </button>
                  </div>
                </form>
                
                {/* <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Não registrado?{" "}
                    <a href="#" className="fw-bold">
                      Crie uma conta
                    </a>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
