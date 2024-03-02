import React from 'react';
import PortfolioCard from "../Card/portfoliotabcard.js";
import { Container, Row, Col } from "react-bootstrap";

export const Appdevelopment = () => {
  const portfolioDetails = [

    {
      id: 2,
      img: "/566.png",
      name: "SwiftPulse",
      year: "2024",
    },
    {
      id: 3,
      img: "/ccc.png",
      name: "QiblaQuest App",
      year: "2024",
    },
    {
      id: 4,
      img: "/ddd.jpg",
      name: "ExpressEcho App",
      year: "2024",
    },
    {
      id: 5,
      img: "/efv.png",
      name: "Food App",
      year: "2024",
    },
    {
      id: 6,
      img: "/energy app.jpg",
      name: "Boli App",
      year: "2024",
    },
    {
      id: 7,
      img: "/food.jpg",
      name: "SavoryDelish App",
      year: "2024",
    },
    {
      id: 8,
      img: "/food app.jpg",
      name: "SavoryDelish App",
      year: "2024",
    },
    {
      id: 9,
      img: "/Free_Iphone_13_Pro_Mockup_2.jpg",
      name: "Car Chaser App",
      year: "2024",
    },
    {
      id: 10,
      img: "/Free_IphonMocku.jpg",
      name: "CraveCrafter App",
      year: "2024",
    },
    {
      id: 11,
      img: "/llll.png",
      name: "HeartSync App",
      year: "2024",
    },
    {
      id: 12,
      img: "/Mockupsf.png",
      name: "WorkWave App",
      year: "2024",
    },
    {
      id: 13,
      img: "/12.png",
      name: "WorkWave App",
      year: "2024",
    },
    {
      id: 14,
      img: "/ohn.png",
      name: "VideHope App",
      year: "2024",
    },

    {
      id: 16,
      img: "/qqqq.jpg",
      name: "Crime Scene App",
      year: "2024",
    },
    {
      id: 17,
      img: "/rr.png",
      name: "RomanceRealm App",
      year: "2024",
    },
    {
      id: 18,
      img: "/vb.png",
      name: "Sardpara App",
      year: "2024",
    },
    {
      id: 19,
      img: "/ww.jpg",
      name: "ScholarEase App",
      year: "2024",
    },
   
  ];
  return (
  <>
  <Container>
    <Row style={{ marginTop: "120px" }}>
    {portfolioDetails.map((item) => (
        <Col key={item.id} md={6} className="m-auto" style={{ marginTop: ""  ,width:'320px ' }}>
      
            <PortfolioCard
              id={item.id}
              img={item.img}
              name={item.name}
              year={item.year}
            />

        </Col>
      ))}
   
    </Row>
  </Container>
</>
);
};
export default Appdevelopment;
