import React from "react";
import Banner from "./Banner";
import Product from "./Product";

const Body = () => {
  const item = Array(4).fill(null);
  return (
    <div>
      <div className="container mx-auto">
        <Banner />
        <div className="grid grid-cols-4 gap-x-3">
          {item.map((_, index) => {
            return <Product key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
