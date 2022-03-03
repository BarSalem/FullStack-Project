import React from "react";

const footerStyle={
    fontSize:'15px',
    color:"white",
    marginTop:'70px',
    position:'relative',
    bot:'50px'
    }

function Footer(){
    const date=new Date();
    const year=date.getFullYear();
    return (<div>
    <center>
    <footer>
    <p style={footerStyle}>©{year} Bar-Salem All rights reserved.</p>
    </footer>
    </center>
    </div>)
}

export default Footer;