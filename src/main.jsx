import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Header from './Components/Header/Header';
import Home from './Components/Header/Home/Home';
import SignIn from './Components/SignIn/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>

      },
      {
        path: "/header",
        element:<Header></Header>,
      },
      {
        path: "/login",
       element:<SignIn></SignIn>
        
      }
      

      
    ],
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
