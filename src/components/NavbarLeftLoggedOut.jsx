import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faSquareArrowUpRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import React from "react";

import './css/Navbar.css';


function leftNavLoggedOut(){
    return(<div className="navLeft">
    <div className="NavItem">
    <div className='navLeftBlocks'><FontAwesomeIcon icon={faArrowRightFromBracket} size={"2x"}/></div><div className='navLeftBlocks'><Link to={'/login'} className="linkP"><p>Log In</p></Link></div>
    </div>
    <div className="NavItem">
    <div className='navLeftBlocks'><FontAwesomeIcon icon={faSquareArrowUpRight} size={"2x"} /></div><div className='navLeftBlocks'><Link to={'/register'} className="linkP"><p>Register</p></Link></div>
    </div>
    </div>)
}

export default leftNavLoggedOut;
