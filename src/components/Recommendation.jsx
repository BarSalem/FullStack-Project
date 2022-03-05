import React from "react";
import './css/Recommendation.css';
import Images from "./ImagesArr"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Recommendation(){
        function renderCarouselItem(image){
          return <div>
          <img
            className="d-block w-100"
            src={image.src}
            style={{'height':"600px"}}
            alt="First slide"
          />
        </div>
        }
    return(<div>
        <center>
        <h1 className="h1Rec">Our recommendation</h1>
        <div className="pDiv" id="one"><p class="pRec">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
        <Carousel width={'80%'} infiniteLoop={'true'} useKeyboardArrows={'true'} showThumbs={0} showStatus={0}>
  {Images.map(renderCarouselItem)}
</Carousel>
        </center>
    </div>)
}

export default Recommendation;

/*
<div className="RecComment"><div className="recDiv"><button onClick={nextPhoto} className="RecBut"><FontAwesomeIcon icon={faArrowLeft} size={"2x"}/></button></div></div>
        <div className="RecComment"><img width="800px" height="500px" src={Img.src}/></div>
        <div className="RecComment"><div className="recDiv"><button onClick={prevPhoto} className="RecBut"><FontAwesomeIcon icon={faArrowRight} size={"2x"}/></button></div></div>
*/