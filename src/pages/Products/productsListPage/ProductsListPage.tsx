import { useMemo } from 'react';
import useSearchParams from 'hooks/useSearchParams';
import {
  useFetchCategories,
  useFetchProductsByCategory,
} from 'hooks/productHooks';
import { useAppSelector } from 'redux/store';
import { IProduct } from 'types/productTypes';
import Filters from './components/Filter';
import List from './components/List';

interface IProps {
  isFavourites?: boolean;
}

function ProductsList({ isFavourites = false }: IProps) {
  const { data: categoriesData } = useFetchCategories();
  const { getParams } = useSearchParams();
  const categoryName = getParams().categoryName as string;
  const { favourites } = useAppSelector((state) => state.favourites);
  const { data: productsData } = useFetchProductsByCategory<IProduct[]>(
    categoryName || '',
  );

  const filterByPrice = (min: number, max: number, data: IProduct[] | null) =>
    data?.filter(
      (product) => Number(product.price) >= min && Number(product.price) <= max,
    ) || [];

  const memorizedProducts = useMemo(() => {
    let filtered = filterByPrice(
      Number(getParams().minPrice) || 0,
      Number(getParams().maxPrice) || Infinity,
      productsData,
    );
    if (isFavourites) {
      filtered = filtered.filter((item) => favourites.includes(item.id));
    }
    return filtered;
  }, [favourites, getParams, isFavourites, productsData]);

  return (
    <div className="container flex justify-between mt-12">
      {categoriesData && <Filters categories={categoriesData || []} />}
      {memorizedProducts.length > 0 ? (
        <List data={memorizedProducts} isFavourites={isFavourites} />
      ) : null}
    </div>
  );
}

export default ProductsList;
