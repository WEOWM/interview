import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import CustomInput from "../../Components/custom/customInput/CustomInput";
import OrganizationCard from "../../Components/custom/OrganizationCard/OrganizationCard";
import CustomButton from "../../Components/custom/customButton/CustomButton";

const Home = () => {
  const data =[
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },
    {
      name:"Construction",
      image:"/assets/construction.svg"
    },

  ]
  return (
    <>
      <Container>
        <Row className="mt-3" style={{ display:"flex",alignItems:"center",justifyContent:"center"}} >
          <Col md={6} >
            <div style={{textAlign:"center"}} >
              <p className="fw-bold" >Name Your Organization</p>
              <CustomInput  placeholder="enter organization name" />
            </div>
          </Col>
        </Row>
        <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <div className="align mt-3" >
            <p className="fw-bold" >Select Your Organization Type Below</p>
            </div>
          <Row className=" p-0 m-0 mt-3 responsive-card"  >
            {
              data.map((items,idx)=>{
                return(
                  <Col md={3} xs={6} key={idx} >
                    <div className="mb-3" style={{textAlign:"center"}} >
                      <OrganizationCard items={items} />
                    </div>
                  </Col>
                )})
              }
          </Row>
          <div className="mt-5 mb-4 w-100 align" >
            <CustomButton btnWidth="btnWidth" name="Next"  />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
