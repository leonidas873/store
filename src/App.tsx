import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as routes from 'pages/routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAppSelector } from 'redux/store';

function App() {
  const { isLoggedIn } = useAppSelector((state) => state.user);

  const router = createBrowserRouter([
    isLoggedIn ? routes.PrivateRoutes() : {},
    ...routes.PublicRoutes(),
  ]);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
}

export default App;
