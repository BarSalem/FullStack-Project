import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

var isPressed = false;

function Like(props){
    const [like,setLike]=React.useState(props.count)
    function ClickLike(){
        if(isPressed===false){
            setLike(like+1);
            isPressed=true;
        }
        else{
            setLike(like-1);
            isPressed=false; 
        }

    }
    const pressedStyle={color:"#0984e3"}
    return (<div className="Like">
        <div className="LikeCounter">
        <p>{like}</p> 
        </div>
        <div className="LikeDiv">
        <button className="LikeBut" style={isPressed ? pressedStyle : null} onClick={ClickLike}><FontAwesomeIcon icon={faThumbsUp} /></button>
        </div>
    </div>)
}

export default Like;