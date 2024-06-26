import React from "react";

const GalleryCard = (props) => {
  return (
    <div>
      <div className="md:h-[260px] h-[230px] md:w-[210px] w-[184px] bg-[#c4c4c4]">
        <img
          className="h-full w-full object-cover"
          src={props.image}
          alt={props.title}
        />
      </div>
    </div>
  );
};

export default GalleryCard;
