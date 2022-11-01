import React from "react";

type CardContentProps = {
  children?: React.ReactNode;
};

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return (
    <div className="font-normal text-gray-700 dark:text-gray-400">
      {children}
    </div>
  );
};

export default CardContent;
