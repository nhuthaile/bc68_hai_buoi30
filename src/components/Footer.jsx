import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="mt-2 bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div className="container mx-auto text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            CopyRight © Your Website 2019.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
