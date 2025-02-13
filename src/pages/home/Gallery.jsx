// eslint-disable-next-line no-unused-vars
import React from "react";
import { images } from "../../helper/data_helper";

const Gallery = () => {
  return (
    <div className="py-10 bg-amber-100">
      <h1 className="text-3xl font-semibold text-center text-amber-800 pb-10">Gallery</h1>
      <div className="grid grid-cols-5"
      >
        {images.map((image, index) => (
          <div key={index} className="group overflow-hidden">
            <img
              src={image.img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full bg-cover bg-center group-hover:scale-110 duration-300 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
