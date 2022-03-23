import React from "react";
import './css/Recommendation.css';
import Images from "./ImagesArr"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Recommendation(){
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {

      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
        function renderCarouselItem(image){
          return <div>
          <img
            src={image.src}
            style={screenWidth<1028 ? {'height':"300px"}:{'height':"600px"}}
            alt="First slide"
          />
        </div>
        }
    return(<div>
        <center>
        <h1 className="h1Rec">Our recommendation</h1>
        <div className="pDiv" id="one"><p class="pRec">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
        <div className="carouselDiv">
        <Carousel width={'80%'} infiniteLoop={'true'} useKeyboardArrows={'true'} showThumbs={0} showStatus={0}>
        {Images.map(renderCarouselItem)}
        </Carousel>
        </div>
        </center>
    </div>)
}

export default Recommendation;