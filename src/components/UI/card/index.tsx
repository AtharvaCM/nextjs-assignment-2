import React from "react";

type CardProps = {
  children?: React.ReactNode;
  media?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children, media = null }) => {
  return (
    <div className="w-full rounded-lg border bg-white shadow-md dark:border-gray-300 dark:bg-gray-700">
      {media}
      <div className="flow-root p-4">{children}</div>
    </div>
  );
};

export default Card;
