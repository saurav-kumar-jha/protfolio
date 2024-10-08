import React, { createContext, useState } from "react";
import './index.css'
import { BrowserRouter as Router, Route, Routes, NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Addcertificate } from "./protfolio/addcertificate";
import { Trail } from "./protfolio/trail";
import { About } from "./protfolio/about";
import { Home } from "./protfolio/home";
import { Addskill } from "./protfolio/addskill";
import {Contact} from "./protfolio/contact"
import { Project } from "./protfolio/Project/project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Trail />,
    children: [{
      path: "/about",
      element:<About/>
    },
    {
      path:"/skill",
      element:<Addskill/>
    },
    {
      path:'/contact',
      element:<Contact/>
     },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:"/certificate",
      element:<Addcertificate/>
    },
    {
      path:"/project",
      element:<Project/>
    }
  ]
  }
])

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
