import React from 'react'
import './navBar.css'

const NavBar = () => {
  return (
    <article className='NavBar__Content'>
      <img className='NavBar__Letter--Logo' src="public/letter-O.png" alt="letter O green" />
      <ul className='NavBar__Anchors'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About-me">About me</a></li>
        <li><a href="#Works">Work</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <section className='NavBar__Icons'>
        <i className="fa-solid fa-moon"></i>
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-bars"></i>
      </section>
    </article>
  )
}

export default NavBar