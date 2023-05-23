import React from "react";
import Carousel from "framer-motion-carousel";
import ItemsCarousel from 'react-items-carousel';
import Lottie from "lottie-react";
import "./Hero.css";
import Header from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import Campaign from "../../assets/campaign.jpeg";
import BBAL from "../../assets/bbal.json"
import {
  image1,
  image2,
  image3,
  kikla,
  kikla1,
  kikla2,
  kikla3,
  kikla4,
  kikla5,
  kikla6,
  coaches,
  coaches1,
  player,
  coaches2,
} from "../../data/kikla_images";

import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  const carouselRef = React.useRef();
  const imagesArray = [kikla1, kikla3, coaches2, coaches1, player];
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        {/* The Header */}
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>
            Developing the best sports and social institutions Internationally
          </span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">MAXIMIZE </span>
            <span>YOUR</span>
          </div>

          <div>
            <span> GAME TO GROW</span>
          </div>

          <div>
            <span>
              <p>
                Kikla has its focus on all types of sports in nurturing talents,
                gifting, and developing skills at an early age.<br></br>
                The focus is on Basketball at the moment.<br></br>
                This is through programs that run throughout the year with a
                clear mission and vision under Kikla Basketball Club.
              </p>
              <p>
                However, we have already acquired necessary equipment and staff
                personnel in other sports like boxing, martial arts, karate,
                archery, badminton, Pilates, yoga, and many more to be
                introduced.
              </p>
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={4} start={0} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={25} start={0} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={4} start={0} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        {/* <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div> */}

        {/* hero images */}
        {/* <img src={kikla1} alt="hero_image" className="hero-image" /> */}
        <Carousel ref={carouselRef} autoPlay={false}>
          {imagesArray.map((item, i) => (
            <img
              draggable="false"
              src={item}
              key={i}
              width="100%"
              // height="80%"
              alt=""
              className="carousel-img"
            />
          ))}
        </Carousel>
        <motion.img
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />
        {/* Calories */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "18rem" }}
          transition={transition}
        >
          <img src={Campaign} alt="Calories" />
          {/* <Lottie animationData={BBAL}/> */}
          {/* <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
