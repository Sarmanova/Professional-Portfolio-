import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
function Navbar() {
    return (
        <header className={classes.header} >
         
            <ul>
                <li >
                    <Link className={classes.home} to='/'>Home</Link>
                </li>
                <li>
                    <Link className={classes.home} to='/about'>About</Link>
                </li>
                <li>
                    <Link className={classes.home}  to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link className={classes.home} to='/contact'>Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar
