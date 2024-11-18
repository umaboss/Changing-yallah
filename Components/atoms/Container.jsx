import React from "react";

function Container({ children }) {
  return (
    <div className="container_main mx-auto px-[30px] max-w-[1200px]">
      {children}
    </div>
  );
}

export default Container;
