import React from "react";

type CardContentProps = {
  children?: React.ReactNode;
};

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return (
    <div className="flex flex-1 font-normal text-gray-700 dark:text-gray-400 mt-2">
      {children}
    </div>
  );
};

export default CardContent;
