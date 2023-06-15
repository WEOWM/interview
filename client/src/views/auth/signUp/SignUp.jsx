import React, { useState } from "react";

import "./SignUp.css";
import CustomInput from "../../../Components/custom/customInput/CustomInput";
import CustomButton from "../../../Components/custom/customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { fetchSignUp } from "../../../store/slice/authSlice/SignUp/SignupSlice";

import {AiOutlineEye} from "react-icons/ai"
import {AiOutlineEyeInvisible} from "react-icons/ai"

const SignUp = () => {
    const [mount, setMount] = useState(true);
    const [hide, setHide] = useState("password");

    const showToggle = () => {
      if (hide === "password") {
        setHide("text");
        setMount(false);
      }
    };
    const hideToggle = () => {
      if (hide === "text") {
        setHide("password");
        setMount(true);
      }
    };

  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const handleInputChange2 = (e) => {
    setFullName(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setEmail(e.target.value);
  };
  const handleInputChange4 = (e) => {
    setPassword(e.target.value);
  };


  const inpData = {
    email,
    password,
    name,
  }


  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(inpData);
    dispatch(fetchSignUp({ InpData: inpData }))
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/login");
  };

  const data = [
    {
      title: "Full name",
      placeholder: "Full Name",
      value: name,
      handleInputChange1: handleInputChange2,
    },
    {
      title: "Email",
      placeholder: "Email",
      value: email,
      handleInputChange1: handleInputChange3,
    },
    {
      title: "Choose Password",
      placeholder: "Choose Password",
      value: password,
      type:hide,
      handleInputChange1: handleInputChange4,
    },
  ];

  return (
    <div className="sign-up-body ">
      <div className="inp-head " style={{ fontSize: ".8rem" }}>
        <p className="m-0 p-0">Already have an account?</p>
        <CustomButton
          handleSubmit={handleSignUp}
          width="6%"
          btnWidth="btnWidth"
          height="2rem"
          name="Login"
        />
      </div>

      <Row className="align m-0 p-0" >
        <Col md={4} className="m-0 p-0" >
          <div className="sign-up p-4 m-3" >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 className="fw-bold fs-6 m-0 p-0">Let's go!</h1>
            </div>
            {data.map((item, idx) => {
              return (
                <CustomInput
                  key={idx}
                  value={item.value}
                  onChange={item.handleInputChange1}
                  handleSubmit={handleSubmit}
                  title={item.title}
                  type={item.type}
                />
              );
            })}
             {
              !mount ?
                <AiOutlineEye  onClick={()=>hideToggle()} style={{  cursor:"pointer",position: "absolute", top: "18rem", right: "3rem" }} /> :
                <AiOutlineEyeInvisible onClick={()=>showToggle()} style={{  cursor:"pointer",position: "absolute", top: "18rem", right: "3rem" }} />
            }
            <div style={{ marginTop: "2rem" }} >
              <CustomButton
                handleSubmit={handleSubmit}
                width="100%"
                height="2.8rem"
                name="Sign Up"
              />
            </div>
          </div>
        </Col>
      </Row>
      <div className="semicircle-body">
        <div className="semicircle"></div>
      </div>
    </div>
  );
};

export default SignUp;
