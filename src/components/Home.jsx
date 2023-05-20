import React from 'react'
import './home.css'

const Home = () => {
  return (
    <article className='Home__Content' id='Home'>
      <img className='Home__Foto' src="/image/foto1.png" alt="Foto Olger Ortiz" />
      <section className='Home__Body'>
        <section className='Body__Description'>
          <h2 className='Description__Title'><span>¡Hola!</span> Soy Olger Ortiz desarrollador web Front-end</h2>
          <h2 className='Description__location'>con bases en Venezuela</h2>
        </section>
        <div className="trapdoor">
          <div className="top door">
          </div>
          <div className="bottom door">
          </div>
          <a href="#" className='Home__Btn--CV'><i className='bx bxs-download'></i></a>
        </div>
      </section>
    </article>
  )
}

export default Home