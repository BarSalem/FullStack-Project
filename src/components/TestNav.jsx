import React,{useEffect} from "react";
import './css/Navbar.css';
import "./css/resNav.css";
import {Link,useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBars, faSquareArrowUpRight,faUser} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from 'react-redux';
import {logout,reset} from "./authorize/authSlice";
function NavBar(){
    const [toggleMenu, setToggleMenu] = React.useState(false)
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
      if(window.innerWidth>1028){
        setToggleMenu(false)
      }
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  function handleOnClick(){
    setToggleMenu(false)
  }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        setToggleMenu(false)
        navigate('/')
      }


    return (<div className="NavContainer">
    {screenWidth>1028 ? <>
        <div className="navRight">
    {user ? <div className="NavItem"><Link to={'/content'} className="linkP vertical-center" style={{ textDecoration: 'none' }}><p>Videos</p></Link></div>:null}
    <div className="NavItem"><Link to={'/recommendation'} className="linkP vertical-center" style={{ textDecoration: 'none' }}><p>Recommendation</p></Link></div>
    <div className="NavItem"><Link to={'/about'} className="linkP vertical-center" style={{ textDecoration: 'none' }}><p>About</p></Link></div>
    <div className="NavItem"><Link to={'/'} className="linkP vertical-center" style={{ textDecoration: 'none' }}><p>Home</p></Link></div>
    </div>
    {user ?  <>
    <div className="navLeft">
    <div className="NavItem" onClick={onLogout}>
    <Link to={'/'} className="linkP vertical-center" ><p><FontAwesomeIcon icon={faArrowRightFromBracket}/>Log Out</p></Link>
    </div>
    <div className="NavItem" >
    <Link to={'/acc'} className="linkP vertical-center" ><p><FontAwesomeIcon icon={faUser}/> Profile</p></Link>
    </div>
    </div>
    </> : <>
    <div className="navLeft">
    <div className="NavItem">
    <Link to={'/login'} className="linkP vertical-center"><p><FontAwesomeIcon icon={faArrowRightFromBracket} />Log In</p></Link>
    </div>
    <div className="NavItem">
    <Link to={'/register'} className="linkP vertical-center"><p><FontAwesomeIcon icon={faSquareArrowUpRight} />Register</p></Link>
    </div>
    </div>
    </>}
    </>: <>
    <button onClick={toggleNav} className="toggleMenuBut"><FontAwesomeIcon icon={faBars} size={"3x"} /></button>
    {toggleMenu ? <div className="isToggled">
    {user ?<div className="NavItem"><Link to={'/content'} className="linkP vertical-center"  onClick={handleOnClick} style={{ textDecoration: 'none' }}><p>Videos</p></Link></div>:null}
    <div className="NavItem"><Link to={'/recommendation'} className="linkP vertical-center"  onClick={handleOnClick} style={{ textDecoration: 'none' }}><p>Recommendation</p></Link></div>
    <div className="NavItem"><Link to={'/about'} className="linkP vertical-center"  onClick={handleOnClick} style={{ textDecoration: 'none' }}><p>About</p></Link></div>
    <div className="NavItem"><Link to={'/'} className="linkP vertical-center"  onClick={handleOnClick} style={{ textDecoration: 'none' }}><p>Home</p></Link></div>
    {user ?  <>
    <div className='NavItem' onClick={onLogout}><p><FontAwesomeIcon icon={faArrowRightFromBracket}/> Log Out</p></div>
    <div className='NavItem'><Link to={'/acc'} className="linkP vertical-center" onClick={handleOnClick} style={{ textDecoration: 'none' }}><p><FontAwesomeIcon icon={faUser}/> Profile</p></Link></div>
    </> : <>
    <div className="NavItem">
    <Link to={'/login'} className="linkP vertical-center" onClick={handleOnClick}><p><FontAwesomeIcon icon={faArrowRightFromBracket}/>   Log In</p></Link>
    </div>
    <div className="NavItem">
    <Link to={'/register'} className="linkP vertical-center" onClick={handleOnClick}><p><FontAwesomeIcon icon={faSquareArrowUpRight} /> Register</p></Link>
    </div>
    </>}
      </div>: null}
    </>}
    </div>)
}

export default NavBar;