import React from "react";
import {verifyUser} from "./authorize/authSlice";
import { Link } from "react-router-dom";

function Unauthorized(){
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