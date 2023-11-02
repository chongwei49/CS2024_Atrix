import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Homepage from './pages/Homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './pages/Product';
import RootLayout from './pages/RootLayout';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import NewsPage from './pages/NewsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CheckoutPage from './pages/CheckoutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "contactus",
        element: <ContactUs />
      },
      {
        path: "aboutus",
        element: <AboutUs />
      },
      {
        path: "newsfeed",
        element: <NewsPage />
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "checkout",
        element: <CheckoutPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
