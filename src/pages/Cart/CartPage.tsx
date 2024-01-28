import { useAppSelector } from 'redux/store';
import CartList from './components/CartList';

function CartPage() {
  const carIsNotEmpty = useAppSelector((state) => state.cart.cartItems).length;
  return carIsNotEmpty ? (
    <CartList />
  ) : (
    <img src="/images/empty-cart.png" alt="" className="m-auto my-6" />
  );
}

export default CartPage;
