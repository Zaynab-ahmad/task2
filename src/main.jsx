import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import Academics from './Pages/Academics/Academics.jsx'
import Root from './Pages/Root.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "academics",
        element: <Academics />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
