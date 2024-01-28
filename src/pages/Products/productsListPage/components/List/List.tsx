/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import { IoIosArrowBack } from 'react-icons/io';
import useSearchParams from 'hooks/useSearchParams';
import { useLocation } from 'react-router-dom';
import { IProduct } from 'types/productTypes';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Sort from '../Sort';

const ITEMS_PER_PAGE = 5;

const itemRender = (
  current: number,
  type: string,
  element: React.ReactNode,
  currentPage: number,
) => {
  if (type === 'page') {
    return (
      <a
        className={`w-8 h-8 flex justify-center items-center border hover:border-black rounded cursor-pointer ${current === currentPage ? 'border-black' : ''}`}
      >
        {current}
      </a>
    );
  }
  if (type === 'prev' || type === 'next') {
    return (
      <button
        className="w-8 h-8 flex justify-center items-center border hover:bg-gray-400 rounded-l cursor-pointer"
        type="button"
      >
        <IoIosArrowBack className={type === 'next' ? 'rotate-180' : ''} />
      </button>
    );
  }
  return element;
};

interface IProps {
  data: IProduct[];
  isFavourites?: boolean;
}

function List({ data = [], isFavourites = false }: IProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const { getParams } = useSearchParams();

  useEffect(() => {
    setCurrentPage(1);
  }, [
    getParams().category,
    getParams().minPrice,
    getParams().maxPrice,
    location.pathname,
  ]);

  const currentCollection = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div>
      {!isFavourites && <Sort />}
      <div className="max-w-[900px] grid grid-cols-3 gap-4">
        {currentCollection.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
      {data.length > 0 && (
        <div className="flex justify-end mt-12 pb-28">
          <Pagination
            className="flex gap-2"
            pageSize={ITEMS_PER_PAGE}
            onChange={setCurrentPage}
            current={currentPage}
            total={data.length}
            itemRender={(current, type, element) =>
              itemRender(current, type, element, currentPage)
            }
          />
        </div>
      )}
    </div>
  );
}

export default List;
