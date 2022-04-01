import React from "react";
import './css/Navbar.css';
import {Link,useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faSquareArrowUpRight,faUser} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from 'react-redux';
import {logout,reset} from "./authorize/authSlice";


function NavBar(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
      }


    return (<div className="NavContainer">
    <div className="navRight">
    {user ? <div className="NavItem"><Link to={'/content'} className="linkP vertical-center" style={{ textDecoration: 'none' }}><p>Videos</p></Link></div>:null}
    <div className="NavItem"><Link to={'/recommendation'} className="linkP vertical-center" style={{ textDecoration: 'none' }}><p>Recommendation</p></Link></div>
    <div className="NavItem"><Link to={'/about'} className="linkP vertical-center" style={{ textDecoration: 'none' }}><p>About</p></Link></div>
    <div className="NavItem"><Link to={'/'} className="linkP vertical-center" style={{ textDecoration: 'none' }}><p>Home</p></Link></div>
    </div>
    {user ?  <>
        <div className="navLeft">
    <div className="NavItem">
    <div className="NavItem1">
    <div className='navLeftBlocks' onClick={onLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} size={"2x"}/></div><div className='navLeftBlocks' onClick={onLogout}><p>Log Out</p></div>
    </div>
    </div>
    <div className="NavItem">
    <div className='navLeftBlocks'><FontAwesomeIcon icon={faUser} size={"2x"} /></div><div className='navLeftBlocks '><Link to={'/acc'} className="linkP vertical-center"><p> Profile</p></Link></div>
    </div>
    </div>
    </> : <>
    <div className="navLeft">
    <div className="NavItem">
    <Link to={'/login'} className="linkP vertical-center"><p><FontAwesomeIcon icon={faArrowRightFromBracket} size={"2x"}/>Log In</p></Link>
    </div>
    <div className="NavItem">
    <Link to={'/register'} className="linkP vertical-center"><p><FontAwesomeIcon icon={faSquareArrowUpRight} size={"2x"} />Register</p></Link>
    </div>
    </div>
    </>}
    </div>)
}

export default NavBar;