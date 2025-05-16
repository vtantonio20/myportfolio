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
                        <label htmlFor='CA'>
                            <h5>Cummings Aerospace | Largo, FL | February 2025 - Present</h5>
                            <ul>
                            As a Software Engineer at Cummings Aerospace, I develop C++ software for embedded systems within a Linux-based environment, supporting mission-critical applications for the Department of Defense (DoD). My work emphasizes cross-platform compatibility and low-level system performance, including the implementation of architecture-aware serialization to enable accurate data exchange between systems with differing endianness and memory layouts. I routinely use Linux terminal tools and scripting to automate builds, streamline testing, and manage complex file operations. From a Windows workstation, I interact with remote Linux environments using tools like Exceed TurboX, PuTTY, and WinSCP for code deployment, debugging, and secure file transfers. I also contribute to the development pipeline using Jenkins for continuous integration, and apply Coverity for static analysis to maintain secure, high-quality code. As part of an Agile Scrum team, I participate in daily standups, sprint reviews, and cross-team collaboration with system architects to align development with overall project goals.
                            </ul>
                        </label>
                        <label htmlFor='IPS'>
                            <h5>Innovative Professional Solutions | Panama City, FL | May 2023 - February 2025 </h5>
                            <ul>
                            At Innovative Professional Solutions, I served as a Software Developer supporting DoD initiatives by developing a robust Java desktop application using Swing, Hibernate, PostgreSQL, and Apache CXF. I designed and implemented both RESTful and SOAP web services to facilitate integration with external systems, handling complex data formats such as JSON and XML. Through effective use of Hibernate ORM, I optimized database interactions and ensured efficient persistence operations. I managed project tasks using Jira in a Scrum-based Agile workflow, contributing to sprint planning, daily standups, and code reviews. My efforts in maintaining code quality included writing thorough unit tests with JUnit and configuring Maven for reliable dependency management and build automation, ultimately accelerating development cycles and improving long-term maintainability.
                            </ul>
                        </label>
                        <label htmlFor='VE'>
                            <h5>Verifone | Clearwater, FL | August 2022 – May 2023</h5>
                            <ul>
                            As a Student Developer at Verifone, I worked on the development of a web application built with Angular and Spring Boot to manage employer-configurable loyalty programs. I implemented responsive user interfaces using HTML, CSS, and an in-house UI toolkit, ensuring a seamless user experience. On the backend, I collaborated closely with engineers to integrate RESTful APIs, enabling accurate and consistent data display from a MongoDB database. This full-stack collaboration enhanced my ability to bridge frontend design with backend logic and contributed to the overall reliability and functionality of the platform.
                            </ul>
                        </label>
                    </div>
                </div>
                <div className="section-container">
                    <h4>Education</h4>
                    <div className="left-padding">

                        <label htmlFor='school' >
                            <h5>University of Florida | Gainesville, FL | January 2020 - May 2023</h5>
                            <ul className='school'>Bachelor of Science in Computer Science</ul>
                            <ul className='school'>Cumulative GPA: 3.65</ul>
                            <ul className="school">Graduation Date: 05/2023 </ul>
                        </label>
                        
                        <label htmlFor='school' >
                            <h5>Gulf Coast State College | Panama City, FL | August 2019 - December 2020</h5>
                            <ul className='school'>Associate of Arts in Liberal Arts</ul>
                            <ul className='school'>Cumulative GPA: 3.70</ul>
                            <ul className="school">Graduation Date: 12/2020 </ul>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
