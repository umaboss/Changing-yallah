import React from 'react';
import PlumberClient from '../moleculus/PlumberClient';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../atoms/Container';

const Customers = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Container>
            <div className="  flex flex-col gap-[30px] my-[30px] ">
            <h3 data-aos="fade-in" className='text-center text-gray-800 font-semibold text-[34px] ' >Our trusted Clients</h3>
            <Slider className='  ' {...settings}>
                <div data-aos="zoom-in-up" data-aos-duration="1000" >
                    <PlumberClient name='John Doe' msg="I had a great experience with PlumeCare. Their tear
                    arived on time and did an excellent job repairing my
                    leaky faucet. They were professional, and completed
                    the job quickly."
                        src="/assits/images/client1.jpeg"
                    />
                </div>
                <div>
                    <PlumberClient name='bruce max' msg="I had a great experience with PlumeCare. Their tear
                    arived on time and did an excellent job repairing my
                    leaky faucet. They were professional, and completed
                    the job quickly."
                        src="/assits/images/client2.jpeg"
                    />
                </div>
                <div>
                    <PlumberClient name='Alin' msg="I had a great experience with PlumeCare. Their tear
                    arived on time and did an excellent job repairing my
                    leaky faucet. They were professional, and completed
                    the job quickly."
                        src="/assits/images/client3.jpeg"
                    />
                </div>
                <div>

                    <PlumberClient name='Maria Jalil' msg="I had a great experience with PlumeCare. Their tear
                    arived on time and did an excellent job repairing my
                    leaky faucet. They were professional, and completed
                    the job quickly."
                        src="/assits/images/client4.jpeg"
                    />
                </div>
            </Slider>
        </div>
        </Container>
    );
};

export default Customers;
