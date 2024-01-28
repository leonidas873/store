/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Slider from 'react-slick';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute top-1/2 -right-[40px] -translate-y-1/2 border border-gray-200 transform p-2 cursor-pointer"
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </button>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute top-1/2 -left-[40px] -translate-y-1/2 border border-gray-200 transform p-2 cursor-pointer rotate-180"
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </button>
  );
}

function Gallery({ images }: { images: string[] }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    gap: 24,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <div className="mx-8 productDetails ">
      <div>
        <img
          className="w-[533px] h-[400px] object-contain"
          src={activeImage}
          alt=""
        />
      </div>
      <Slider {...settings} className="mt-12  max-w-[450px]">
        {images.map((image) => (
          <div className="ml-4 cursor-pointer" key={image}>
            <img
              src={image}
              alt={image}
              className="w-[90px] h-[120px] object-cover"
              onClick={() => setActiveImage(image)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gallery;
