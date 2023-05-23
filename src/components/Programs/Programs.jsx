import React from "react";
import Carousel from "framer-motion-carousel";
import ItemsCarousel from 'react-items-carousel';
import "./Programs.css";
import { programsData } from "../../data/programsData";
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
  imageA,
  imageAcc,
  imageAcf,
  imageAer,
  imageAfv,
  imageAgd,
  imageArt,
  imageAtth,
  imageAty,
  imageAvb,
  imageAz,
  imageB,
  imageLa,
  imageaa,
  imagec,
  imagecv,
  imaged,
  imageds,
  imagef,
  imagefd,
  imageff,
  imagegv,
  imageh,
  imagelk,
  imagepl,
  imager,
  imagesx,
  imaget,
  imagevb,
  imagew,
  imaged1,
} from "../../data/kikla_images";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  const carouselRef = React.useRef();
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const chevronWidth = 40;
  const imagesArray = [
    kikla5,
    kikla6,
    imageA,
    imageAcc,
    imageAcf,
    imageAer,
    imageAfv,
    imageAgd,
    imageArt,
    imageAtth,
    imageAty,
    imageAvb,
    imageAz,
    imageB,
    imageLa,
    imageaa,
    imagec,
    imagecv,
    imaged,
    imageds,
    imagef,
    imagefd,
    imageff,
    imagegv,
    imageh,
    imagelk,
    imagepl,
    imager,
    imagesx,
    imaget,
    imagevb,
    imagew,
    imaged1
  ];
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Join our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div style={{"padding":"0 60px","maxWidth":800,"margin":"0 auto"}}>
        <ItemsCarousel
          requestToChangeActive={(value) => setActiveItemIndex(value)}
          activeItemIndex={activeItemIndex}
          infiniteLoop={true}
          gutter={12}
          activePosition={'center'}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={1}
          slidesToScroll={1}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={false}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          chevronWidth={chevronWidth}
        >
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
            </div>
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
};

export default Programs;
