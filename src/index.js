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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Main /> },
      { path: '/member/:type', element: <Member /> },
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
