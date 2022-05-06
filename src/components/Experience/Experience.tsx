import React from 'react'
import './Experience.css'
export default function Experience() {
  return (
    <section id='Experience'>
        <h1>Experience</h1>
        <div className="experience-container">
            <div className="content-box">
                <div className="content-container">
                    <h4>Work Experience</h4>
                    <div className="left-padding">
                        <label htmlFor="ES"><h5>Espire Services</h5></label>
                        <ul id="ES">
                            <li>Incoming Front End Developer Internship</li>

                            <li>June 2022 - August 2022</li>
                        </ul>
                    </div>
                </div>
                <div className="content-container">
                    <h4>Education</h4>
                    <div className="left-padding">
                        <label htmlFor="UF"><h5>University of Florida</h5></label>
                        <ul id="UF">
                            <li>Bachelor of Science in Computer Science</li>
                            <li>Cumulative GPA: 3.65</li>
                            <li>Expected Graduation Date: 05/2023 </li>
                        </ul>

                        <label htmlFor="GCSC"><h5>Gulf Coast State College</h5></label>
                        <ul id="GCSC">
                            <li>Associate of Arts in Liberal Arts</li>
                            <li>Cumulative GPA: 3.7</li>
                            <li>Graduation Date: 12/2020 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
