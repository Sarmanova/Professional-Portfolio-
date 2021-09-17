import React from 'react'
import { Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'
import classes from './Home.module.css'
function Home() {


    return (
        
        <div className={classes.div}>
            <div className={classes.second}>
                
                Hello, I'm <span className={classes.name}> Zhansaya Sarmanova </span> </div>
            <div className="typewriter"> 
                <h1> I am a Junior Full-Stack Developer.</h1>
            </div><br/>
          
            <Link className={classes.button} to='/projects'> View My Work 
                <Icon name='arrow right' className={classes.icon}/>
               
            </Link>

            </div>
     
    )
}

export default Home
