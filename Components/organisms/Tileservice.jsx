import React from 'react';
import TileBanner from '../moleculus/TileBanner';
import Tile1stban from '../moleculus/Tile1stban';
import Tile2ndban from '../moleculus/Tile2ndban';
import Footer from './Footer';
import Tailimg from '../atoms/Tailimg';
import Tailimages from '../moleculus/Tailimages';
import TailHeading from '../moleculus/TailHeading';
import Tailprocess from '../moleculus/Tailprocess';
import TailHeading2 from '../moleculus/TailHeading2';

function Tileservice() {
  return (
   <div>
    <TileBanner/>
    <Tile1stban/>
    <Tile2ndban/>
    <TailHeading/>
    <Tailimages/>
    <TailHeading2/>
    <Tailprocess/>

    <Footer/>
   </div>
  );
}

export default Tileservice;
