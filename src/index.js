import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import AllRecipe from './pages/AllRecipe';
import RecipeBook from './pages/RecipeBook';
import Member from './pages/Member';
import Admin from './pages/admin/Admin';
import ItemList from './pages/admin/ItemList';
import ItemAdd from './pages/admin/ItemAdd';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Main /> },
      { path: '/member/:type', element: <Member /> },
      {
        path: '/admin',
        element: <Admin />,
        children: [
          { index: true, path: '/admin/item', element: <ItemList /> },
          { path: '/admin/item/add', element: <ItemAdd /> },
        ]
      },
      { path: '/recipe', element: <AllRecipe /> },
      {
        path: '/recipe/:id',
        element: <RecipeBook />,
      },
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
