import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Catalogo from './components/Catalogo/Catalogo.jsx';
import Form from './components/Form/Form.jsx';
import FormGames from './components/Form/FormGames.jsx';
import Comments from './components/Comments/Comments.jsx';
import Carrinho from './components/Carrinho/Carrinho.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/games",
    element: <Catalogo/>
  },
  {
    path: "/formUser",
    element: <Form/>
  },
  {
    path: "/formGames",
    element: <FormGames/>
  },
  {
    path: "/Comments",
    element: <Comments/>
  },
   {
     path: "/Carrinho",
     element: <Carrinho/>
   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
