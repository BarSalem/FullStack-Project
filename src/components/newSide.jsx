import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight, faEnvelope, faX, } from "@fortawesome/free-solid-svg-icons";
import './css/side.css'

function SocialLinks(){
    const [toggleLinks, setToggleLinks] = React.useState(true)
    return (<div className="sideLinksSoc">
    <ul>
    {toggleLinks ? <>
    <li id="socialSup"><a className="socColor" target="_blank" href="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} size="3x" /></a></li>
    <li id="socialFB"><a className="socColor" target="_blank" href="https://www.facebook.com/teoeasy"><FontAwesomeIcon icon={faFacebookF} size="3x" /></a></li>
    <li id="socialInst"><a className="socColor" target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="3x" /></a></li>
    <li id="socialTwit"><a className="socColor" target="_blank" href="https://mobile.twitter.com/explore"><FontAwesomeIcon icon={faTwitter} size="3x" /></a></li>
    <li id="socialMail"><a className="socColor" target="_blank" href="mailto:barsalem555@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x" /></a></li>
    </>: <></>}
    </ul>
    </div>)
}

export default SocialLinks;

/*
<div className="socialLinks">
    {toggleLinks ? <div className="socialVisble">
        <div><button id="socialCollapse" className="socGen" onClick={()=>setToggleLinks(!toggleLinks)}><FontAwesomeIcon icon={faArrowRight} size="3x" /></button></div>
        <div><button id="socialSup" className="socGen"><a className="socColor" target="_blank" href="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} size="3x" /></a></button></div>
    <div><button id="socialFB" className="socGen"><a className="socColor" target="_blank" href="https://www.facebook.com/teoeasy"><FontAwesomeIcon icon={faFacebookF} size="3x" /></a></button></div>
    <div><button id="socialInst" className="socGen"><a className="socColor" target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="3x" /></a></button></div>
    <div><button id="socialMail" className="socGen"><a className="socColor" target="_blank" href="mailto:barsalem555@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x" /></a></button></div>
    <div><button id="socialTwit" className="socGen"><a className="socColor" target="_blank" href="https://mobile.twitter.com/explore"><FontAwesomeIcon icon={faTwitter} size="3x" /></a></button></div>
    </div>: <><div><button id="socialCollapse" className="socGen" onClick={()=>setToggleLinks(!toggleLinks)}><FontAwesomeIcon icon={faArrowLeft} size="3x" /></button></div></>}


    </div>

*/