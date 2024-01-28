import { useParams } from 'react-router-dom';
import { useFetchSingleProduct } from 'hooks/productHooks';
import { IProduct } from 'types/productTypes';
import Gallery from './components/Gallery';
import ProductInfo from './components/ProductInfo';
import SimilarProducts from './components/SimilarProducts';

function ProductDetails() {
  const { id } = useParams();
  const { data } = useFetchSingleProduct<IProduct>(id || '');

  return (
    data && (
      <div className="my-20">
        <div className="container  flex gap-10">
          <Gallery
            images={[
              data?.image || '',
              '/images/categoryImg1.png',
              '/images/categoryImg2.png',
              '/images/categoryImg3.png',
              '/images/categoryImg4.png',
            ]}
          />
          <ProductInfo {...data} />
        </div>
        <div className="overflow-hidden">
          <div className="container overflow-visible">
            <SimilarProducts />
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetails;
