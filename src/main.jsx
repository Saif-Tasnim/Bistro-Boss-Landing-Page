import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Routes/Routes.jsx';
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full md:max-w-screen-xl lg:max-w-screen-2xl md:mx-auto lg:mx-auto'>
      <RouterProvider router={router}>
             
      </RouterProvider>
    </div>
  </React.StrictMode>,
)
