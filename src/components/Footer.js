import React from 'react'
import './footer.css';
import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


const Footer = () => {

 const emailAddress = 'laya.playapps@gmail.com';


  return (

<footer className='footer'>
<h1 className='title'>TvTransportate con Amberlis</h1>
  <h4>Contáctame</h4>
<div className='social-icons'>
<a href='https://www.instagram.com/soyamberlis'>
    <FaInstagram />
</a>
<a href={`mailto:${emailAddress}`}>
    <SiGmail />
</a>
</div>
<div className='divContainericon'>
    <h6>© 2023 Amberlis Laya M. Todos los derechos reservados.</h6>
</div>
</footer>
)
}

export default Footer



