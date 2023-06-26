import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

function ImageAlbum({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  //   close
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  // next
  const handleNextModal = () => {
    slideNumber === galleryImages.length - 1
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  // prev
  const handlePrevModal = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  return (
    <section className="bg-[#f9f9f9] relative mt-[40px] lg:mt-0">
      <div className="container mx-auto">
        <div className="grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4">
          {galleryImages.map((image, index) => {
            return (
              <div key={index} className="relative">
                <img
                  src={image.original}
                  alt=""
                  className="cursor-pointer  w-full h-full object-cover"
                />
                <div
                  className="absolute top-0 left-0 bg-black/20  w-full h-full
                flex items-center justify-center"
                >
                  <button
                    onClick={() => handleOpenModal(index)}
                    className="btn btn-lg border text-white
                  hover:border-none  hover:bg-black"
                  >
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {openModal && (
          <div
            className="fixed top-0 left-0 h-screen w-full items-center flex justify-center
        z-20 bg-[rgba(0,0,0,0.8)]"
          >
            <BsArrowRight
              onClick={handleNextModal}
              className="cursor-pointer fixed top-[50%] z-50 translate-y-[50%] text-black bg-white right-[40px]"
            />

            <BsArrowLeft
              onClick={handlePrevModal}
              className="cursor-pointer fixed top-[50%] translate-y-[50%] text-black bg-white left-[40px]"
            />
            <AiOutlineClose
              onClick={handleCloseModal}
              className="cursor-pointer fixed top-[40px] right-[40px] text-black bg-white"
            />
            <div className="fullImg">
              <img
                src={galleryImages[slideNumber].original}
                alt="single"
                className="imgg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ImageAlbum;
