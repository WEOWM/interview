import React from "react";
import { Route, Routes } from "react-router-dom";
import Default from "../Layout/Default";
import Home from "../views/Home/Home";
import SignUp from "../views/auth/signUp/SignUp";
import Login from "../views/auth/login/Login";

const IndexRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />} />
        </Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default IndexRouter;
