import React from 'react'
import './skills.css'

const Skills = () => {
    return (
        <article className='Skills__Container'>
            <section className='Skills__Content'>
                <div className='Skill__Base--img'>
                <img src="../../image/baseSkills.png" alt="" />
                </div>
                <div className='Skill Skill-1'>
                    <img className='Skill__img' src="../../image/SkillBg.png" alt="holographic ring" />
                    <p className='Skill__Name'>HTML</p>
                    <img className='Logo LogoHtml' src="../../image/logoHtml.png" alt="Logo Html" />
                </div>
                <div className='Skill Skill-2'>
                    <img className='Skill__img' src="../../image/SkillBg.png" alt="holographic ring" />
                    <p className='Skill__Name'>CSS</p>
                    <img className='Logo LogoCss' src="../../image/logoCss.png" alt="Logo Css" />
                </div>
                <div className='Skill Skill-3'>
                    <img className='Skill__img' src="../../image/SkillBg.png" alt="holographic ring" />
                    <p className='Skill__Name'>JavaScript</p>
                    <img className='Logo LogoJs' src="../../image/logoJavascript.png" alt="Logo JavaScript" />
                </div>
                <div className='Skill Skill-4'>
                    <img className='Skill__img' src="../../image/SkillBg.png" alt="holographic ring" />
                    <p className='Skill__Name'>React</p>
                    <img className='Logo LogoReact' src="../../image/logoReact.png" alt="Logo React.js" />
                </div>
                <div className='Skill Skill-5'>
                    <img className='Skill__img' src="../../image/SkillBg.png" alt="holographic ring" />
                    <p className='Skill__Name'>Axios</p>
                    <img className='Logo LogoAxios' src="../../image/logoAxios.png" alt="Logo Axios" />
                </div>
                <div className='Skill Skill-6'>
                    <img className='Skill__img' src="../../image/SkillBg.png" alt="holographic ring" />
                    <p className='Skill__Name'>Redux</p>
                    <img className='Logo LogoRedux' src="../../image/logoRedux.png" alt="Logo Redux" />
                </div>
                <div className='Skill Skill-7'>
                    <img className='Skill__img' src="../../image/SkillBg.png" alt="holographic ring" />
                    <p className='Skill__Name'>React Router Dom</p>
                    <img className='Logo LogoReactRD' src="../../image/logoReactRD.png" alt="Logo React Router Dom" />
                </div>
                <div className='Skill Skill-8'>
                    <img className='Skill__img' src="../../image/SkillBg.png" alt="holographic ring" />
                    <p className='Skill__Name'>React Hook Form</p>
                    <img className='Logo LogoReactHF' src="../../image/logoReactHF.png" alt="Logo React Hook Form" />
                </div>
                <div className='Skill Skill-9'>
                    <img className='Skill__img' src="../../image/SkillBg.png" alt="holographic ring" />
                    <p className='Skill__Name'>GitHub</p>
                    <img className='Logo LogoGitHub' src="../../image/logoGitHub.png" alt="Logo GitHub" />
                </div>
            </section>
        </article>
    )
}

export default Skills