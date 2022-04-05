import './css/FinalNav.css'
import React,{useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBars, faSquareArrowUpRight,faUser, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from 'react-redux';
import {logout,reset} from "./authorize/authSlice";

function Navbar(){
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

    return(<>
    {screenWidth>768 ? <div className='NavbarContainer'>
    <div className='NavBarRight'>
    <ul> 
    {user ? <li>
        <div className='navLink'><Link to={'/content'}>Videos</Link></div>
        </li> : null}
        <li>
        <div className='navLink'><Link to={'/Recommendation'}>Recommendation</Link></div>
        </li>
        <li>   
        <div className='navLink'><Link to={'/about'}>About</Link></div>
        </li>
        <li>
        <div className='navLink'><Link to={'/'}>Home</Link></div>  
        </li>
    </ul>
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
    </div>:
    <><div className='toggleNavBarTop'>
    {toggleMenu ? <button onClick={toggleNav} className="toggleMenuBut"><FontAwesomeIcon icon={faXmark} size={"3x"} /></button>:
    <button onClick={toggleNav} className="toggleMenuBut"><FontAwesomeIcon icon={faBars} size={"3x"} /></button>}
    </div>
    {toggleMenu ? <div className="isToggled">
    <div className="NavItem"><Link to={'/'} className="linkP vertical-center"  onClick={handleOnClick}><p>Home</p></Link></div>
    <div className="NavItem"><Link to={'/about'} className="linkP vertical-center"  onClick={handleOnClick}><p>About</p></Link></div>
    <div className="NavItem"><Link to={'/recommendation'} className="linkP vertical-center"  onClick={handleOnClick}><p>Recommendation</p></Link></div>
    {user ?<div className="NavItem"><Link to={'/content'} className="linkP vertical-center"  onClick={handleOnClick}><p>Videos</p></Link></div>:null}
    {user ?  <>
    <div className='NavItem'><Link to={'/acc'} className="linkP vertical-center" onClick={handleOnClick} style={{ textDecoration: 'none' }}><p><FontAwesomeIcon icon={faUser}/> Profile</p></Link></div>
    <div className='NavItem' onClick={onLogout}><Link to={'/'} className="linkP vertical-center"  onClick={handleOnClick} style={{ textDecoration: 'none' }}><p><FontAwesomeIcon icon={faArrowRightFromBracket}/> Log Out</p></Link></div>
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
    </>)
}

export default Navbar;