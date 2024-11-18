import PropTypes from 'prop-types';

const Logo = ({ src, alt, href }) => {
  return (
    <div className="relative">
      {LogoData.map((item) => {
        return (
          <a className="w-[100px] block relative" key={item.href} href={item.href}>
            <img
              src={item.src}
              alt={item.alt}
              style={{ filter: 'invert(1)' }} // Apply white effect if logo is black
              className="w-full logo-image" // Adds custom class for image
            />
            <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-white font-bold text-[12px]">
              {item.text}  {/* Replace item.alt with item.text for your custom text */}
            </div>
          </a>
        );
      })}
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};

const LogoData = [
  {
    href: '/',
    src: '/assits/logop.png',  // Your logo image path
    alt: 'logo',  // This is the alt attribute for the image
  }
];

export default Logo;
