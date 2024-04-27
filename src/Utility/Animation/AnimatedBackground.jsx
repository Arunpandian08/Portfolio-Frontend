import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './animation.css';

const AnimatedBackground = () => {
    const animationRef = useRef(null);

    useEffect(() => {
        const animateParticles = () => {
            animationRef.current = gsap.to('.particle', {
                opacity: 0,
                y: -100,
                duration: 10000,
                ease: 'power1.inOut',
                stagger: 0.1,
            });
        };

        // Start the animation initially
        animateParticles();

        // Restart the animation at regular intervals (every hour)
        const intervalId = setInterval(() => {
            animateParticles(); // Restart animation
        }, 3600000); // 3600000 milliseconds = 1 hour

        // Cleanup function to cancel animation interval on unmount
        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
            clearInterval(intervalId); // Clear the interval
        };
    }, []);



    return (
        <div className='background-animation'>
            <svg version='1.1' xmlns='http://www.w3.org/2000/svg'>
                <defs>
                    <filter id='goo'>
                        <fegaussianblur in='SourceGraphic' result='blur' stdDeviation='10'></fegaussianblur>
                        <fecolormatrix in='blur' mode='matrix' result='goo' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'></fecolormatrix>
                        <feblend in2='goo' in='SourceGraphic'></feblend>
                    </filter>
                </defs>
            </svg>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
            <span className='particle'></span>
        </div>
    );
};

export default AnimatedBackground;