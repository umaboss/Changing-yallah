import React, { useEffect } from 'react';
import AboutImage from '../moleculus/AboutImage';
import AboutText from '../moleculus/AboutText';
import Container from '../atoms/Container';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

function AboutBan2() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS with custom settings
    }, []);

    return (
        <Container>
            <div className='grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 items-center justify-evenly my-[70px]'>
                {/* AboutImage with animation from the left */}
                <div data-aos="fade-right">
                    <AboutImage />
                </div>

                {/* AboutText with animation from the right */}
                <div data-aos="fade-left">
                    <AboutText />
                </div>
            </div>
        </Container>
    );
}

export default AboutBan2;
