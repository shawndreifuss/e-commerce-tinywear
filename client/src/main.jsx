import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Product from './pages/Product.jsx';
import SignIn from './pages/SignIn';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup.jsx';
import ShirtCard from './components/ShirtCard.jsx'
import PantCard from  './components/PantCard.jsx'
import OnesieCard from './components/OnesieCard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/signin',
        element: <SignIn />
      }, {
        path: '/product/:productId',
        element: <Product />
      }, {
        path: '/checkout',
        element: <Checkout />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/category/shirts',
        element: <ShirtCard/>
      },
      {
        path: '/category/pants',
        element: <PantCard/>
      },
      {
        path: '/category/onesies',
        element: <OnesieCard/>
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
