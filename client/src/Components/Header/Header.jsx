import React, { useEffect } from "react";
import "./Header.css";
import CustomButton from "../custom/customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../store/slice/authSlice/userDetails/UserDetailsSlice";

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const UserData = JSON.parse(localStorage.getItem("test-token"));
  const {UserDetails} = useSelector((state)=>state.UserDetailsSlice)

  useEffect(() => {

    dispatch(fetchUserDetails({ userID: UserData.userID }))

  }, [])


  const handleLogOut = () => {
    localStorage.removeItem("test-token")
    navigate("/login")
  }

  return (
    <div className="header">
      <div className="welcome-head" style={{ fontSize: ".8rem" }}>
        <p className="m-0 p-0 fw-bold">Hi, {UserDetails.name}</p>
        <CustomButton
          handleSubmit={handleLogOut}
          width="6%"
          btnWidth="btnWidth"
          height="2rem"
          name="Logout"
        />
      </div>
    </div>
  );
};

export default Header;
