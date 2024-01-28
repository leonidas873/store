import { useAppSelector } from 'redux/store';
import { useMemo } from 'react';
import SingleCartItem from './SingleCartItem';

function CartList() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const calculateSumOfPrices = useMemo(
    () =>
      cartItems.length
        ? cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
          )
        : 0,
    [cartItems],
  );
  return (
    <div className="my-20">
      {cartItems?.map((item) => <SingleCartItem key={item.id} {...item} />)}
      <div className="flex  justify-center">
        <div className="max-w-[1250px] w-full">
          <div className=" text-4xl text-[#3E5673]">
            Total: <span className="ml-4">${calculateSumOfPrices}</span>
          </div>
          <div className="flex justify-end  w-full">
            <button
              className="border max-w-[183px] p-2 w-full border-solid rounded border-[#3E5674] bg-[#3E5674] text-white text-xl"
              type="button"
            >
              Check-out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
