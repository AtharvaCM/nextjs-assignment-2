import React from "react";

type CardMediaProps = {
  src: string;
  alt: string;
};

const CardMedia: React.FC<CardMediaProps> = ({ src, alt }) => {
  return (
    <figure className="h-[13rem]">
      <img className="rounded-t-lg h-full w-full" src={src} alt={alt} />
    </figure>
  );
};

export default CardMedia;
