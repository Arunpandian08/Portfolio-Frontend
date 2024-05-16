import React from 'react';
import { data } from '../../Utility/Data/data';
import './project.css';

const Projects = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className='container mt-5'>
            <div className="project">
                <div className="text-container mb-5">
                    <h4 className="main-text animate__animated animate__rotateInDownLeft text-center">Projects</h4>
                    <div className="position-relative" style={{ marginLeft: "8rem" }}>
                        <div className="position-absolute top-50 end-0 translate-middle-y">
                            <button className="Btn" onClick={handleScroll}>
                                <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                                <p className="text">Back to Top</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row cards_row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center mt-5">
                    {data.map((item, index) => {
                        return (
                            <div className="col g-5 d-flex justify-content-center align-content-center" key={index}>
                                <div className="project_card card h-100 ">
                                    <img className='project-img' src={item.image} alt="app-img" />
                                    <div className="cards-body">
                                        <h4 className="card-header">
                                            {item.title}
                                        </h4>
                                        <ul>
                                            <li>{item.points[0]}</li>
                                            <li>{item.points[1]}</li>
                                            <li>{item.points[2]}</li>
                                            <li>{item.points[3]}</li>
                                            <li>{item.points[4]}</li>
                                            <li>{item.points[5]}</li>
                                        </ul>
                                        <div className="row btn-row text-center mb-3">
                                            <div className="col-6">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-2 text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Source Code
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href={item.frontend} target="_blank">Frontend Code</a></li>
                                                        <li><a className="dropdown-item" href={item.backend} target="_blank" >Backend Code</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <a href={item.demo} target="_blank" rel="noopener noreferrer"><button type='button' className="custom-btn btn btn-2">Demo</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;