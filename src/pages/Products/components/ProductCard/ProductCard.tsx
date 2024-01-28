import { cn } from 'lib/utils';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { toggleFavourite } from 'redux/slices/favouritesSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { IProduct } from 'types/productTypes';

type IProps = Omit<IProduct, 'category' | 'description'> & {
  className?: string;
};

function ProductCard(props: IProps) {
  const {
    id,
    title,
    price,
    image,
    rating: { count },
    className,
  } = props;
  const disptach = useAppDispatch();
  const { favourites } = useAppSelector((state) => state.favourites);
  const isFavourite = favourites.includes(id);
  const onFavouriteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    productId: number,
  ) => {
    e.preventDefault();
    disptach(toggleFavourite(productId));
  };

  return (
    <Link
      to={`/products/${id}`}
      className={cn(
        'max-w-sm rounded my-1 overflow-hidden shadow-lg flex flex-col',
        className,
      )}
    >
      <div className="relative flex-grow">
        <img
          className="w-full h-[260px]  object-contain"
          src={image}
          alt={title}
        />
        <button
          type="button"
          className="absolute top-2 right-2 backdrop-blur-xl bg-black/30 p-2 rounded-sm focus:outline-none"
          onClick={(e) => onFavouriteClick(e, id)}
        >
          {isFavourite ? (
            <IoMdHeart className="text-red-400 text-3xl heart-animation" />
          ) : (
            <IoMdHeartEmpty className="text-white text-3xl" />
          )}
        </button>
      </div>
      <div className="px-6 py-4 flex flex-col justify-between h-full">
        <div className="text-xl mb-2 line-clamp-2">{title}</div>
        <div className="flex justify-between mt-auto">
          <p className="text-gray-800 text-base">${price}</p>
          <p className=" text-gray-600 text-sm">{count} Orders</p>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
