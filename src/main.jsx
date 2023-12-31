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
import UpdateAssignment from './Components/UpdateAssignment.jsx';
import TakeAssignment from './Components/TakeAssignment.jsx';
import SubmittedAssignment from './Components/SubmittedAssignment.jsx';
import GiveMarks from './Components/GiveMarks.jsx';
import MyAssignment from './Components/MyAssignment.jsx';
import ErrorPage from './Components/ErrorPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://my-assignment-server-five.vercel.app/assignment")
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
        element:<PrivateRoutes><AssignmentDetails></AssignmentDetails></PrivateRoutes> ,
        loader: () => fetch("https://my-assignment-server-five.vercel.app/assignment")
      },
      {
        path: "/updateAssignment/:id",
        element: <PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://my-assignment-server-five.vercel.app/assignment/${params.id}`)
      },
      {
        path: "/details/:id/takeAssignment/:id",
        element: <PrivateRoutes><TakeAssignment></TakeAssignment></PrivateRoutes>,
        loader: () => fetch("https://my-assignment-server-five.vercel.app/assignment")
      },
      {
        path: "/submit",
        element: <PrivateRoutes><SubmittedAssignment></SubmittedAssignment></PrivateRoutes>,
        loader: () => fetch("https://my-assignment-server-five.vercel.app/submission")
      },
      {
        path: "/submit/giveMark/:id",
        element: <PrivateRoutes><GiveMarks></GiveMarks></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://my-assignment-server-five.vercel.app/submission/${params.id}`)
      },
      {
        path: "/myassignment",
        element: <PrivateRoutes><MyAssignment></MyAssignment></PrivateRoutes>,
        loader: () => fetch("https://my-assignment-server-five.vercel.app/submission")
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
