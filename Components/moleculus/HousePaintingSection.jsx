import React from "react";
import Container from "../atoms/Container";

const items = [
  {
    id: 1,
    image:
      "https://dubaipaintingservices.ae/wp-content/uploads/2024/07/experience.png",
    title: "Interior Painting",
    content:
      "Our painters will transform your living spaces with our clean and precise lines, smooth painting finishes and colors of your choice.",
  },
  {
    id: 2,
    image:
      "https://dubaipaintingservices.ae/wp-content/uploads/2024/08/efficiency.png",
    title: "Exterior Painting",
    content:
      "Create a perfect look for your home and ensure it is fully protected from the harsh weather conditions by painting it.",
  },
  {
    id: 3,
    image:
      "https://dubaipaintingservices.ae/wp-content/uploads/2024/08/efficiency.png",
    title: "Stain and Varnish",
    content:
      "Bring out the natural grain of your wooden furniture and fixtures through our staining and varnishing solutions.",
  },
  {
    id: 4,
    image:
      "https://dubaipaintingservices.ae/wp-content/uploads/2024/08/business.png",
    title: "Wallpaper Installation and Removal",
    content:
      "Our professional wallpaper services will complete the look with a touch of sophistication.",
  },
  {
    id: 5,
    image:
      "https://dubaipaintingservices.ae/wp-content/uploads/2024/08/property.png",
    title: "Stain and Varnish",
    content:
      "Bring out the natural grain of your wooden furniture and fixtures through our staining and varnishing solutions.",
  },
  {
    id: 6,
    image:
      "https://dubaipaintingservices.ae/wp-content/uploads/2024/08/property.png",
    title: "Color Consultation",
    content:
      "Stumped on which colors to pick? Let our color specialists assist you in selecting the right color for your home.",
  },
];

const HousePaintingSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-[20px] my-[50px] text-center xl:ml-[200px] xl:w-[60%] lg:ml-[0px] sm:w-[100%] ml-[0px] w-[100%] ">
        <h2 className="text-[#091736] text-[30px] font-[700] text-center">
          Our Services House Painting Services
        </h2>
        <p className="text-[#8b8a8a] text-[18px] font-[400] text-center ">
          At Dubai Painting Services, we offer a comprehensive range of house
          painting services designed to meet your specific needs:
        </p>
      </div>
      <div className="gap-[10px] text-[#3787c3] xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1 ">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center flex-col px-[20px] py-[50px] text-center cursor-pointer border-black group transition-all duration-300 hover:bg-[#1357A6] hover:text-white hover:translate-y-[-5px]"
          >
            <img className="" src={item.image} alt="image" />
            <h2 className="text-[#091736] text-[28px] font-[700] group-hover:text-white">
              {item.title}
            </h2>
            <p className="text-[#8b8a8a] text-[16px] font-[400] group-hover:text-white">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HousePaintingSection;
