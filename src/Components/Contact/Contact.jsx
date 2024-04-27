import React, { useState } from 'react';
import axios from 'axios';
import { toast, Zoom } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import sound from '/level-up-191997.mp3';
import SoundErr from '/livechat-129007.mp3';
import './contact.css';

const Contact = () => {

    const successNotificationSound = () => {
        const audio = new Audio(sound);
        audio.play();
    };

    const errorNotificationSound = () => {
        const audio = new Audio(SoundErr);
        audio.play();
    };

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://portfolio-backend-vgxb.onrender.com/api/send-email', formData);
            console.log(response.data);
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                onOpen: successNotificationSound,
                transition: Zoom,
            });
            // Scroll to the top after success
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setFormData({
                name: '',
                email: '',
                company: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                onOpen: errorNotificationSound,
                transition: Zoom,
            });
        } finally {
            setLoading(false); // Set loading back to false after form submission (whether success or failure)
        }
    }

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className='container mt-5'>
            <ToastContainer position="bottom-right" />
            <div className="contact">
                <div className="container row">
                    <div className="text-container mb-5">
                        <h4 className="main-text animate__animated animate__rotateInDownLeft text-center">Contact</h4>
                        <div className="position-relative" style={{ marginLeft: "8rem" }}>
                            <div className="position-absolute top-50 end-0 translate-middle-y">
                                <button className="Btn" onClick={handleScroll}>
                                    <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                                    <p className="text">Back to Top</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 address-area text-center">
                        <img className='contact-img' src="/contact-image.png" alt="img" />
                        <div className="address">
                            <i className="fa-solid fa-location-dot fa-3x"></i>
                            <address>
                                56, Angalamman Nagar, <br /> Vijayapuram, <br /> Tirupur-641 606. <br /> Tamilnadu, India.
                            </address>
                        </div>
                        <div className="social text-center">
                            <ul className="wrapper">
                                <li className="icon facebook">
                                    <span className="tooltip">Github</span>
                                    <a href="https://github.com/Arunpandian08" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="40" viewBox="0 0 32 32">
                                            <path fillRule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="icon facebook mail">
                                    <span className="tooltip">Email</span>
                                    <a href="mailto:arunpandianda123@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <img width="32" height="32" src="https://img.icons8.com/windows/32/filled-message.png" alt="filled-message" />
                                    </a>
                                </li>
                                <li className="icon twitter">
                                    <span className="tooltip">LinkedIn</span>
                                    <a href="https://www.linkedin.com/in/d-arunpandian/" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="30" viewBox="0 0 50 50">
                                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="icon instagram">
                                    <span className="tooltip">Instagram</span>
                                    <a href="https://www.instagram.com/_arun_08_03/?hl=en" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1.2em"
                                            fill="black"
                                            className="bi bi-instagram"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="c-card">
                            <form className="row form g-3" onSubmit={handleSubmit}>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Please Enter Your Name" value={formData.name} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="example@gmai.com" value={formData.email} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="company" className="form-label">Company</label>
                                    <input type="text" className="form-control" id="company" name="company" placeholder="Name Of Your Company" value={formData.company} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-2 btn-primary" type="submit" disabled={loading}>
                                        {loading ? <div className="m-loader"></div> : 'send Mail'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;