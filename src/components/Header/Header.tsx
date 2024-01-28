import logo from '/images/logo.png';
import { BsCart3 } from 'react-icons/bs';
import LoginModal from './Login';
import { decodeJWT } from 'lib/utils';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { setIsLoggedIn } from 'redux/slices/userSlice';
import useSearchParams from 'hooks/useSearchParams';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import clsx from 'clsx';

function Header() {
  const { setParams } = useSearchParams();

  const token = localStorage.getItem('token');
  const decoded = token ? decodeJWT(token) : '';
  const navigate = useNavigate();

  useEffect(() => {}, [decoded]);
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setIsLoggedIn(false));
  };

  const handleOnCartClick = () => {
    if (isLoggedIn) {
      navigate('/cart');
    } else {
      setParams({ login: true });
    }
  };

  const location = useLocation();

  return (
    <div className="container flex items-center justify-between py-5">
      <Link to="/">
        <img src={logo} alt="logo" className="fill-green-400" />
      </Link>
      {location.pathname === '/' && (
        <nav className="flex flex-1 justify-center gap-4">
          <Link className="text-dark px-3 py-1" to="">
            Discovery
          </Link>
          <Link className="text-dark px-3 py-1" to="">
            About
          </Link>
          <Link className="text-dark px-3 py-1" to="">
            Contact
          </Link>
        </nav>
      )}
      <div className="ml-auto flex items-center gap-3">
        {isLoggedIn ? decoded.user : <LoginModal />}
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" onClick={handleOnCartClick}>
          <BsCart3 className="text-2xl text-[#3E5674] cursor-pointer" />
        </button>
        {isLoggedIn && (
          <>
            <button type="button" onClick={handleLogout}>
              log out
            </button>
            <Link to="favourites">
              <CiHeart
                className={clsx(
                  'text-2xl cursor-pointer ',
                  location.pathname.includes('favourites') && 'text-red-400',
                )}
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
