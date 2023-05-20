import React from 'react'
import './navBar.css'

const NavBar = () => {
  return (
    <article className='NavBar__Content'>
      <a href="#Home"><img className='NavBar__Logo' src="/image/name.png" alt="logo de portafolio OlgerGOLD" /></a>
      <ul className='NavBar__Anchors'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About-me">About me</a></li>
        <li><a href="#Works">Work</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
        <button className='NavBar__Menu'><i className='bx bx-menu'></i></button>
    </article>
  )
}

export default NavBar