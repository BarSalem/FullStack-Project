import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import {Link,useNavigate} from "react-router-dom";
import React from "react";
import './css/Navbar.css';
import {useDispatch,useSelector} from 'react-redux';
import {logout,reset} from "./authorize/authSlice";

function leftNavLoggedIN(){
    /*const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
      }*/

    return(<div className="navLeft">
    <div className="NavItem">
    <div className='navLeftBlocks'><FontAwesomeIcon icon={faArrowRightFromBracket} size={"2x"}/></div><div className='navLeftBlocks'><p>Log Out</p></div>
    </div>
    <div className="NavItem">
    <div className='navLeftBlocks'><FontAwesomeIcon icon={faUser} size={"2x"} /></div><div className='navLeftBlocks'><Link to={'/acc'} className="linkP"><p> Profile</p></Link></div>
    </div>
    </div>)
}

export default leftNavLoggedIN;