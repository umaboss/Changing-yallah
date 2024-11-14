import React from 'react';

const ServicePro = ({ type, title, disc, src }) => {
  return (
    <div
      data-aos={type}
      className="group w-[30%] hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2 py-6 px-5 rounded-xl flex flex-col gap-4 bg-white border border-gray-200 hover:border-transparent hover:bg-gradient-to-br from-[#1357A6] to-[#1357A6] cursor-pointer shadow-sm"
    >
      <div className="overflow-hidden rounded-lg">
        <img src={src} className="rounded-lg hover:scale-105 transform transition duration-300 ease-in-out" alt="images" />
      </div>
      <h3 className="text-lg font-bold capitalize text-[#1357A6] group-hover:text-white">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed capitalize group-hover:text-white">{disc}</p>
    </div>
  );
};

export default ServicePro;
