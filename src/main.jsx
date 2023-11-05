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
import Register from './Components/Register.jsx';
import PrivateRoutes from './Components/PrivateRoutes.jsx';
import AssignmentDetails from './Components/AssignmentDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/assignment")
      },
      {
        path: "/create",
        element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <AssignmentDetails></AssignmentDetails>,
        loader: () => fetch("http://localhost:5000/assignment")
      }
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
