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
                        <label htmlFor="IPS"><h5>IPS | (Panama City, FL) | (May 2023 - Present)</h5></label>
                        <ul id="IPS">
                            <li>In my current role as a software developer for the Department of Defense (DoD), I developed a Java desktop application using Swing, Hibernate, PostgreSQL, and Apache CXF. I implemented REST and SOAP web services with Apache CXF to facilitate seamless integration with external systems. By optimizing database interactions through Hibernate ORM, I ensured efficient data retrieval and persistence operations. I actively participate in Agile development practices, including daily standups, code reviews, and ticket refinement sessions. Utilizing Jira, I manage project tasks and sprints, ensuring the timely delivery of features and bug fixes in a Scrum environment. Additionally, I maintain high code quality and reduce defects through rigorous unit testing with JUnit. I also configure and use Maven for dependency management and build automation, streamlining the overall development process.</li>
                        </ul>

                        <label htmlFor="VERIFONE"><h5>Verifone | (Clearwater, FL)  | (August 2022 - May 2023)</h5></label>
                        <ul id="VERIFONE">
                            <li>During my time as a student developer at Verifone, I contributed to the development of an Angular and Spring Boot-based website designed to manage multiple loyalty program configurations for employers through a unified front-end interface. I implemented frontend views and services using Angular, creating a clean and responsive user experience by leveraging HTML, CSS, and an in-house UI toolkit. Collaborating closely with backend engineers, I ensured accurate data retrieval from backend APIs via REST endpoints, resulting in precise and reliable information being displayed on the client side.</li>
                        </ul>
                    </div>
                </div>
                <div className="section-container">
                    <h4>Education</h4>
                    <div className="left-padding">
                        <label htmlFor="UF"><h5>University of Florida | (Gainesville, FL) | (January 2020 - May 2023)</h5></label>
                        <ul id="UF">
                            <li>Bachelor of Science in Computer Science</li>
                            <li>Cumulative GPA: 3.65</li>
                            <li>Graduation Date: 05/2023 </li>
                        </ul>
                        <label htmlFor="GCSC"><h5>Gulf Coast State College | (Panama City, FL) | (August 2019 - December 2020)</h5></label>
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
