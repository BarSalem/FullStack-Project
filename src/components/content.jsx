import React,{useEffect} from "react";
import Videos from "./renderVideos"
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'

function Content(){
  const navigate=useNavigate();
  const {user}=useSelector((state)=> state.auth)
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
    if(user.status=='Pending'){
      navigate('/unauthorized')
    }
  },[user,navigate])
  console.log(user);
    const [isShown, setState] = React.useState(false);
  const [setN,setNum]=React.useState("");
  var temp;
  function renderSet(event){
    temp=setN;
    setNum(event.target.value);
    if(temp!==event.target.value){
      setState(true);
    }
    else{
      if(isShown===false)
      {
        setState(true);
      }
      else{
        setState(false);
      }
    }
  }
  return (
    <div className="App">
    <center>
    <div className="buttonFix">
      <button className="setButton" onClick={renderSet} value={0}>Set1</button>
      <button className="setButton" onClick={renderSet} value={1}>Set2</button>
      <button className="setButton" onClick={renderSet} value={2}>Set3</button>
      <button className="setButton" onClick={renderSet} value={3}>Set4</button>
      <button className="setButton" onClick={renderSet} value={4}>Set5</button>
      </div>
      </center>
      { isShown ? <Videos setNumber={setN}/> : null }

    </div>
  );
}

export default Content;