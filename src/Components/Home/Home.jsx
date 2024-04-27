import React from 'react';
import './home.css';

const Home = () => {
   
    return (
        <div className='container'>
            <div className="home">
                <div className="row">
                    <div className="col-6">
                        <div className="images animate__animated animate__zoomInDown">
                            <div className="blue-bg-outer">
                                <div className="white-bg">
                                    <div className="blue-bg">
                                        <img className='img' src="/profile-img.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 home-2">
                        <div className="home-text text-center">
                            <h4 className="welcome-msg mb-3 animate__animated  animate__bounceInDown">hello&nbsp;&&&nbsp; Welcome..!!!</h4>
                            <h1 className="name mb-4 animate__animated animate__fadeInUp"><span className="prefix">I'm </span>Arunpandian</h1>
                            <h3 className="designation mb-5 animate__animated animate__zoomInDown">mern stack developer</h3>
                        </div>
                        <div className="row h-btn">
                            <div className="col-6 button-1">
                                <button className="cssbuttons-io-button animate__animated  animate__bounceInUp">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" fill="currentColor"></path>
                                    </svg>
                                    <span><a href="/Resume.pdf" download="Resume.pdf">Download CV</a></span>
                                </button>
                            </div>
                            <div className="col-6  button-2">
                                <button className="cssbuttons-io-button animate__animated  animate__bounceInUp">
                                    <i className="fa-solid fa-at" fill="white"></i> &nbsp; &nbsp;
                                    <a href="mailto:arunpandianda123@gmail.com" target="_blank">Hire Me</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;