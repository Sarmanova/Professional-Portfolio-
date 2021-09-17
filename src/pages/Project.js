import React from 'react'
import classes from './Projects.module.css'
import { AnimateOnChange } from 'react-animation'
import { animations } from 'react-animation'
function Project() {
    return (
        <section className={classes.section}>
            <div>
                <AnimateOnChange style={{ animation: animations.popIn, display: 'block', durationOut: 500 }} ><h1 className={classes.title}>My Works</h1>  </AnimateOnChange>

                <AnimateOnChange style={{ animation: animations.slideIn }}>  <a href="https://band--mates.herokuapp.com" target='blank'> <img src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/016/655/original/hkVYvd3_-_Imgur.jpg?1630869400' alt='' width="650" className={classes.card} /></a> </AnimateOnChange>
                <AnimateOnChange style={{ animation: animations.slideIn }}>      <a href="https://sous-chef-project-2.herokuapp.com/" target='blank'> <img src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/969/original/screenshot-2.png?1629931160' alt='' width="631" height='430' className={classes.card1} /></a> </AnimateOnChange>

                <AnimateOnChange style={{ animation: animations.slideIn }}>    <a href="https://workout-tracker1993.herokuapp.com/?id=611b083c4939140016086c83" target='blank'> <img src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/970/original/1212.PNG?1629931237' alt='' width="650" height='430' className={classes.card} /></a> </AnimateOnChange>

                <AnimateOnChange style={{ animation: animations.slideIn }}>    <a href="https://cnvives.github.io/group-3/" target='blank'> <img src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/956/original/LandingPageEx.png?1629907022' alt='' width="650" height='430' className={classes.card3} /></a>  </AnimateOnChange>


            </div>
        </section>
    )
}

export default Project
