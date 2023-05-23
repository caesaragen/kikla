import React from "react";
import "./Reasons.css";



import {  imageff, coaches2, kikla2, kikla6} from "../../data/kikla_images";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={coaches2} alt="" />
        <img src={imageff} alt="" />
        <img src={kikla6} alt="" />
        <img src={kikla2} alt="" />
      </div>

      <div className="right-r">
        <span>some reasons</span>

        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>EXPERT COACHES</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>MODERN TRAINING FACILITIES</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>HIGHLY CURATED PROGRAMS FOR NEW MEMBERS</span>
          </div>

          {/* <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div> */}
        </div>

        {/* <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Reasons;
