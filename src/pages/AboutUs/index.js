import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import LogoMission from "../../SVG/LogoMission.svg";
import LogoTeam from "../../SVG/TeamLogo.svg";
import Cardimage from "../../SVG/PNG/cardimg.png";
import logo1 from "../../SVG/Subpages/AboutUs/Group 6515.svg";
import logo2 from "../../SVG/Subpages/AboutUs/Group 6516.svg";
import logo3 from "../../SVG/Subpages/AboutUs/Group 6517.svg";
import logo4 from "../../SVG/Subpages/AboutUs/Group 6518.svg";
import TeamCard from "../Home/Team/TeamCard/teamCard.js";
import person1 from "../../SVG/PNG/team1.jpg";
import person2 from "../../SVG/PNG/Team2.jpg";
import person3 from "../../SVG/PNG/Team3.jpg";
import person4 from "../../SVG/PNG/Team4.jpg";
import CrouselCard from "../Home/Client/crousel/crouselCard.js";
import Prev from "../../SVG/prev.svg";
import Next from "../../SVG/next.svg";
import Whyuspng from "../../SVG/Subpages/AboutUs/final/Component 9 – 1.svg";
import tick from "../../SVG/Subpages/AboutUs/final/Icon feather-check.svg";
import NavBar from "../NavBar/index.js";
import Footer from "../../Component/Footer";
import About from "../Home/AboutUs/index.js";
import Couter from "../Home/Project/Couter.js";
import Team from "../Home/Team/Carousel/CarousalTeam.js";
import Index from "../Home/Team/index.js";
export const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex < 10) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <NavBar pageTitle="About Our Company " PageName="About us" />
      {/* First Part */}
      <About/>

      <div className='mb-5'>
      <Couter />

      </div>

      {/* First Part */}


          {/* <Team /> */}
      {/* First Part */}
      <div className="bgImage">
        <Row
          style={{
            marginBottom: "140px",
          }}
        >
          <h6
            className="text-center"
            style={{
              color: "#72B63C",
              marginTop: "80px",
            }}
          >
            Work Process
          </h6>
          <h4
            className="text-light text-center"
            style={{
              fontSize: "1.5vw !important",
            }}
          >
            How to work it
          </h4>
        </Row>
        <Container
          style={{ marginTop: "80px !important", paddingBottom: "100px" }}
        >
          <Row className="d-flex justify-content-center align-items-center text-align-center">
            <Col>
              <img src={logo1} alt="Aboutuspage" style={{ width: "100%" }} />
              <h6 className="subh6">Project Discussion</h6>
            </Col>
            <Col>
              <img src={logo2} alt="Aboutuspage" style={{ width: "100%" }} />
              <h6 className="subh6   ">Testing & Trying</h6>
            </Col>
            <Col>
              <img src={logo3} alt="Aboutuspage" style={{ width: "100%" }} />
              <h6 className="subh6   ">Execute & install</h6>
            </Col>
            <Col>
              <img src={logo4} alt="Aboutuspage" style={{ width: "100%" }} />
              <h6 className="subh6   ">Deliver result</h6>
            </Col>
          </Row>
        </Container>
      </div>
      {/* First Part */}
      <Index/>
      {/* First Part */}
      {/* <div>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          selectedItem={activeIndex}
          onChange={handleSlideChange}
          infiniteLoop={false}
          showIndicators={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={33.33}
        >
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 0} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 1} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 2} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 3} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 4} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 5} />
          </div>
          <div className='carousel-image'>
            <CrouselCard isActive={activeIndex === 6} />
          </div>
        </Carousel>{' '}
        <div
          className={`custom-arrow custom-prev shadow ${
            activeIndex === 0 ? 'disabled' : ''
          }`}
          onClick={handlePrevClick}
        >
          <img src={Prev} alt='leftButton' />
        </div>
        <div
          className={`custom-arrow custom-next shadow ${
            activeIndex === 6 ? 'disabled' : ''
          }`}
          onClick={handleNextClick}
        >
          <img src={Next} alt='RightButton' />
        </div>
      </div> */}

    
      {/* Why Only We */}
      <div
        style={{
          marginTop: "4%",
          marginBottom: "4%",
        }}
      >
        <Container className="justify-content-space-between d-block d-md-flex align-items-center">
          <Col>
            <img
              src={Whyuspng}
              alt="two persons watching something"
              style={{
                width: "90%",
              }}
            />
          </Col>
          <Col>
            <Row>
              <h6
                style={{
                  color: "#72B63C",
                }}
              >
                Why Only We{" "}
              </h6>
              <h4
                style={{
                  color: "#444444",
                }}
              >
                Reason For Choosing
              </h4>
              <h4
                style={{
                  color: "#444444",
                }}
              >
                Our{" "}
                <span
                  style={{
                    color: "#72B63C",
                  }}
                >
                  Company
                </span>
              </h4>
              <p
                style={{
                  color: "#444444",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                eiusmod tempo incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrice. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
              <Col>
                <Row>
                  <div className="d-flex">
                    <img
                      src={tick}
                      style={{
                        width: "10%",
                      }}
                      alt="Tick Icon"
                    />
                    <h5
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      Trusted by leaders
                    </h5>
                  </div>
                </Row>
                <Row>
                  <div className="d-flex">
                    <img
                      src={tick}
                      style={{
                        width: "10%",
                      }}
                      alt="Tick Icon"
                    />
                    <h5
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      Diverse Portfolio
                    </h5>
                  </div>
                </Row>
                <Row>
                  <div className="d-flex">
                    <img
                      src={tick}
                      style={{
                        width: "10%",
                      }}
                      alt="Tick Icon"
                    />
                    <h5
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      Pioneers in Consultancy
                    </h5>
                  </div>
                </Row>
              </Col>
              <Col
                style={{
                  marginLeft: "15px",
                }}
              >
                <Row>
                  <div className="d-flex">
                    <img
                      src={tick}
                      style={{
                        width: "10%",
                      }}
                      alt="Tick Icon"
                    />
                    <h5
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      Good Track Record
                    </h5>
                  </div>
                </Row>
                <Row>
                  <div className="d-flex">
                    <img
                      src={tick}
                      style={{
                        width: "10%",
                      }}
                      alt="Tick Icon"
                    />
                    <h5
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      Exponential Growth
                    </h5>
                  </div>
                </Row>
                <Row>
                  <div className="d-flex">
                    <img
                      src={tick}
                      style={{
                        width: "10%",
                      }}
                      alt="Tick Icon"
                    />
                    <h5
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      Brand Equity
                    </h5>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default Testimonial;
