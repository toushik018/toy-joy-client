import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import ToysDetails from "../pages/ToysDetails/ToysDetails";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/UpdateToys/UpdateToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
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
        path: '/addtoys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/toy/:id',
        element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-joy-server-toushik018.vercel.app/alltoys/${params.id}`)
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys /></PrivateRoute>,
        loader: () => fetch('https://toy-joy-server-toushik018.vercel.app/mytoys')
      },
      {
        path: '/update/:id',
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`https://toy-joy-server-toushik018.vercel.app/mytoys/${params.id}`)
      }


    ]
  },
]);

export default router;