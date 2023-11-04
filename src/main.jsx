import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import CreateAssignment from './Components/CreateAssignment.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Components/Login.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create",
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      // {
      //   path: '/register',
      //   element: <Register></Register>
      // }
    ]
  },

]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
