import React from 'react'
import classes from './Contact.module.css'
function Contact() {
    return (
        <section className={classes.section} >
            <div className={classes.title}>Contact  </div>
            
            <div className={classes.icon}>
                <div className={classes.first} >Send email</div>   <a className={classes.icon1} href="mailto:zhansayasarmanova@gmail.com"><img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/915/original/512px-Gmail_icon_%282020%29.svg.png?1629852671" alt="Gmail" className="icon" target="_blank" width='40' style={{ marginRight: '86px' }} /></a>
                <div className={classes.second}>Follow my GitHub account</div>   <a href="https://github.com/Sarmanova"><img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/894/original/25231.png?1629847367" alt="Github" className="icon" target="_blank" width='40' style={{ marginRight: '85px' }} /></a>
                <div className={classes.third} >See me on LinkedIn</div>  <a href="https://www.linkedin.com/in/zhansaya-sarmanova/"><img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/916/original/174857.png?1629852721" alt="LinkedIn" className="icon" target="_blank" width='40' style={{ marginRight: '85px' }} /></a>
                <div className={classes.header}> Download My Resume</div>
                <a href="https://drive.google.com/file/d/1JEEjwLp2uFrmBx4JKviz394i0V-eXZkc/view?usp=sharing"
                    target="_blank" >
                    <img src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/982/original/651-6517838_icon-resume-icons-for-personal-resume-sketch-freebie.png?1629941207' width='50' style={{ marginLeft: '15px' }}/>
                </a>
            </div>

            <footer className={classes.footer}> © Copyright 2021 Made  by Zhansaya Sarmanova</footer>
        </section>
        
    )
}

export default Contact
