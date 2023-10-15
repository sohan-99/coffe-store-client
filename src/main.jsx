import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import UpdateCoffe from './components/UpdateCoffe';
import AddCoffe from './components/AddCoffe';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader: ()=> fetch('http://localhost:5000/coffe')
  },
  {
    path: "addCoffe",
    element: <AddCoffe></AddCoffe>
  },
  {
    path: "updateCoffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({params})=> fetch(`http://localhost:5000/coffe/${params.id}`)
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
