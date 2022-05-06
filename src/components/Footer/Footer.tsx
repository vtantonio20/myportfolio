import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <section id='Contact'>
      <h2>Contact Me</h2>
      <div className="content-container">
        <div className="content-box">
            <div className="line-wrapper">
                <div className='line'>
                        <a href="https://www.linkedin.com/in/victor-torres-a57170224/" target='_blank' rel='noopener noreferrer'>
                          <img className="logo" src='https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png'></img></a>
                        <a href="https://github.com/vtantonio20" target='_blank' rel='noopener noreferrer'>
                          <img className="logo" src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'></img></a>
                        <a href="" target='_blank' rel='noopener noreferrer'>
                          <img className="logo" src='https://www.downloadclipart.net/large/31964-blue-email-clipart.png'></img></a>
                </div>
            </div>
            <div>
                <span id='email'>vt.antonio20@gmail.com</span>
                <span> • </span>  
                <span>850-346-5971</span>
            </div>
            <span>Florida, United States</span>
            <div><span> Thank you for viewing my portfolio website!</span></div>
        </div>
      </div>


    </section>
  )
}
