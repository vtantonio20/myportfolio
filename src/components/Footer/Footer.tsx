import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <section id='Contact'>
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="content-box">
            <div className="line-wrapper">
                <div className='line'>
                        <img className="logo" src='https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png'></img>
                        <img className="logo" src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'></img>
                        <img className="logo" src='https://www.downloadclipart.net/large/31964-blue-email-clipart.png'></img>
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
