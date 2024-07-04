import React from "react";

const Product = () => {
  return (
    <div>
      <div className="item text-center border-4 border-violet-600 ">
        <div className="item_head h-32 bg-gray-300 flex items-center justify-center">
          <p className="">500 x 325</p>
        </div>
        <div className="item_content">
          <h3 className="text-2xl font-medium my-5">Card title</h3>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            molestiae?
          </span>
        </div>
        <div className="item_bottom bg-gray-100 py-5 mt-4">
          <button className="bg-blue-500 rounded-md px-5 py-2 text-white">
            Find Out More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
