import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto bg-gray-200 border-blue-800 border-4 px-10 py-20 my-2">
        <h1 className="text-6xl font-thin">A Warm Welcome!</h1>
        <p className="text-gray-400 my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          impedit dolores ad, nobis aliquam quas ipsum odit delectus quos totam.
        </p>
        <button className="bg-blue-400 py-2 px-5 rounded-md text-white">
          Call to action!
        </button>
      </div>
    </div>
  );
};

export default Banner;
