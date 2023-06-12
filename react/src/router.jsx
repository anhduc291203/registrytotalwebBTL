import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Users from "./views/Users";
import AdminForm from "./views/AdminForm.jsx";
import UserForm from "./views/UserForm";
import CarForm from "./views/CarForm.jsx";
import ForecastForm from "./views/ForecastForm.jsx"
import AdminForecastForm from "./views/AdminForecastForm.jsx"



const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/users/new',
        element: <UserForm key="userCreate" />
      },
      {
        path: '/users/:id',
        element: <UserForm key="userUpdate" />
      },
      {
        path: '/admin/carinfo',
        element: <AdminForm key="userUpdate" />
      },
      {
        path : '/users/cars',
        element: <CarForm key="userUpdate" />
      },
      {
        path : '/users/forecast',
        element: <ForecastForm key="userUpdate" />
      },
      {
        path : '/admin/forecast',
        element: <AdminForecastForm key="userUpdate" />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default router;
