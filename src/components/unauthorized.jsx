import React from "react";
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'

function Unauthorized(){
  const navigate=useNavigate();
  const {user}=useSelector((state)=> state.auth)
  React.useEffect(()=>{
    if (!user) {
      navigate('/login')
    }
    else{
      if(user.status=='Active'){
        navigate('/')
      }
    }
  },[user,navigate])
  return (
    <div>
    <center>
        <h1>
          <strong>You need to activate your account!!</strong>
        </h1>
        <p>Go to your Email and verify your account so you can watch videos</p>
    </center>
    </div>
  );
};

export default Unauthorized;
