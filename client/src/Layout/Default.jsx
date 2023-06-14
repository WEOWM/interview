import React from 'react'
import "./Default.css"
import { Navigate, Outlet, json } from 'react-router-dom'
import Header from '../Components/Header/Header'

const Default = () => {

  const TOKEN = JSON.parse(localStorage.getItem("test-token"));

  return (
    <div>
      <div className="navNar">
        <Header />
      </div>
      <div className="content">
        {TOKEN?.Token ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </div>
  )
}

export default Default