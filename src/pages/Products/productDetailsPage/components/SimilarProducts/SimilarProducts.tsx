import { useFetchProductsByCategory } from 'hooks/productHooks';
import ProductCard from 'pages/Products/components/ProductCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import { IProduct } from 'types/productTypes';

function SimilarProducts() {
  const { data } = useFetchProductsByCategory<IProduct[]>();

  return (
    <div className="similarProducts w-svw">
      <h4 className="text-2xl text-[#3E5673] mt-24 mb-5">Similar Products</h4>
      <ScrollContainer className="flex w-svw overflow-auto gap-9">
        {data?.map((product) => (
          <ProductCard {...product} className="h-[400px] min-w-[300px]" />
        ))}
      </ScrollContainer>
    </div>
  );
}

export default SimilarProducts;
