import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  discount: number;
  discountCode: string;
  img: string;
  className?: string;
}

function SingleHighLight({
  title,
  discount,
  discountCode,
  img,
  className = '',
}: IProps) {
  return (
    <Link to="/products" className={`relative overflow-hidden ${className}`}>
      <img
        className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
        src={img}
        alt={title}
      />
      <div className="text-4xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        {title}
      </div>
      <div className="absolute bottom-2 left-2 backdrop-blur-sm bg-black/30 bg-opacity-50 text-white p-3 text-sm uppercase">
        <h3 className="font-bold text-xs">{title}</h3>
        <p className="text-[8px]">price {discount}% OFF</p>
        <p className="text-[9px] leading-3">
          discount code - <br />
          {discountCode}
        </p>
      </div>
    </Link>
  );
}
export default SingleHighLight;
