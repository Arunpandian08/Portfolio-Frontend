import React from 'react';
import './about.css';

const About = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className='container about-style'>
            <div className="about">
                <div className="row">
                    <div className="text-container">
                        <h4 className="main-text text-center">About Me</h4>
                        <div className="position-relative" style={{ marginLeft: "8rem" }}>
                            <div className="position-absolute top-50 end-0 translate-middle-y">
                                <button className="Btn" onClick={handleScroll}>
                                    <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                                    <p className="text">Back to Top</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className='abt-img' src="/one.svg" alt="logo.svg" />
                        <p className="main-para">I am passionate about embarking on a career as a <strong>MERN Stack
                            Developer.</strong> While I may be new to the industry, I bring a strong foundation
                            in programming fundamentals and a deep enthusiasm for learning and
                            growing in the field of web development.
                        </p>
                        <p className="main-para">Driven MERN Stack Developer with a solid grasp of programming basics
                            and a fervent commitment to mastering web technologies. Eager to
                            contribute a quick-learning attitude and adaptability to your dynamic team,
                            while growing expertise in React.js, Node.js, and MongoDB through hands￾on projects and collaboration
                        </p>
                    </div>
                    <div className="col-6 mt-5">
                        <h4 className="title">Technical Skills</h4>
                        <p className="main-para"><strong>Frontend Development:</strong> Proficient in HTML, CSS, and JavaScript, with a
                            keen interest in mastering React.js for building dynamic and interactive
                            user interfaces
                        </p>
                        <p className="main-para"><strong>Backend Development:</strong> Basic understanding of Node.js and Express.js,
                            eager to delve deeper into backend development to build robust server￾side applications and RESTful
                            APIs.
                        </p>
                        <p className="main-para"><strong>Database Management:</strong> Familiarity with NoSQL databases such as
                            MongoDB, excited to learn more about database modeling, querying, and
                            management.
                        </p>

                        <h4 className="title">Personal Traits</h4>
                        <ul>
                            <li className="main-para"><strong>Quick Learner:</strong> I have a strong desire to learn and grow in the field of
                                web development and am committed to continuously expanding my
                                skillset.
                            </li>
                            <li className="main-para"><strong>Adaptable:</strong> I thrive in fast-paced environments and am able to adapt to
                                new technologies and challenges with ease.

                            </li>
                            <li className="main-para"><strong>Team Player:</strong> I possess excellent communication skills and work well in
                                collaborative team environments, contributing positively to project goals
                                and objectives.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;