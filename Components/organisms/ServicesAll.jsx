import React from 'react';
import ServicesMoli from '../moleculus/ServicesMoli';
import AnchorTag from '../atoms/AnchorTag';
import Headermain from './Headermain';
import Heading from '../atoms/Heading';
import { MdArrowOutward } from 'react-icons/md';
import Paragraph from '../atoms/Paragraph';
import Container from '../atoms/Container';
import Servicebanner from '../moleculus/Servicebanner';

function ServicesAll() {
  return (
    <div>
      <div><Headermain /></div>
      <Servicebanner />
      <div className='text-center py-[50px] flex flex-col gap-[10px]'>
        <Heading level='2'>Service overview</Heading>
        <Paragraph variant='homepara'>There are five main types of plumbing pipe materials that are still in use today <br /> copper galvanized steel.</Paragraph>
      </div>
      <Container>
        <div className='items-center justify-center  gap-[20px] xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 grid grid-cols-1'>
          <AnchorTag href='/painting'>
            <ServicesMoli src='/assits/images/paint.jpg' headeing='Paint Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
          <AnchorTag href='/bathroom'>
            <ServicesMoli src='/assits/images/plumber/bath.jpg' headeing='Bathroom Renovation' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
          <AnchorTag href='/celling'>
            <ServicesMoli src='/assits/images/plumber/celling.jpg' headeing='Celling' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
          <AnchorTag href='/acservice'>
            <ServicesMoli src='/assits/images/plumber/acclean.jpg' headeing='AC Deep Cleaning' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
          <AnchorTag href='celling'>
            <ServicesMoli src='/assits/images/plumber/partition.jpg' headeing='Gypsum Partition' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
          <AnchorTag href='/plumbing'>
            <ServicesMoli src='/assits/images/plumber/plumber.png' headeing='Plumbing Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
          <AnchorTag href='/tileservice'>
            <ServicesMoli src='/assits/images/plumber/taile.jpg' headeing='Tile Fixing' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
          <AnchorTag href='/kitchen'>
            <ServicesMoli src='/assits/images/plumber/kiten.jpg' headeing='Kitchen Renovation' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
          <AnchorTag href='/glass'>
            <ServicesMoli src='/assits/images/plumber/glass.jpg' headeing='Glass Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
          <AnchorTag href='/electricservice'>
            <ServicesMoli src='/assits/images/plumber/ele.jpg' headeing='Electrical Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
          </AnchorTag>
        </div>
      </Container>

    </div>
  );
}

export default ServicesAll;
