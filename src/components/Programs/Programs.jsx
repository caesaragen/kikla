import React from "react";
import Carousel from "framer-motion-carousel";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import { image1, image2, image3, kikla, kikla1, kikla2, kikla3, kikla4, kikla5, kikla6, coaches, coaches1, player, coaches2 } from "../../data/kikla_images";
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  const carouselRef = React.useRef();
  const imagesArray = [image1, image2, image3, kikla, kikla5, kikla6, coaches,]
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs-categories">
        {/* {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))} */}

        <Carousel ref={carouselRef} autoPlay={false}>
          {imagesArray.map((item, i) => (
            <div className="category">
              <img
                src={item}
                alt=""
                className="card-image "
                draggable="false"
                key={i}
                width="100%"
              />
              <span>program.heading</span>
              <span>program.details</span>

              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          ))}
        </Carousel>


        {/* <div className="card">
               <img
              draggable="false"
              src={item}
              key={i}
              width="100%"
              // height="80%"
              alt=""
              className="carousel-img"
            />
          <div className="card-content">
            <h2 className="card-title">Card Title</h2>
            <p className="card-description">
              This is the description of the card. It can contain some additional information about the content.
            </p>
            <button className="card-button">Read More</button>
          </div>
        </div> */}
      </div>

    </div>
  );
};

export default Programs;
