import React from 'react'
import classes from './About.module.css'
import { AnimateOnChange } from 'react-animation'
import { animations } from 'react-animation'
function About() {


    return (
        <section className={classes.section} >
            <div className={classes.title}> About Me </div>
            <div className='hover-switch' >
                <img className={classes.image} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/011/043/original/IMG-0788.JPG?1624118358" alt="Zhansaya Sarmanova" width='350' />
                <img className={classes.image} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/017/274/original/IMG-1150.JPG?1631846439" alt="Zhansaya Sarmanova" width='350' />
            </div>
            <div>
                <AnimateOnChange style={{
                    animation: animations.slideIn,
                    durationOut: 500
                }} className={classes.description}>
                    <p >
                    My name is Zhansaya Sarmanova. <br />I am a Junior Full-Stack Web Developer living <br />in Austin,TX.
                    Graduated Full Stack Software <br />Development Certification Program  <br />in UT Austin Bootcamp.<br /> Highly skilled set development in the <br />Software Development field. Driven, <br />dedicated and passionate on achieving <br /> high level results, in both a team and <br />independent work environment.
                </p> </AnimateOnChange>
            </div>

        </section>
    )
}

export default About
