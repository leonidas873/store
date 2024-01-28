import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from './HomePage/HomePage';
import ProductsList from './Products/productsListPage/ProductsListPage';
import ProductDetails from './Products/productDetailsPage/ProductDetailsPage';
import CartPage from './Cart/CartPage';

export function PublicRoutes(): RouteObject[] {
  return [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/products', element: <ProductsList /> },
        { path: '/products/:id', element: <ProductDetails /> },
        { path: '/favourites', element: <ProductsList isFavourites /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ];
}

export function PrivateRoutes(): RouteObject {
  return {
    path: '/',
    element: <Layout />,
    children: [{ path: '/cart', element: <CartPage /> }],
  };
}
