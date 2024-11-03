import React from "react";

const PaintProcessPortion = () => {
  const Process = [
    {
      id: 1,
      title: "1. Initial Consultation",
      content:
        "We start with a thorough consultation to understand your needs and preferences.",
    },
    {
      id: 2,
      title: "2. Detailed Quotation",
      content:
        "You will receive a detailed and transparent quotation outlining the costs involved.",
    },
    {
      id: 3,
      title: "3. Preparation",
      content:
        "Our team will prepare the area, including covering furniture and floors to protect them from paint splatters.",
    },
    {
      id: 4,
      title: "4. Painting",
      content:
        "Using the best techniques and tools, we apply the paint with precision and care.",
    },
    {
      id: 5,
      title: "5. Cleanup",
      content:
        "After completing the painting, we ensure your home is left clean and tidy.",
    },
    {
      id: 6,
      title: "6. Final Inspection",
      content:
        "We conduct a final inspection with you to ensure you are completely satisfied with our work.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[20px] my-[100px] xl:ml-[200px] xl:w-[60%]  lg:ml-[0px]  sm:w-[100%]  ml-[0px] w-[100%] text-center">
        <h2 className="text-[#091736] text-[30px] font-[700] text-center">
          Our Process
        </h2>
        <p className="text-[#61657e] text-[15px] font-[400]  ">
          When you choose our house painting services in Dubai, you can expect a
          seamless and hassle-free experience:
        </p>
      </div>
      <div className=" gap-[20px] my-[50px] xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1">
        {Process.map((item) => (
          <div key={item.id} className="bg-[#F4F6FF] rounded-[20px] p-[15px] h-[100px]">
            <h2 className="text-[20px] font-[600] text-[#3787c3]">{item.title}</h2>
            <p className="text-[#61657e] text-[16px]  font-[400]">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaintProcessPortion;
