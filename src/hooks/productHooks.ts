import useFetchData from 'hooks/useFetchData';
import useSearchParams from 'hooks/useSearchParams';

export const useFetchCategories = () => {
  const { loading, data, error } = useFetchData<string[]>(
    '/products/categories',
  );
  return { loading, data, error };
};

export const useFetchProductsByCategory = <T>(category?: string) => {
  const { getParams } = useSearchParams();
  const sort = `?sort=${getParams().sort || 'asc'}`;
  const endpoint = category
    ? `/products/category/${encodeURIComponent(category)}${sort}`
    : `/products${sort}`;
  const { loading, data, error } = useFetchData<T>(endpoint);
  return { loading, data, error };
};

export const useFetchSingleProduct = <T>(id: string) => {
  const { loading, data, error } = useFetchData<T>(
    `/products/${encodeURIComponent(id)}`,
  );
  return { loading, data, error };
};
