import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <article className='Footer__Content' id='Contact'>
            <ul className='Footer__Anchors'>
                <li><i className='bx bxs-home'></i> <a href="#"> Home</a></li>
                <li><i className='bx bxs-user'></i> <a href="#"> About me</a></li>
                <li><i className='bx bxs-briefcase'></i> <a href="#"> Works</a></li>
                <li><i className='bx bxs-phone'></i><a href="#"> Contact</a></li>
            </ul>
            <section className='Footer__SocialNetworks'>
                <img src="/image/icons8-insta.svg" alt="Instagram icon by Icons8" />
                <img src="/image/icons8-twitter.svg" alt="Twitter Circled icon by Icons8" />
                <img src="/image/icons8-facebook.svg" alt="Facebook rodeado de círculo icon by Icons8" />
                <img src="/image/icons8-linkedin.svg" alt="LinkedIn icon by Icons8" />
            </section>
            <hr />
        </article>
    )
}

export default Footer