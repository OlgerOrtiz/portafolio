import React from 'react'
import './home.css'

const Home = () => {
  return (
    <article className='Home__Content'>
      <h1 className='Home__Title'>Hi! I'am frontend developer<span>based in Venezuela</span></h1>
      <img src="./public/fondo1.png" alt="fondo abstract" />
      <div className="trapdoor">
        <div className="top door">
        </div>
        <div className="bottom door">
        </div>
        <a href="#" className='Home__Btn--CV'><i className='bx bxs-download'></i></a>
      </div>
    </article>
  )
}

export default Home