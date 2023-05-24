import React from 'react'
import './contactMe.css'

const ContactMe = () => {
    return (
        <article id='Contact' className='ContactMe__Container'>
            <h2 className='Form__Title'>Una gran visión sin grandes personas es irrelevante. Trabajando equipo lograremos cosas maravillosas.</h2>
            <form className='Form'>
                <div className='Inputs__container'>
                    <input className='Input Input__FirstName' type="text" placeholder='Nombre' />
                    <input className='Input Input__LastName' type="text" placeholder='Empresa' />
                    <input className='Input Input__Email' type="email" placeholder='ejemplo@correo.com' />
                    <textarea className='Input Input__TextArea' name="mensaje" id="mensaje" cols="50" rows="10" placeholder='Saludos, tengo una propuesta que podría interesarte.'></textarea>
                    <button className='Form__Btn' type='submit'>Enviar</button>
                </div>
            </form>
        </article>
    )
}

export default ContactMe