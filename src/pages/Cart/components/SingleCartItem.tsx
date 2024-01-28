import underline from '/images/cartUnderline.png';
import { useAppDispatch } from 'redux/store';
import { ICartItem, addToCart, removeFromCart } from 'redux/slices/cartSlice';

function SingleCartItem(props: ICartItem) {
  const { id, image, price, title, quantity } = props;
  const dispatch = useAppDispatch();
  const handleCart = (action: '+' | '-') => {
    switch (action) {
      case '+':
        dispatch(addToCart({ ...props, quantity: 1 }));
        break;
      case '-':
        dispatch(removeFromCart(id));
        break;
      default:
    }
  };
  return (
    <div className="flex justify-center">
      <div className=" max-w-[1250px] w-full">
        <div className=" flex justify-between items-center max-w-[800px] w-full gap-12">
          <img
            src={image}
            alt="product"
            width={226}
            height={202}
            className="object-cover"
          />
          <div className="mr-10">
            <h5 className="mb-7 text-2xl">{title}</h5>
            <div className="text-3xl font-semibold">${price}</div>
          </div>
          <div className="flex mb-14 mt-5 w-full max-w-[124px] min-h-[105px] text-center flex-col gap-2">
            <p className=" flex-1 text-[20px]">Quantity</p>
            <div className="flex items-center flex-1 justify-center  text-[28px] gap-3 border-[#3E5673] border">
              <button type="button" onClick={() => handleCart('+')}>
                +
              </button>
              {quantity}
              <button type="button" onClick={() => handleCart('-')}>
                -
              </button>
            </div>
          </div>
        </div>
        <img className="mt-12 mb-16 w-full" src={underline} alt="underline" />
      </div>
    </div>
  );
}
export default SingleCartItem;
