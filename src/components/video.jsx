import React from "react";
import ReactPlayer from 'react-player'
import Content from "./videoContent"
import Subject from "./VideoSub"
import Like from "./Like"
import "mathjs"
import {Row,Col} from 'react-bootstrap';

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
    return(<div className="row">
    <Row >
    <Col><div className="vid">
    <ReactPlayer
            url={props.src}
            width='450px'
            height='320px'
            controls = {true}
            onDuration={(i) => calcDur(i)}
            />
    </div>
    </Col>
    <div className="inDivContent">
    <div className="vidContent">
    <div className="floatLeftTitle">
    <div className="subjectDiv">
    <Like count={props.count} />
    </div>
    <div className="subjectDiv">
    <p id="lengthSize">length:   {duration}</p>
    </div>
    </div>
    <div className="floatRightTitle">
    <div className="subjectDiv">
    <Col><Subject subject={props.subject} /></Col>
    </div> 
    </div>
    <Col><Content content={props.content} /></Col>
    </div>
    </div>
    </Row>
    </div>)
}

export default Video;