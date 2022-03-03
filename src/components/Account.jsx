import React from "react";
import "./css/Account.css";

function Profile(props){
    const [edit,setEdit]=React.setstate(1);
    /*function handleEdit(){
        if(edit===0){
            setEdit(1);
        }
        else{
            setEdit(0);
        }
    }*/

    return (<div>
    <h1>Your Account info</h1>
    <p>Full Name:{props.name}</p>
    {edit ? 
        <div class="input-container ic1">
      <input id="email" class="inputLogin" type="email" placeholder="Email" required/>
      <div class="cut cut-short"></div>
    </div> : null }
    <p>Email:{props.email}</p>
    {edit ? 
        <div class="input-container ic1">
      <input id="email" class="inputLogin" type="email" placeholder="Email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required/>
      <div class="cut cut-short"></div>
    </div> : null }
    <p>Password:{props.password}</p>
    {edit ? 
        <div class="input-container ic1">
      <input id="email" class="inputLogin" type="email" placeholder="Email" required/>
      <div class="cut cut-short"></div>
    </div> : null }
    </div>);
}

export default Profile;