import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import {logout,reset} from "./authorize/authSlice";
import {useDispatch} from 'react-redux';
import './css/Navbar.css';
import "./css/resNav.css";

function Welcome(){
    const dispatch = useDispatch()
      dispatch(logout())
      dispatch(reset())
      const styleLink={textDecoration:'none',color:'white',fontSize:'40px'}
  return (
    <div>
    <center>
        <h1>
          Account confirmed!
        </h1>
      <Link to={"/login"} style={styleLink}>
        Please Login
      </Link>
      </center>
    </div>
  );
};

export default Welcome;