import React from "react";

type CardMediaProps = {
  src: string;
  alt: string;
  defaultSrc?: string;
};

const CardMedia: React.FC<CardMediaProps> = ({ src, alt, defaultSrc }) => {
  const handleImgLoadError = (event: any) => {
    event.currentTarget.src = defaultSrc;
    event.onerror = null;
  };

  return (
    <figure className="h-[13rem]">
      <img
        className="rounded-t-lg h-full w-full"
        src={src ? src : defaultSrc}
        alt={alt}
        onError={handleImgLoadError}
      />
    </figure>
  );
};

export default CardMedia;
