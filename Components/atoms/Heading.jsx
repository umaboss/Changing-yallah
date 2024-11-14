import PropTypes from "prop-types";
  const Heading = ({ level, children, className }) => {
  const HeadingTag = `h${level}`;
  const getHeadingStyles = (level) => {
    switch (level) {
      case "1":
        return `xl:text-[60px] md:text-[50px] sm:text-[40px] text-[35px] text-white xl:font-[700] lg:font-[700] md:font-[700] sm:font-[600] font-[600] xl:leading-[70px] lg:leading-[60px] md:leading-[60px] sm:leading-[50px] leading-[40px] tracking-[-2px] ${className}`;
      case "2":
        return ` xl:text-[42px] lg:text-[34px] md:text-[36px] sm:text-[26px] xl:leading-[70px] lg:leading-[50px] md:leading-[60px] sm:leading-[40px] leading-[30px] text-[23px] text-[#091736] tracking-[-2px] leading-[1.1em] xl:font-[800] lg:font-[800] md:font-[700] sm:font-[600] font-[600] ${className}`;
      case "3":
        return `text-[24px]  text-[#091736] font-[700] leading-[1em]  ${className}`;
      case "4":
        return `text-white xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[19px] text-[12px]  font-[500] leading-[1.3em] ${className}`;
      case "5":
        return `text-[40px] text-[#091736] font- normal ${className}`;
      case "6":
        return `text-[14px] font-[600] leading-[1.5em] tracking-[2px] ${className}`;
      case "7":
        return ` text-[#091736] font-[700] leading-[1em]  ${className}`;
      case "8":
        return `text-[28px] text-[#091736] font-[700] leading-[1em] tracking-[1px] ${className}`;

      default:
        return "text-lg";
    }
  };
  const headingStyle = getHeadingStyles(level);
  return <HeadingTag className={headingStyle}>{children}</HeadingTag>;
};
Heading.PropTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
};
export default Heading;
