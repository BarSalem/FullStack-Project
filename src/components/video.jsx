import React,{useEffect} from "react";
import ReactPlayer from 'react-player'
import Like from "./Like"
import "mathjs"
import "./css/video.css"

function Video(props){
    const [duration,setDuration]=React.useState("")
    function calcDur(i){
        setDuration("0" + min +":0" +Math.floor(i))
        var min=Math.floor(i/60);
        i=Math.floor(i)
        if(min<10){
            if(i<10){
                setDuration("0" + min +":0" +i)
            }
                else{
                    setDuration("0" + min +":" +i)
                }
        }
            else{
                if(i%60<10){
                    setDuration( min +":0" + i%60 ) 
                }
                else{
                    setDuration( min +":" +i) 
                }
            }
        }
    const [setWidth,setWidthFun]=React.useState(window.innerWidth>1028 ? "450px":"100%")
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    useEffect(() => {

            const changeWidth = () => {
              setScreenWidth(window.innerWidth);
              if(window.innerWidth>1028){
                setWidthFun("450px")
              }
              else{
                  setWidthFun("100%")
              }
            }
        
            window.addEventListener('resize', changeWidth)
        
            return () => {
                window.removeEventListener('resize', changeWidth)
            }
        
          }, [])
    return(<div className="row">
    <div className="vid">
    <ReactPlayer
            url={props.src}
            width={setWidth}
            height='320px'
            controls = {true}
            onDuration={(i) => calcDur(i)}
            />
    </div>
    <div className="vidContent">
    <div className="vidTitle">
    <div className="floatLeftTitle">
    <div className="subjectDiv">
    {screenWidth>1028 ? <p id="lengthSize">length:   {duration}</p>:null}
    </div>
    </div>
    <div className="subjectDiv">
    <h1 className="vidSubject">{props.subject}</h1>
    </div> 
    </div>
    <div className="vidDetails">
    <p id="pContent">{props.content}</p>
    {screenWidth>1028 ? null:<p id="lengthSize">length:   {duration}</p>}
    </div>
    </div>
    </div>)
}

export default Video;