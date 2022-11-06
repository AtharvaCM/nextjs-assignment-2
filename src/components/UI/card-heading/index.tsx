import React from "react";

type CardHeadingProps = {
  title: string;
};

const CardHeading: React.FC<CardHeadingProps> = ({ title }) => {
  return (
    <h5
      role={"heading"}
      className="flex-initial text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {title}
    </h5>
  );
};

export default CardHeading;
