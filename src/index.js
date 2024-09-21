import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PropertiesPage from './Properties/PropertiesPage';
import DetailsPage from './Details/DetailsPage';

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
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
