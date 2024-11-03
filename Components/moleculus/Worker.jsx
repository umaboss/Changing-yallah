import React from 'react'
import ImageBox from './ImageBox';
import Container from '../atoms/Container';

const Worker = () => {
    return (<
        Container >
        <
        div className='mx-[30px] gap-[30px] 2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1' >
            <
                ImageBox src='/assits/images/about1.png'
                text1="Umair Shah"
                text2="(756) 447 5779"
                text3="info@example.com"
                text4="Teacher" /
            >
            <
                ImageBox src='/assits/images/about1.png'
                text1="Umair Shah"
                text2="(756) 447 5779"
                text3="info@example.com"
                text4="Teacher" /
            >
            <
                ImageBox src='/assits/images/about1.png'
                text1="Umair Shah"
                text2="(756) 447 5779"
                text3="info@example.com"
                text4="Teacher" /
            >
            <
                ImageBox src='/assits/images/about1.png'
                text1="Umair Shah"
                text2="(756) 447 5779"
                text3="info@example.com"
                text4="Teacher" /
            >

            <
        /div> <
        /Container>
            );
};

            export default Worker;