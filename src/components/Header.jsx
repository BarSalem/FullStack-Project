import React from "react";
import Content from "./content";
import Login from "./Login";
import Navbar from "./Navbar"
import Socials from "./sideLinks"

function Header(props){
    if(props.isLogged===1){
        return(<div><center>
        <Navbar loggedin={props.isLogged} name={props.name} />
        <h1>Welcome Back {props.name}</h1>
        </center>
        </div>)
    }
    else{
        return(<div>
        <Navbar loggedin={props.isLogged} />
        </div>)
    }
}

export default Header;