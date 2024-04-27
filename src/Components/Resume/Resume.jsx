import React from 'react';
import './resume.css';

const Resume = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className='container'>
            <div className="resume">
                <div className="container row">
                    <div className="text-container mb-5">
                        <h4 className="main-text animate__animated animate__rotateInDownLeft text-center">Resume</h4>
                        <div className="position-relative" style={{ marginLeft: "8rem" }}>
                            <div className="position-absolute top-50 end-0 translate-middle-y">
                                <button className="Btn" onClick={handleScroll}>
                                    <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                                    <p className="text">Back to Top</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card h-100" style={{borderRadius:"36px"}}>
                    <div className="card-body skills-card">
                        <div className="row contents m-1">
                            <div className="col-6 card-col" style={{padding: "3rem 0 0 3rem" }}>
                                <h4 className="course-1 text-center">Full Stack Developement</h4>
                            </div>
                            <div className="col-6 c-data" style={{ paddingTop: "1rem" }}>
                                <h4 className='industry '>Guvi</h4>
                                <h5 className="city ">Chennai</h5>
                                <h6 className="date">Dec-2023 to Feb-2024</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="card h-100" style={{borderRadius:"36px"}}>
                    <div className="card-body skill-card" >
                        <div className="row contents m-1">
                            <div className="col-6 card-col" style={{padding: "3rem 0 0 3rem"}}>
                                <h4 className="course-2 text-center">M.Sc ( MATHEMATICS )</h4>
                            </div>
                            <div className="col-6 c-data" style={{ paddingTop: "1rem" }}>
                                <h4 className='industry'>Chikkanna Govt.Arts College</h4>
                                <h5 className="city">Tirupur</h5>
                                <h6 className="date">Aug-2021</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="card h-100" style={{borderRadius:"36px"}}>
                    <div className="card-body skill-card">
                        <div className="row contents m-1">
                            <div className="col-6 card-col" style={{padding: "2.5rem 0 1rem 2rem" }}>
                                <h4 className="course-3 text-center">B.Sc ( MATHEMATICS WITH COMPUTER APPLICATION )</h4>
                            </div>
                            <div className="col-6 c-data" style={{paddingTop: "1rem"}}>
                                <h4 className='industry'>Park's College of Arts and Science</h4>
                                <h5 className="city">Tirupur</h5>
                                <h6 className="date">Aug-2019</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="card h-100" style={{borderRadius:"36px"}}>
                    <div className="card-body skill-card">
                        <div className="row contents m-1">
                            <div className="col-6 card-col" style={{padding: "3rem 0 0 3rem" }}>
                                <h4 className="course-4 text-center">HSC</h4>
                            </div>
                            <div className="col-6 c-data" style={{ paddingTop: "1rem" }}>
                                <h4 className='industry'>Nanjappa Municipal Boys Higher Secondary School</h4>
                                <h5 className="city">Tirupur</h5>
                                <h6 className="date">Aug-2014</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="card h-100" style={{borderRadius:"36px"}}>
                    <div className="card-body skill-card">
                        <div className="row contents m-1">
                            <div className="col-6 card-col" style={{padding: "3rem 0 0 3rem" }}>
                                <h4 className="course-5 text-center">SSLC</h4>
                            </div>
                            <div className="col-6 c-data" style={{ paddingTop: "1rem" }}>
                                <h4 className='industry'>St.Aloysius Boys Higher Secondary School</h4>
                                <h5 className="city">Theni</h5>
                                <h6 className="date">Aug-2012</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;