import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PropertiesPage from './Properties/PropertiesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'properties',
    element: <PropertiesPage />,
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
