import React, { useEffect, useState } from "react";

import "./Login.css";
import CustomInput from "../../../Components/custom/customInput/CustomInput";
import CustomButton from "../../../Components/custom/customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearSignInState, fetchSignIn } from "../../../store/slice/authSlice/SignIn/SignInSlice";

const Login = () => {
  //   const [mount, setMount] = useState(true);
  //   const [hide, setHide] = useState("password");

  //   const showToggle = () => {
  //     if (hide === "password") {
  //       setHide("text");
  //       setMount(false);
  //     }
  //   };
  //   const hideToggle = () => {
  //     if (hide === "text") {
  //       setHide("password");
  //       setMount(true);
  //     }
  //   };

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setPassword(e.target.value);
  };


  const InpData = {
    email,
    password,
  };

  const navigate = useNavigate();

  const handleLogin = () => {

    dispatch(fetchSignIn({ InpData })).then(() => {

      navigate("/")
    })

  }

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const data = [
    {
      title: "Email",
      placeholder: "Email",
      value: email,
      handleInputChange1: handleInputChange,
    },
    {
      title: "Password",
      placeholder: "Password",
      value: password,
      handleInputChange1: handleInputChange2,
    },
  ];

  return (
    <div className="sign-up-body">

      <div className="inp-head" style={{ fontSize: ".8rem" }}>
        <p className="m-0 p-0">don't have an account?</p>
        <CustomButton
          handleSubmit={handleSignUp}
          width="6%"
          btnWidth="btnWidth"
          height="2rem"
          name="Sign Up"
        />
      </div>



      <Row className="align m-0 p-0">
        <Col md={4} xs={12} className="m-0 p-0">
          <div className="login p-5">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 className="fw-bold fs-6 m-0 p-0">Welcome back!</h1>
            </div>
            {data.map((item, idx) => {
              return (
                <CustomInput
                  key={idx}
                  value={item.value}
                  onChange={item.handleInputChange1}
                  title={item.title}
                />
              );
            })}
            <div style={{ marginTop: "2rem" }}>
              <CustomButton
                handleSubmit={handleLogin}
                width="100%"
                height="2.8rem"
                name="Login"
              />
            </div>
            <div className="align2 mt-5">
              <a className="forgot-pass-mob" href="/">
                Forgot your password ?{" "}
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <div className="semicircle-body">
        <div className="semicircle"></div>
      </div>

      <div className="semicircle-body-login">
        <div className="semicircle-login">
          <a href="/">Forgot your password ? </a>
        </div>
      </div>




    </div>
  );
};

export default Login;
