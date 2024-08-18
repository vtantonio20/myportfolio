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
                        <label htmlFor="IPS"><h5>Innovative Professional Solutions (Panama City, FL)</h5></label>
                        <ul id="IPS">
                            <li>Developed a Java desktop application for the Department of Defense (DoD) using Swing, Hibernate, PostgreSQL, and Apache CXF. 
                            Implemented REST and SOAP web services using Apache CXF to ensure seamless integration with external systems.
                                Optimized database interactions by utilizing Hibernate ORM, resulting in efficient data retrieval and persistence operations.
                                Participated in Agile development practices, including daily standups, code reviews, and ticket refinement sessions.
                                Managed project tasks and sprints using Jira, ensuring timely delivery of features and bug fixes in a Scrum environment.
                                Conducted unit testing with JUnit, maintaining high code quality and reducing defects before deployment.
                                Configured and utilized Maven for dependency management and build automation, streamlining the development process.
                            </li>
                        </ul>

                        <label htmlFor="VERIFONE"><h5>Verifone (Clearwater, FL)</h5></label>
                        <ul id="VERIFONE">
                            <li>
                                Developed an Angular, and Spring Boot based website to manage multiple loyalty program configurations for employers through single front-end interface.
                                Implemented frontend views and services, using Angular, resulting in a clean and responsive user interface, by utilizing HTML, CSS, and an in-house UI toolkit.
                                Worked with backend engineers to successfully retrieve configuration data from backend API, via REST endpoints, resulting in accurate information being displayed client-side.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="section-container">
                    <h4>Education</h4>
                    <div className="left-padding">
                        <label htmlFor="UF"><h5>University of Florida (Gainesville, FL)</h5></label>
                        <ul id="UF">
                            <li>Bachelor of Science in Computer Science</li>
                            <li>Cumulative GPA: 3.65</li>
                            <li>Graduation Date: 05/2023 </li>
                            <li>Gainesville, FL </li>
                        </ul>
                        <label htmlFor="GCSC"><h5>Gulf Coast State College (Panama City, FL)</h5></label>
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
