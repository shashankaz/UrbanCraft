import React, { useEffect, useState } from "react";
import GalleryCard from "../components/GalleryCard";
import GalleryCardSkeleton from "../components/GalleryCardSkeleton";
import gallery from "../data/gallery.json";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(gallery.length / itemsPerPage);
  const currentItems = gallery.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="md:px-[80px] px-[20px] py-[50px]">
      <div className="md:text-5xl text-4xl mb-[50px]">
        <h1 className="uppercase font-light text-[#777]">Photo</h1>
        <h1 className="font-semibold">Gallery</h1>
      </div>
      <hr />
      <div className="my-[50px] flex flex-wrap md:gap-8 gap-4 md:justify-start justify-between">
        {currentItems.map((item) => (
          <div key={item.id}>
            {loading ? <GalleryCardSkeleton /> : <GalleryCard {...item} />}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[20px]">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-white hover:bg-[#333] border hover:text-white disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1
                ? "bg-[#333] text-white"
                : "bg-white hover:bg-[#333] border hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-white border hover:bg-[#333] hover:text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
