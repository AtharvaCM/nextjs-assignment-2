import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="https://atharvacm.netlify.app/" className="hover:underline">
          AtharvaCM
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
