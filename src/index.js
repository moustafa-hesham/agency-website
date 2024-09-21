import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PropertiesPage from './Properties/PropertiesPage';
import DetailsPage from './Details/DetailsPage';
import ContactPage from './Contact Us/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'properties',
    element: <PropertiesPage />,
  },
  {
    path: 'details',
    element: <DetailsPage />,
  },
  {
    path: 'contact',
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
