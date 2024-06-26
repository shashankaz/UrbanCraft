import React, { useEffect, useState } from "react";
import GalleryCard from "../components/GalleryCard";
import GalleryCardSkeleton from "../components/GalleryCardSkeleton";
import gallery from "../data/gallery.json";

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="md:px-[80px] px-[20px] py-[50px]">
      <div className="md:text-5xl text-4xl mb-[50px]">
        <h1 className="uppercase font-light text-[#777]">Photo</h1>
        <h1 className="font-semibold">Gallery</h1>
      </div>
      <hr />
      <div className="my-[50px] flex flex-wrap md:gap-8 gap-4 md:justify-start justify-between">
        {gallery.map((item) => (
          <div key={item.id}>
            {loading ? <GalleryCardSkeleton /> : <GalleryCard {...item} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
