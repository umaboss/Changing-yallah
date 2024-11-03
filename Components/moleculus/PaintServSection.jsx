import React from "react";
import Container from "../atoms/Container";

const PaintServSection = () => {
  return (
    <div className="bg-[#F4F6FF] w-full text-center py-[50px] my-[150px] ">
      <Container>
        <h2 className="text-[#3787c3] text-[32px] font-[700] mb-[20px]">Areas We Serve</h2>
        <p className="text-[#61657e] text-[16px] font-[400]">
          Dubai Painting Services proudly serves all areas in Dubai and across
          the UAE. Whether you are located in the bustling heart of Dubai or in
          the serene suburbs, our team is ready to bring your home painting
          vision to life.
        </p>
      </Container>
    </div>
  );
};

export default PaintServSection;
