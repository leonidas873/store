import { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { addToCart } from 'redux/slices/cartSlice';
import { useAppDispatch } from 'redux/store';
import { IProduct } from 'types/productTypes';

function ProductInfo(props: IProduct) {
  const { title, price, description } = props;
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleCount = (type: '+' | '-') => {
    setQuantity((state) => {
      if (type === '+') {
        return state + 1;
      }
      if (type === '-' && state > 1) {
        return state - 1;
      }
      return state;
    });
  };
  const handleAddToCart = () => {
    dispatch(addToCart({ ...props, quantity }));
    navigate('/cart');
  };
  return (
    <div>
      <h4 className="text-[26px] leading-[54px]">{title}</h4>
      <span className="text-[#3E5673] block leading-[54px] text-[26px] font-semibold">
        $ {price}
      </span>
      <span>{description}</span>
      <div className="flex mb-14 mt-5 max-w-[83px] min-h-[90px] text-center flex-col gap-2">
        <p className=" flex-1 text-[17px]">Quantity</p>
        <div className="flex items-center flex-1 justify-center  text-[18px] gap-2.5 border-[#3E5673] border">
          <button type="button" onClick={() => handleCount('+')}>
            +
          </button>
          {quantity}
          <button type="button" onClick={() => handleCount('-')}>
            -
          </button>
        </div>
      </div>
      <button
        className="max-w-[350px] flex items-center  gap-3 border-[#3E5673] py-2 px-4 border justify-center text-xl w-full"
        type="button"
        onClick={handleAddToCart}
      >
        <BsCart3 size={23} /> + add to cart
      </button>
    </div>
  );
}

export default ProductInfo;
