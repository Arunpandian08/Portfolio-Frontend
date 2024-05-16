import React from 'react';
import './footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <footer className='footer'>
            <div className="background">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMax slice">
                    <defs>
                        <linearGradient id="bg">
                            <stop offset="0%" style={{ stopColor: 'rgba(130, 158, 249, 0.06)' }}></stop>
                            <stop offset="50%" style={{ stopColor: 'rgba(76, 190, 255, 0.6)' }}></stop>
                            <stop offset="100%" style={{ stopColor: 'rgba(115, 209, 72, 0.2)' }}></stop>
                        </linearGradient>
                        <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                    s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                    </defs>
                    <g>
                        <use xlinkHref="#wave" opacity=".3">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="10s"
                                calcMode="spline"
                                values="270 230; -334 180; 270 230"
                                keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use xlinkHref="#wave" opacity=".6">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="8s"
                                calcMode="spline"
                                values="-270 230;243 220;-270 230"
                                keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use xlinkHref="#wave" opacity=".9">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="6s"
                                calcMode="spline"
                                values="0 230;-140 200;0 230"
                                keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                    </g>
                </svg>
            </div>
            <section className="footer-content">
                <ul className="socials">
                    <li><a className="fa-brands fa-github" href='https://github.com/Arunpandian08' target="_blank"></a></li>
                    <li><a className="fa-regular fa-envelope" href='mailto:arunpandianda123@gmail.com' target="_blank"></a></li>
                    <li><a className="fa-brands fa-linkedin" href='https://www.linkedin.com/in/d-arunpandian/' target="_blank" ></a></li>
                </ul>
                <ul className="links">
                    <li ><Link to='home'>Home</Link></li>
                    <li ><Link to='about'>About</Link></li>
                    <li ><Link to='skills'>Skills</Link></li>
                    <li ><Link to='projects'>Projects</Link></li>
                    <li ><Link to='resume'>Resume</Link></li>
                    <li ><Link to='contact'>Contact</Link></li>
                </ul>
                <p className="legal">© {currentYear} All rights reserved</p>
                <div className="position-relative mt-2">
                    <div className="position-absolute top-50 end-0 translate-middle-y">
                        <button className="Btn" onClick={handleScroll}>
                            <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                            <p className="text">Back to Top</p>
                        </button>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
