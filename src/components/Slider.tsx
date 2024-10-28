"use client";

import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../public/images/048b144f-4883-4b6e-b53b-e382125b73ba_PK-1976-688.jpg_2200x2200q80.jpg";
import image2 from "../../public/images/0f6c62d1-862f-4d03-9e1f-bb0a35ed69ad_PK-1976-688.jpg_2200x2200q80.jpg";
import image3 from "../../public/images/33dbebc0-f0b1-4e02-8946-ce494318dd8a_PK-1976-688.jpg_2200x2200q80.jpg";
import image4 from "../../public/images/6b40bd28-3faa-40d7-a8fc-587be3e053dd_PK-1976-688.jpg_2200x2200q80.jpg";
import image5 from "../../public/images/88991a97-3cf9-4ee4-8f13-fe8726a6173b_PK-1976-688.jpg_2200x2200q80.jpg";
import image6 from "../../public/images/98d1a99a-82f6-4ee5-8b64-776416e088cd_PK-1976-688.jpg_2200x2200q80.jpg";
import image7 from "../../public/images/b237eb13-1e0e-4f2a-9588-78e6640c101c_PK-1976-688.jpg_2200x2200q80.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-200 p-2 shadow-lg hover:bg-gray-300 rounded-full"
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <Image
          src={images[currentIndex]}
          width={2000}
          height={2000}
          alt={`image-${currentIndex + 1}`}
          className="shadow-md w-full object-cover "
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl bg-gray-200 p-2 shadow-lg hover:bg-gray-300 rounded-full"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-2 rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => selectSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
