import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Paragraph from '../atoms/Paragraph';
import Link from 'next/link';

function PlumberContact() {
  return (
    <div>
      <Container>
        <div className='flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col w-[100%]  justify-between '>
          <div data-aos="fade-in-right" className=' flex flex-col xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%] gap-[20px] '>
            <img className='xl:w-[600px] lg:w-[600px] md:w-[100%] sm:w-[100%] w-[100%px] rounded-[10px] ' src="/assits/images/contact.jpg" alt="" />
            <div className=' '>
              <Heading level='3'>Need to connect with a specific office?</Heading>
              <div className=''>
                <Paragraph variant='contact'>Have questions or need assistance? Feel free to reach out to us! Use the form below or the provided contact details to get in touch. Our team is here to help and will respond as quickly as possible. We look forward to connecting with you!</Paragraph>
              </div>
            </div>
          </div>

          <div className='xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%]  '>
            <form>
              <div className='flex gap-[30px]'>
                <div data-aos='fade-up' data-aos-duration="500" className="pt-[15px] w-[50%]">
                  <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                    <Label> Name</Label>
                  </div>
                  <Input variant='five' placeholder="Name" type="text" />
                </div>
                <div data-aos='fade-up' data-aos-duration="700" className="pt-[15px] w-[50%]">
                  <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                    <Label> Company</Label>
                  </div>
                  <Input variant='five' placeholder="company" type="text" />
                </div>
              </div>
              <div className='flex gap-[30px]'>
                <div data-aos='fade-up' data-aos-duration="1000" className="pt-[15px] w-[50%]">
                  <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                    <Label> Phone</Label>
                  </div>
                  <Input variant='five' placeholder="Phone" type="number" />
                </div>

                <div data-aos='fade-up' data-aos-duration="1400" className="pt-[20px] w-[50%]">
                  <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                    <Label>Your Email </Label>
                  </div>
                  <Input variant="five" type="email" placeholder="Email" />
                </div>
              </div>

              <div data-aos='fade-up' data-aos-duration="1700" className="pt-[20px] w-full">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label>Subject</Label>
                </div>
                <Input variant="five" type="text" placeholder="Subject" />
              </div>

              <div data-aos='fade-up' data-aos-duration="2000" className="pt-[20px] w-full">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label>Message</Label>
                </div>
                <textarea className='w-full h-[100px] outline-none border border-[#cacaca] text-[15px] text-[#302e2e] p-[15px]' placeholder="Message" />
              </div>

              <div className="hover-fill-from-bottom mt-[10px] leading-[30px] py-[11px] flex justify-center items-center xl:w-[40%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="#" className="flex items-center leading-[30px] text-[18px] font-[600]">
              Send Massage
            </Link>
          </div>
            </form>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default PlumberContact;
