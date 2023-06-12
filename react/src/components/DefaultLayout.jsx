import {Link, Navigate, Outlet, useNavigate} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import React, {Fragment, useEffect} from "react";
import axiosAdmin from "../axious-admin.js";

export default function DefaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();
  const navigate = useNavigate()
  //
  // if (!token) {
  //   return <Navigate to="/login"/>
  // }

  const onLogout = ev => {
    ev.preventDefault()
    const role = localStorage.getItem("USER_ROLE")
    if (role == 1){
      axiosAdmin.post('/logout')
        .then(() => {
          localStorage.removeItem('ACCESS_TOKEN')
          localStorage.removeItem('USER_ROLE')
          navigate('/login')
        })
    } else {
      axiosClient.post('/logout')
        .then(() => {
          localStorage.removeItem('ACCESS_TOKEN')
          localStorage.removeItem('USER_ROLE')
          navigate('/login')
        })
    }





  }
  function renderRouter(){
    const role = localStorage.getItem("USER_ROLE")
    if (role == 1){
      return <Fragment>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin/carinfo">Car Information</Link>
        <Link to="/users">Users</Link>
        <Link to="/admin/forecast">Forecast All</Link>
      </Fragment>
    } else {
      return <Fragment>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users/cars">User Carinfo</Link>
        <Link to="/users/forecast">Forecast</Link>
      </Fragment>
    }
  }

  return (
    <div id="defaultLayout">
      <aside>
        {renderRouter()}
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>

          <div>
            {user.name} &nbsp; &nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
        {notification &&
          <div className="notification">
            {notification}
          </div>
        }
      </div>
    </div>
  )
}
