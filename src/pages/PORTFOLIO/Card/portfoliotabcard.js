import { React, useState } from "react";
import "./portfoliotabcard.css";
import arrowsvg from "../../../SVG/Subpages/PortfolioCard/Component 11 – 1.png";

const Portfoliotabcard = ({ id, img, name, year }) => {
  // Use destructuring to access the prop

  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
      className="portfoliocard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="portfoliobox">
        <img src={img} alt="" height="100px" width="100%" />
      </div>
      {isHovered && (
        <div className="hoverContent" height="100px"> 
          <div className="name">{name}</div>
          <div className="year">{year}</div>
        </div>
      )}
      <div className="portfoliocircle">
        <img src={arrowsvg} alt="" />
      </div>
    </div>
    </>
  );
};

export default Portfoliotabcard;
