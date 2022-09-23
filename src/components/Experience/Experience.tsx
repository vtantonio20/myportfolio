import React from 'react'
import './Experience.css'
export default function Experience() {
  return (
    <section id='Experience'>
        <h1>Experience</h1>
        <div className="flex-center">
            <div className="content-box">
                <div className="section-container">
                    <h4>Work Experience</h4>
                    <div className="left-padding">
                        <label htmlFor="ES"><h5>Espire Services (Canceled)</h5></label>
                        <ul id="ES">
                            <li>Incoming Front End Developer Intern</li>
                            <li>June 2022 - August 2022</li>
                            <li>Vienna, VA</li>
                        </ul>
                    </div>
                </div>
                <div className="section-container">
                    <h4>Education</h4>
                    <div className="left-padding">
                        <label htmlFor="UF"><h5>University of Florida</h5></label>
                        <ul id="UF">
                            <li>Bachelor of Science in Computer Science</li>
                            <li>Cumulative GPA: 3.65</li>
                            <li>Expected Graduation Date: 05/2023 </li>
                            <li>Gainesville, FL </li>
                        </ul>
                        <label htmlFor="GCSC"><h5>Gulf Coast State College</h5></label>
                        <ul id="GCSC">
                            <li>Associate of Arts in Liberal Arts</li>
                            <li>Cumulative GPA: 3.7</li>
                            <li>Graduation Date: 12/2020 </li>
                            <li>Panama City, FL </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
