import React from "react";

type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="flex-shrink-0">
      <img className="w-8 h-8 rounded-full" src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
