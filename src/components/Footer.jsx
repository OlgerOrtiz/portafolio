import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <article className='Footer__Content' id='Contact'>
            <ul className='Footer__Anchors'>
                <li><i className="fa-solid fa-house"></i> <a href="#"> Home</a></li>
                <li><i className="fa-solid fa-user"></i> <a href="#"> About me</a></li>
                <li><i className='bx bxs-briefcase'></i> <a href="#"> Works</a></li>
                <li><i className='bx bxs-phone'></i><a href="#"> Contact</a></li>
            </ul>
            <section className='Footer__SocialNetworks'>
                <a href="http://" target="_blank"><i className='bx bxl-instagram'></i></a>
                <a href="http://" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="http://" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="http://" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            </section>
            <hr />
        </article>
    )
}

export default Footer