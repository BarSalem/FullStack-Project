import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import './css/sideLinks.css'

function socialLinks(){
    return (<div className="socialLinks">
    <div><button id="socialSup" className="socGen"><a className="socColor" target="_blank" href="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} size="3x" /></a></button></div>
    <div><button id="socialFB" className="socGen"><a className="socColor" target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} size="3x" /></a></button></div>
    <div><button id="socialInst" className="socGen"><a className="socColor" target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="3x" /></a></button></div>
    <div><button id="socialMail" className="socGen"><a className="socColor" target="_blank" href="mailto:barsalem555@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x" /></a></button></div>
    <div><button id="socialTwit" className="socGen"><a className="socColor" target="_blank" href="https://mobile.twitter.com/explore"><FontAwesomeIcon icon={faTwitter} size="3x" /></a></button></div>


    </div>)
}

export default socialLinks;