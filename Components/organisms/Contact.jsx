import React from 'react';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Map from '../moleculus/Map';
import Link from 'next/link';
function Contact() {
  return (
    <div>
      <Container>

        <div className='flex gap-[30px]'>
          <div className=' w-[50%]'>
            <img className='w-[100%]' src="/assits/images/contact.jpg" alt="" />
            <div className='pt-[30px]'>
              <Heading level='3'>Need to connect with a specific office?</Heading>
              <div className=''>
                <Paragraph variant='contact'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut expedita, officia quibusdam voluptatibus blanditiis laudantium. Asperiores id, aliquam est praesentium, vel molestias esse itaque quae error magni temporibus, soluta provident?</Paragraph>
              </div>
            </div>
          </div>

          <div className='w-[50%] '>
            <form>
              <div className='flex gap-[30px]'>
                <div className="pt-[15px] w-[50%]">
                  <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                    <Label> Name</Label>
                  </div>
                  <Input variant='five' placeholder="Name" type="text" />
                </div>
                <div className="pt-[15px] w-[50%]">
                  <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                    <Label> Company</Label>
                  </div>
                  <Input variant='five' placeholder="company" type="text" />
                </div>
              </div>
              <div className='flex gap-[30px]'>
                <div className="pt-[15px] w-[50%]">
                  <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                    <Label> Phone</Label>
                  </div>
                  <Input variant='five' placeholder="Phone" type="number" />
                </div>

                <div className="pt-[20px] w-[50%]">
                  <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                    <Label>Your Email </Label>
                  </div>
                  <Input variant="five" type="email" placeholder="Email" />
                </div>
              </div>

              <div className="pt-[20px] w-full">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label>Subject</Label>
                </div>
                <Input variant="five" type="text" placeholder="Subject" />
              </div>

              <div className="pt-[20px] w-full">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label>Message</Label>
                </div>
                <textarea className='w-full h-[100px] outline-none border border-[#cacaca] text-[15px] text-[#302e2e] p-[15px]' placeholder="Message" />
              </div>

              <Link href="#" className="hover-fill-from-bottom cursor-pointer bg-white leading-[30px] py-[11px] flex justify-center items-center xl:w-[30%] lg:w-[30%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="#" className="flex items-center leading-[30px] text-[18px] font-[600]">
             Send Message
            </Link>
          </Link>
            </form>
          </div>

        </div>
      <Map />
      </Container>
    </div>
  );
}

export default Contact;
