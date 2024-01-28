/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { useFetchCategories } from 'hooks/productHooks';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import Slider from 'react-slick';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="rounded-full absolute top-1/2 -right-[40px] -translate-y-1/2 border border-gray-200 transform p-2 cursor-pointer"
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="rounded-full absolute top-1/2 -left-[40px] -translate-y-1/2 border border-gray-200 transform p-2 cursor-pointer rotate-180"
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </div>
  );
}

function CategoriesCarousel() {
  const { data } = useFetchCategories();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    gap: 24,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    draggable: false,
    autoplay: true,
  };
  return (
    <div className="w-full max-w-5xl mx-auto mb-[180px]">
      <h4 className="text-4xl text-[#41587B] text-center mb-14">Categories</h4>
      <Slider {...settings}>
        {data?.map((item) => (
          <CategoryCard key={item} category={item as CategoryName} />
        ))}
        {data?.map((item) => (
          <CategoryCard key={item} category={item as CategoryName} />
        ))}
      </Slider>
    </div>
  );
}

type CategoryName = keyof typeof categoriesImgs;

function CategoryCard({ category }: { category: CategoryName }) {
  return (
    <Link to={`/products/?categoryName=${category}`} className="block w-full">
      <img
        className="h-[147px] w-full object-contain mb-4"
        src={categoriesImgs[category]}
        alt=""
      />
      <p className="text-black text-2xl text-center">{category}</p>
    </Link>
  );
}

export default CategoriesCarousel;

const categoriesImgs = {
  electronics: '/images/categoryImg1.png',
  jewelery: '/images/categoryImg2.png',
  "men's clothing": '/images/categoryImg3.png',
  "women's clothing": '/images/categoryImg4.png',
};
