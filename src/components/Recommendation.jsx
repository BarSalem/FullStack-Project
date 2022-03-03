import React from "react";
import './css/Recommendation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Images from "./ImagesArr"
import {Carousel} from "react-bootstrap";

function Recommendation(){
    function mod(n, m) {
        return ((n % m) + m) % m;
      }
        const [i,setI]=React.useState(0);
        const [Img,setImg]=React.useState(Images[0]);
        function nextPhoto(){
            setI((i+1)%(Images.length));
            setImg(Images[i]);
            console.log(i);
            }
        function prevPhoto(){
            if(i===0){
                setI(Images.length-1);
                setImg(Images[i]);
                console.log(i);
            }
            else{
                setI(mod(i-1,Images.length));
                setImg(Images[i]);
                console.log(i);
            }
        }
    return(<div>
        <center>
        <h1 className="h1Rec">Our recommendation</h1>
        <div className="pDiv" id="one"><p class="pRec">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Images[0].src}
      style={{'height':"600px" , 'width':'80%'}}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Images[1].src}
      style={{'height':"600px" , 'width':'80%'}}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Images[2].src}
      style={{'height':"600px" , 'width':'80%'}}
      alt="Third slide"
    />
  </Carousel.Item>
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